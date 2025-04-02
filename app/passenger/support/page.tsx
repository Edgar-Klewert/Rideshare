"use client"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HelpCircle } from "lucide-react"

export default function PassengerSupportPage() {
  const [activeTab, setActiveTab] = useState("help")

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Suporte</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Obtenha ajuda e suporte para sua conta</p>
        </div>

        <Tabs defaultValue="help" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="help" className="text-xs sm:text-sm">
              Ajuda
            </TabsTrigger>
            <TabsTrigger value="tickets" className="text-xs sm:text-sm">
              Meus Tickets
            </TabsTrigger>
            <TabsTrigger value="report" className="text-xs sm:text-sm">
              Reportar Problema
            </TabsTrigger>
          </TabsList>

          <TabsContent value="help" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Central de Ajuda</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Encontre respostas para perguntas frequentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="relative">
                  <HelpCircle className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar por tópicos de ajuda..." className="pl-8 text-sm h-9" />
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm sm:text-base py-3">
                      Como solicitar uma corrida?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
                      Para solicitar uma corrida, abra o aplicativo e na tela inicial, insira seu local de embarque e
                      destino. Em seguida, escolha o tipo de corrida desejado (Econômico, Padrão ou Premium) e clique em
                      "Solicitar Corrida". Você poderá acompanhar o status da sua solicitação em tempo real.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm sm:text-base py-3">
                      Como cancelar uma corrida?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
                      Para cancelar uma corrida, acesse a tela de detalhes da corrida atual e toque no botão "Cancelar
                      Corrida" na parte inferior da tela. Lembre-se que cancelamentos podem estar sujeitos a taxas
                      dependendo do tempo decorrido desde a solicitação.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm sm:text-base py-3">
                      Como adicionar um método de pagamento?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
                      Para adicionar um método de pagamento, acesse a seção "Pagamento" no menu principal. Toque em
                      "Adicionar Novo Método de Pagamento" e siga as instruções para adicionar um cartão de
                      crédito/débito ou configurar o Pix como forma de pagamento.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-sm sm:text-base py-3">
                      O que fazer se esqueci um item no carro?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
                      Se você esqueceu um item no carro, acesse a seção "Minhas Corridas", encontre a corrida específica
                      e toque em "Reportar Item Perdido". Você também pode entrar em contato diretamente com o suporte
                      através da aba "Reportar Problema" nesta tela.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-sm sm:text-base py-3">
                      Como funciona a avaliação de motoristas?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
                      Após cada corrida, você terá a oportunidade de avaliar seu motorista com uma classificação de 1 a
                      5 estrelas e deixar comentários opcionais. Suas avaliações ajudam a manter a qualidade do serviço
                      e são sempre anônimas para os motoristas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button variant="outline" className="w-full text-xs sm:text-sm">
                  Ver Todos os Tópicos de Ajuda
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Meus Tickets de Suporte</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Acompanhe o status dos seus tickets de suporte
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-medium text-sm sm:text-base">#12345 - Item esquecido no carro</div>
                        <Badge variant="outline" className="bg-blue-100 text-blue-800">
                          Em Andamento
                        </Badge>
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Aberto em: 28/03/2025</div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 sm:mt-0 w-full sm:w-auto text-xs h-8">
                      Ver Detalhes
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-medium text-sm sm:text-base">#12289 - Cobrança incorreta</div>
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Resolvido
                        </Badge>
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Aberto em: 15/03/2025</div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 sm:mt-0 w-full sm:w-auto text-xs h-8">
                      Ver Detalhes
                    </Button>
                  </div>

                  <div className="flex items-center justify-center p-6 sm:p-8 border rounded-lg border-dashed">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-muted-foreground">Não há mais tickets de suporte</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Reportar um Problema</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Informe-nos sobre qualquer problema que você tenha encontrado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="space-y-1 sm:space-y-2">
                  <Select>
                    <SelectTrigger className="text-sm h-9">
                      <SelectValue placeholder="Selecione o tipo de problema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="item">Item esquecido</SelectItem>
                      <SelectItem value="charge">Problema com cobrança</SelectItem>
                      <SelectItem value="driver">Problema com motorista</SelectItem>
                      <SelectItem value="app">Problema com o aplicativo</SelectItem>
                      <SelectItem value="other">Outro problema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Select>
                    <SelectTrigger className="text-sm h-9">
                      <SelectValue placeholder="Selecione a corrida relacionada (opcional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ride1">Hoje, 15:30 - Shopping Morumbi</SelectItem>
                      <SelectItem value="ride2">15/03/2025 - Aeroporto de Congonhas</SelectItem>
                      <SelectItem value="ride3">05/03/2025 - Centro Empresarial</SelectItem>
                      <SelectItem value="none">Não está relacionado a uma corrida específica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Input placeholder="Título do problema" className="text-sm h-9" />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <textarea
                    className="w-full min-h-[120px] sm:min-h-[150px] p-2 border rounded-md text-sm"
                    placeholder="Descreva seu problema em detalhes..."
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Anexar Imagem ou Arquivo
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button className="w-full text-xs sm:text-sm">Enviar Ticket de Suporte</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PassengerLayout>
  )
}

