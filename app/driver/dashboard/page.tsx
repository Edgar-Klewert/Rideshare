"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DriverLayout from "@/components/driver-layout"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock } from "lucide-react"

export default function DriverDashboard() {
  const router = useRouter()
  const [isOnline, setIsOnline] = useState(true)
  const [hasActiveRide, setHasActiveRide] = useState(false)

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline)
  }

  const acceptRide = () => {
    setHasActiveRide(true)
  }

  const viewRideDetails = () => {
    router.push("/driver/rides/123")
  }

  return (
    <DriverLayout>
      <div className="container py-6 space-y-6 w-full">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Status do Motorista</CardTitle>
              <div className="flex items-center gap-2">
                <span className={isOnline ? "text-green-500" : "text-muted-foreground"}>
                  {isOnline ? "Online" : "Offline"}
                </span>
                <Switch checked={isOnline} onCheckedChange={toggleOnlineStatus} />
              </div>
            </div>
            <CardDescription>
              {isOnline
                ? "Você está online e disponível para receber solicitações de corrida"
                : "Você está offline e não receberá solicitações de corrida"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Ganhos de Hoje</h3>
                <div className="text-2xl font-bold">$85.50</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Corridas Concluídas</h3>
                <div className="text-2xl font-bold">4</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Horas Online</h3>
                <div className="text-2xl font-bold">5.5</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            {!hasActiveRide ? (
              <Card>
                <CardHeader>
                  <CardTitle>Nova Solicitação de Corrida</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="font-medium">Embarque</div>
                        <div className="text-sm text-muted-foreground">123 Main St, Anytown (2.5 km de distância)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="font-medium">Destino</div>
                        <div className="text-sm text-muted-foreground">456 Market St, Downtown (4.8 km)</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <div className="font-medium">Valor Estimado</div>
                      <div className="text-2xl font-bold">$18.50</div>
                    </div>
                    <div>
                      <div className="font-medium text-right">Tempo Estimado</div>
                      <div className="text-xl font-bold">15 min</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="w-full">
                    Recusar
                  </Button>
                  <Button className="w-full" onClick={acceptRide}>
                    Aceitar (15s)
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Corrida Ativa</CardTitle>
                    <Badge>Em Andamento</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Passageiro • Corrida Padrão</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="font-medium">Embarque</div>
                        <div className="text-sm text-muted-foreground">123 Main St, Anytown</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="font-medium">Destino</div>
                        <div className="text-sm text-muted-foreground">456 Market St, Downtown</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <div className="font-medium">Valor</div>
                      <div className="text-2xl font-bold">$18.50</div>
                    </div>
                    <div>
                      <div className="font-medium text-right">Tempo Estimado</div>
                      <div className="text-xl font-bold">12 min</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={viewRideDetails}>
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div className="md:w-1/2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Mapa</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground">A visualização do mapa será exibida aqui</p>
                    <p className="text-sm text-muted-foreground">(Integração com Google Maps)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Atividade de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Downtown Mall</div>
                    <div className="text-sm text-muted-foreground">Hoje, 3:45 PM</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$18.50</div>
                  <div className="text-sm text-muted-foreground">Concluída</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">City Center</div>
                    <div className="text-sm text-muted-foreground">Hoje, 1:15 PM</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$12.25</div>
                  <div className="text-sm text-muted-foreground">Concluída</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DriverLayout>
  )
}

