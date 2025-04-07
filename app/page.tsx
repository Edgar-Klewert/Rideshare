import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur px-4">
        <div className="w-full flex h-16 items-center justify-between">
          <div className="font-bold text-xl">CaronaApp</div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/register" >
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Chegue onde precisa, de forma rápida e fácil
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nossa plataforma de caronas conecta você a motoristas confiáveis na sua região. Solicite uma corrida e
                  esteja a caminho em minutos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register?role=passenger">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Viaje conosco
                    </Button>
                  </Link>
                  <Link href="/register?role=driver">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Seja um motorista
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="App preview"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como funciona</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Nossa plataforma torna pedir uma carona simples e conveniente
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Solicitar</h3>
                <p className="text-muted-foreground">Informe seu destino e escolha o tipo de corrida</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Conectar</h3>
                <p className="text-muted-foreground">Conectamos você a um motorista próximo</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Viajar</h3>
                <p className="text-muted-foreground">Acompanhe sua viagem em tempo real e pague facilmente</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

