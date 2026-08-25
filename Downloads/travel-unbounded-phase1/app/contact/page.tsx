import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description: "Send a travel enquiry to Travel Unbounded."
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero compact"><div className="container"><span className="eyebrow">Let&apos;s plan</span><h1>Tell us where you want to go.</h1><p>Share a few details and our travel expert will get back to you within 24 hours.</p></div></section>
      <section className="contact-wrap container">
        <div className="contact-info">
          <span className="eyebrow dark">Travel enquiry</span>
          <h2>Your next adventure starts here.</h2>
          <p>No fixed packages, no one-size-fits-all plans. Tell us what you imagine and we&apos;ll shape the journey around you.</p>
          <div className="contact-points"><div><b>Response</b><span>Within 24 hours</span></div><div><b>Support</b><span>24×7 during your journey</span></div><div><b>Offices</b><span>Bengaluru · Kochi · Nairobi</span></div></div>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}