
import React from 'react';
export default function Booking() {
  return (
    <div className="booking-page">
      <h2>Book a Session</h2>
      <form>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="datetime-local" required /><br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}
