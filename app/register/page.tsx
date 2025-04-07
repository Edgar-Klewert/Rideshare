"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { authRoutes, generalRoutes } from "@/lib/routes"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || "passenger"
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      router.push(authRoutes.registerPayment)
    }, 1500)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link href={generalRoutes.home} className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost">← Back</Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Criar uma conta</h1>
          <p className="text-sm text-muted-foreground">Digite seus dados para criar sua conta</p>
        </div>
        <Tabs defaultValue={defaultRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="passenger">Passageiro</TabsTrigger>
            <TabsTrigger value="driver">Motorista</TabsTrigger>
          </TabsList>
          <TabsContent value="passenger">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Passageiro</CardTitle>
                <CardDescription>Crie sua conta de passageiro</CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Telefone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Criando conta..." : "Continuar"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Motorista</CardTitle>
                <CardDescription>Crie sua conta de motorista</CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-name">Nome Completo</Label>
                    <Input id="driver-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-email">E-mail</Label>
                    <Input id="driver-email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-phone">Número de Telefone</Label>
                    <Input id="driver-phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-password">Senha</Label>
                    <Input id="driver-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-confirm-password">Confirmar Senha</Label>
                    <Input id="driver-confirm-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Criando conta..." : "Continuar"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link href={authRoutes.login} className="underline underline-offset-4 hover:text-primary">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  )
}

