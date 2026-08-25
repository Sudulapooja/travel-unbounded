export const metadata = {
  title: "About | Travel Unbounded",
  description: "The story, offices and values behind Travel Unbounded."
};

const offices = [
  ["Bengaluru — Headquarters", "541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
  ["Kochi — Kerala Office", "LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  ["Nairobi — Kenya Office", "Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950", "Postal Code 00100, Kenya"]
];

export default function About() {
  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow">Our story</span><h1>Travel is personal.</h1><p>We build journeys around the people taking them.</p></div></section>
      <section className="story container">
        <div><span className="eyebrow dark">India&apos;s Most Trusted Experiential Travel Experts</span><h2>Not a catalogue. A journey made for you.</h2></div>
        <div className="story-copy">
          <p>Travel Unbounded was born from a simple belief — that the best journeys aren&apos;t sold from a catalogue. They&apos;re built around the people taking them.</p>
          <p>Headquartered in Bangalore with offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.</p>
          <p>From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.</p>
        </div>
      </section>

      <section className="offices">
        <div className="container"><span className="eyebrow dark">Find us</span><h2>Our offices</h2>
          <div className="office-grid">{offices.map(([name, a, b, c]) => <div className="office-card" key={name}><span className="pin">●</span><h3>{name}</h3><p>{a}<br/>{b}<br/>{c}</p></div>)}</div>
        </div>
      </section>

      <section className="values container"><span className="eyebrow dark">Our promise</span><h2>Why choose us?</h2>
        <div className="why-grid">
          {[
            ["01","Personally-vetted","We test the stays, routes and experiences before recommending them."],
            ["02","Local connections","People on the ground make the difference between a trip and a story."],
            ["03","Custom itineraries","We shape the days around your interests, comfort and pace."],
            ["04","24×7 support","From first call to return flight, we stay close."]
          ].map(([n,t,d]) => <div className="why-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
    </main>
  );
}