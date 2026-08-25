import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">TU</span>
          <span>Travel <b>Unbounded</b></span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/contact">Plan a Trip</Link>
      </div>
    </header>
  );
}