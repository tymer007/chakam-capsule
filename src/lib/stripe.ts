"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function createCheckoutSession(credits:number){
    const {userId} = await auth();

    if (!userId) 
        throw new Error("User not authenticated");

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: `${credits} Chakam Credits`,
                        description: 'Purchase of Chakam Credits',
                    },
                    unit_amount: Math.round((credits / 50) * 100), // Convert to cents
                },
                quantity: 1,
            }
        ],
        payment_method_types: ["card"],
        customer_creation: 'always',
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/chakam-new`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing`,
        client_reference_id: userId.toString(),
        metadata: { credits, }
    });

    return redirect(session.url! );

}