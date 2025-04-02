"use client"

import Link from "next/link"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, Clock } from "lucide-react"
import { passengerRoutes } from "@/lib/routes"

export default function PassengerDashboard() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 w-full sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="md:w-1/2 space-y-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Solicitar uma Corrida</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Informe seu local de embarque e destino
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-4 sm:px-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <Input
                      placeholder="Local de embarque"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="text-sm h-9"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <Input
                      placeholder="Destino"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="text-sm h-9"
                    />
                  </div>
                </div>

                <Tabs defaultValue="standard">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="economy" className="text-xs sm:text-sm">
                      Econômico
                    </TabsTrigger>
                    <TabsTrigger value="standard" className="text-xs sm:text-sm">
                      Padrão
                    </TabsTrigger>
                    <TabsTrigger value="premium" className="text-xs sm:text-sm">
                      Premium
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="economy" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">Econômico</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Corridas acessíveis para o dia a dia</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm sm:text-base">$12-15</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">15 min</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="standard" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">Padrão</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Corridas confortáveis a preços padrão
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm sm:text-base">$18-22</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">12 min</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="premium" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">Premium</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Veículos de luxo com motoristas bem avaliados
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm sm:text-base">$28-35</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">10 min</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button className="w-full text-sm" disabled={!origin || !destination}>
                  Solicitar Corrida
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Lugares Salvos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-4 sm:px-6">
                <div className="flex items-center justify-between rounded-md p-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Casa</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">123 Main St, Anytown</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md p-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Trabalho</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">456 Office Blvd, Business District</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/2">
            <Card className="h-full">
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Mapa</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] sm:h-[400px] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground">A visualização do mapa será exibida aqui</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">(Integração com Google Maps)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader className="px-4 py-4 sm:px-6">
            <CardTitle className="text-lg sm:text-xl">Corridas Recentes</CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Downtown Mall</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Ontem, 3:45 PM</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm sm:text-base">$18.50</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Concluída</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Airport</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">March 15, 8:30 AM</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm sm:text-base">$42.75</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Concluída</div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button asChild>
                <Link href={passengerRoutes.history} className="px-3 py-1 border border-gray-300 rounded text-sm">
                 Ver Histórico Completo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PassengerLayout>
  )
}

