'use client';
import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AppSidebar, { items } from './dashboard/AppSidebar'
import { ModeToggle } from '@/components/ModeToggle'
import { useLocalStorage } from 'usehooks-ts'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { CameraIcon, MenuIcon, PlusIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { usePathname } from 'next/navigation'
import useMemes from '@/hooks/use-memes'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
    children: React.ReactNode
}


const SidebarLayout = ({children}: Props) => {
        // const [layerOpen, setIsLayerOpen] = React.useState(false);
        const [layerOpen, setIsLayerOpen] = useLocalStorage<boolean>('layerOpen', false);
        const [isOpen, setIsOpen] = useLocalStorage<boolean>('isOpen', false);
        const pathname = usePathname();
        const {memes, memeId, setMemeId} = useMemes();

        

  return (
    <div className=''>
        <SidebarProvider>
            {/* AppSidebar */}
            <AppSidebar/>
            <main  className='w-full m-2'>
                <div className="flex item-center gap-2 border-sidebar-border 
                bg-sidebar border shadow rounded-md p-2 px-4">
                    {/* Search bar */}
                     <Sheet >

                        <SheetTrigger >
                        <Button className="justify-start md:hidden" size='sm' variant={'ghost'} onClick={() => setIsLayerOpen(true)}>
                            <MenuIcon/>
                        </Button>
                        </SheetTrigger>
                        {
                        layerOpen && (
                            <SheetContent className="sm:max-w-[80vw] absolute dark:bg-sidebar">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <div className="flex items-center gap-2">
                                                <CameraIcon className="text-primary w-50 h-10 animate-spin
                                                 dark:text-[#fff]" />

                                                    <h1 className="text-xl font-bold text-primary/80
                                                    dark:text-[#fff]">Chakam</h1>
                                            </div>
                                        </SheetTitle>
                                        
                                        <Separator/>
                                    </SheetHeader>
                                    <div className="h-4"></div>
                                        <h2 className="text-left text-black/50 leading-4 dark:text-primary">Application</h2>
                                        <div className="h-4"></div>
                                        <div className="flex flex-col justify-start gap-2 text-left items-start">

                                        {items.map((item, index) => (
                                            <Button key={index} 
                                            className={cn('w-full justify-start', {
                                                'bg-primary text-[#fff]': pathname === item.url
                                            })}
                                                variant="ghost" onClick={() => setIsLayerOpen(false)}>
                                                <Link 
                                                className="list-none flex items-center gap-2 w-full"
                                                href={item.url}
                                                >
                                                    <item.icon size={24} />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>               
                                        <div className="h-4 "></div>
                                        <Separator/>                 
                                        <h2 className="text-left text-black/50 leading-4 dark:text-primary mt-3">Your chakams</h2>
                                        <div className="flex flex-col justify-start gap-2 text-left items-start m-2 
                                        overflow-y-auto h-[30vh] scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 
                                         scrollbar-thin max-h-[40vh]">
                                            {memes && (
                                                memes?.map((m, i) => (
                                                    <Button key={i} onClick={() => {
                                                        setMemeId(m.id);    
                                                        setIsLayerOpen(false);
                                                    }} variant={'ghost'} className="w-full justify-start">
                                                        <div
                                                            className={cn(
                                                            "flex size-6 items-center justify-center rounded-sm border bg-[#fff] text-sm text-primary",
                                                            {
                                                                "bg-primary text-[#fff]": memeId === m.id,
                                                            },
                                                            )}
                                                        >
                                                            {m.name[0]}
                                                        </div>
                                                        <span>{m.name}</span>
                                                    </Button>
                                                ))
                                                )}
                                        </div>
                                            <div className="sticky left-0 right-0 bottom-0 p-4 bg-sidebar z-50">
                                                <Button size="sm" variant="outline" className="w-full">
                                                    <Link href="/chakam-new" className="flex items-center gap-2">
                                                        <PlusIcon />
                                                        Create chakam
                                                    </Link>
                                                </Button>
                                            </div>
                            </SheetContent>
                        )
                        }
          </Sheet>
                    <div className="ml-auto gap-2 flex items-center">
                        <ModeToggle/>
                        <UserButton/>

                    </div>

                    

                </div>
                <div className="h-4"></div>

                <div className='border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll
                    h-[calc(100vh-4rem)] p-4'>
                        {/* main content */}
                        {children}
                    </div>
            </main>
        </SidebarProvider>
    </div>
  )
}

export default SidebarLayout;