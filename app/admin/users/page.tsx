"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex-1 space-y-4 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
          <p className="text-muted-foreground">Gerencie usuários e suas contas</p>
        </div>
        <Button>Adicionar Usuário</Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar usuários..."
              className="w-full pl-8 md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Todos os Usuários</DropdownMenuItem>
              <DropdownMenuItem>Passageiros</DropdownMenuItem>
              <DropdownMenuItem>Motoristas</DropdownMenuItem>
              <DropdownMenuItem>Ativos</DropdownMenuItem>
              <DropdownMenuItem>Suspensos</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="10">
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">por página</span>
        </div>
      </div>

      <Card>
        <CardHeader className="px-6 py-4">
          <CardTitle>Lista de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left font-medium">Usuário</th>
                  <th className="h-12 px-4 text-left font-medium">E-mail</th>
                  <th className="h-12 px-4 text-left font-medium">Telefone</th>
                  <th className="h-12 px-4 text-left font-medium">Tipo</th>
                  <th className="h-12 px-4 text-left font-medium">Status</th>
                  <th className="h-12 px-4 text-left font-medium">Cadastrado em</th>
                  <th className="h-12 px-4 text-left font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{`U${i + 1}`}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">User {i + 1}</div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">user{i + 1}@example.com</td>
                    <td className="p-4 align-middle">+1 (555) 000-{1000 + i}</td>
                    <td className="p-4 align-middle">
                      <Badge variant="outline">{i % 3 === 0 ? "Motorista" : "Passageiro"}</Badge>
                    </td>
                    <td className="p-4 align-middle">
                      <Badge
                        variant="outline"
                        className={i % 5 === 0 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}
                      >
                        {i % 5 === 0 ? "Pendente" : "Ativo"}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">Apr {i + 1}, 2025</td>
                    <td className="p-4 align-middle">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                          <DropdownMenuItem>Editar Usuário</DropdownMenuItem>
                          <DropdownMenuItem>Suspender Usuário</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Excluir Usuário</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-muted-foreground">
              Exibindo <strong>1</strong> até <strong>10</strong> de <strong>100</strong> resultados
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm" className="h-8 w-8">
                10
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

