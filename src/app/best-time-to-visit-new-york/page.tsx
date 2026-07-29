import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { hubMonths } from '@/data/nyc-months';
import { nycClimate, MONTH_ORDER } from '@/data/nyc-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  SEASON_BASE_YEAR,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  TOUR_DATA_CHECKED,
  HUB_PATH,
  CLIMATE_SOURCE,
  DAYLIGHT_SOURCE,
  CRUISE_SOURCE,
  LIBERTY_SOURCE,
  EDGE_SOURCE,
} from '@/lib/season';

const TITLE = `Best Time to Visit New York: Month by Month Guide ${SEASON_BASE_YEAR} to ${SEASON_BASE_YEAR + 1}`;
const DESCRIPTION =
  'The best time to visit New York, month by month, with NOAA climate normals, snowfall, daylight and the seasonal cut-offs most guides miss, including the harbour cruise winter season that removes the full-island sailing from 5 January to 5 March.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${HUB_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${HUB_PATH}`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best month to visit New York?',
    answer:
      'May and October, for different reasons. May has average highs of 21.9C, no snow at all and 14 hours 31 minutes of daylight with sunset at 20:07, and nothing in the city is on a reduced schedule. October is slightly warmer at 18.1C with a fuller events calendar, but it has only 11 hours 11 minutes of daylight and it is the most expensive month of the year.',
  },
  {
    question: 'What is the most expensive month to visit New York?',
    answer:
      'October, not December. New York hotel occupancy reached 89.4 per cent in October 2025, the highest of any top-25 US market, and September 2024 set the record average daily rate of $417. December contains the single most expensive week, from roughly the 23rd to 2 January, but its monthly average is dragged down by a genuinely soft first ten days.',
  },
  {
    question: 'What is the cheapest time to visit New York?',
    answer:
      'January after the first week, on hotel rates, and February on total trip cost. Occupancy falls to 70.1 per cent in January and 73.4 per cent in February, the two lowest of the year, and return flights from the UK are cheapest in February at roughly £404 to £411. Both months are cold, with average lows of -2.3C and -1.4C respectively.',
  },
  {
    question: 'What is the snowiest month in New York?',
    answer:
      'February, at a 26cm snowfall normal for Central Park, ahead of January at 22cm, March at 13cm and December at 12cm. March being snowier than December surprises most people. February is also, at the same time, the driest month of the year at 81mm of total precipitation, because snow holds far less water than the same depth of rain.',
  },
  {
    question: 'Can you take a full Manhattan harbour cruise in winter?',
    answer:
      'Not between 5 January and 5 March. The operator publishes explicit season bands, and in the winter band the flagship full-island cruise has no departures at all while the landmarks sailing halves from four a day to two. The harbour lights sailing continues throughout and actually gains a 17:00 departure, because sunset is 16:54 in mid-January rather than 20:07 as it is in May.',
  },
  {
    question: 'Is the Statue of Liberty ever closed?',
    answer:
      'On two days a year only: Thanksgiving and 25 December. The ferry and the islands run every other day including New Year\'s Day. What does change seasonally is the Ellis Island Hard Hat Tour, which runs six departures a day from March through December but only four a day in January and February.',
  },
  {
    question: 'When do the clocks change in New York?',
    answer:
      'They go back on Sunday 1 November 2026 and forward on Sunday 14 March 2027. Both shifts are abrupt. Sunset falls from 17:54 on 31 October to 16:53 on 1 November, and rises from 18:01 on 13 March to 19:02 on 14 March. The November change is the same morning as the New York City Marathon.',
  },
  {
    question: 'Which floor of the Empire State Building is the outdoor one?',
    answer:
      'The 86th floor is the open-air observatory and the 102nd is the enclosed one. This is stated the wrong way round in a great deal of travel content, and it matters in winter, when average highs of 4.2C in January make the difference between an enclosed and an open deck significant. For the record, Top of the Rock is the deck that looks at the Empire State Building.',
  },
];

