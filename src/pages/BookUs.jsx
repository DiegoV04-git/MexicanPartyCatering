import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './BookUs.scss';

const BookUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    guests: "",
    details: "",
    bestTimeToCall: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const autoReplyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTO_REPLY;
    const notifyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 1. Send auto-reply to customer
      await emailjs.send(serviceID, autoReplyTemplate, {
        to_name: form.firstName,
        to_email: form.email,
        service: form.service,
        date: form.date
      }, publicKey);

      // 2. Send notification to you
      await emailjs.send(serviceID, notifyTemplate, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        service: form.service,
        date: form.date,
        guests: form.guests,
        details: form.details,
        bestTimeToCall: form.bestTimeToCall
      }, publicKey);

      alert("Your request was sent successfully!");
      setForm({
        firstName: "", lastName: "", email: "", phone: "",
        service: "", date: "", guests: "", details: "", bestTimeToCall: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="BookUs">
      <h2>Book Us</h2>
      <p>For bookings or inquiries, feel free to reach out.</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="row">
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
        </div>

        <div className="row">
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="row">
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Party">Corporate Party</option>
            <option value="Private Party">Private Party</option>
            <option value="Custom Menu">Custom Menu</option>
          </select>

          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>

        <div className="row">
          <input type="number" name="guests" placeholder="Approx. Guest Count" value={form.guests} onChange={handleChange} required />
          <input type="text" name="bestTimeToCall" placeholder="Best Time to Call" value={form.bestTimeToCall} onChange={handleChange} />
        </div>

        <textarea
          name="details"
          placeholder="Event & Venue Details"
          value={form.details}
          onChange={handleChange}
          rows="5"
        />

        <button type="submit">Send Booking Request</button>
      </form>
    </div>
  );
};

export default BookUs;
