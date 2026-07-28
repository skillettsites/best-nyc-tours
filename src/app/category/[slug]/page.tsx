import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToursByCategory, getTourBySlug } from '@/data/tours';
import { categorySchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY } from '@/lib/constants';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import FAQ from '@/components/ui/FAQ';

const categorySeoContent: Record<string, { paragraphs: string[]; relatedGuides: { href: string; title: string }[] }> = {
  'skip-the-line': {
    paragraphs: [
      'Queues are the single biggest time sink on a New York trip, and they are not spread evenly. The worst of them build at the 9/11 Memorial and Museum, where midday timed slots sell out and the walk-up ticket window backs up across the plaza, and at the three observation decks. SUMMIT One Vanderbilt draws the longest lines of the three because its mirrored rooms hold visitors far longer than a standard viewing platform. Top of the Rock bunches hard in the hour before sunset, which is exactly the slot everyone wants. Edge at Hudson Yards moves faster on a weekday morning but queues badly at weekends. Down at Battery Park, the Statue of Liberty ferry has a queue and a full airport-style security screening on top of it, so the earliest sailing of the day is worth real money in saved time.',
      'Almost every one of these attractions now runs on timed entry rather than open admission, and that changes what a skip-the-line ticket actually does. You are not buying a fast pass that lets you push past people. You are buying a reserved slot plus the right to bypass the on-site ticket window and go straight to the entry or security line. That is where the hour goes. Book online, pick your time, keep the mobile ticket on your phone, and arrive 10 to 15 minutes before the slot rather than 40, because most venues hold very early arrivals anyway.',
      'The other decision is a ticket or a tour. A skip-the-line ticket is the cheaper, faster option and it suits the observation decks, where the view is the whole point and a guide adds little. A guided tour costs more but the guide handles group entry for you and fills in the story, which is worth it at places where the context is the reason you came: the 9/11 Museum, Ellis Island and the Statue of Liberty. On the harbour, the split is even sharper. Only the official Statue City Cruises ferry from £24 actually lands on Liberty Island. Sightseeing and sunset cruises sail past for photographs but never dock, so choose deliberately rather than by price.',
      'If your list runs to four or more paid sights, do the arithmetic on a multi-attraction pass before you buy tickets one at a time. The New York CityPASS from £123 bundles five of the big-ticket attractions at up to 42% off and still lets you reserve timed slots at each one, so you keep the queue-skipping benefit and pay less for it. If you are only doing one or two things, individual timed tickets are cheaper and simpler. Whichever route you take, most of the options on this page include free cancellation up to 24 hours before, so there is no penalty for locking in the best time slot as soon as your dates are fixed.',
    ],
    relatedGuides: [
      { href: '/blog/how-to-skip-the-line-at-nyc-attractions', title: 'How to Skip the Line at NYC Attractions' },
      { href: '/blog/best-nyc-observation-deck-top-of-the-rock-vs-edge-vs-summit', title: 'Best NYC Observation Deck: Top of the Rock vs Edge vs SUMMIT' },
      { href: '/blog/is-the-new-york-citypass-worth-it', title: 'Is the New York CityPASS Worth It?' },
      { href: '/blog/statue-of-liberty-ferry-vs-cruise-tour', title: 'Statue of Liberty Ferry vs Cruise Tour: Which Is Worth It?' },
      { href: '/guides/skip-the-line-new-york', title: 'How to Skip the Line in New York: full guide' },
    ],
  },
  'food-drink': {
    paragraphs: [
      'New York food tours divide neatly into walking tours and floating ones. The walks put you in one neighbourhood and feed you through it, which is why the Chinatown and Little Italy tour from £62 rates so well: two of the most distinctive eating districts in Manhattan sit directly beside each other, so a single lunchtime walk covers dumplings, bakery counters and old Italian delis without a subway ride in between. Go hungry and skip breakfast.',
      'For a drink rather than a meal, the Speakeasy Drinks and Prohibition History tour from £30 is the best-value evening on this page. It works because the history is real and specific to the city, and because the bars it visits are places most visitors would walk straight past. It is a good first-night option when you want something social that does not demand a full evening.',
      'The cruises are a different proposition. A City Cruises brunch, lunch or dinner sailing from £84 or the gourmet dinner cruise with live music from £121 buys you dinner and the Lower Manhattan skyline in the same two hours. The food is a decent hotel-dinner standard rather than a destination restaurant, and that is the honest trade. You are paying for the view and the occasion, so book a sailing timed close to sunset and bring a layer for the deck, because the harbour breeze bites once the light goes.',
    ],
    relatedGuides: [
      { href: '/guides/best-guided-tours-in-new-york', title: 'Best Guided Tours in New York' },
      { href: '/guides/new-york-tours-on-a-budget', title: 'New York on a Budget: Cheapest Tours' },
      { href: '/blog/best-statue-of-liberty-sunset-cruise-which-to-book', title: 'Best Statue of Liberty Sunset Cruise: Which One to Book' },
    ],
  },
  'guided-tours': {
    paragraphs: [
      'A guided tour earns its price in New York when it takes you somewhere you would not confidently go alone, or explains something you could not read off a plaque. The Contrasts tour of Harlem, the Bronx, Queens and Brooklyn from £33 is the clearest example on this page. Most first-time visitors never leave Manhattan, and a guide who lives in those boroughs turns a bus ride into the most memorable half-day of the trip.',
      'For a first morning, the open-top hop-on hop-off bus from £34 is the traditional orientation lap, with the honest caveat that Midtown traffic is slow and the bus is only worth it if comfort and an elevated view matter more to you than speed. Confident walkers usually cover the same ground faster on foot.',
      'The big day trips are the other reason to book a guide. Washington DC from £85 and Niagara Falls from £127 are both long days with a lot of driving, and the value is in someone else handling the logistics. On the water, the Sunset and Harbor Lights cruise from £34 pairs golden hour with the skyline, and the Statue of Liberty and Ellis Island guided tour with ferry from £37 adds a live guide to the island landing, which is worth the premium if the immigration history is your reason for going.',
    ],
    relatedGuides: [
      { href: '/guides/best-guided-tours-in-new-york', title: 'Best Guided Tours in New York' },
      { href: '/guides/best-new-york-tours-2026', title: 'Best New York Tours in 2026: the full ranked list' },
      { href: '/blog/is-a-nyc-hop-on-hop-off-bus-worth-it', title: 'Is a NYC Hop-on Hop-off Bus Worth It?' },
    ],
  },
  'top-attractions': {
    paragraphs: [
      'The famous New York attractions are the ones that sell out first and cost the most, which is why the pass question comes up before anything else. The New York CityPASS from £123 covers five of the marquee sights at up to 42% off, and it pays for itself only if you genuinely visit four or five of them. If your trip leans toward neighbourhoods, parks and restaurants, buy individual timed tickets for the two or three things you actually want and skip the pass.',
      'Beyond the pass, the highest-rated experiences here are not the obvious ones. A Harlem gospel concert from £19 rates as highly as attractions costing five times more, MJ the Musical on Broadway from £53 is the best-reviewed show in the list, and a Brooklyn graffiti workshop with a local artist from £34 is the rare New York activity where you make something rather than look at it.',
      'Whatever you pick, book the timed slot before you travel rather than on the day. The classic sights run on reserved entry, the sunset and evening slots go first, and most options here include free cancellation up to 24 hours before, so an early booking costs you nothing but secures the time you actually want.',
    ],
    relatedGuides: [
      { href: '/blog/is-the-new-york-citypass-worth-it', title: 'Is the New York CityPASS Worth It?' },
      { href: '/guides/first-time-in-new-york', title: 'First Time in New York: Essential Tours' },
      { href: '/guides/best-new-york-tours-2026', title: 'Best New York Tours in 2026: the full ranked list' },
    ],
  },
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  // Prefer the curated tourSlugs list. The legacy category-tag lookup is kept as a
  // fallback, but the tag names in tours.ts do not match every category slug, which
  // previously left skip-the-line and food-drink rendering zero tour cards.
  const curatedTours = category.tourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const categoryTours = curatedTours.length > 0 ? curatedTours : getToursByCategory(category.slug);

  return (
    <>
      {[
        categorySchema(category),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: category.title, url: `${SITE_URL}/category/${category.slug}` },
        ]),
        faqSchema(category.faqs),
      ].filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category.title },
          ]}
        />

        <AffiliateDisclosure />

        <div className="mb-8">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.title}</h1>
          {category.answerCapsule && (
            <div className="mt-4 max-w-3xl rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="text-base text-gray-800 leading-relaxed">{category.answerCapsule}</p>
            </div>
          )}
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <FAQ faqs={category.faqs} />

        {/* Other Categories */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.slug !== category.slug).map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-green-300 hover:shadow-sm transition-all duration-300"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:border-green-300 hover:shadow-sm transition-all duration-300"
            >
              All {SITE_CITY} Tours
            </Link>
          </div>
        </section>

        {/* SEO Content Section */}
        {categorySeoContent[category.slug] && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {category.title} in {SITE_CITY}</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              {categorySeoContent[category.slug].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {categorySeoContent[category.slug].relatedGuides.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-2">
                  {categorySeoContent[category.slug].relatedGuides.map((guide) => (
                    <li key={guide.href}>
                      <Link href={guide.href} className="text-blue-900 hover:underline">
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides" className="text-blue-900 hover:underline font-medium">Travel Guides</Link>
          </div>
        </section>
      </div>
    </>
  );
}
