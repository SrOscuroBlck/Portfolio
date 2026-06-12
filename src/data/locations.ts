export interface MapLocation {
  /** Stable id used to wire chips, markers, and the info card together. */
  id: string;
  city: string;
  country: string;
  /** Latitude in degrees, north positive. */
  lat: number;
  /** Longitude in degrees, east positive. */
  lon: number;
  story: string;
  /** Anchor of the related experience entry (see experience.ts), if any. */
  relatedAnchor?: string;
  /** Label for the deep-link to the related experience entry. */
  relatedLabel?: string;
}

export const LOCATIONS: MapLocation[] = [
  {
    id: "cali",
    city: "Cali",
    country: "Colombia",
    lat: 3.4516,
    lon: -76.532,
    story:
      "Home base — the city where I live and study, and where my life is unfolding today.",
    relatedAnchor: "bast",
    relatedLabel: "BAST Automation",
  },
  {
    id: "miami",
    city: "Miami",
    country: "United States",
    lat: 25.7617,
    lon: -80.1918,
    story:
      "I've worked with multiple US companies, among them Priver Group, who trusted my skills from the very start of my career. I'm grateful for everything I learned there — Golang, GraphQL, and plenty of other technologies.",
    relatedAnchor: "priver",
    relatedLabel: "Priver Group",
  },
  {
    id: "quebec",
    city: "Quebec City",
    country: "Canada",
    lat: 46.8139,
    lon: -71.208,
    story:
      "My very first job was in Canada with Intellsis. They believed in me, always gave me the best tools to build their software, and trusted me with a huge project I really enjoyed — the one that made me understand I was made for this.",
    relatedAnchor: "intellsis",
    relatedLabel: "Intellsis",
  },
  {
    id: "sault-ste-marie",
    city: "Sault Ste. Marie",
    country: "Canada",
    lat: 46.5219,
    lon: -84.3461,
    story:
      "Where I lived and studied the last semester of my degree — proving I could work at an international level with teams from other countries and adapt to change fast. I also started writing papers with Canadian institutions like Sault College and Algoma University.",
  },
  {
    id: "frankfurt",
    city: "Frankfurt",
    country: "Germany",
    lat: 50.1109,
    lon: 8.6821,
    story:
      "My current company is here. I appreciate all the experience with event-driven architecture and the good work we've done — they grow my developer experience every day, giving me room to learn new things and adapt to new technologies.",
    relatedAnchor: "bookhub",
    relatedLabel: "BookHub",
  },
];
