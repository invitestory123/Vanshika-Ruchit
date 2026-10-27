export const wedding = {
  bride: "Vanshika",
  groom: "Ruchit",
  brideParents: {
    father: "Manoj Agrawal",
    mother: "Varsha Agrawal",
    full: "Manoj & Varsha Agrawal",
  },
  groomParents: {
    father: "Deepak Goyal",
    mother: "Kalpna Goyal",
    full: "Deepak & Kalpna Goyal",
  },
  invitationLine:
    "Together with their families, invite you to join in celebrating the auspicious union and wedding festivities",
  dateLabel: "01 & 02 December 2026 · Gwalior",
  shortDate: "Vanshika & Ruchit",
  countdownTarget: "2026-12-02T19:00:00+05:30",
  story: [
    "Two hearts brought together by destiny, and two loving families united with blessing, affection, and tradition.",
    "As we embark on this sacred journey of love and togetherness, your presence and heartfelt blessings will make our celebrations truly unforgettable.",
  ],
  events: [
    {
      name: "Ring Ceremony",
      date: "01.12.26",
      time: "06:00 PM Onwards",
      venue: "Impril Golf Resort, Gwalior",
      note: "An enchanting evening of exchange of rings, romance, music and celebration.",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Impril+Golf+Resort+Gwalior",
    },
    {
      name: "Haldi Ceremony",
      date: "02.12.26",
      time: "11:00 AM Onwards",
      venue: "Mannat Banquet, Gwalior",
      note: "Splashes of auspicious yellow, flower showers, joyful dhol and carnival cheer.",
      mapsUrl: "https://maps.app.goo.gl/gK5Cfb6YKP9Cn7U96",
    },
    {
      name: "Wedding Ceremony",
      date: "02.12.26",
      time: "07:00 PM Onwards",
      venue: "Mannat Banquet, Gwalior",
      note: "The sacred vows, divine pheras, and auspicious blessings under the stars.",
      mapsUrl: "https://maps.app.goo.gl/gK5Cfb6YKP9Cn7U96",
    },
  ],
  venue: {
    name: "Mannat Palace Resort & Banquet",
    address: "Gwalior, Madhya Pradesh",
    hint: "Conveniently accessible in Gwalior · Valet parking available",
    mapsUrl: "https://maps.app.goo.gl/gK5Cfb6YKP9Cn7U96",
    mapEmbed: "https://www.google.com/maps?q=26.1814633,78.2125473&hl=en&z=15&output=embed",
    resortVenue: {
      name: "Impril Golf Resort",
      address: "Gwalior, Madhya Pradesh",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Impril+Golf+Resort+Gwalior",
    },
  },
  rsvp: [
    {
      role: "RSVP",
      names: "Manish & Priya Agarwal",
    },
    {
      role: "In Loving Memory & Eternal Blessings",
      names: "Late Kiranmal & Mithlesh Agarwal",
    },
  ],
  firm: {
    label: "With Best Compliments",
    name: "Kiran Metal Store",
  },
  closing: "With love, respect, and deep gratitude, we eagerly await your presence.",
} as const;

export function buildIcs() {
  const start = new Date(wedding.countdownTarget);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Vanshika and Ruchit//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@vanshika-ruchit`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Wedding Ceremony of ${wedding.bride} & ${wedding.groom}`,
    `LOCATION:${wedding.venue.name}, ${wedding.venue.address}`,
    "DESCRIPTION:Wedding ceremonies and celebrations. We would love to have you with us.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
