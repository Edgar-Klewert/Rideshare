"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentRegistrationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment method registration
    setTimeout(() => {
      setIsLoading(false)
      router.push("/passenger/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/register" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost">← Back</Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Adicionar Método de Pagamento</h1>
          <p className="text-sm text-muted-foreground">Adicione um método de pagamento para completar seu cadastro</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Informações de Pagamento</CardTitle>
            <CardDescription>Escolha seu método de pagamento preferido</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                    Cartão de Crédito/Débito
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex-1 cursor-pointer">
                    Pix
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1 cursor-pointer">
                    Dinheiro
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === "credit-card" && (
                <div className="space-y-4 pt-3">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do Cartão</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Data de Validade</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Nome no Cartão</Label>
                    <Input id="name-on-card" placeholder="John Doe" required />
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="space-y-4 pt-3">
                  <div className="space-y-2">
                    <Label htmlFor="pix-key">Chave Pix</Label>
                    <Input id="pix-key" placeholder="CPF, E-mail ou Telefone" required />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Salvando..." : "Completar Cadastro"}
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div className="text-center text-sm text-muted-foreground">
          Ao continuar, você concorda com nossos{" "}
          <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
            Termos de Serviço
          </Link>{" "}
          e{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  )
}

