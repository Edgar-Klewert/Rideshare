"use client"

import { useState } from "react"
import Link from "next/link"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, Clock } from "lucide-react"

export default function PassengerRidesPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Minhas Corridas</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Gerencie suas corridas agendadas e em andamento</p>
        </div>

        <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Próximas</TabsTrigger>
            <TabsTrigger value="active">Em Andamento</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl">Corridas Agendadas</CardTitle>
              </CardHeader>
              <CardContent>
                {activeTab === "upcoming" && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col justify-between items-start p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="space-y-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            Agendada
                          </Badge>
                          <span className="text-xs sm:text-sm text-muted-foreground">Amanhã, 09:30</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Rua das Flores, 123 - Centro</div>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Aeroporto Internacional - Terminal 2</div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3 w-full sm:justify-end">
                          <Button variant="outline" size="sm" className="text-xs h-8">
                            Cancelar
                          </Button>
                          <Button size="sm" className="text-xs h-8">
                            Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-start p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="space-y-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            Agendada
                          </Badge>
                          <span className="text-xs sm:text-sm text-muted-foreground">Sexta, 18:00</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Escritório - Av. Paulista, 1000</div>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Shopping Center Norte</div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3 w-full sm:justify-end">
                          <Button variant="outline" size="sm" className="text-xs h-8">
                            Cancelar
                          </Button>
                          <Button size="sm" className="text-xs h-8">
                            Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "upcoming" && (
                  <div className="mt-4 sm:mt-6">
                    <Button variant="outline" className="w-full text-sm">
                      Agendar Nova Corrida
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl">Corridas em Andamento</CardTitle>
              </CardHeader>
              <CardContent>
                {activeTab === "active" && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col justify-between items-start p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="space-y-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>Em Andamento</Badge>
                          <span className="text-xs sm:text-sm text-muted-foreground">Iniciada às 14:25</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Casa - Rua Alameda Santos, 45</div>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="text-xs sm:text-sm">Restaurante Sabor & Arte</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm">Chegada estimada em 8 minutos</span>
                        </div>
                        <div className="flex gap-2 mt-3 w-full sm:justify-end">
                          <Link href="/passenger/rides/123">
                            <Button size="sm" className="text-xs h-8">
                              Ver Detalhes
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center p-6 sm:p-8 border rounded-lg border-dashed">
                      <div className="text-center">
                        <p className="text-xs sm:text-sm text-muted-foreground">Não há outras corridas em andamento</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PassengerLayout>
  )
}

