import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/data/destinations";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="destination-card">
      <div className="card-image">
        <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="country-pill">{destination.country}</span>
      </div>
      <div className="card-body">
        <div className="card-title-row">
          <h3>{destination.name}</h3>
          <span className="price">From {destination.price}</span>
        </div>
        <p>{destination.description}</p>
        <Link className="text-link" href={`/contact?destination=${encodeURIComponent(destination.name)}`}>Enquire →</Link>
      </div>
    </article>
  );
}