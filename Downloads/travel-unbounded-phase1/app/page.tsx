import Link from "next/link";
import Image from "next/image";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description: "Discover personally-vetted journeys across India and the world."
};

export default function Home() {
  const india = destinations.filter(d => d.category === "india");
  const international = destinations.filter(d => d.category === "international");

  return (
    <main>
      <section className="hero">
        <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=90" alt="Mountain travel landscape" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">Travel Unbounded</span>
          <h1>India&apos;s Most Trusted <em>Experiential</em> Travel Experts</h1>
          <p>Journeys shaped around you — from quiet backwaters to wild African safaris.</p>
          <Link href="/contact" className="primary-btn">Plan Your Trip <span>→</span></Link>
        </div>
      </section>

      <section className="intro container">
        <span className="eyebrow dark">Go beyond the itinerary</span>
        <h2>Journeys with a story to tell.</h2>
        <p>Every destination, resort and experience we recommend has been personally explored by our team. Choose a starting point, then let us make it yours.</p>
      </section>

      <section className="dest-section container">
        <div className="section-heading"><div><span className="eyebrow dark">Explore India</span><h2>Made in India</h2></div><Link href="/contact" className="outline-btn">Plan custom trip →</Link></div>
        <div className="destination-grid">{india.map(d => <DestinationCard key={d.id} destination={d} />)}</div>
      </section>

      <section className="dest-section international">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow dark">Go farther</span><h2>Across the world</h2></div><Link href="/contact" className="outline-btn">Tell us your dream →</Link></div>
          <div className="destination-grid">{international.map(d => <DestinationCard key={d.id} destination={d} />)}</div>
        </div>
      </section>

      <section className="why container">
        <span className="eyebrow dark">Why Travel Unbounded</span>
        <h2>Travel thoughtfully. Travel freely.</h2>
        <div className="why-grid">
          {[
            ["01", "Personally-vetted experiences", "We recommend places our team has actually experienced."],
            ["02", "Local guides", "Trusted local experts bring every destination to life."],
            ["03", "Custom itineraries", "Your pace, your interests, your kind of adventure."],
            ["04", "24×7 support", "A real travel expert is there when you need us."]
          ].map(([n, t, d]) => <div className="why-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div><span className="eyebrow">Ready when you are</span><h2>Where will your story begin?</h2></div>
          <Link href="/contact" className="primary-btn light">Start planning →</Link>
        </div>
      </section>
    </main>
  );
}