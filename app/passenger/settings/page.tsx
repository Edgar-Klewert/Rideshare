"use client"

import { useState } from "react"
import PassengerLayout from "@/components/passenger-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Shield, MapPin, Plus } from "lucide-react"

export default function PassengerSettingsPage() {
  // Melhorar a responsividade da página de configurações
  // Ajustar o layout para telas pequenas

  // Modificar o cabeçalho e os componentes para serem mais responsivos
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    promotions: true,
  })

  return (
    <PassengerLayout>
      <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Configurações</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie suas preferências e configurações de conta
          </p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account" className="text-xs sm:text-sm">
              Conta
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm">
              Notificações
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs sm:text-sm">
              Privacidade
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Informações Pessoais</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Atualize suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm">
                    Nome Completo
                  </Label>
                  <Input id="name" defaultValue="João Silva" className="text-sm h-9" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm">
                    E-mail
                  </Label>
                  <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" className="text-sm h-9" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone" className="text-xs sm:text-sm">
                    Telefone
                  </Label>
                  <Input id="phone" type="tel" defaultValue="(11) 98765-4321" className="text-sm h-9" />
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button className="w-full sm:w-auto text-xs sm:text-sm">Salvar Alterações</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Endereços Salvos</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Gerencie seus endereços frequentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-2 sm:gap-3">
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
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    Editar
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">Trabalho</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Av. Paulista, 1000 - Bela Vista</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    Editar
                  </Button>
                </div>

                <Button variant="outline" className="w-full text-xs sm:text-sm">
                  <Plus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Adicionar Novo Endereço
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Senha e Segurança</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Atualize sua senha e configurações de segurança
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="current-password" className="text-xs sm:text-sm">
                    Senha Atual
                  </Label>
                  <Input id="current-password" type="password" className="text-sm h-9" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="new-password" className="text-xs sm:text-sm">
                    Nova Senha
                  </Label>
                  <Input id="new-password" type="password" className="text-sm h-9" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="confirm-password" className="text-xs sm:text-sm">
                    Confirmar Nova Senha
                  </Label>
                  <Input id="confirm-password" type="password" className="text-sm h-9" />
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button className="w-full sm:w-auto text-xs sm:text-sm">Atualizar Senha</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Preferências de Notificação</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Controle como você recebe notificações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Notificações por E-mail</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Receba atualizações sobre suas corridas por e-mail
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Notificações Push</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Receba notificações em tempo real no seu dispositivo
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Notificações por SMS</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Receba atualizações sobre suas corridas por SMS
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Promoções e Novidades</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Receba ofertas especiais e atualizações sobre novos recursos
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6">
                <Button className="w-full sm:w-auto text-xs sm:text-sm">Salvar Preferências</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Privacidade e Segurança</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Gerencie suas configurações de privacidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Compartilhamento de Localização</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Permitir acesso à sua localização mesmo quando o app não estiver em uso
                        </div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Compartilhar Dados de Viagem</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Compartilhar dados anônimos para melhorar o serviço
                        </div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="data-retention" className="text-xs sm:text-sm">
                      Retenção de Dados
                    </Label>
                    <Select defaultValue="6months">
                      <SelectTrigger id="data-retention" className="text-sm h-9">
                        <SelectValue placeholder="Selecione um período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3months">3 meses</SelectItem>
                        <SelectItem value="6months">6 meses</SelectItem>
                        <SelectItem value="1year">1 ano</SelectItem>
                        <SelectItem value="forever">Indefinidamente</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Período pelo qual seus dados de localização e viagens serão armazenados
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between px-4 sm:px-6">
                <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
                  Baixar Meus Dados
                </Button>
                <Button className="w-full sm:w-auto text-xs sm:text-sm">Salvar Configurações</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PassengerLayout>
  )
}

