export type Reservation = {
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


const LAST = "maison_last_reservation";

export function setLastReservation(r: Reservation) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LAST, JSON.stringify(r));
}

export function getLastReservation(): Reservation | null {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(localStorage.getItem(LAST) || "null"); } catch { return null; }
}
