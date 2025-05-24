import FileUpload from '@/components/FileUpload'
import { auth } from '@clerk/nextjs/server';
import {  redirect } from 'next/navigation';
import React from 'react';

const CreateChakam = async() => {
  
 const { userId } = await auth();
 console.log('User ID:', userId);
 if (!userId) return redirect('/sign-in');

  return (
    <div className='flex flex-col gap-2 w-full justify-center'>

        <FileUpload  userId={userId!}/>
       
      </div>
      
  )
}

export default CreateChakam