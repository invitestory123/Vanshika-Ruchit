import { useState } from "react";
import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function CelebrationsCard() {
  const [active, setActive] = useState(0);
  const event = wedding.events[active];
  return (
    <section className="celebrations-editorial" aria-labelledby="celebrations-title">
      <Reveal className="celebrations-editorial__heading">
        <p className="section-kicker">Wedding Festivities · Gwalior</p>
        <h2 id="celebrations-title">Ceremonies & Celebrations</h2>
        <p>Join us as we celebrate each cherished milestone of our wedding journey.</p>
      </Reveal>
      <div className="celebration-stage">
        <div className="celebration-stage__wash" aria-hidden />
        <div className="celebration-stage__content" key={event.name}>
          <span className="event-number">0{active + 1}</span>
          <p className="tracking-widest uppercase text-hall-glow">
            {event.date} · {event.time}
          </p>
          <h3 className="gold-text">{event.name}</h3>
          <p className="event-note">{event.note}</p>
          <p className="event-venue">📍 {event.venue}</p>
          {event.mapsUrl && (
            <div className="mt-4">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="press inline-flex items-center gap-2 rounded-full border border-hall-glow/60 bg-hall-deep/60 px-5 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-hall-light hover:border-hall-glow hover:text-white transition-all shadow-md"
              >
                <span>View Venue Map</span>
                <span className="text-[0.7rem]">↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="celebration-selector" role="tablist" aria-label="Wedding celebrations">
        {wedding.events.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
