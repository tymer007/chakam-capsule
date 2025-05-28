import db from "@/lib/db";
import { memes, userToMemes } from "@/lib/db/schema";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { eq, and, isNull } from "drizzle-orm";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid4 } from "uuid";

export const POST = async(req: NextRequest) => {
    const { userId } = await auth();
    if (!userId) 
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    if(!user.emailAddresses[0].emailAddress) return notFound();

  
    const body  = await req.json();
    const { file, chakamName } = body;
   const result = await db.insert(memes).values({
    id: uuid4(),
    name: chakamName,
    url: file as string,
    userId
   }).returning();
   
   await db.insert(userToMemes).values({
    userId,
    memeId: result[0].id,
    id: uuid4(),
   });
   
return new Response(JSON.stringify(result), { status: 200 });

}

export const GET = async() => {
    const {userId} = await auth();
    if (!userId) {
        return new
     Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const data = await db.select().from(memes).where(
        and(
            eq(memes.userId, userId!),
            isNull(memes.deletedAt)
        )
    );
    return new NextResponse(JSON.stringify(data), { status: 200 })
    
}
