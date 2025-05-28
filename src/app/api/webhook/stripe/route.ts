import db from "@/lib/db";
import { users, userSubscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion:"2025-04-30.basil"
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature') as string;

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        return NextResponse.json({ error: 'Webhook Error: Invalid signature or payload' }, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    console.log(event.type);

    if (event.type === 'checkout.session.completed'){
        const credits =     Number(session.metadata?.credits);
        const userId = session.client_reference_id

        if (!credits || !userId) {
            return NextResponse.json({error: 'Invalid session data'}, {status: 400});
        }

        await db.insert(userSubscriptions).values({
            userId,
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.id as string,
            stripePriceId: session.metadata?.price_id as string,
            id: session.id,
            credits,
        });

        // Fetch current credits for the user
        const [user] = await db.select().from(users).where(eq(users.id, userId));
        const currentCredits = user?.credits ?? 0;

        await db.update(users)
            .set({ credits: currentCredits + credits })
            .where(eq(users.id, userId));

        return NextResponse.json({message: 'Credits created successfully'}, {status: 200});

    }
    return NextResponse.json({ message: 'Event type handled' }, { status: 200 });

}