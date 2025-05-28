import db from "@/lib/db";
import { users } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const GET = async () => {
    const {userId} = await auth();
    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const credits = await db.select({ credit: users.credits }).from(users).where(eq(users.id, userId));
    return Response.json({ credit: credits[0]?.credit}, {status: 200});

}