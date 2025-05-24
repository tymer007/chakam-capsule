"use client"
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils';
import { CameraIcon, CreditCardIcon, LayoutDashboard, Loader2, Plus, SparklesIcon, VaultIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


export const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Vault",
    url: "/my-vault",
    icon: VaultIcon,
  },
  {
    title: "Surprise Queue",
    url: "/surprise-queue",
    icon: SparklesIcon,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCardIcon,
  },
];
const memes  = [
    {id: 1, name: "Meme 1"},
    {id: 2, name: "Meme 2"},
    {id: 3, name: "Meme 3"},
]
const AppSidebar = () => {
    const pathName = usePathname();
    const [memeId, setMemeId] = React.useState<number>(1);
      const { open } = useSidebar();


    
  return (
    <Sidebar collapsible='icon' variant='floating' >
        <SidebarHeader>
            <div className="flex items-center gap-2">
                {/* <Image src="/images/up-left.png" alt="logo" width={40} height={50} /> */}
                <CameraIcon className='text-primary animate-spin'/>
                {open && (
                <h1 className="text-xl font-bold text-primary/80">Chakam</h1>
                )}
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Application
                </SidebarGroupLabel>
                 <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild>
                            <Link
                                className={cn([
                                pathName === item.url ? "bg-primary text-[#fff]" : "",
                                "list-none",
                                ])}
                                href={item.url}
                            >
                                <item.icon size={24} />
                                <span>{item.title}</span>
                            </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
             <SidebarGroup>
            <SidebarGroupLabel>Your Chakams</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {memes ? (
                  memes?.map((p, i) => (
                    <SidebarMenuItem key={i}>
                      <SidebarMenuButton asChild>
                        <div onClick={() => setMemeId(p.id)}>
                          <div
                            className={cn(
                              "flex size-6 items-center justify-center rounded-sm border bg-[#fff] text-sm text-primary",
                              {
                                "bg-primary text-[#fff]": memeId === p.id,
                              },
                            )}
                          >
                            {p.name[0]}
                          </div>
                          <span>{p.name}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                ) : (
                  <SidebarMenuItem>
                    <div className="flex h-20 w-full flex-col items-center justify-center">
                      <Loader2 className="size-6 animate-spin text-primary" />
                      <p className="text-sm text-primary">Loading projects</p>
                    </div>
                  </SidebarMenuItem>
                )}

                <div className="h-2"></div>
                {open && (
                  <SidebarMenuItem>
                    <Link href="/chakam-new">
                      <Button  variant="outline" className="w-full">
                        {/* <Image src='/favicon.png' alt='New Chakam' width={20} height={20} 
                        className='bg-primary'/> */}
                        <CameraIcon className='text-primary animate-spin'/>
                        New Chakam
                      </Button>
                    </Link>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar