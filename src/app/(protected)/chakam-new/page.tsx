import ChakamCreatedEmail from '@/components/ChakamCreatedEmail';
import FileUpload from '@/components/FileUpload'
import { Button } from '@/components/ui/button';
import React from 'react';
import toast from 'react-hot-toast';
import { Resend } from 'resend';


const CreateChakam = () => {
  return (
    <div className='flex flex-col gap-2 w-full justify-center '>

        <FileUpload/>
        <div className='h-4'></div>
       
      </div>
      
  )
}

export default CreateChakam