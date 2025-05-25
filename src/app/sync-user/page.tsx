import db from '@/lib/db';
import { users } from '@/lib/db/schema';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { notFound, redirect } from 'next/navigation';

const SyncUser = async() => {
    const {userId} = await auth();
    if (!userId) throw new Error('User not found');
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    if(!user.emailAddresses[0].emailAddress) return notFound();

    // Insert the user into the users table
    await db.insert(users).values({
        id: userId!,
        firstName: user.firstName!,
        lastName: user.lastName!,
        imageUrl: user.imageUrl!,
        email: user.emailAddresses[0].emailAddress,
    }).onConflictDoUpdate({
      target:users.email,
      set: {
        firstName: user.firstName!,
        lastName: user.lastName!,
        imageUrl: user.imageUrl!,
      }

    })

  return redirect('/dashboard');
}

export default SyncUser