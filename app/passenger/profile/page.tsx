"use client"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Clock, Award, Upload } from "lucide-react"

export default function PassengerProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center md:items-start">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xl sm:text-2xl">JS</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="mt-2 text-xs h-8">
                  <Upload className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Alterar Foto
                </Button>
              </div>

              <div className="flex-1 space-y-2 text-center md:text-left">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">João Silva</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">joao.silva@exemplo.com</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-primary/10 text-xs">
                    Membro desde 2023
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-xs">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    4.9
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-xs">
                    127 corridas
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2 mt-3 md:mt-0">
                <Button variant="outline" className="text-xs sm:text-sm">
                  Editar Perfil
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-xs sm:text-sm">
              Estatísticas
            </TabsTrigger>
            <TabsTrigger value="rewards" className="text-xs sm:text-sm">
              Recompensas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="px-4 py-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl">Lugares Favoritos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-4 sm:px-6">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-muted">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Casa</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Rua das Flores, 123 - Jardim Primavera
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-muted">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Trabalho</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Av. Paulista, 1000 - Bela Vista</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-muted">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Academia</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Rua Esporte Total, 45 - Centro</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="px-4 py-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl">Corridas Recentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-4 sm:px-6">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base">Shopping Morumbi</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Ontem, 15:30</div>
                      </div>
                    </div>
                    <div className="font-medium text-sm sm:text-base">R$ 32,50</div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base">Aeroporto de Congonhas</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">15/03/2025, 09:15</div>
                      </div>
                    </div>
                    <div className="font-medium text-sm sm:text-base">R$ 45,75</div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base">Centro Empresarial</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">05/03/2025, 14:20</div>
                      </div>
                    </div>
                    <div className="font-medium text-sm sm:text-base">R$ 28,90</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Estatísticas de Uso</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Resumo da sua atividade no aplicativo</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                  <div className="bg-muted rounded-lg p-3 sm:p-4 text-center">
                    <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Total de Corridas</h3>
                    <div className="text-xl sm:text-3xl font-bold">127</div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 sm:p-4 text-center">
                    <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Distância Total</h3>
                    <div className="text-xl sm:text-3xl font-bold">1.458 km</div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 sm:p-4 text-center">
                    <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Tempo em Viagens</h3>
                    <div className="text-xl sm:text-3xl font-bold">48h 23m</div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-2">Destinos Mais Frequentes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Shopping Morumbi</span>
                        </div>
                        <div className="text-xs sm:text-sm">23 corridas</div>
                      </div>

                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Aeroporto de Congonhas</span>
                        </div>
                        <div className="text-xs sm:text-sm">18 corridas</div>
                      </div>

                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Centro Empresarial</span>
                        </div>
                        <div className="text-xs sm:text-sm">15 corridas</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-2">Horários Mais Frequentes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Manhã (6h - 10h)</span>
                        </div>
                        <div className="text-xs sm:text-sm">42 corridas</div>
                      </div>

                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Tarde (12h - 16h)</span>
                        </div>
                        <div className="text-xs sm:text-sm">35 corridas</div>
                      </div>

                      <div className="flex items-center justify-between p-2 border-b">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm">Noite (18h - 22h)</span>
                        </div>
                        <div className="text-xs sm:text-sm">50 corridas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Programa de Recompensas</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Ganhe pontos e resgate benefícios exclusivos
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center bg-muted p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/20">
                        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">1.250 pontos</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Nível Prata</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 w-full sm:w-auto">
                      <Button className="w-full sm:w-auto text-xs sm:text-sm">Resgatar Recompensas</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Recompensas Disponíveis</h3>
                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="border rounded-lg p-3 sm:p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm sm:text-base">Desconto de 15%</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">Na sua próxima corrida</p>
                          </div>
                          <Badge className="text-xs">500 pontos</Badge>
                        </div>
                        <Button variant="outline" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm">
                          Resgatar
                        </Button>
                      </div>

                      <div className="border rounded-lg p-3 sm:p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm sm:text-base">Viagem Gratuita</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">Até R$ 30,00</p>
                          </div>
                          <Badge className="text-xs">1.200 pontos</Badge>
                        </div>
                        <Button variant="outline" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm">
                          Resgatar
                        </Button>
                      </div>

                      <div className="border rounded-lg p-3 sm:p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm sm:text-base">Upgrade para Premium</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">Em 3 corridas</p>
                          </div>
                          <Badge className="text-xs">800 pontos</Badge>
                        </div>
                        <Button variant="outline" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm">
                          Resgatar
                        </Button>
                      </div>

                      <div className="border rounded-lg p-3 sm:p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm sm:text-base">Cartão-Presente</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">R$ 50,00 em parceiros</p>
                          </div>
                          <Badge className="text-xs">2.000 pontos</Badge>
                        </div>
                        <Button variant="outline" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm" disabled>
                          Resgatar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-2">Como Ganhar Mais Pontos</h3>
                    <ul className="space-y-1 sm:space-y-2 list-disc pl-5 text-xs sm:text-sm">
                      <li>Complete 5 corridas em uma semana (+100 pontos)</li>
                      <li>Indique um amigo (+200 pontos quando ele fizer a primeira corrida)</li>
                      <li>Avalie todas as suas corridas (+10 pontos por avaliação)</li>
                      <li>Use o aplicativo em horários de baixa demanda (+50 pontos)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PassengerLayout>
  )
}

