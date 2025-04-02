"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, MessageSquare, Star } from "lucide-react"
import { passengerRoutes } from "@/lib/routes"

export default function RideDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [rideStatus, setRideStatus] = useState("in-progress") // in-progress, completed

  const handleCancelRide = () => {
    if (confirm("Are you sure you want to cancel this ride?")) {
      router.push(passengerRoutes.dashboard)
    }
  }

  const completeRide = () => {
    setRideStatus("completed")
  }

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="md:w-1/2 space-y-4">
            {rideStatus === "in-progress" ? (
              <>
                <Card>
                  <CardHeader className="px-4 py-4 sm:px-6">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg sm:text-xl">Corrida em Andamento</CardTitle>
                      <Badge>Em Andamento</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                        <AvatarImage src="" />
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-base sm:text-lg">Michael Driver</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                          <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm text-muted-foreground ml-1">4.8</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Toyota Camry • ABC-1234</p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Embarque</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">123 Main St, Anytown</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Destino</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">456 Market St, Downtown</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <div className="font-medium text-xs sm:text-sm">Tempo Estimado</div>
                        <div className="text-xl sm:text-2xl font-bold">12 min</div>
                      </div>
                      <div>
                        <div className="font-medium text-xs sm:text-sm text-right">Valor Estimado</div>
                        <div className="text-xl sm:text-2xl font-bold">$18.50</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 px-4 sm:px-6">
                    <Button variant="outline" className="w-full text-xs sm:text-sm" onClick={completeRide}>
                      <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Ligar
                    </Button>
                    <Button variant="outline" className="w-full text-xs sm:text-sm">
                      <MessageSquare className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Mensagem
                    </Button>
                  </CardFooter>
                </Card>

                <Button variant="destructive" className="w-full text-xs sm:text-sm" onClick={handleCancelRide}>
                  Cancelar Corrida
                </Button>
              </>
            ) : (
              <Card>
                <CardHeader className="px-4 py-4 sm:px-6">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg sm:text-xl">Avalie Sua Corrida</CardTitle>
                    <Badge variant="outline">Concluída</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                      <AvatarImage src="" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg">Michael Driver</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Toyota Camry • ABC-1234</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="text-center">
                      <h3 className="font-medium text-sm sm:text-base mb-2">Como foi sua corrida?</h3>
                      <div className="flex justify-center gap-2">
                        <Star className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-primary hover:text-primary" />
                        <Star className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-primary hover:text-primary" />
                        <Star className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-primary hover:text-primary" />
                        <Star className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-primary hover:text-primary" />
                        <Star className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-primary hover:text-primary" />
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="font-medium text-sm sm:text-base mb-2">Deixe um comentário (opcional)</div>
                      <textarea
                        className="w-full min-h-[80px] sm:min-h-[100px] p-2 border rounded-md text-sm"
                        placeholder="Conte-nos sobre sua experiência..."
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-4 sm:px-6">
                  <Button className="w-full text-xs sm:text-sm" onClick={() => router.push(passengerRoutes.dashboard)}>
                    Enviar Avaliação
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div className="md:w-1/2">
            <Card className="h-full">
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Acompanhamento em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] sm:h-[500px] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      O acompanhamento em tempo real será exibido aqui
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">(Integração com Google Maps)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PassengerLayout>
  )
}

