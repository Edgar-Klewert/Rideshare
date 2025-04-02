"use client"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Wallet, Banknote, Plus, Trash2 } from "lucide-react"

export default function PassengerPaymentPage() {
  const [activeTab, setActiveTab] = useState("methods")
  const [showAddCard, setShowAddCard] = useState(false)

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Pagamento</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie seus métodos de pagamento e visualize recibos
          </p>
        </div>

        <Tabs defaultValue="methods" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="methods">Métodos de Pagamento</TabsTrigger>
            <TabsTrigger value="receipts">Recibos</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Métodos de Pagamento</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Gerencie seus métodos de pagamento para corridas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <RadioGroup defaultValue="card1">
                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <RadioGroupItem value="card1" id="card1" />
                      <Label htmlFor="card1" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Mastercard •••• 4589</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Expira em 05/2026</div>
                        </div>
                      </Label>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <RadioGroupItem value="card2" id="card2" />
                      <Label htmlFor="card2" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Visa •••• 1234</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Expira em 09/2025</div>
                        </div>
                      </Label>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Pix</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">CPF: •••.456.789-**</div>
                        </div>
                      </Label>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium text-sm sm:text-base">Dinheiro</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Pagamento em espécie</div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {!showAddCard ? (
                  <Button variant="outline" className="w-full text-xs sm:text-sm" onClick={() => setShowAddCard(true)}>
                    <Plus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Adicionar Novo Método de Pagamento
                  </Button>
                ) : (
                  <Card>
                    <CardHeader className="px-4 py-3 sm:px-6">
                      <CardTitle className="text-base sm:text-lg">Adicionar Cartão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="card-number" className="text-xs sm:text-sm">
                          Número do Cartão
                        </Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" className="text-sm h-9" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="expiry" className="text-xs sm:text-sm">
                            Data de Validade
                          </Label>
                          <Input id="expiry" placeholder="MM/AA" className="text-sm h-9" />
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="cvc" className="text-xs sm:text-sm">
                            CVC
                          </Label>
                          <Input id="cvc" placeholder="123" className="text-sm h-9" />
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="name-on-card" className="text-xs sm:text-sm">
                          Nome no Cartão
                        </Label>
                        <Input id="name-on-card" placeholder="Nome completo" className="text-sm h-9" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between px-4 sm:px-6">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto text-xs sm:text-sm"
                        onClick={() => setShowAddCard(false)}
                      >
                        Cancelar
                      </Button>
                      <Button className="w-full sm:w-auto text-xs sm:text-sm">Salvar Cartão</Button>
                    </CardFooter>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receipts" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Recibos</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Visualize e baixe seus recibos de corridas
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="font-medium text-sm sm:text-base">Corrida para Shopping Morumbi</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Ontem, 15:30 • R$ 32,50</div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0 w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Baixar PDF
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="font-medium text-sm sm:text-base">Corrida para Aeroporto de Congonhas</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">15/03/2025, 09:15 • R$ 45,75</div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0 w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Baixar PDF
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <div className="font-medium text-sm sm:text-base">Corrida para Centro Empresarial</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">05/03/2025, 14:20 • R$ 28,90</div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0 w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" className="flex-1 sm:flex-none text-xs h-8">
                        Baixar PDF
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 sm:mt-6">
                  <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
                    Carregar Mais Recibos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PassengerLayout>
  )
}

