export const authRoutes = {
  login: "/login",
  register: "/register",
  registerPayment: "/register/payment",
  forgotPassword: "/forgot-password",
}

export const passengerRoutes = {
  dashboard: "/passenger/dashboard",
  rides: "/passenger/rides",
  rideDetails: (id: string) => `/passenger/rides/${id}`,
  history: "/passenger/history",
  payment: "/passenger/payment",
  settings: "/passenger/settings",
  support: "/passenger/support",
  profile: "/passenger/profile",
}

export const driverRoutes = {
  dashboard: "/driver/dashboard",
  rides: "/driver/rides",
  rideDetails: (id: string) => `/driver/rides/${id}`,
  history: "/driver/history",
  earnings: "/driver/earnings",
  settings: "/driver/settings",
  support: "/driver/support",
  profile: "/driver/profile",
}

export const adminRoutes = {
  dashboard: "/admin/dashboard",
  users: "/admin/users",
  drivers: "/admin/drivers",
  reports: "/admin/reports",
  support: "/admin/support",
  settings: "/admin/settings",
}

export const generalRoutes = {
  home: "/",
  terms: "/terms",
  privacy: "/privacy",
}

export type UserRole = "passenger" | "driver" | "admin"

export const getDashboardByRole = (role: UserRole): string => {
  switch (role) {
    case "passenger":
      return passengerRoutes.dashboard
    case "driver":
      return driverRoutes.dashboard
    case "admin":
      return adminRoutes.dashboard
    default:
      return passengerRoutes.dashboard
  }
}

export const isRouteForRole = (path: string, role: UserRole): boolean => {
  if (role === "passenger") return path.startsWith("/passenger");
  if (role === "driver") return path.startsWith("/driver");
  if (role === "admin") return path.startsWith("/admin");

  return false;
};


