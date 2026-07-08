// const API_BASE = import.meta.env.VITE_API_URL || "";

// export type ApiError = {
//   success: false;
//   message: string;
// };

// export type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// export type Reservation = {
//   _id?: string;
//   bookingId: string;
//   name: string;
//   email: string;
//   phone: string;
//   date: string;
//   time: string;
//   guests: number;
//   occasion: string;
//   seating: "indoor" | "outdoor";
//   specialRequest?: string;
//   tableId: string;
//   status: "CONFIRMED" | "CANCELLED";
//   createdAt: string;
// };

// export type TableCell = {
//   id: string;
//   seats: 2 | 4 | 6 | 8;
//   status: "available" | "reserved";
//   x: number;
//   y: number;
//   zone: "indoor" | "outdoor";
// };

// type RequestOptions = {
//   method?: string;
//   body?: unknown;
//   auth?: boolean;
// };

// async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
//   const headers: Record<string, string> = {
//     "Content-Type": "application/json",
//   };

//   if (options.auth !== false) {
//     const token = localStorage.getItem("maison_token");
//     if (token) headers.Authorization = `Bearer ${token}`;
//   }

//   const res = await fetch(`${API_BASE}${path}`, {
//     method: options.method || "GET",
//     headers,
//     credentials: "include",
//     body: options.body ? JSON.stringify(options.body) : undefined,
//   });

//   const data = await res.json().catch(() => ({}));

//   if (!res.ok) {
//     throw new Error(data.message || `Request failed (${res.status})`);
//   }

//   return data;
// }

// export const api = {
//   health: () => request<{ success: boolean; message: string }>("/api/health"),

//   register: (body: { name: string; email: string; password: string }) =>
//     request<{ success: boolean; token: string; data: User }>("/api/auth/register", {
//       method: "POST",
//       body,
//       auth: false,
//     }),

//   login: (body: { email: string; password: string }) =>
//     request<{ success: boolean; token: string; data: User }>("/api/auth/login", {
//       method: "POST",
//       body,
//       auth: false,
//     }),

//   logout: () =>
//     request<{ success: boolean }>("/api/auth/logout", { method: "POST" }),

//   getMe: () => request<{ success: boolean; data: User }>("/api/auth/me"),

//   getTables: (params: { date: string; time: string; zone?: string }) => {
//     const qs = new URLSearchParams(params as Record<string, string>);
//     return request<{ success: boolean; data: TableCell[] }>(`/api/tables?${qs}`);
//   },

//   getTableStats: () =>
//     request<{
//       success: boolean;
//       data: { total: number; reserved: number; available: number; todayReservations: number };
//     }>("/api/tables/stats"),

//   createReservation: (body: Omit<Reservation, "bookingId" | "status" | "createdAt">) =>
//     request<{ success: boolean; data: Reservation }>("/api/reservations", {
//       method: "POST",
//       body,
//     }),

//   getMyReservations: () =>
//     request<{ success: boolean; data: Reservation[] }>("/api/reservations"),

//   getAllReservations: () =>
//     request<{ success: boolean; data: Reservation[] }>("/api/reservations/all"),

//   getReservation: (bookingId: string) =>
//     request<{ success: boolean; data: Reservation }>(`/api/reservations/${bookingId}`),

//   cancelReservation: (bookingId: string) =>
//     request<{ success: boolean; data: Reservation }>(`/api/reservations/${bookingId}`, {
//       method: "PATCH",
//       body: { status: "CANCELLED" },
//     }),
// };
// // 
const API_BASE = import.meta.env.VITE_API_URL || "";

export type ApiError = {
  success: false;
  message: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Reservation = {
  _id?: string;
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  seating: "indoor" | "outdoor";
  specialRequest?: string;
  tableId: string;
  status: "CONFIRMED" | "CANCELLED";
  createdAt: string;
};

export type TableCell = {
  id: string;
  seats: 2 | 4 | 6 | 8;
  status: "available" | "reserved";
  x: number;
  y: number;
  zone: "indoor" | "outdoor";
};

type RequestOptions = {
  method?: string;
  body?: unknown;
  auth?: boolean;
};

async function request<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (options.auth !== false) {
    const token = localStorage.getItem("maison_token");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers,
    credentials: "include",
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }

  return data;
}

export const api = {
  // Health
  health: () =>
    request<{ success: boolean; message: string }>("/api/health"),

  // Register
  register: (body: {
    name: string;
    email: string;
    password: string;
  }) =>
    request<{ success: boolean; token: string; data: User }>(
      "/api/auth/register",
      {
        method: "POST",
        body,
        auth: false,
      }
    ),

  // Login
  login: (body: {
    email: string;
    password: string;
  }) =>
    request<{ success: boolean; token: string; data: User }>(
      "/api/auth/login",
      {
        method: "POST",
        body,
        auth: false,
      }
    ),

  // ✅ Google Login
  googleLogin: (credential: string) =>
    request<{ success: boolean; token: string; data: User }>(
      "/api/auth/google",
      {
        method: "POST",
        body: { credential },
        auth: false,
      }
    ),

  // Logout
  logout: () =>
    request<{ success: boolean }>("/api/auth/logout", {
      method: "POST",
    }),

  // Current User
  getMe: () =>
    request<{ success: boolean; data: User }>("/api/auth/me"),

  // Tables
  getTables: (params: {
    date: string;
    time: string;
    zone?: string;
  }) => {
    const qs = new URLSearchParams(params as Record<string, string>);
    return request<{ success: boolean; data: TableCell[] }>(
      `/api/tables?${qs}`
    );
  },

  // Table Stats
  getTableStats: () =>
    request<{
      success: boolean;
      data: {
        total: number;
        reserved: number;
        available: number;
        todayReservations: number;
      };
    }>("/api/tables/stats"),

  // Create Reservation
  createReservation: (
    body: Omit<Reservation, "bookingId" | "status" | "createdAt">
  ) =>
    request<{ success: boolean; data: Reservation }>(
      "/api/reservations",
      {
        method: "POST",
        body,
      }
    ),

  // My Reservations
  getMyReservations: () =>
    request<{ success: boolean; data: Reservation[] }>(
      "/api/reservations"
    ),

  // All Reservations
  getAllReservations: () =>
    request<{ success: boolean; data: Reservation[] }>(
      "/api/reservations/all"
    ),

  // Reservation Details
  getReservation: (bookingId: string) =>
    request<{ success: boolean; data: Reservation }>(
      `/api/reservations/${bookingId}`
    ),

  // Cancel Reservation
  cancelReservation: (bookingId: string) =>
    request<{ success: boolean; data: Reservation }>(
      `/api/reservations/${bookingId}`,
      {
        method: "PATCH",
        body: {
          status: "CANCELLED",
        },
      }
    ),
};