import { MonthContent } from '@/lib/season-types';
import { august, september, october, november, december } from './nyc-months-a';
import { january, february, march, april, may } from './nyc-months-b';

export const monthPages: MonthContent[] = [
  august, september, october, november, december,
  january, february, march, april, may,
];

export function getMonthBySlug(slug: string): MonthContent | undefined {
  return monthPages.find((m) => m.slug === slug);
}

/** Footer month strip order, chronological across the season. */
export const monthStrip = monthPages.map((m) => ({ month: m.month, href: `/${m.slug}` }));

export interface HubMonth {
  /** Anchor id and climate key */
  key: string;
  month: string;
  /** Path to the month page, or a hub anchor where no page exists. */
  href: string;
  hasPage: boolean;
  /** 40 to 60 words, standalone, at least one hard number, no links inside. */
  capsule: string;
  verdict: string;
}

// Twelve capsules, calendar order. June and July have no dedicated page in this
// build, so they link to their own section on this hub.
export const hubMonths: HubMonth[] = [
  {
    key: 'january',
    month: 'January',
    href: '/new-york-in-january',
    hasPage: true,
    verdict: 'Cheapest, coldest, most restricted',
    capsule:
      'The cheapest month, with hotel occupancy at 70.1 per cent, the lowest of the year. It is also the only month with an average low below freezing at -2.3C, and it carries a 22cm snowfall normal. The harbour cruise winter season starts on 5 January and removes the full-island sailing entirely.',
  },
  {
    key: 'february',
    month: 'February',
    href: '/new-york-in-february',
    hasPage: true,
    verdict: 'Snowiest, driest, best value overall',
    capsule:
      'A month of contradictions: the highest snowfall normal of the year at 26cm and the lowest total precipitation at 81mm. Occupancy of 73.4 per cent and UK return flights at roughly £404 to £411 make it the best value trip in this guide. Lunar New Year falls on Saturday 6 February.',
  },
  {
    key: 'march',
    month: 'March',
    href: '/new-york-in-march',
    hasPage: true,
    verdict: 'Unpredictable, but everything restarts',
    capsule:
      'Snowier than December, at a 13cm normal against 12cm, but the month everything reopens. The harbour cruise winter band ends on 5 March and the clocks go forward on 14 March, moving sunset from 18:01 to 19:02 overnight. Easter Sunday falls on 28 March, so the Easter Parade is a March event.',
  },
  {
    key: 'april',
    month: 'April',
    href: '/new-york-in-april',
    hasPage: true,
    verdict: 'Best value good weather',
    capsule:
      'The biggest month-on-month warming in the year, with average highs jumping 6.7C to 16.6C and the snowfall normal falling to 1cm. Daylight passes thirteen hours. Because Easter fell on 28 March there is no Easter crowd peak in April at all this year, which is unusual.',
  },
  {
    key: 'may',
    month: 'May',
    href: '/new-york-in-may',
    hasPage: true,
    verdict: 'Best all-round month',
    capsule:
      'The strongest month in this guide: 21.9C average highs, 12.8C nights, zero snow and 14 hours 31 minutes of daylight with sunset at 20:07. Nothing is on a reduced schedule. The two dates to check are the Five Boro Bike Tour on Sunday 2 May and Memorial Day on Monday 31 May.',
  },
  {
    key: 'june',
    month: 'June',
    href: '/best-time-to-visit-new-york#june',
    hasPage: false,
    verdict: 'Longest days, rising humidity',
    capsule:
      'The longest days of the year at 15 hours 8 minutes in mid-June, with sunset at 20:30. Average highs of 26.5C and lows of 18.0C mark the start of the humid season, and precipitation climbs to 115mm. Everything runs on a full schedule, and the beaches open for the summer.',
  },
  {
    key: 'july',
    month: 'July',
    href: '/best-time-to-visit-new-york#july',
    hasPage: false,
    verdict: 'Hottest and wettest',
    capsule:
      'The hottest month of the year at 29.4C average highs and 21.2C overnight lows, and the wettest at 117mm. Daylight is still long at 14 hours 52 minutes mid-month. It is the hardest month for anything involving an outdoor queue, and the best one for the harbour and the beaches.',
  },
  {
    key: 'august',
    month: 'August',
    href: '/new-york-in-august',
    hasPage: true,
    verdict: 'Hot, humid, and nothing closes',
    capsule:
      'Average highs of 28.5C on 20.5C nights, with 116mm of rain, the most of any month in this guide. Unlike European cities in August, nothing in New York shuts: the Statue of Liberty ferry sails every day and no attraction takes a summer break. Sunset holds at 19:55 mid-month.',
  },
  {
    key: 'september',
    month: 'September',
    href: '/new-york-in-september',
    hasPage: true,
    verdict: 'Best weather, worst prices',
    capsule:
      'Average highs fall to 24.6C and the humidity breaks, which makes it the most comfortable walking month. It is also the priciest: September 2024 set New York\'s record average room rate of $417. The UN General Assembly high-level week, around 22 to 28 September, closes roads across east Midtown.',
  },
  {
    key: 'october',
    month: 'October',
    href: '/new-york-in-october',
    hasPage: true,
    verdict: 'Peak conditions, peak occupancy',
    capsule:
      'The most expensive month of the year, with hotel occupancy at 89.4 per cent in October 2025, the highest of any top-25 US market. You pay it for 18.1C average highs and the best outdoor sightseeing weather of the year. The clocks go back the day after Halloween, on Sunday 1 November.',
  },
  {
    key: 'november',
    month: 'November',
    href: '/new-york-in-november',
    hasPage: true,
    verdict: 'Cheap start, huge finish',
    capsule:
      'The first ten days are among the best value of the year. Then the calendar detonates: Radio City opens on 4 November, the Botanical Garden train show on the 14th, and the 100th Macy\'s Thanksgiving Parade on Thursday 26 November. Sunset falls to 16:39 after the clocks go back on the 1st.',
  },
  {
    key: 'december',
    month: 'December',
    href: '/new-york-in-december',
    hasPage: true,
    verdict: 'Two different trips in one month',
    capsule:
      'The first ten days are quiet and affordable with the whole city already decorated. The week from about the 23rd is the most expensive of the entire year. Average highs of 6.8C, a 12cm snowfall normal and the earliest sunsets of the year at around 16:30.',
  },
];
