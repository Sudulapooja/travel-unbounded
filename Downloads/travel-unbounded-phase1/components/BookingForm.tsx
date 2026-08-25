"use client";

import { FormEvent, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function BookingForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);
    const travelDate = String(data.get("travelDate") || "");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!phone || !isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number with country code.");
      return;
    }
    if (!travelDate || new Date(`${travelDate}T00:00:00`) <= today) {
      setError("Date of travel must be a future date.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          contactNumber: phone,
          email: data.get("email"),
          travelDate,
          numberOfPeople: Number(data.get("numberOfPeople")),
          hotelCategory: data.get("hotelCategory"),
          children: Number(data.get("children") || 0)
        })
      });

      const text = await response.text();
const result = text ? JSON.parse(text) : {};

if (!response.ok) {
  throw new Error(result.error || result.message || `Server returned ${response.status}`);
}
      form.reset();
      setPhone("");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to submit enquiry.");
    }
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input name="fullName" required placeholder="Your full name" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label className="full">Contact Number
          <PhoneInput defaultCountry="IN" international value={phone} onChange={(v) => setPhone(v || "")} placeholder="Enter phone number" />
        </label>
        <label>Date of Travel<input name="travelDate" type="date" required min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} /></label>
        <label>Number of People<input name="numberOfPeople" type="number" min="1" defaultValue="2" required /></label>
        <label>Hotel Category<select name="hotelCategory" defaultValue="Deluxe"><option>Standard</option><option>Deluxe</option><option>Luxury</option></select></label>
        <label>Number of Children<input name="children" type="number" min="0" defaultValue="0" /></label>
      </div>

      {status === "success" && <div className="notice success">Thank you! Our travel expert will contact you within 24 hours.</div>}
      {(status === "error" || error) && <div className="notice error">{error}</div>}

      <button className="primary-btn submit-btn" disabled={status === "loading"}>
        {status === "loading" ? "Sending enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}