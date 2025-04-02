"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, ChevronDown } from "lucide-react"
import { adminNavItems } from "@/lib/navigation"
import { authRoutes } from "@/lib/routes"

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  // Adiciona a propriedade active aos itens de navegação com base no pathname atual
  const routes = adminNavItems.map((route) => ({
    ...route,
    active: pathname === route.href,
  }))

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-14 sm:h-16 items-center justify-between border-b px-4">
        <div className="font-bold text-xl">CaronaApp Admin</div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>
      <div className="py-4">
        <nav className="space-y-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                route.active ? "bg-muted" : "hover:bg-muted"
              }`}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 w-full border-t p-4">
        <Link href={authRoutes.login}>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-5 w-5" />
            Sair
          </Button>
        </Link>
      </div>
    </div>
  )
}

