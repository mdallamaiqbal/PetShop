
import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Users, PlusCircle, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export async function DashboardSidebar() {
  const user = await getUserSession();

  const authorizedRoles = ["admin", "moderator"];
  
  if (!user || !authorizedRoles.includes(user.role)) {
    return null;
  }

  const navItems = [
    { icon: LayoutDashboard, href: "/dashboard", label: "Dashboard" },
    { icon: PlusCircle, href: "/dashboard/addPets", label: "Add Pets" },
    { icon: Users, href: "/dashboard/managePets", label: "Manage Pets" },
  ];

  const navContents = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-700 font-medium"
          href={item.href}
        >
          <item.icon className="size-5 text-emerald-600" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 p-4 lg:block h-screen bg-white">
        <div className="mb-6 px-3 text-emerald-600 font-bold text-lg">PetShop Admin</div>
        {navContents}
      </aside>

      {/* Mobile Drawer */}
      <Drawer>
        <Button className="lg:hidden m-4 bg-emerald-600 text-white" variant="flat">
          <LayoutSideContentLeft />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContents}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}