export default function BestTimeToVisitNewYorkPage() {
  const pageUrl = `${SITE_URL}${HUB_PATH}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The best time to visit New York, month by month',
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: 'en-GB',
    datePublished: SEASON_PUBLISHED,
    dateModified: SEASON_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  // BreadcrumbList is emitted by the shared Breadcrumbs component below.
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'New York month by month',
    numberOfItems: hubMonths.length,
    itemListElement: hubMonths.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `New York in ${m.month}`,
      url: m.hasPage ? `${SITE_URL}${m.href}` : `${pageUrl}#${m.key}`,
    })),
  };

  return (
    <>
      {[articleSchema, faqPageSchema, itemListSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Best time to visit New York' }]} />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The best time to visit New York, month by month
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Written and checked by the {SITE_NAME} editorial team.{' '}
              <time dateTime={SEASON_UPDATED}>
                Updated{' '}
                {new Date(SEASON_UPDATED).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              .
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
              May and October are the best months to visit New York, at 21.9C and 18.1C average highs. October
              is the most expensive month of the year, not December, with hotel occupancy at 89.4 per cent.
              February is the snowiest at 26cm and the driest at 81mm at the same time. Average highs swing 24.3C
              across the ten months covered here, from 28.5C in August to 4.2C in January.
            </p>
          </header>

          <section aria-labelledby="at-a-glance" className="mt-8">
            <h2 id="at-a-glance" className="text-xl font-bold text-gray-900">
              New York at a glance, all twelve months
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[760px] text-left text-sm">
                <caption className="sr-only">
                  New York climate, snowfall, daylight and verdict for each month of the year
                </caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Month</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg high</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg low</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Precip</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Snow</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Daylight</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Sunset</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONTH_ORDER.map((key) => {
                    const c = nycClimate[key];
                    const hub = hubMonths.find((h) => h.key === key)!;
                    return (
                      <tr key={key} className="align-top">
                        <th scope="row" className="px-3 py-2.5 font-medium">
                          <Link href={hub.href} className="text-blue-900 hover:underline">{c.month}</Link>
                        </th>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgHighC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgLowC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.precipMm}mm</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.snowCm === 0 ? 'None' : `${c.snowCm}cm`}</td>
                        <td className="px-3 py-2.5 text-gray-800 whitespace-nowrap">{c.daylight}</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.sunset}</td>
                        <td className="px-3 py-2.5 text-gray-700">{hub.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Temperature, precipitation and snowfall are the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {CLIMATE_SOURCE.label}
              </a>
              , converted from Fahrenheit and inches. Daylight and sunset are for the 15th of each month, from{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {DAYLIGHT_SOURCE.label}
              </a>
              , in local New York time.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The short answer</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the longest days and no seasonal restrictions at all, go in May. Mid-month daylight is
              14 hours 31 minutes with sunset at 20:07, average highs are 21.9C, the snowfall normal is zero, and
              every harbour cruise, island tour and zoo exhibit is running on a full schedule. The only two dates
              to check are the Five Boro Bike Tour on Sunday 2 May, which closes the FDR Drive and several
              bridges, and Memorial Day on Monday 31 May.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the best temperature and you do not mind paying for it, go in October. Average highs of
              18.1C are the best walking weather of the year, and the event calendar carries Comic Con, Open House
              New York and Halloween. The cost is real: October 2025 recorded 89.4 per cent hotel occupancy, the
              highest of any top-25 US market, and the month only gives you 11 hours 11 minutes of daylight.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If the budget is what decides it, go in February. It is the snowiest month of the year at 26cm and
              simultaneously the driest at 81mm, occupancy of 73.4 per cent is the second lowest, and UK return
              flights bottom out at roughly £404 to £411. January is marginally cheaper on hotels alone, at 70.1
              per cent occupancy, but the harbour cruise winter season and the -2.3C average lows make it the
              hardest month in this guide.
            </p>
          </section>

          <section className="mt-10 rounded-lg border border-amber-200 bg-amber-50/60 p-5">
            <h2 className="text-2xl font-bold text-gray-900">
              Six New York facts that change what you can actually book
            </h2>
            <ul className="mt-4 space-y-3 text-gray-800 leading-relaxed">
              <li>
                <span className="font-semibold">The harbour cruise winter season runs 5 January to 5 March.</span>{' '}
                In that window the flagship full-island cruise has no departures at all and the landmarks sailing
                halves from four a day to two. The harbour lights sailing gains a 17:00 departure instead, because
                the sun now sets at 16:54.
              </li>
              <li>
                <span className="font-semibold">October is the most expensive month, not December.</span> Occupancy
                reached 89.4 per cent in October 2025. December holds the most expensive week, from about the 23rd,
                but its first ten days are genuinely soft. Almost all travel content merges these two facts and
                gets both wrong.
              </li>
              <li>
                <span className="font-semibold">The Statue of Liberty closes on two days a year</span>, Thanksgiving
                and 25 December, and on no others. The crown is advance-reservation only, roughly 500 tickets a day,
                maximum four per order, with lead times that lengthen sharply from April to September.
              </li>
              <li>
                <span className="font-semibold">
                  The zoos change completely on 1 November.
                </span>{' '}
                Hours drop to 10:00 to 16:30 and the Children&apos;s Zoo, Monorail, Butterfly Garden, Zoo Shuttle
                and Budgie Landing all close for the winter. Ticket prices fall to match.
              </li>
              <li>
                <span className="font-semibold">Central Park rowing boats can never be booked in advance.</span>{' '}
                Walk-up only, first come first served, 10:00 to dusk, weather permitting, roughly April to November.
                Several competing guides imply a reservation system exists. It does not.
              </li>
              <li>
                <span className="font-semibold">Easter Sunday 2027 is 28 March</span>, so the Fifth Avenue Easter
                Parade falls in March, not April. Anyone planning an April 2027 trip around Easter in New York will
                miss it entirely.
              </li>
            </ul>
          </section>

          {hubMonths.map((m) => {
            const c = nycClimate[m.key];
            return (
              <section key={m.key} id={m.key} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900">New York in {m.month}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {c.avgHighC}C average high, {c.avgLowC}C average low, {c.precipMm}mm of precipitation,{' '}
                  {c.snowCm === 0 ? 'no snow' : `${c.snowCm}cm of snow`}, {c.daylight} of daylight mid-month with
                  sunset at {c.sunset}.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{m.capsule}</p>
                {m.hasPage ? (
                  <p className="mt-3">
                    <Link href={m.href} className="font-semibold text-blue-900 hover:underline">
                      Read the full guide to New York in {m.month}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-gray-600">
                    We publish full month guides for August through May. For {m.month}, the figures above are the
                    essentials, and nothing in the city is on a reduced schedule at this point in the year. The
                    nearest full guides are{' '}
                    <Link href="/new-york-in-may" className="text-blue-900 font-medium hover:underline">
                      New York in May
                    </Link>{' '}
                    and{' '}
                    <Link href="/new-york-in-august" className="text-blue-900 font-medium hover:underline">
                      New York in August
                    </Link>
                    .
                  </p>
                )}
              </section>
            );
          })}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Where the numbers come from</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Temperature, precipitation and snowfall are the NOAA 1991 to 2020 US Climate Normals for the Central
              Park station, GHCN identifier USW00094728, taken from the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                NCEI climate normals service
              </a>
              . NOAA publishes those figures in Fahrenheit and inches; we convert them and round temperature to one
              decimal place. Daylight, sunrise and sunset are computed for the Central Park coordinates, 40.783N and
              73.965W, and rendered in local New York time via{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                standard solar position calculations
              </a>
              , so they already account for daylight saving.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Operator seasons come from the operators. Harbour cruise season bands are published on{' '}
              <a href={CRUISE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                the Circle Line site
              </a>
              , Statue of Liberty and Ellis Island opening days from{' '}
              <a href={LIBERTY_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                the National Park Service
              </a>
              , and the only published observation-deck weather policy in the city from{' '}
              <a href={EDGE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Edge NYC
              </a>
              . SUMMIT, Top of the Rock and the Empire State Building publish no weather policy at all, which we
              treat as unknown rather than as a guarantee.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where we could not confirm something from a primary source, we leave it out rather than fill the gap.
              That currently applies to the 2026-27 dates for the Rockefeller Center rink, Wollman Rink, the Bryant
              Park Winter Village and the Union Square and Columbus Circle holiday markets; to the Radio City
              Christmas Spectacular closing date; to the 2027 NYC Winter Outing dates; to the 2027 cherry blossom
              peak and Sakura Matsuri; to the 2027 Luna Park opening; and to the exact March date on which the zoos
              come off winter hours. We also do not list the Brookfield Place rink at all, because its own rink page
              no longer resolves and we could not confirm it still exists.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Every tour price, star rating and review count in these guides was checked against the live
              GetYourGuide listing on {TOUR_DATA_CHECKED}. We do not publish a rating or a review count we have not
              verified, and we do not rank a product in a monthly top ten without flagging it when its operator has
              cut the schedule for that season.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Best time to visit New York: FAQs</h2>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((f) => (
                <div key={f.question} className="py-4">
                  <h3 className="font-semibold text-gray-900">{f.question}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Ready to book?</p>
            <p className="mt-2 text-sm text-gray-600">
              Browse{' '}
              <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                all New York tours
              </Link>
              ,{' '}
              <Link href="/attractions" className="text-blue-900 font-medium hover:underline">
                New York attractions
              </Link>{' '}
              or{' '}
              <Link href="/blog/top-10-tours" className="text-blue-900 font-medium hover:underline">
                our top ten New York experiences
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
