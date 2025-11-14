import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/admin/components/nav-documents"
import { NavMain } from "@/admin/components/nav-main"
import { NavSecondary } from "@/admin/components/nav-secondary"
import { NavUser } from "@/admin/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/admin/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/DashBoard",
      icon: IconDashboard,
    }
  ],
  documents: [
    {
      name: "Menu",
      url: "/DashBoard/menu",
      icon: IconDatabase,
    },
    {
      name: "Orders",
      url: "/DashBoard/orders",
      icon: IconReport,
    },
    {
      name: "Users",
      url: "/DashBoard/users",
      icon: IconFileWord,
    },
  ],
  
}

export function AppSidebar({
  ...props
}) 
{
  const navigate = useNavigate();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader onClick={()=>navigate('/menu')}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Back to home</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
