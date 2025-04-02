"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Car,
  DollarSign,
  AlertTriangle,
  Search,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  HelpCircle,
} from "lucide-react"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="font-bold text-xl">CaronaApp Admin</div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium"
            >
              <Users className="h-5 w-5" />
              Painel
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Users className="h-5 w-5" />
              Usuários
            </Link>
            <Link
              href="/admin/drivers"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Car className="h-5 w-5" />
              Motoristas
            </Link>
            <Link
              href="/admin/reports"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <DollarSign className="h-5 w-5" />
              Relatórios
            </Link>
            <Link
              href="/admin/support"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <AlertTriangle className="h-5 w-5" />
              Suporte & Reclamações
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Settings className="h-5 w-5" />
              Configurações
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full border-t p-4">
          <Link href="/login">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LogOut className="h-5 w-5" />
              Sair
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4 md:ml-auto">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar..." className="w-[200px] pl-8 md:w-[300px]" />
              </div>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo ao painel administrativo</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total de Usuários</p>
                    <h3 className="text-2xl font-bold">2,543</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Motoristas Ativos</p>
                    <h3 className="text-2xl font-bold">187</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Receita (Hoje)</p>
                    <h3 className="text-2xl font-bold">$1,245.89</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Reclamações Abertas</p>
                    <h3 className="text-2xl font-bold">12</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Usuários Recentes</CardTitle>
                <CardDescription>Novos usuários registrados nos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">john@example.com</div>
                      </div>
                    </div>
                    <Badge>Passageiro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-muted-foreground">jane@example.com</div>
                      </div>
                    </div>
                    <Badge>Motorista</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Robert Johnson</div>
                        <div className="text-sm text-muted-foreground">robert@example.com</div>
                      </div>
                    </div>
                    <Badge>Passageiro</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Todos os Usuários
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Tickets de Suporte Recentes</CardTitle>
                <CardDescription>Tickets de suporte abertos nos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium">Reclamação de Motorista</div>
                        <div className="text-sm text-muted-foreground">Reportado por John Doe</div>
                      </div>
                    </div>
                    <Badge variant="destructive">Alta</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-medium">Problema de Pagamento</div>
                        <div className="text-sm text-muted-foreground">Reportado por Jane Smith</div>
                      </div>
                    </div>
                    <Badge variant="outline">Média</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <HelpCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Dúvida sobre Conta</div>
                        <div className="text-sm text-muted-foreground">Reportado por Robert Johnson</div>
                      </div>
                    </div>
                    <Badge variant="outline">Baixa</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Todos os Tickets
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Corridas Recentes</CardTitle>
              <CardDescription>Visão geral das corridas recentes na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">ID da Corrida</th>
                      <th className="h-12 px-4 text-left font-medium">Passageiro</th>
                      <th className="h-12 px-4 text-left font-medium">Motorista</th>
                      <th className="h-12 px-4 text-left font-medium">Data</th>
                      <th className="h-12 px-4 text-left font-medium">Valor</th>
                      <th className="h-12 px-4 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 align-middle">#12345</td>
                      <td className="p-4 align-middle">John Doe</td>
                      <td className="p-4 align-middle">Michael Driver</td>
                      <td className="p-4 align-middle">Apr 1, 2025</td>
                      <td className="p-4 align-middle">$18.50</td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Concluída
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 align-middle">#12344</td>
                      <td className="p-4 align-middle">Jane Smith</td>
                      <td className="p-4 align-middle">Sarah Driver</td>
                      <td className="p-4 align-middle">Apr 1, 2025</td>
                      <td className="p-4 align-middle">$24.75</td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Concluída
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 align-middle">#12343</td>
                      <td className="p-4 align-middle">Robert Johnson</td>
                      <td className="p-4 align-middle">David Driver</td>
                      <td className="p-4 align-middle">Mar 31, 2025</td>
                      <td className="p-4 align-middle">$32.00</td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800">
                          Em Andamento
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todas as Corridas
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}

