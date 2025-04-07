"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { authRoutes, generalRoutes, getDashboardByRole } from "@/lib/routes"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [userRole, setUserRole] = useState<"passenger" | "driver">("passenger")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      // Redireciona para o dashboard apropriado com base no tipo de usuário
      router.push(getDashboardByRole(userRole))
    }, 1500)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={generalRoutes.home} className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost">← Back</Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bem-vindo de volta</h1>
          <p className="text-sm text-muted-foreground">Digite suas credenciais para entrar na sua conta</p>
        </div>
        <Tabs
          defaultValue="passenger"
          className="w-full"
          onValueChange={(value) => setUserRole(value as "passenger" | "driver")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="passenger">Passageiro</TabsTrigger>
            <TabsTrigger value="driver">Motorista</TabsTrigger>
          </TabsList>
          <TabsContent value="passenger">
            <Card>
              <CardHeader>
                <CardTitle>Login de Passageiro</CardTitle>
                <CardDescription>Entre na sua conta de passageiro</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link
                        href={authRoutes.forgotPassword}
                        className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                      >
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle>Login de Motorista</CardTitle>
                <CardDescription>Entre na sua conta de motorista</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-email">E-mail</Label>
                    <Input id="driver-email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="driver-password">Senha</Label>
                      <Link
                        href={authRoutes.forgotPassword}
                        className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                      >
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <Input id="driver-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="text-center text-sm">
          Não tem uma conta?{" "}
          <Link href={authRoutes.register} className="underline underline-offset-4 hover:text-primary">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  )
}

