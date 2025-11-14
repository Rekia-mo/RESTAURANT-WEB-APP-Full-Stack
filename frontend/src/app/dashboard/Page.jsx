import { AppSidebar } from '@/admin/components/app-sidebar';
import { ChartAreaLinear } from "@/admin/components/ChartAreaLinear";
import { DataTable } from "@/admin/components/data-table";
import { SectionCards } from "@/admin/components/section-cards";
import { SiteHeader } from "@/admin/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/admin/components/ui/sidebar";
import { Outlet, useLocation } from 'react-router-dom';
import data from "./data.json";


function Page() {
  const location = useLocation();

  const isDashboardHome = location.pathname === '/DashBoard';
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {
                isDashboardHome &&
                <>
                
                  <SectionCards />
                  <div className="px-4 lg:px-6">
                    <ChartAreaLinear />
                  </div>
                  <DataTable data={data} />
                
                </>
              }
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
export default Page;