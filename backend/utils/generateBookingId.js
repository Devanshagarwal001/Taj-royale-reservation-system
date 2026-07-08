function generateBookingId() {
  return (
    "MA-" +
    Date.now().toString(36).toUpperCase().slice(-6) +
    "-" +
    Math.random().toString(36).slice(2, 5).toUpperCase()
  );
}

module.exports = generateBookingId;
