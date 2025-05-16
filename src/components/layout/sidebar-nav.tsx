'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {NAV_LINKS.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            tooltip={{ children: link.tooltip, side: 'right', align: 'center' }}
            className={cn(
                pathname === link.href ? 
                "bg-sidebar-accent text-sidebar-accent-foreground" : 
                "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
