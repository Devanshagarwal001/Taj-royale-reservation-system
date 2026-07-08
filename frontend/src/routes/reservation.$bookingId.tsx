import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation/$bookingId")({
  component: ReservationPage,
});

function ReservationPage() {
  const { bookingId } = Route.useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f0f0f",
        color: "white",
      }}
    >
      <div>
        <h1>Taj Royale</h1>
        <h2>Reservation Details</h2>

        <p>Booking ID: {bookingId}</p>
      </div>
    </div>
  );
}