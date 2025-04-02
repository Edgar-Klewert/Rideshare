"use client"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Search, Calendar, Star } from "lucide-react"

export default function PassengerHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Histórico de Corridas</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Visualize todas as suas corridas anteriores</p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por destino ou motorista..."
              className="pl-8 w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Select defaultValue="all">
              <SelectTrigger className="w-full text-sm h-9">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="completed">Concluídas</SelectItem>
                <SelectItem value="canceled">Canceladas</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="30">
              <SelectTrigger className="w-full text-sm h-9">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 3 meses</SelectItem>
                <SelectItem value="365">Último ano</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader className="px-4 py-4 sm:px-6">
            <CardTitle className="text-lg sm:text-xl">Corridas Anteriores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Concluída
                    </Badge>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Ontem, 15:30</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Casa</div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Shopping Morumbi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-xs sm:text-sm">5.0</span>
                    <span className="text-xs sm:text-sm text-muted-foreground ml-2">Carlos S. • Toyota Corolla</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex justify-between items-center w-full pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l sm:pl-3">
                  <div>
                    <div className="font-medium">R$ 32,50</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cartão de crédito</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    Ver recibo
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Concluída
                    </Badge>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>15/03/2025, 09:15</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Escritório</div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Aeroporto de Congonhas</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-xs sm:text-sm">4.8</span>
                    <span className="text-xs sm:text-sm text-muted-foreground ml-2">Mariana L. • Honda Civic</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex justify-between items-center w-full pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l sm:pl-3">
                  <div>
                    <div className="font-medium">R$ 45,75</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cartão de crédito</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    Ver recibo
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="bg-red-100 text-red-800">
                      Cancelada
                    </Badge>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>10/03/2025, 18:45</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Restaurante Sabor & Arte</div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">Casa</div>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Cancelada pelo passageiro</div>
                </div>
                <div className="mt-3 sm:mt-0 flex justify-between items-center w-full pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l sm:pl-3">
                  <div>
                    <div className="font-medium">R$ 0,00</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Taxa de cancelamento não aplicada</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4">
              <div className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
                Mostrando 3 de 24 corridas
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs h-8 order-1 sm:order-2">
                Carregar mais
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PassengerLayout>
  )
}

