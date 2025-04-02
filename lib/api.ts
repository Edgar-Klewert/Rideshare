export interface Ride {
  id: string
  passengerId: string
  driverId: string
  origin: string
  destination: string
  status: "pending" | "accepted" | "in-progress" | "completed" | "canceled"
  price: number
  estimatedTime: number
  startTime?: Date
  endTime?: Date
  rating?: number
  feedback?: string
}

export interface Driver {
  id: string
  name: string
  email: string
  phone: string
  rating: number
  vehicle: {
    model: string
    plate: string
    year: number
    color: string
  }
  status: "online" | "offline" | "busy"
  location?: {
    lat: number
    lng: number
  }
}

export interface PaymentMethod {
  id: string
  type: "credit-card" | "debit-card" | "pix" | "cash"
  lastFour?: string
  expiryDate?: string
  default: boolean
}

export const getUserRides = async (userId: string, status?: Ride["status"]): Promise<Ride[]> => {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      const rides: Ride[] = [
        {
          id: "ride-1",
          passengerId: userId,
          driverId: "driver-1",
          origin: "Casa - Rua Alameda Santos, 45",
          destination: "Restaurante Sabor & Arte",
          status: "in-progress",
          price: 18.5,
          estimatedTime: 12,
          startTime: new Date(),
        },
        {
          id: "ride-2",
          passengerId: userId,
          driverId: "driver-2",
          origin: "Escritório - Av. Paulista, 1000",
          destination: "Shopping Center Norte",
          status: "pending",
          price: 25.75,
          estimatedTime: 18,
          startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), 
        },
      ]

      if (status) {
        resolve(rides.filter((ride) => ride.status === status))
      } else {
        resolve(rides)
      }
    }, 500)
  })
}

export const getRideHistory = async (userId: string, limit = 10): Promise<Ride[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rides: Ride[] = [
        {
          id: "ride-3",
          passengerId: userId,
          driverId: "driver-3",
          origin: "Casa",
          destination: "Shopping Morumbi",
          status: "completed",
          price: 32.5,
          estimatedTime: 15,
          startTime: new Date(Date.now() - 24 * 60 * 60 * 1000), 
          endTime: new Date(Date.now() - 24 * 60 * 60 * 1000 + 15 * 60 * 1000),
          rating: 5,
        },
        {
          id: "ride-4",
          passengerId: userId,
          driverId: "driver-4",
          origin: "Escritório",
          destination: "Aeroporto de Congonhas",
          status: "completed",
          price: 45.75,
          estimatedTime: 25,
          startTime: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), 
          endTime: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000 + 25 * 60 * 1000),
          rating: 4.8,
        },
        {
          id: "ride-5",
          passengerId: userId,
          driverId: "driver-5",
          origin: "Restaurante Sabor & Arte",
          destination: "Casa",
          status: "canceled",
          price: 0,
          estimatedTime: 10,
          startTime: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), 
        },
      ]

      resolve(rides.slice(0, limit))
    }, 500)
  })
}

export const getUserPaymentMethods = async (userId: string): Promise<PaymentMethod[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dados simulados
      const paymentMethods: PaymentMethod[] = [
        {
          id: "payment-1",
          type: "credit-card",
          lastFour: "4589",
          expiryDate: "05/2026",
          default: true,
        },
        {
          id: "payment-2",
          type: "credit-card",
          lastFour: "1234",
          expiryDate: "09/2025",
          default: false,
        },
        {
          id: "payment-3",
          type: "pix",
          default: false,
        },
        {
          id: "payment-4",
          type: "cash",
          default: false,
        },
      ]

      resolve(paymentMethods)
    }, 500)
  })
}

export const getRideDetails = async (rideId: string): Promise<Ride & { driver: Driver }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: rideId,
        passengerId: "user-123",
        driverId: "driver-1",
        origin: "123 Main St, Anytown",
        destination: "456 Market St, Downtown",
        status: "in-progress",
        price: 18.5,
        estimatedTime: 12,
        startTime: new Date(),
        driver: {
          id: "driver-1",
          name: "Michael Driver",
          email: "michael@example.com",
          phone: "+1 (555) 123-4567",
          rating: 4.8,
          vehicle: {
            model: "Toyota Camry",
            plate: "ABC-1234",
            year: 2020,
            color: "Silver",
          },
          status: "busy",
          location: {
            lat: -23.5505,
            lng: -46.6333,
          },
        },
      })
    }, 500)
  })
}

export const requestRide = async (
  userId: string,
  origin: string,
  destination: string,
  rideType: "economy" | "standard" | "premium"
): Promise<Ride> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `ride-${Math.random().toString(36).substr(2, 9)}`,
        passengerId: userId,
        driverId: `driver-${Math.floor(Math.random() * 10 + 1)}`,
        origin,
        destination,
        status: "pending",
        price: rideType === "economy" ? 15 : rideType === "standard" ? 20 : 30,
        estimatedTime: rideType === "economy" ? 15 : rideType === "standard" ? 12 : 10,
        startTime: new Date(Date.now() + 5 * 60 * 1000), 
      });
    }, 1000);
  });
};


export const rateRide = async (rideId: string, rating: number, feedback?: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

export const cancelRide = async (rideId: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

