import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo"><span className="logo-mark">TU</span><span>Travel <b>Unbounded</b></span></div>
          <p>Journeys built around you — blending comfort, culture and raw nature.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/">Destinations</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Enquire</Link>
        </div>
        <div>
          <h4>Reach us</h4>
          <p>Bengaluru · Kochi · Nairobi</p>
          <p>24×7 travel support</p>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Travel Unbounded. Built for the Phase 1 assignment.</div>
    </footer>
  );
}