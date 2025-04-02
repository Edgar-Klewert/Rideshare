import { passengerRoutes, driverRoutes, adminRoutes } from "@/lib/routes"
import {
  Home,
  MapPin,
  Clock,
  CreditCard,
  Settings,
  HelpCircle,
  User,
  Car,
  DollarSign,
  AlertTriangle,
  Users,
} from "lucide-react"

export const passengerNavItems = [
  {
    href: passengerRoutes.dashboard,
    label: "Início",
    icon: Home,
  },
  {
    href: passengerRoutes.rides,
    label: "Minhas Corridas",
    icon: MapPin,
  },
  {
    href: passengerRoutes.history,
    label: "Histórico",
    icon: Clock,
  },
  {
    href: passengerRoutes.payment,
    label: "Pagamento",
    icon: CreditCard,
  },
  {
    href: passengerRoutes.settings,
    label: "Configurações",
    icon: Settings,
  },
  {
    href: passengerRoutes.support,
    label: "Suporte",
    icon: HelpCircle,
  },
  {
    href: passengerRoutes.profile,
    label: "Perfil",
    icon: User,
  },
]

export const driverNavItems = [
  {
    href: driverRoutes.dashboard,
    label: "Início",
    icon: Home,
  },
  {
    href: driverRoutes.rides,
    label: "Corridas Ativas",
    icon: Car,
  },
  {
    href: driverRoutes.history,
    label: "Histórico",
    icon: Clock,
  },
  {
    href: driverRoutes.earnings,
    label: "Ganhos",
    icon: CreditCard,
  },
  {
    href: driverRoutes.settings,
    label: "Configurações",
    icon: Settings,
  },
  {
    href: driverRoutes.support,
    label: "Suporte",
    icon: HelpCircle,
  },
  {
    href: driverRoutes.profile,
    label: "Perfil",
    icon: User,
  },
]

export const adminNavItems = [
  {
    href: adminRoutes.dashboard,
    label: "Painel",
    icon: Home,
  },
  {
    href: adminRoutes.users,
    label: "Usuários",
    icon: Users,
  },
  {
    href: adminRoutes.drivers,
    label: "Motoristas",
    icon: Car,
  },
  {
    href: adminRoutes.reports,
    label: "Relatórios",
    icon: DollarSign,
  },
  {
    href: adminRoutes.support,
    label: "Suporte & Reclamações",
    icon: AlertTriangle,
  },
  {
    href: adminRoutes.settings,
    label: "Configurações",
    icon: Settings,
  },
]

