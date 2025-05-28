// 'use client';
import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AppSidebar from './dashboard/AppSidebar'
import { ModeToggle } from '@/components/ModeToggle'

type Props = {
    children: React.ReactNode
}


const SidebarLayout = ({children}: Props) => {
  return (
    <div className=''>
        <SidebarProvider>
            {/* AppSidebar */}
            <AppSidebar/>
            <main  className='w-full m-2'>
                <div className="flex item-center gap-2 border-sidebar-border 
                bg-sidebar border shadow rounded-md p-2 px-4">
                    {/* Search bar */}
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