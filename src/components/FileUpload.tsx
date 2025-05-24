"use client";
import { uploadFile } from '@/lib/firebase';
import { InboxIcon, Loader2Icon } from 'lucide-react';
import React from 'react'
import {useDropzone} from 'react-dropzone'
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import db from '@/lib/db';
import { memes } from '@/lib/db/schema';
import {v4 as uuid4} from 'uuid';
 import { useUser } from "@clerk/nextjs";


type formInput = {
  chakamName: string;
  chakamDescription: string;
}
type Props = {
    userId: string;
}
const FileUpload = ({userId}:Props) => {
    const [uploading, setUploading] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
     const {register, handleSubmit, reset} = useForm<formInput>();
    const [file, setFile] = React.useState<File>(null!);

    
      const onSubmit = async (data: formInput) => {
        try {
            if (!data || !file) return toast.error('Invalid inputs');
            setUploading(true);
            const uploadData = await uploadFile(file, (setProgress) );
            
            // await db.insert(memes).values({
            //     id: uuid4(),
            //     name:data.chakamName,
            //     url:uploadData as string,
            //     userId
            // });
            // console.log('uploadData', uploadData);
            toast.success('File uploaded');
            reset();
            
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
            
        }finally{
            setUploading(false);
        }
           
      }
    const {getRootProps, getInputProps} = useDropzone({
        accept: {'image/*': ['.png', '.jpg', '.jpeg']},
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            const file  = acceptedFiles[0] as File;
            console.log(file);
            if (file.size > 10 * 1024 * 1024) return toast.error('Kindly upload a smaller file');

            setFile(file);
            toast.success('File selected');
        }
    })
  return (
    <div className='p-2 bg-[#fff] rounded-xl w-full'>
        <div {...getRootProps({
            className:'border border-2 border-gray-30 p-4 rounded-xl cursor-pointer py-8 flex justify-center items-center flex-col',
        })}>
            <input {...getInputProps()} />
            {uploading ? (
                <>
                <Loader2Icon className='h-10 w-10 text-primary/50 animate-spin'/>
                </>
            )
            :
            (
                <>
                    <InboxIcon className='h-10 w-10 text-primary/50' />
                    <p className='text-primary/50'>Drag and drop your chakam here</p>
                </>
            )
            }
           
        </div>
         {file && (
                <p className='text-center'>One image selected: <span
                className='font-semibold text-primary'>{file.name}</span></p>
         )}
         <div className='flex flex-col gap-2 w-fit mx-auto justify-center'>
            <div className="h-4"></div>
            <div>
              <h1 className="text-4xl font-semibold text-center">
                Create a new Chakam
              </h1>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Enter the details of your Chakam below. You can upload a file to
                get started. Once you have created a Chakam, you can add more.
              </p>
            </div>
            <div className="h-4"></div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  {...register("chakamName", { required: true })}
                  placeholder="Chakam Name"
                  required
                />
                <div className="h-2"></div>
                <Input
                  {...register("chakamDescription", { required: true })}
                  placeholder="Chakam Description"
                  type="text"
                  required
                />
                <div className="h-2"></div>
                <Button
                  type="submit"
                  className="w-full"
                  // disabled={createProject.isPending || checkCredits.isPending || !hasEnoughCredits}
                >
                  Create Chakam
               </Button>
              </form>
            </div>
          </div>
        
    </div>
  )
}

export default FileUpload