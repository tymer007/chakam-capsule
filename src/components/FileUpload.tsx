"use client";
import { uploadFile } from '@/lib/firebase';
import { InboxIcon, Loader2Icon } from 'lucide-react';
import React from 'react'
import {useDropzone} from 'react-dropzone'
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { DrizzleMeme } from '@/lib/db/schema';
import useRefresh from '@/hooks/use-refresh';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';



type formInput = {
  chakamName: string;
  chakamDescription: string;
}

const FileUpload = () => {
    const [uploading, setUploading] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const {register, handleSubmit, reset} = useForm<formInput>();
    const [file, setFile] = React.useState<File>(null!);
    const refetch = useRefresh();
    console.log(progress)

    const mutation = useMutation({
      mutationFn: async (data: {
        file: string;
        chakamName: string;
        chakamDescription: string;
      }) => {
        const res = await axios.post('api/chakam', data);
        return res.data as DrizzleMeme;
// 
      },
      onSuccess: async() => {
        console.log('Done');
        await refetch();
      }, onError: (error) => {
        console.error(error);
        toast.error('Something went wrong');
      }
    });

    
      const onSubmit = async (formData: formInput) => {
        try {
            if (!formData || !file) return toast.error('Invalid inputs');
            setUploading(true);
            const uploadData = await uploadFile(file, (setProgress) );
            console.log('Upload data:',uploadData);
             await mutation.mutateAsync({
              file: uploadData as string,
              chakamName: formData.chakamName,
              chakamDescription: formData.chakamDescription,
            });
            reset();
            setFile(null!);
            // await refetch();
            toast.success('Chakam created');
            
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
              <h1 className="text-3xl font-semibold text-center leading-36 tracking-tight text-gray-900
               ">
                Create a New Chakam
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
                  disabled={uploading}
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