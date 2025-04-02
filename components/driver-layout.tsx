"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogOut, Menu } from "lucide-react"
import { driverNavItems } from "@/lib/navigation"
import { authRoutes } from "@/lib/routes"

interface DriverLayoutProps {
  children: React.ReactNode
}

export default function DriverLayout({ children }: DriverLayoutProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Adiciona a propriedade active aos itens de navegação com base no pathname atual
  const routes = driverNavItems.map((route) => ({
    ...route,
    active: pathname === route.href,
  }))

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 sm:h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-6 py-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Michael Driver</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">michael@example.com</div>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                          route.active ? "bg-muted" : "hover:bg-muted"
                        }`}
                      >
                        <route.icon className="h-4 w-4" />
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Link href={authRoutes.login}>
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <LogOut className="h-4 w-4" />
                        Sair
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href={routes[0].href} className="font-bold text-xl hidden md:block">
              CaronaApp Motorista
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium ${
                    route.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

