import db from "@/lib/db";
import { memes, userToMemes } from "@/lib/db/schema";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { eq, and, isNull } from "drizzle-orm";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid4 } from "uuid";
import { Resend } from 'resend';
import ChakamCreatedEmail from "@/components/ChakamCreatedEmail";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
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
   try {
    const mail = await resend.emails.send({
        from: 'supports@chakam.com.ng',
        to: user.emailAddresses[0].emailAddress.toString(),
        subject: 'Chakam Meme Created',
        react: ChakamCreatedEmail({
            baseUrl: baseUrl!,
        })
     });
     console.log("Mail sent:", mail.data);
     console.log(mail.error)
     console.log("Email sent successfully");
   } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
   }
  
   

   
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
