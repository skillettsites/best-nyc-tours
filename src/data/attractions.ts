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
}

export const attractions: Attraction[] = [
  {
    slug: 'statue-of-liberty',
    name: 'Statue of Liberty',
    title: 'Statue of Liberty Tickets and Tours',
    metaTitle: 'Statue of Liberty Tickets and Tours 2026',
    metaDescription: 'Book Statue of Liberty tickets and tours in New York. 4 top-rated options from £20, with skip-the-line where available, instant confirmation and free cance',
    intro: 'Compare the best Statue of Liberty tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['statue-of-liberty-ellis-island-ticket-options-with-ferry', 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office', 'nyc-statue-of-liberty-sunset-cruise-ticket', 'nyc-statue-of-liberty-ellis-island-guided-tour-with-ferry'],
    faqs: [
      { question: 'How much are Statue of Liberty tickets?', answer: 'Statue of Liberty tickets and tours in New York start from around £20. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Statue of Liberty tour?', answer: 'The top-rated option is NYC Statue City Cruises: Official Statue of Libe, rated 4.6 stars by 19,908 travellers, from £24.' },
      { question: 'Can I skip the line at Statue of Liberty?', answer: 'Yes, many Statue of Liberty options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'top-of-the-rock',
    name: 'Top of the Rock',
    title: 'Top of the Rock Tickets and Tours',
    metaTitle: 'Top of the Rock Tickets and Tours 2026',
    metaDescription: 'Book Top of the Rock tickets and tours in New York. 1 top-rated options from £34, with skip-the-line where available, instant confirmation and free cancell',
    intro: 'Compare the best Top of the Rock tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['new-york-city-top-of-the-rock-observation-deck-ticket'],
    faqs: [
      { question: 'How much are Top of the Rock tickets?', answer: 'Top of the Rock tickets and tours in New York start from around £34. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Top of the Rock tour?', answer: 'The top-rated option is New York City: Top of the Rock Observation Deck, rated 4.6 stars by 21,145 travellers, from £34.' },
      { question: 'Can I skip the line at Top of the Rock?', answer: 'Yes, many Top of the Rock options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'broadway-shows',
    name: 'Broadway Shows',
    title: 'Broadway Shows Tickets and Tours',
    metaTitle: 'Broadway Shows Tickets and Tours 2026',
    metaDescription: 'Book Broadway Shows tickets and tours in New York. 1 top-rated options from £53, with skip-the-line where available, instant confirmation and free cancella',
    intro: 'Compare the best Broadway Shows tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['nyc-mj-the-musical-on-broadway'],
    faqs: [
      { question: 'How much are Broadway Shows tickets?', answer: 'Broadway Shows tickets and tours in New York start from around £53. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Broadway Shows tour?', answer: 'The top-rated option is NYC: MJ the Michael Jackson Musical on Broadway, rated 4.8 stars by 2,268 travellers, from £53.' },
      { question: 'Can I skip the line at Broadway Shows?', answer: 'Yes, many Broadway Shows options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: '9-11-memorial',
    name: '9/11 Memorial',
    title: '9/11 Memorial Tickets and Tours',
    metaTitle: '9/11 Memorial Tickets and Tours 2026',
    metaDescription: 'Book 9/11 Memorial tickets and tours in New York. 1 top-rated options from £19, with skip-the-line where available, instant confirmation and free cancellat',
    intro: 'Compare the best 9/11 Memorial tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['911-memorial-museum-admission-skip-the-ticket-line'],
    faqs: [
      { question: 'How much are 9/11 Memorial tickets?', answer: '9/11 Memorial tickets and tours in New York start from around £19. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best 9/11 Memorial tour?', answer: 'The top-rated option is NYC: 9/11 Memorial & Museum Timed Ticket with To, rated 4.8 stars by 33,573 travellers, from £19.' },
      { question: 'Can I skip the line at 9/11 Memorial?', answer: 'Yes, many 9/11 Memorial options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'summit-one-vanderbilt',
    name: 'Summit One Vanderbilt',
    title: 'Summit One Vanderbilt Tickets and Tours',
    metaTitle: 'Summit One Vanderbilt Tickets and Tours 2026',
    metaDescription: 'Book Summit One Vanderbilt tickets and tours in New York. 1 top-rated options from £36, with skip-the-line where available, instant confirmation and free c',
    intro: 'Compare the best Summit One Vanderbilt tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['nyc-summit-one-vanderbilt-tickets'],
    faqs: [
      { question: 'How much are Summit One Vanderbilt tickets?', answer: 'Summit One Vanderbilt tickets and tours in New York start from around £36. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Summit One Vanderbilt tour?', answer: 'The top-rated option is NYC: SUMMIT One Vanderbilt Tickets, rated 4.7 stars by 56,915 travellers, from £36.' },
      { question: 'Can I skip the line at Summit One Vanderbilt?', answer: 'Yes, many Summit One Vanderbilt options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'edge-observation-deck',
    name: 'Edge Observation Deck',
    title: 'Edge Observation Deck Tickets and Tours',
    metaTitle: 'Edge Observation Deck Tickets and Tours 2026',
    metaDescription: 'Book Edge Observation Deck tickets and tours in New York. 1 top-rated options from £36, with skip-the-line where available, instant confirmation and free c',
    intro: 'Compare the best Edge Observation Deck tickets and guided tours in New York, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['nyc-edge-immersive-observation-deck-ticket'],
    faqs: [
      { question: 'How much are Edge Observation Deck tickets?', answer: 'Edge Observation Deck tickets and tours in New York start from around £36. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Edge Observation Deck tour?', answer: 'The top-rated option is NYC: Edge Immersive Observation Deck Ticket, rated 4.6 stars by 22,519 travellers, from £36.' },
      { question: 'Can I skip the line at Edge Observation Deck?', answer: 'Yes, many Edge Observation Deck options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
