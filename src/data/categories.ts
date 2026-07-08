import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'skip-the-line',
    title: 'Skip-the-Line Tickets',
    metaTitle: 'Skip-the-Line Tickets in New York 2026',
    metaDescription: 'Browse the best skip-the-line tickets in New York. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best skip-the-line tickets in New York, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated skip-the-line tickets in New York, booked direct through GetYourGuide.',
    icon: '🎟️',
    tourSlugs: ['nyc-summit-one-vanderbilt-tickets', '911-memorial-museum-admission-skip-the-ticket-line', 'nyc-edge-immersive-observation-deck-ticket', 'new-york-city-top-of-the-rock-observation-deck-ticket', 'statue-of-liberty-ellis-island-ticket-options-with-ferry', 'american-museum-of-natural-history-super-saver-admission'],
    faqs: [
      { question: 'How do I book skip-the-line tickets in New York?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'guided-tours',
    title: 'Guided Tours',
    metaTitle: 'Guided Tours in New York 2026',
    metaDescription: 'Browse the best guided tours in New York. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best guided tours in New York, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated guided tours in New York, booked direct through GetYourGuide.',
    icon: '🧑‍🏫',
    tourSlugs: ['nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office', 'nyc-manhattan-sightseeing-helicopter-tour', 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus', 'from-nyc-guided-day-trip-to-washington-dc-by-van-or-bus', 'nyc-contrasts-tour-by-harlem-the-bronx-queens-brooklyn', 'from-nyc-overnight-spanish-language-niagara-falls-day-trip', 'nyc-statue-of-liberty-ellis-island-guided-tour-with-ferry', 'new-york-harlem-tour-and-sunday-gospel-concert', 'nyc-speakeasy-drinks-and-prohibition-history-tour'],
    faqs: [
      { question: 'How do I book guided tours in New York?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'food-drink',
    title: 'Food, Wine & Nightlife',
    metaTitle: 'Food, Wine & Nightlife in New York 2026',
    metaDescription: 'Browse the best food, wine & nightlife in New York. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best food, wine & nightlife in New York, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated food, wine & nightlife in New York, booked direct through GetYourGuide.',
    icon: '🍷',
    tourSlugs: ['nyc-summit-one-vanderbilt-tickets', '911-memorial-museum-admission-skip-the-ticket-line', 'nyc-edge-immersive-observation-deck-ticket', 'new-york-city-top-of-the-rock-observation-deck-ticket', 'statue-of-liberty-ellis-island-ticket-options-with-ferry', 'american-museum-of-natural-history-super-saver-admission'],
    faqs: [
      { question: 'How do I book food, wine & nightlife in New York?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'top-attractions',
    title: 'Top Attractions',
    metaTitle: 'Top Attractions in New York 2026',
    metaDescription: 'Browse the best top attractions in New York. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best top attractions in New York, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated top attractions in New York, booked direct through GetYourGuide.',
    icon: '⭐',
    tourSlugs: ['new-york-citypassr-save-up-to-41-at-5-top-attractions', 'nyc-harlem-hallelujah-gospel-wednesday-concert', 'new-york-city-harlem-gospel-live-music-concert', 'nyc-mj-the-musical-on-broadway', 'ny-contrasts-brooklyn-bronx-harlem-queens-coney-island', 'brooklyn-graffiti-lesson'],
    faqs: [
      { question: 'How do I book top attractions in New York?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
