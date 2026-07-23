"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

const DashboardHeader = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  console.log("segments:", segments);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-4" />

        <Breadcrumb>
          <BreadcrumbList>
            {segments.map((segment, index) => {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            })}

            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default DashboardHeader;
