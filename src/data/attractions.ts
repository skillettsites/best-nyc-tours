import { FAQ } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
  answerCapsule?: string;
  bodySections?: { heading: string; paragraphs: string[] }[];
  relatedGuides?: { href: string; title: string; blurb: string }[];
}

export const attractions: Attraction[] = [
  {
    slug: 'statue-of-liberty',
    name: 'Statue of Liberty',
    title: 'Statue of Liberty Tickets and Tours',
    metaTitle: 'Statue of Liberty Tickets and Tours 2026',
    metaDescription: 'Statue of Liberty tickets and tours in New York from £20: the official ferry that lands on Liberty Island, guided tours with ferry, and sunset harbour cruises.',
    intro: 'Compare the best Statue of Liberty tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    answerCapsule: 'There are three ways to see the Statue of Liberty and only one of them lands on the island. The official Statue City Cruises ferry from £24 is the only ticket that docks at Liberty Island and includes Ellis Island and its Immigration Museum. A guided tour with ferry from £37 does the same landing with a live guide handling the history and the reservation. A sunset or harbour cruise from £20 sails past the statue for photographs but never docks, which makes it the cheaper, faster option if you only want the view.',
    tourSlugs: ['statue-of-liberty-ellis-island-ticket-options-with-ferry', 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office', 'nyc-statue-of-liberty-sunset-cruise-ticket', 'nyc-statue-of-liberty-ellis-island-guided-tour-with-ferry'],
    bodySections: [
      {
        heading: 'Ferry, cruise or guided tour: how to choose',
        paragraphs: [
          'The most common Statue of Liberty mistake is buying a ticket that never lands. Only the official Statue City Cruises ferry is licensed to dock at Liberty Island, and that ticket also covers Ellis Island and the Immigration Museum, which is the part visitors most often say they did not expect to love. Set aside half a day for it. Everything else on the water, however scenic, stays on the water.',
          'A guided tour with ferry costs more than the ferry-only ticket because you are paying for a live guide across both islands. It is the right choice if the immigration story is the reason you came and you would rather not navigate the islands with an audio guide alone. If you simply want the postcard view and a relaxed evening, a sunset or harbour cruise does it for less money and far less queueing.',
        ],
      },
      {
        heading: 'Timing and the Battery Park queue',
        paragraphs: [
          'Whichever ferry ticket you book, take the earliest sailing you can. Queues at Battery Park build quickly after mid-morning and there is airport-style security screening on top of the boarding line, so the first departures of the day save real time. Pedestal and crown access are limited and sell out weeks ahead, so a standard island landing is what most visitors realistically get.',
          'Cruises that sail past the statue are timed around sunset instead, which is late in summer and much earlier in winter. Check the sunset time for your date and pick the departure that puts you on the water for the 45 minutes either side of it. Bring a layer even in July, because the harbour breeze cools things down fast once the light goes.',
        ],
      },
    ],
    relatedGuides: [
      { href: '/blog/statue-of-liberty-ferry-vs-cruise-tour', title: 'Statue of Liberty tours compared: ferry vs cruise vs guided tour', blurb: 'Which ticket lands on Liberty Island, which one only sails past, and which is right for your trip.' },
      { href: '/blog/best-statue-of-liberty-sunset-cruise-which-to-book', title: 'Best Statue of Liberty sunset cruise: which one to book', blurb: 'The two sunset cruises worth considering, and how to pick between them on price and length.' },
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to skip the line at NYC attractions', blurb: 'Timed entry, the best slot of the day, and the queues actually worth paying to avoid.' },
    ],
    faqs: [
      { question: 'How much are Statue of Liberty tickets?', answer: 'Statue of Liberty tickets and tours in New York start from around £20 for a sunset cruise that sails past the statue. The official ferry that lands on Liberty Island and Ellis Island starts at £24, and a guided tour with ferry at £37. The ranked list shows current prices.' },
      { question: 'What is the best Statue of Liberty tour?', answer: 'The top-rated option is NYC Statue City Cruises: Official Statue of Liberty Tickets, rated 4.6 stars by 20,163 travellers, from £24. It is also the only ticket here that actually docks at Liberty Island.' },
      { question: 'Which Statue of Liberty ticket lands on the island?', answer: 'Only the official Statue City Cruises ferry docks at Liberty Island, and that ticket includes Ellis Island and its Immigration Museum. Sightseeing and sunset cruises sail past the statue for photographs but do not land, so book the official ferry if walking up to the statue matters to you.' },
      { question: 'Can I skip the line at the Statue of Liberty?', answer: 'Booking online secures your sailing time and gets you past the ticket window, but everyone still passes through security screening at Battery Park. The most effective move is booking the earliest departure of the day, before the queues build after mid-morning.' },
    ],
  },
  {
    slug: 'top-of-the-rock',
    name: 'Top of the Rock',
    title: 'Top of the Rock Tickets and Tours',
    metaTitle: 'Top of the Rock Tickets and Tours 2026',
    metaDescription: 'Top of the Rock tickets in New York from £34. Timed entry to the Rockefeller Center observation deck, plus how it compares with Edge and SUMMIT One Vanderbilt.',
    intro: 'Compare the best Top of the Rock tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    answerCapsule: 'Top of the Rock tickets start at £34 for timed entry to the observation deck at Rockefeller Center, rated 4.6 stars by more than 21,000 travellers. It is the deck to pick if you want the classic skyline photograph, because it is the only major New York viewpoint that puts the Empire State Building and Central Park in the same panorama. Sunset slots sell out first, so book as soon as your dates are fixed.',
    tourSlugs: ['new-york-city-top-of-the-rock-observation-deck-ticket'],
    bodySections: [
      {
        heading: 'Which time slot to book',
        paragraphs: [
          'Time of day matters more here than at any other New York attraction, because Top of the Rock is a photography deck first. The slot everyone wants is roughly 45 minutes before sunset: you get the city in daylight, then golden hour on the Empire State Building, then the whole grid lighting up after dark, all on a single ticket. Those slots are the first to go, often days ahead in summer, so book them the moment your dates are confirmed.',
          'If sunset is already gone by the time you book, the first slot of the morning is the next best choice. The deck is quietest then, the light is clean from the east, and you will not be waiting behind three rows of people for a spot at the rail. Midday is the worst combination of crowds and flat overhead light. Whichever slot you take, arrive 10 to 15 minutes before it rather than 40, since early arrivals are usually held anyway.',
        ],
      },
      {
        heading: 'Top of the Rock vs Edge vs SUMMIT in one summary',
        paragraphs: [
          'The three big decks cost roughly the same and do genuinely different jobs. Top of the Rock, 70 floors up at Rockefeller Center, is the composition pick: because you are looking at the Empire State Building rather than standing on it, your photographs have a recognisable centrepiece, and the open-air upper deck has low glass panels with nothing between your camera and the city.',
          'Edge at Hudson Yards from £34 is the highest outdoor sky deck in the Western Hemisphere and leans into the sensation of height, with a glass floor panel and walls that angle outward. It faces west and south, which is dramatic but points away from Midtown\'s most famous towers. SUMMIT One Vanderbilt from £36 is the strangest of the three, a mirrored immersive art environment beside Grand Central that multiplies the skyline in every direction. Choose Top of the Rock for the photograph, Edge for the adrenaline, SUMMIT for the experience.',
        ],
      },
    ],
    relatedGuides: [
      { href: '/blog/best-nyc-observation-deck-top-of-the-rock-vs-edge-vs-summit', title: 'Best NYC observation deck: Top of the Rock vs Edge vs SUMMIT', blurb: 'The full comparison on view, price, crowds and which deck suits which traveller.' },
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to skip the line at NYC attractions', blurb: 'How timed entry works in New York and the quietest slots at each major sight.' },
      { href: '/blog/is-the-new-york-citypass-worth-it', title: 'Is the New York CityPASS worth it?', blurb: 'The maths on bundling Top of the Rock with four more big attractions.' },
    ],
    faqs: [
      { question: 'How much are Top of the Rock tickets?', answer: 'Top of the Rock tickets in New York start from around £34 for timed entry to the observation deck. The ranked list shows current prices and live availability.' },
      { question: 'What is the best Top of the Rock ticket?', answer: 'The top-rated option is New York City: Top of the Rock Observation Deck Ticket, rated 4.6 stars by 21,397 travellers, from £34.' },
      { question: 'What is the best time to visit Top of the Rock?', answer: 'Book a slot about 45 minutes before sunset so a single ticket gives you daylight, golden hour and the lit-up city after dark. Those slots sell out first. If sunset has gone, take the first entry of the morning, which is the quietest time on the deck.' },
      { question: 'Is Top of the Rock better than Edge or SUMMIT?', answer: 'For the classic skyline photograph, yes. Top of the Rock is the only major deck that captures both the Empire State Building and Central Park in one view. Edge is better for the thrill of the highest outdoor deck, and SUMMIT One Vanderbilt for a mirrored, immersive experience.' },
      { question: 'Can I skip the line at Top of the Rock?', answer: 'Yes. A prebooked timed ticket lets you walk past the on-site ticket queue and go straight to entry. Book ahead in peak season, as the best slots sell out.' },
    ],
  },
  {
    slug: 'broadway-shows',
    name: 'Broadway Shows',
    title: 'Broadway Shows Tickets and Tours',
    metaTitle: 'Broadway Shows Tickets and Tours 2026',
    metaDescription: 'Book Broadway show tickets in New York from £54, with instant confirmation and mobile entry through GetYourGuide. Broadway tickets are non-refundable, so pick your date carefully.',
    intro: 'Compare the best Broadway Shows tickets in New York, ranked by verified reviews. Booking online guarantees your seat and the ticket lands on your phone straight away. Note that Broadway tickets are sold on a non-refundable basis, so confirm your date and time before you book. Every option below links straight to GetYourGuide.',
    tourSlugs: ['nyc-mj-the-musical-on-broadway'],
    relatedGuides: [
      { href: '/guides/first-time-in-new-york', title: 'First time in New York: essential tours', blurb: 'What to book first on a first visit, and how to build the rest of the trip around it.' },
      { href: '/guides/best-new-york-tours-2026', title: 'Best New York tours in 2026', blurb: 'The full ranked list of the highest-rated New York experiences, with prices.' },
    ],
    faqs: [
      { question: 'How much are Broadway show tickets?', answer: 'Broadway tickets in New York start from around £54 through GetYourGuide. The ranked list shows current prices and availability.' },
      { question: 'What is the best-rated Broadway show to book?', answer: 'The top-rated option is NYC: MJ the Michael Jackson Musical on Broadway, rated 4.8 stars by 2,377 travellers, from £54.' },
      { question: 'Can I cancel a Broadway ticket?', answer: 'No. Broadway tickets booked through GetYourGuide are non-refundable, so they cannot be cancelled or moved to another date once confirmed. Only book a performance you are certain you can attend.' },
      { question: 'Should I book Broadway tickets in advance?', answer: 'Yes. Popular performances and weekend evenings sell out first, and booking online means the ticket lands on your phone straight away. Because the tickets are non-refundable, confirm your date before you book rather than holding a speculative slot.' },
    ],
  },
  {
    slug: '9-11-memorial',
    name: '9/11 Memorial',
    title: '9/11 Memorial Tickets and Tours',
    metaTitle: '9/11 Memorial Tickets and Tours 2026',
    metaDescription: '9/11 Memorial and Museum tickets in New York from £19. Timed entry that skips the on-site ticket line, with instant confirmation and free cancellation on most.',
    intro: 'Compare the best 9/11 Memorial tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    answerCapsule: 'The outdoor 9/11 Memorial with its twin reflecting pools is free to visit at any time. The museum beneath the plaza is ticketed, runs on timed entry, and starts at £19. A prebooked timed ticket lets you skip the on-site ticket window and go straight to security, and it lets you pick a quieter early slot, which suits the museum far better than a crowded midday visit.',
    tourSlugs: ['911-memorial-museum-admission-skip-the-ticket-line'],
    relatedGuides: [
      { href: '/blog/is-a-9-11-memorial-and-museum-tour-worth-it', title: 'Is a 9/11 Memorial and Museum tour worth it?', blurb: 'What the ticket actually gets you, what to expect emotionally, and how long to allow.' },
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to skip the line at NYC attractions', blurb: 'Why the midday slots sell out here, and which time of day to book instead.' },
    ],
    faqs: [
      { question: 'How much are 9/11 Memorial and Museum tickets?', answer: '9/11 Memorial and Museum tickets in New York start from around £19 for a timed museum entry. The outdoor memorial and its reflecting pools are free to visit.' },
      { question: 'What is the best 9/11 Memorial ticket?', answer: 'The top-rated option is NYC: 9/11 Memorial & Museum Timed Ticket with Tour Options, rated 4.8 stars by 33,819 travellers, from £19.' },
      { question: 'How long should I allow for the 9/11 Museum?', answer: 'Allow at least two to three hours if you want to read the exhibits and absorb the testimony rather than rush. The museum is large and emotionally intense, and a quieter early slot suits it better than a busy midday one.' },
      { question: 'Can I skip the line at the 9/11 Memorial?', answer: 'Yes. The museum runs on timed entry, and a prebooked ticket lets you walk past the on-site ticket queue straight to security. Midday slots sell out first, so book ahead and choose an early time.' },
    ],
  },
  {
    slug: 'summit-one-vanderbilt',
    name: 'Summit One Vanderbilt',
    title: 'Summit One Vanderbilt Tickets and Tours',
    metaTitle: 'Summit One Vanderbilt Tickets and Tours 2026',
    metaDescription: 'SUMMIT One Vanderbilt tickets in New York from £36. Timed entry to the mirrored 93rd-floor experience beside Grand Central, and how it compares to Edge and Top of the Rock.',
    intro: 'Compare the best Summit One Vanderbilt tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    answerCapsule: 'SUMMIT One Vanderbilt tickets start at £36 for timed entry, and the experience holds the highest verified review count of any New York observation deck at 57,616 reviews and a 4.7 rating. Book it if you want an immersive, photo-heavy experience rather than a straightforward viewing platform. If you only want a clean skyline photograph, Top of the Rock from £34 does that job better.',
    tourSlugs: ['nyc-summit-one-vanderbilt-tickets'],
    bodySections: [
      {
        heading: 'What SUMMIT actually is',
        paragraphs: [
          'SUMMIT is not a conventional observation deck. You ascend 93 floors beside Grand Central into a multi-sensory art environment where floor-to-ceiling mirrors multiply the skyline in every direction, one room is filled with reflective silver balloons, and a glass ledge juts out over Madison Avenue. It is the newest of the three big New York decks and by some distance the strangest.',
          'That is why the reviews split the way they do. Visitors who enjoy a photo-led, slightly theatrical experience rate it the highest of the three, and it is the easiest of them to visit with children. Purists who want an unobstructed skyline view sometimes find the mirrors distracting. Go in knowing it is an experience first and a view second, and it rarely disappoints.',
        ],
      },
      {
        heading: 'Booking and the best time to go',
        paragraphs: [
          'SUMMIT runs on timed entry and draws the longest queues of the three decks, because the mirrored rooms hold visitors far longer than a standard platform does. That makes a prebooked slot more valuable here than almost anywhere else in the city, and it is the main reason to reserve rather than turn up.',
          'Sunset slots are the most popular and the first to sell out. If they have gone, take the earliest slot of the day: the rooms are emptiest, which matters more here than at other decks because the mirrors are far more striking without a crowd reflected in them. Wear something you do not mind seeing in every photograph, and note that the mirrored floor sections mean skirts are worth thinking about.',
        ],
      },
    ],
    relatedGuides: [
      { href: '/blog/best-nyc-observation-deck-top-of-the-rock-vs-edge-vs-summit', title: 'Best NYC observation deck: Top of the Rock vs Edge vs SUMMIT', blurb: 'How SUMMIT compares with the other two decks on view, price and crowds.' },
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to skip the line at NYC attractions', blurb: 'Why SUMMIT queues badly and which slot to book instead.' },
      { href: '/blog/is-a-manhattan-helicopter-tour-worth-it', title: 'Is a Manhattan helicopter tour worth it?', blurb: 'The cheaper ways to get an aerial view of New York, deck by deck.' },
    ],
    faqs: [
      { question: 'How much are SUMMIT One Vanderbilt tickets?', answer: 'SUMMIT One Vanderbilt tickets in New York start from around £36 for timed entry. The ranked list shows current prices and live availability.' },
      { question: 'What is the best SUMMIT One Vanderbilt ticket?', answer: 'The top-rated option is NYC: SUMMIT One Vanderbilt Tickets, rated 4.7 stars by 57,616 travellers, from £36. That is the highest verified review count of any New York observation deck.' },
      { question: 'Is SUMMIT One Vanderbilt worth it?', answer: 'It is if you want an immersive, mirrored, photo-heavy experience rather than a plain viewing platform, and it is the most family-friendly of the three big decks. If you want a clean classic skyline photograph, Top of the Rock does that better for a little less.' },
      { question: 'Can I skip the line at SUMMIT One Vanderbilt?', answer: 'Yes. SUMMIT runs on timed entry and draws the longest queues of the three decks, so a prebooked slot matters more here than almost anywhere else. Sunset slots sell out first.' },
    ],
  },
  {
    slug: 'edge-observation-deck',
    name: 'Edge Observation Deck',
    title: 'Edge Observation Deck Tickets and Tours',
    metaTitle: 'Edge Observation Deck Tickets and Tours 2026',
    metaDescription: 'Edge at Hudson Yards tickets in New York from £34. Timed entry to the highest outdoor sky deck in the Western Hemisphere, with free cancellation on most options.',
    intro: 'Compare the best Edge Observation Deck tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    answerCapsule: 'Edge at Hudson Yards tickets start at £34 for timed entry, rated 4.6 stars by more than 22,000 travellers. It is the highest outdoor sky deck in the Western Hemisphere, with a glass floor panel and walls that angle outward over the street. Book it for the sensation of height rather than the classic Midtown photograph, and skip it if vertigo is a problem.',
    tourSlugs: ['nyc-edge-immersive-observation-deck-ticket'],
    relatedGuides: [
      { href: '/blog/best-nyc-observation-deck-top-of-the-rock-vs-edge-vs-summit', title: 'Best NYC observation deck: Top of the Rock vs Edge vs SUMMIT', blurb: 'Which of the three decks is worth your money, and what each one is actually for.' },
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to skip the line at NYC attractions', blurb: 'Timed entry, the quietest slots, and when Edge queues hardest.' },
    ],
    faqs: [
      { question: 'How much are Edge Observation Deck tickets?', answer: 'Edge tickets in New York start from around £34 for timed entry to the Hudson Yards sky deck. The ranked list shows current prices and availability.' },
      { question: 'What is the best Edge Observation Deck ticket?', answer: 'The top-rated option is NYC: Edge Immersive Observation Deck Ticket, rated 4.6 stars by 22,661 travellers, from £34.' },
      { question: 'Is Edge better than Top of the Rock?', answer: 'It depends what you want. Edge is the highest outdoor deck and delivers the biggest sense of height, with a glass floor and angled walls. Top of the Rock has the better classic skyline photograph because it faces the Empire State Building and Central Park.' },
      { question: 'Can I skip the line at Edge?', answer: 'Yes. A prebooked timed ticket lets you bypass the on-site ticket queue. Edge moves quickly on a weekday morning but queues badly at weekends and around sunset, so book the slot in advance.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
