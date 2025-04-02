import type { UserRole } from "@/lib/routes"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

export const getCurrentUser = (): User | null => {
  return {
    id: "user-123",
    name: "John Doe",
    email: "john@example.com",
    role: "passenger",
  }
}

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}

export const login = async (email: string, password: string, role: UserRole): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "user-123",
        name: role === "passenger" ? "John Doe" : "Michael Driver",
        email,
        role,
      })
    }, 1000)
  })
}

export const logout = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

export const register = async (
  name: string,
  email: string,
  password: string,
  role: UserRole
): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `user-${Math.random().toString(36).substr(2, 9)}`,
        name,
        email,
        role,
      });
    }, 1000);
  });
};
