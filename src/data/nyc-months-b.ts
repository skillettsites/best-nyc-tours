import { MonthContent } from '@/lib/season-types';

// January through May.
//
// Same sourcing rules as nyc-months-a.ts. Climate is NOAA 1991 to 2020 Central
// Park; daylight is computed for the Central Park coordinates in local time;
// every weekday was calculated from the calendar.
//
// Deliberately absent because they could not be verified: the 2027 NYC Winter
// Outing dates, cherry blossom peak and Sakura Matsuri 2027, the 2027 Luna Park
// opening, the Radio City closing date, and the 2026-27 dates for every seasonal
// rink and holiday market.

export const january: MonthContent = {
  slug: 'new-york-in-january',
  month: 'January',
  monthKey: 'january',
  yearOffset: 1,
  prevMonth: 'December',
  prevPath: '/new-york-in-december',
  nextMonth: 'February',
  nextPath: '/new-york-in-february',
  metaDescription:
    'New York in January: 4.2C highs, 22cm of snow and the year\'s lowest hotel occupancy at 70.1 per cent. The harbour cruise winter season starts 5 January, MJ the Musical closes 17 January. Weather, closures and ten ranked tours.',
  heroCapsule:
    'January is the cheapest month to visit New York and the hardest to be outdoors in. Hotel occupancy falls to 70.1 per cent, the lowest of the year, while average highs of 4.2C and a 22cm snowfall normal push almost everything worth doing indoors. Two things also stop this month.',

  verdict: {
    capsule:
      'Yes, if cost is the deciding factor and you accept an indoor trip. Occupancy of 70.1 per cent is the lowest New York records all year, so rates are at their floor. Against that: 4.2C average highs, -2.3C lows and 22cm of snow, the second snowiest month.',
    body: [
      'January is the month New York is genuinely cheap, and the reason is simple. Nobody has to be here. The holiday visitors left in the first week, the conference season does not restart until later in the spring, and the weather deters everyone else. Occupancy of 70.1 per cent is nearly twenty points below October, and that shows up directly in what you pay for a room.',
      'It is also the month where the city\'s indoor culture earns its reputation. New York has more genuinely excellent indoor hours per square mile than almost anywhere, and January is when you notice. A day built around a museum, a heated observation floor, a gospel concert and a basement bar is a very good day, and it is a day that costs a third less than the same day in October.',
      'Two hard stops fall in this month and both need planning around. On 5 January the harbour cruise operator switches to its winter season, and the flagship full-island cruise has no departures at all until 5 March. And MJ the Musical closes on Sunday 17 January, which matters because it is a non-refundable booking. Neither of those is recoverable if you find out on arrival.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 4.2C and lows of -2.3C, the coldest of the year, with 92mm of precipitation and a snowfall normal of 22cm. Mid-January gives 9 hours 38 minutes of daylight, sunrise 07:16 and sunset 16:54. The month gains 46 minutes of daylight overall.',
    body: [
      'January is the only month in this guide with an average low below freezing, at -2.3C, and that single figure explains most of what makes it hard. When the overnight temperature reliably drops below zero, snow does not simply melt away and pavements stay treacherous for days rather than hours. The 4.2C average high is not enough to fix it during the day.',
      'The snowfall normal of 22cm is the second highest of the year behind February\'s 26cm. That is a working average across thirty years rather than a promise, and individual Januarys vary hugely, but it means arriving without proper boots is a real mistake rather than a theoretical one.',
      'The light is the quiet good news. January gains 46 minutes across the month, from 9 hours 22 minutes on the 1st to 10 hours 8 minutes on the 31st, and sunset moves from 16:40 to 17:13. That is not much, but after December\'s flat bottom it is the first month where the days are visibly getting longer, and by the last week of January there is usable light after five in the afternoon again.',
    ],
  },

  crowds: {
    capsule:
      'January has the lowest hotel occupancy of the New York year at 70.1 per cent. Queues at the observation decks and museums are the shortest they will be, and restaurants that need booking months ahead in October are available at short notice.',
    body: [
      'The value case is strongest after the first week. Until about the 4th the city is still working through the holiday period, and rates stay elevated. From roughly the 5th they fall away sharply and stay low for the rest of the month, which makes mid to late January the cheapest fortnight in this entire ten-month guide.',
      'New York also runs a winter promotion aimed exactly at this problem, bundling a restaurant week, two-for-one Broadway tickets, two-for-one attraction entry and discounted hotel rates. In 2026 it ran from 20 January to 12 February. The 2027 dates had not been published when this page was written, so we are not going to state them. If you are travelling in this window, check whether it is running before you buy anything at full price, because the saving is significant.',
      'The one crowd worth knowing about is the Martin Luther King Jr Day weekend, Monday 18 January, which is a federal holiday and a domestic long weekend. It lifts rates for three nights and closes the Bronx Zoo. Outside that, January is the quietest New York gets.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for January so that heated interiors sit at the top and everything exposed drops. This is the month our ranking diverges most from the raw popularity order, because 22cm of snow and a -2.3C average low decide the day.',
    picks: [
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A whole day indoors when it snows',
        why: 'Moved to the top for January despite sitting sixth on review volume, and the reason is the 22cm snowfall normal. This is the largest single indoor space in this guide that a family can genuinely spend five or six hours in, and January is the month that matters most.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'Two serious hours below street level',
        why: 'Entirely subterranean, so the weather outside is irrelevant to it, and January is when that stops being a footnote. It is also the cheapest major museum booking in the city and the queues are at their annual minimum.',
      },
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A skyline view without standing in -2.3C air',
        why: 'The most-reviewed experience on this site, and almost entirely enclosed and heated, which is what separates it from an open deck in the coldest month. Winter air is also the clearest of the year for long-range visibility.',
      },
      {
        slug: 'nyc-mj-the-musical-on-broadway',
        bestFor: 'The final fortnight of the run',
        why: 'Ranked up but with a hard warning attached. The production closes on Sunday 17 January, so a booking after that date does not exist, and this listing is non-refundable rather than free-cancellation. If you want it, it has to be in the first half of the month.',
      },
      {
        slug: 'new-york-city-the-friends-experience',
        bestFor: 'A warm hour without committing an afternoon',
        why: 'Ranked up for January on format rather than fame. One hour, indoors, in Midtown. In a month where the practical question every day is where you go to warm up between two other things, that is a genuinely useful booking.',
      },
      {
        slug: 'nyc-harlem-hallelujah-gospel-wednesday-concert',
        bestFor: 'The cheapest warm hour in New York',
        why: 'The lowest-priced booking in our whole New York catalogue, rated 4.8 from over three thousand reviews, and an hour indoors in Harlem. January is the month where cheap, short and warm is exactly the right combination.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'The only deck that tells you its snow policy',
        why: 'Edge states that it is all-weather, that its outdoor floors are heated and cleared on snowy days, and that the outdoor deck can still close in high winds or lightning. SUMMIT, Top of the Rock and the Empire State Building publish no weather policy at all. In a 22cm snow month, knowing the rule is worth more than guessing.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'The clearest air of the year',
        why: 'Cold, dry January air gives the best long-distance visibility of any month, which is the compensation for standing in it. This is also the deck that looks at the Empire State Building, whose 102nd floor is the enclosed one and whose 86th is open-air, contrary to how most guides describe it.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'Three hours mostly below ground, 21 and over',
        why: 'The format suits January better than any other month: the venues are basements and back rooms, and there is a drink at each. Photo identification is expected, and the age limit is 21 rather than 18.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'The one cruise the winter timetable protects',
        why: 'Included with a clear caveat. From 5 January the operator moves to its winter season: the flagship full-island cruise has no departures at all until 5 March and the landmarks sailing halves from four a day to two. This harbour lights sailing is the exception, and it actually gains a 17:00 departure because the sun now sets at 16:54.',
      },
    ],
    note:
      'The Statue of Liberty ferry drops out of the January ten for the first time all year. It still sails every day, but it is an open-deck crossing in the coldest month, and the Ellis Island Hard Hat Tour cuts from six departures a day to four in January and February, so the day you are buying is smaller than the one on offer in October. The open-top bus stays out, as it has since November. The helicopter tour is out for the first five days of the month because the operator\'s no-refund window runs to 5 January, and it stays low afterwards because a 15 to 30 minute flight is a poor use of a very cold day. The Chinatown and Little Italy food tour is out this month and returns strongly in February for Lunar New Year. The New York CityPASS is not ranked in any month, because it is a bundle of admissions rather than an experience, but in a month where several of the ten above are indoor ticketed attractions it is worth pricing up separately before you buy them individually.',
    methodNote:
      'The base order is verified GetYourGuide review volume, and January is where we depart from it most. A 22cm snowfall normal and a -2.3C average low mean the ranking is effectively sorted by how long the experience keeps you warm, which is why a museum sitting sixth on reviews sits first on this page.',
  },

  events: {
    capsule:
      'January is quiet by design. The Three Kings Day Parade runs on Wednesday 6 January in East Harlem, the Botanical Garden train show closes on Sunday 10 January, and Martin Luther King Jr Day falls on Monday 18 January. The city\'s winter promotion usually starts in the second half of the month.',
    rows: [
      { event: 'Harbour cruise winter season begins', dates: 'Tuesday 5 January to Friday 5 March', where: 'Hudson River piers', free: 'Flagship full-island cruise has zero departures in this window' },
      { event: 'Three Kings Day Parade', dates: 'Wednesday 6 January', where: 'East Harlem', free: 'Free to watch' },
      { event: 'NYBG Holiday Train Show closes', dates: 'Sunday 10 January', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. Garden closed Mondays' },
      { event: 'MJ the Musical closes', dates: 'Sunday 17 January', where: 'Neil Simon Theatre, Broadway', free: 'Ticketed, non-refundable' },
      { event: 'Martin Luther King Jr Day', dates: 'Monday 18 January', where: 'Nationwide', free: 'Federal holiday. Bronx Zoo closed' },
      { event: 'NYC winter promotion', dates: 'Usually second half of January into February, 2027 dates not published', where: 'Citywide', free: 'Two-for-one Broadway and attractions when it runs' },
    ],
    body: [
      'The winter promotion is worth chasing rather than assuming. When it runs it bundles a restaurant week, two-for-one Broadway tickets, two-for-one entry at more than a hundred attractions and around 25 per cent off at over 150 hotels. In 2026 it ran from 20 January to 12 February. The 2027 dates were not published when this page was written, and we will not invent them, but the pattern is consistent enough that it is worth checking before you book anything in this window at full price.',
      'The Three Kings Day Parade on Wednesday 6 January in East Harlem is one of the genuinely local events in the New York calendar and is almost never mentioned in visitor guides. It is free, it is a morning event, and it is a much better use of an early January day than trying to force a summer itinerary through winter weather.',
      'MJ the Musical closing on Sunday 17 January is the one date on this page that can cost you money. The listing is non-refundable, so a ticket bought for a date after the closing does not exist and a ticket bought for a date you cannot make is not refundable either. Check the date on your booking against the 17th before you pay.',
    ],
  },

  closures: {
    capsule:
      'January carries the heaviest reductions of the year. The harbour cruise winter season starts on 5 January and removes the flagship full-island sailing entirely until March. The Ellis Island Hard Hat Tour drops from six departures a day to four. The zoos remain on winter hours with five attractions shut.',
    rows: [
      { site: 'Harbour cruises, flagship full-island route', closed: '5 January to 5 March, zero departures', note: 'The operator publishes explicit season bands. In the winter band the flagship full-island cruise does not sail at all, and the landmarks cruise halves from four sailings a day to two.' },
      { site: 'Harbour cruises, harbour lights sailing', closed: 'Gains a sailing rather than losing one', note: 'The winter band adds a 17:00 departure, because sunset is 16:54 in mid-January rather than 20:07 as it is in May.' },
      { site: 'Ellis Island Hard Hat Tour', closed: 'Cut to four departures a day', note: 'Runs six a day from March through December, but only four in January and February. Book earlier than you would in the autumn.' },
      { site: 'MJ the Musical', closed: 'Closes Sunday 17 January', note: 'Non-refundable booking. There are no performances after the closing date.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Winter hours, closed 1 and 18 January', note: 'Daily 10:00 to 16:30. Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing all closed. Shut on New Year\'s Day and Martin Luther King Jr Day.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund window to 5 January, no Sunday flights', note: 'Normal cancellation terms resume from 6 January. A doors-off photography flight will be flown doors-closed below about 2C, which January averages are close to.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in January', note: 'It sails on 1 January. The only two closure days in the year are Thanksgiving and 25 December.' },
      { site: 'Central Park rowing boats', closed: 'Closed for the winter', note: 'Roughly April to November, walk-up only, never bookable in advance in any month.' },
    ],
    body: [
      'The harbour cruise winter band is the most consequential closure in this guide and virtually no competing page mentions it. The operator publishes explicit seasons, and from Tuesday 5 January to Friday 5 March the flagship full-island cruise has no departures at all. The landmarks cruise drops from four sailings a day to two. The one that improves is the harbour lights sailing, which gains a 17:00 departure precisely because the sun now sets at 16:54, so the evening cruise starts earlier rather than disappearing.',
      'Ellis Island is the quieter cut. The Hard Hat Tour of the abandoned hospital complex runs six times a day from March through December and only four times a day in January and February. The ferry itself is unaffected and runs every day of the month including New Year\'s Day, so the island is fully accessible; it is only the guided hospital tour whose capacity halves.',
      'On helicopters, one thing worth knowing that operators do not advertise. A doors-off photography flight will not be flown doors-off in a New York January, because that style of operator holds a minimum temperature of around 2C for open doors and the January average high is 4.2C with lows well below freezing. Assume doors-closed. And when a flight is cancelled for weather, the standard remedy is a twelve-month voucher rather than a refund.',
    ],
  },

  packing: {
    capsule:
      'This is the one month in the guide that needs proper winter equipment rather than a warm coat. With a -2.3C average low and a 22cm snowfall normal, the failure points are feet, hands and the wind coming down the avenues, in that order.',
    body: [
      'Get the boots right and January is comfortable. Get them wrong and it is miserable by the second morning. You want waterproof, insulated and grippy, because the hazard is not deep snow but compacted slush at crossings that freezes overnight when the temperature drops below zero. Trainers will be wet through within an hour of the first thaw.',
      'The second failure point is hands. New York requires your phone constantly, for the subway, for maps, for tickets, and taking gloves off forty times a day at -2.3C is how people end up cutting a day short. Touchscreen-compatible gloves solve an unexpectedly large problem.',
      'Finally, plan the day around warm anchors rather than distance. A January itinerary that alternates thirty minutes outdoors with ninety minutes indoors works. One that tries to walk the length of Manhattan does not, whatever it looks like on the map.',
    ],
    list: [
      'Waterproof insulated boots with grip, the single most important item',
      'Touchscreen gloves, because you will use your phone constantly',
      'A hat that covers your ears, for the wind down the avenues',
      'Thermal base layer rather than one very heavy coat, for overheated interiors',
      'Lip balm and moisturiser, because heated indoor air in January is extremely dry',
    ],
  },

  faqs: [
    {
      question: 'Is January a good time to visit New York?',
      answer: 'It is the cheapest and the coldest. Hotel occupancy falls to 70.1 per cent, the lowest of the year, so rates are at their floor and queues are at their shortest. Against that, average highs are 4.2C, average lows are -2.3C and the snowfall normal is 22cm. If you are happy to build the trip around museums, heated observation floors and theatres, it is excellent value.',
    },
    {
      question: 'Can you do a harbour cruise in New York in January?',
      answer: 'Partly, and this is the fact most guides miss. The operator switches to its winter season on 5 January, and in that band the flagship full-island cruise has no departures at all until 5 March, while the landmarks cruise halves from four sailings a day to two. The harbour lights sailing continues and actually gains a 17:00 departure, because sunset is 16:54 in mid-January.',
    },
    {
      question: 'How much snow does New York get in January?',
      answer: 'The NOAA Central Park normal is 22cm, the second highest of the year behind February at 26cm. More important than the total is the temperature: January is the only month in this guide with an average low below freezing, at -2.3C, which means snow and slush refreeze overnight rather than clearing. Grippy waterproof boots matter more than the snowfall figure itself.',
    },
    {
      question: 'Is the Statue of Liberty open in January?',
      answer: 'Yes. The ferry and the islands operate every day of the year except Thanksgiving and 25 December, so they run right through January including New Year\'s Day. What does change is the Ellis Island Hard Hat Tour, which drops from six departures a day between March and December to just four a day in January and February.',
    },
    {
      question: 'When does MJ the Musical close?',
      answer: 'Sunday 17 January 2027. This matters more than a normal closing date because the listing is non-refundable rather than free-cancellation, so there is no recovery if you book around it incorrectly. If you want to see it, your visit has to fall in the first seventeen days of the month.',
    },
    {
      question: 'Are there discounts on New York attractions in January?',
      answer: 'Usually. The city runs a winter promotion that has historically bundled a restaurant week, two-for-one Broadway tickets, two-for-one entry at over a hundred attractions and roughly 25 per cent off at more than 150 hotels. In 2026 it ran from 20 January to 12 February. The 2027 dates were not published when this page was written, so check before booking anything in this window at full price.',
    },
  ],
};

export const february: MonthContent = {
  slug: 'new-york-in-february',
  month: 'February',
  monthKey: 'february',
  yearOffset: 1,
  prevMonth: 'January',
  prevPath: '/new-york-in-january',
  nextMonth: 'March',
  nextPath: '/new-york-in-march',
  metaDescription:
    'New York in February: the snowiest month at 26cm but the driest at 81mm, with the cheapest flights of the year from the UK. Lunar New Year on Saturday 6 February, the Orchid Show from 6 February, closures and ten ranked tours.',
  heroCapsule:
    'February is a month of contradictions in New York. It is the snowiest month of the year at 26cm and simultaneously the driest at 81mm of total precipitation. It has the second lowest hotel occupancy at 73.4 per cent and the cheapest return flights from the UK, at roughly £404 to £411.',

  verdict: {
    capsule:
      'Yes, if you want the best value in this guide and you are equipped for snow. February has a 26cm snowfall normal, the highest of the year, but only 81mm of total precipitation, the lowest. Occupancy of 73.4 per cent keeps rates near their annual floor.',
    body: [
      'February is where the New York value case peaks for a British traveller, because it is the only month where both sides of the trip are cheap at the same time. Hotel occupancy of 73.4 per cent is the second lowest of the year, and return flights from the UK bottom out at around £404 to £411. January is marginally quieter but flights are not as cheap.',
      'The weather headline is odd until you look at it properly. February holds the highest snowfall normal in the year at 26cm and the lowest total precipitation at 81mm. Those are not contradictory: snow is bulky and light, so a big snowfall total represents a modest amount of actual water. In practical terms, February has fewer wet days than any other month in this guide, and the precipitation that does fall is more likely to be frozen.',
      'It is also the month the light comes back. February gains 1 hour 7 minutes of daylight, from 10 hours 10 minutes on the 1st to 11 hours 17 minutes on the 28th, and sunset moves from 17:14 to 17:46. That is a noticeably different city from January, where the sun was down before five for most of the month.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 5.7C and lows of -1.4C, with 81mm of precipitation, the lowest of the year, and a snowfall normal of 26cm, the highest. Mid-February gives 10 hours 43 minutes of daylight, sunrise 06:48 and sunset 17:31, and the month gains 1 hour 7 minutes.',
    body: [
      'The snow figure is the one people react to and it deserves proper framing. A 26cm monthly normal in Central Park is a thirty-year average, not a forecast, and it typically arrives as one or two significant systems rather than as a steady dusting. New York clears its main routes efficiently and the subway is largely unaffected, so a snow event is a disruption of hours rather than days.',
      'What makes February easier than January is that the freeze is slightly less relentless. The average low of -1.4C is nearly a degree above January\'s, and the average high of 5.7C is a degree and a half warmer. That sounds trivial, and on a single day it is, but across a fortnight it is the difference between pavements that thaw during the afternoon and pavements that do not.',
      'The dryness is genuinely useful and almost never mentioned. At 81mm, February is the driest month of the New York year by a clear margin, ahead of November at 91mm and January at 92mm, and well ahead of July at 117mm. If your image of a February trip is grey drizzle, that is a London winter rather than a New York one. New York winters are cold and comparatively bright.',
    ],
  },

  crowds: {
    capsule:
      'February has the second lowest occupancy of the year at 73.4 per cent, behind only January at 70.1 per cent. Flights from the UK are at their cheapest, roughly £404 to £411 return, which makes February the strongest total-cost month in this guide.',
    body: [
      'The value story is genuinely different from January\'s. January wins on hotel rates alone; February wins on the whole trip, because air fares from the UK reach their annual low and hotel occupancy is only three points higher. For a traveller paying for both, February is the cheapest week you will find.',
      'Two dates lift the market briefly. Presidents Day on Monday 15 February creates a domestic long weekend with a corresponding bump in rates for three nights, and the Westminster Kennel Club Dog Show on Monday 1 and Tuesday 2 February brings a small, specific and very loyal crowd into Midtown. Neither compares to Thanksgiving or the Christmas week.',
      'Lunar New Year falls on Saturday 6 February, opening the Year of the Goat. In New York this is a genuinely large event rather than a token one, centred on Chinatown in Manhattan and on Flushing in Queens, which is the larger of the two. A weekend date means it draws bigger crowds than in years when it falls midweek.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for February so that heated interiors still lead but the food tour jumps on Lunar New Year. MJ the Musical is gone from this month onwards, having closed on 17 January.',
    picks: [
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'The snowiest month of the year',
        why: 'Holds the top slot it took in January, and February is the month that justifies it best: a 26cm snowfall normal is the highest of the year. This is the one indoor booking in the guide that comfortably absorbs a whole snowy day rather than an hour of it.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'Weather-proof, at the year\'s lowest queue',
        why: 'Fully below ground and unaffected by anything happening at street level. With occupancy at 73.4 per cent, February also gives it the shortest waits of the year, which is worth as much as the ticket price.',
      },
      {
        slug: 'nyc-chinatown-and-little-italy-lunchtime-food-tour',
        bestFor: 'Lunar New Year on Saturday 6 February',
        why: 'Moved up sharply for the second time in this guide, this time for Lunar New Year, which falls on Saturday 6 February and opens the Year of the Goat. The tour walks Chinatown, which is one of the two centres of the celebration. In September the same tour rises for a completely different reason: San Gennaro.',
      },
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'An enclosed deck with winter visibility',
        why: 'Top of the list on review volume and near the top on seasonal fit, because it is enclosed and heated. Cold, dry February air produces the best long-range visibility of the year, so the view is at its technical best in the month fewest people book it.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'An outdoor deck that publishes a snow policy',
        why: 'In the snowiest month of the year, being the only major New York deck that states its position is decisive. Edge says the outdoor floors are heated and cleared on snowy days, with closures possible in high winds or lightning. The others say nothing at all, which is not the same as saying it is fine.',
      },
      {
        slug: 'new-york-city-the-friends-experience',
        bestFor: 'A short warm stop in Midtown',
        why: 'Stays high on format. One hour, indoors, centrally placed, and easy to slot between two other things on a 5.7C day. It is not competing with the museums on depth; it is competing on being warm and quick, and in February that wins a place.',
      },
      {
        slug: 'nyc-harlem-hallelujah-gospel-wednesday-concert',
        bestFor: 'The best value hour in the guide',
        why: 'The cheapest booking in our New York catalogue, rated 4.8 from more than three thousand reviews, and an hour indoors. In the cheapest month of the year for flights, the cheapest good experience in the city is an easy recommendation.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'A late-afternoon slot that now works',
        why: 'Rising through February because the light is coming back. Sunset moves from 17:14 on the 1st to 17:46 on the 28th, so a sunset booking stops being a mid-afternoon appointment and starts being an early-evening one.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'Below ground on a cold evening, 21 and over',
        why: 'Three hours largely indoors and below street level, which is the right shape for a February evening. The age limit is 21 and photo identification is expected at the door.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'The winter sailing that still runs',
        why: 'The winter season band continues until 5 March, so the flagship full-island cruise remains unavailable and the landmarks sailing is still halved. This harbour lights sailing continues throughout, with the extra 17:00 departure the winter timetable adds.',
      },
    ],
    note:
      'MJ the Musical disappears from the ranking entirely from February onwards, because it closed on Sunday 17 January. It is not ranked low; it does not exist as a booking. The open-top bus remains out, as it has been since November. The Statue of Liberty ferry stays outside the ten for the second month running: it sails daily, but it is an exposed crossing in the snowiest month and the Ellis Island Hard Hat Tour is still cut to four departures a day rather than six. The helicopter tour is out because a 15 to 30 minute flight is poor value on a day this cold, and a doors-off flight would be flown doors-closed anyway.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For February we kept the January indoor logic, because 26cm is the highest snowfall normal of the year, and then made one large exception: the Chinatown and Little Italy food tour rises several places on the strength of Lunar New Year falling on Saturday 6 February.',
  },

  events: {
    capsule:
      'February\'s calendar is short and specific. Lunar New Year falls on Saturday 6 February, opening the Year of the Goat. The Orchid Show at the New York Botanical Garden opens the same day and runs to 25 April. Presidents Day is Monday 15 February.',
    rows: [
      { event: 'Westminster Kennel Club Dog Show', dates: 'Monday 1 and Tuesday 2 February', where: 'Midtown Manhattan', free: 'Ticketed' },
      { event: 'Lunar New Year, Year of the Goat', dates: 'Saturday 6 February', where: 'Manhattan Chinatown and Flushing, Queens', free: 'Free to attend' },
      { event: 'NYBG Orchid Show opens', dates: 'Saturday 6 February to Sunday 25 April', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. Garden closed Mondays' },
      { event: 'Presidents Day', dates: 'Monday 15 February', where: 'Nationwide', free: 'Federal holiday, domestic long weekend' },
      { event: 'Harbour cruise winter season continues', dates: 'To Friday 5 March', where: 'Hudson River piers', free: 'Flagship full-island cruise still has no departures' },
      { event: 'NYC winter promotion', dates: 'Historically runs into mid-February, 2027 dates not published', where: 'Citywide', free: 'Two-for-one Broadway and attractions when it runs' },
    ],
    body: [
      'The Orchid Show is the strongest argument for a February visit that nobody makes. It opens on Saturday 6 February and runs to Sunday 25 April at the New York Botanical Garden, which means a heated glasshouse full of orchids in the coldest, snowiest month of the year. It is in the Bronx, about twenty minutes from Grand Central on Metro-North, and the Garden is closed on Mondays.',
      'Lunar New Year on Saturday 6 February opens the Year of the Goat, and a Saturday date makes it a much bigger day than a midweek one. Manhattan\'s Chinatown is the version most visitors see, but Flushing in Queens is the larger celebration and the one worth the subway ride if you want scale rather than proximity.',
      'The city\'s winter promotion has historically continued into the middle of February, having run to 12 February in 2026. The 2027 dates were not published when this page was written, so treat that as a pattern rather than a plan. If it is running, the two-for-one Broadway and attraction offers are the single largest saving available in this guide.',
    ],
  },

  closures: {
    capsule:
      'February carries the same reductions as January. The harbour cruise winter band runs to 5 March with the flagship full-island sailing suspended, the Ellis Island Hard Hat Tour is still cut to four departures a day, and the zoos remain on winter hours with five attractions closed.',
    rows: [
      { site: 'Harbour cruises, flagship full-island route', closed: 'No departures until 5 March', note: 'The winter season band runs 5 January to 5 March. The landmarks cruise remains halved at two sailings a day rather than four.' },
      { site: 'Ellis Island Hard Hat Tour', closed: 'Four departures a day', note: 'The reduced winter schedule covers January and February only. It returns to six a day from March.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Winter hours continue', note: 'Daily 10:00 to 16:30, with the Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing all closed and ticket prices reduced.' },
      { site: 'New York Botanical Garden', closed: 'Every Monday', note: 'A year-round rule worth planning around during the Orchid Show, which opens on Saturday 6 February.' },
      { site: 'MJ the Musical', closed: 'Closed permanently on 17 January', note: 'The production is no longer running. Any listing offering it for a February date is out of date.' },
      { site: 'Central Park rowing boats', closed: 'Closed for the winter', note: 'Roughly April to November, walk-up only, never bookable in advance.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in February', note: 'Only Thanksgiving and 25 December close it, and neither falls in this month.' },
      { site: 'Helicopter doors-off flights', closed: 'Effectively unavailable as advertised', note: 'Doors-off flying stops below about 2C. With a 5.7C average high and a -1.4C average low, a February flight will almost certainly be doors-closed.' },
    ],
    body: [
      'The winter cruise band is the reduction that will actually affect your itinerary, and it runs to Friday 5 March. If you were planning the full circumnavigation of Manhattan, February is not the month, and no amount of checking availability will change that because the sailings do not exist rather than being sold out. The harbour lights sailing continues throughout, with the extra 17:00 departure that the winter timetable adds.',
      'The doors-off helicopter question is worth being direct about, because operators are not. Doors-off photography flights have a minimum temperature of roughly 2C for open doors, and February in New York averages 5.7C by day and -1.4C overnight. Book one and you should assume it will be flown with the doors closed. Weather cancellations on those flights are usually resolved with a twelve-month voucher rather than a refund, so the flexibility is less than it looks.',
      'One point of comparison for anyone weighing February against a European winter city. New York does not have the January-style annual maintenance closures that shut major attractions in some European capitals for weeks. Everything in this guide is running in February; what varies is schedule frequency, not whether the doors are open.',
    ],
  },

  packing: {
    capsule:
      'Pack for snow rather than rain. February has the highest snowfall normal of the year at 26cm and the lowest total precipitation at 81mm, so the priority is grip and insulation rather than waterproofing against a downpour.',
    body: [
      'The February wardrobe is essentially the January one, with slightly less brutal margins. A -1.4C average low is still below freezing, so insulated waterproof boots remain the most important item you will pack, and the hazard remains compacted slush at kerbs and crossings refreezing overnight.',
      'The difference worth exploiting is the light. With sunset at 17:31 by mid-month and 17:46 by the end, an evening plan is possible again in a way it simply was not in December. That means one more useful hour outdoors a day, so a warm outer layer that you are happy to be out in after dark earns its place.',
      'And because February is the driest month of the year, an umbrella is largely wasted space. A hood is more useful than a handle.',
    ],
    list: [
      'Insulated waterproof boots with grip, for the year\'s snowiest month',
      'A hooded coat rather than an umbrella, in the driest month of the year',
      'Touchscreen gloves, hat and scarf',
      'Layers for the contrast between a -1.4C street and a heated glasshouse at the Orchid Show',
      'Sunglasses, which sound absurd until you meet fresh snow in bright winter sun',
    ],
  },

  faqs: [
    {
      question: 'Is February the snowiest month in New York?',
      answer: 'Yes. The NOAA Central Park normal for February is 26cm, ahead of January at 22cm, March at 13cm and December at 12cm. What surprises people is that February is also the driest month of the year at 81mm of total precipitation, because snow contains far less water than the same depth of rain. February has fewer wet days than any other month in this guide.',
    },
    {
      question: 'Is February the cheapest time to visit New York from the UK?',
      answer: 'On total trip cost, yes. Hotel occupancy of 73.4 per cent is the second lowest of the year behind January\'s 70.1 per cent, and return flights from the UK reach their annual low at roughly £404 to £411. January has marginally cheaper hotels but not cheaper flights, which is why February is the strongest combined-cost month in this guide.',
    },
    {
      question: 'When is Lunar New Year in New York in 2027?',
      answer: 'Saturday 6 February 2027, opening the Year of the Goat. The two centres of the celebration are Manhattan\'s Chinatown, which most visitors head for, and Flushing in Queens, which is the larger of the two. A Saturday date means bigger crowds than in years when it falls midweek. It is free to attend.',
    },
    {
      question: 'Is the Orchid Show worth seeing in February?',
      answer: 'It is one of the strongest reasons to visit New York in the coldest part of the year. The New York Botanical Garden Orchid Show runs from Saturday 6 February to Sunday 25 April, in heated glasshouses, in a month with a 26cm snowfall normal. The Garden is in the Bronx, roughly twenty minutes on Metro-North from Grand Central, and it is closed on Mondays.',
    },
    {
      question: 'Can you take a full Manhattan circumnavigation cruise in February?',
      answer: 'No. The operator\'s winter season band runs from 5 January to 5 March, and in that window the flagship full-island cruise has no departures at all. The landmarks cruise runs at two sailings a day instead of four. The harbour lights sailing continues throughout and gains a 17:00 departure because of the earlier sunset. For a full circumnavigation you need March at the earliest.',
    },
    {
      question: 'Will a doors-off helicopter flight actually fly doors-off in February?',
      answer: 'Almost certainly not. Operators running doors-off photography flights hold a minimum temperature of around 2C for flying with the doors open, and New York in February averages 5.7C by day with lows of -1.4C. Assume a doors-closed flight. If weather cancels it, the standard remedy on those flights is a twelve-month voucher rather than a cash refund.',
    },
  ],
};

export const march: MonthContent = {
  slug: 'new-york-in-march',
  month: 'March',
  monthKey: 'march',
  yearOffset: 1,
  prevMonth: 'February',
  prevPath: '/new-york-in-february',
  nextMonth: 'April',
  nextPath: '/new-york-in-april',
  metaDescription:
    'New York in March: the clocks go forward on 14 March and sunset jumps an hour overnight. St Patrick\'s Day is Wednesday 17 March and Easter Sunday is 28 March, so the Fifth Avenue Easter Parade falls in March, not April.',
  heroCapsule:
    'March is the month New York restarts. The harbour cruise winter season ends on 5 March, the clocks go forward on Sunday 14 March and sunset jumps from 18:01 to 19:02 overnight, and because Easter Sunday is 28 March the Fifth Avenue Easter Parade falls in March this year rather than April.',

  verdict: {
    capsule:
      'Yes, with the caveat that March is unpredictable rather than mild. Average highs of 9.9C sit alongside a 13cm snowfall normal, so the month spans genuine winter and early spring. What is certain is the light: the clocks go forward on 14 March and sunset moves an hour in one night.',
    body: [
      'March is the least consistent month in this guide. The average high of 9.9C is a genuine average of a very wide range, with snow still falling in the first half and afternoons that feel like spring in the second. The 13cm snowfall normal is higher than December\'s 12cm, which surprises almost everyone, so this is not a month to pack for spring and hope.',
      'The transformation is in the schedule rather than the weather. On Friday 5 March the harbour cruise operator comes out of its winter band, so the flagship full-island cruise resumes after two months of no departures at all. The Ellis Island Hard Hat Tour goes back to six departures a day from four. The zoos come off their winter hours during the month.',
      'And the daylight arrives all at once. Daylight saving resumes on Sunday 14 March, which turns a 18:01 sunset on the Saturday into a 19:02 sunset on the Sunday. That is the single largest overnight change in this ten-month set, and it is what makes the second half of March feel completely unlike the first.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 9.9C and lows of 2.1C, with 109mm of precipitation and a snowfall normal of 13cm, higher than December\'s. Mid-March gives 11 hours 58 minutes of daylight, sunrise 07:05 and sunset 19:03 after the clock change, and the month gains 1 hour 21 minutes.',
    body: [
      'The March snowfall figure is the most consistently underestimated number in New York planning. At 13cm the Central Park normal is higher than December\'s 12cm, and materially higher than November\'s 1.3cm. March snow tends to be wetter and heavier than midwinter snow and to melt faster, so it disrupts a day rather than a week, but it is a real possibility right through the first three weeks.',
      'The daylight gain of 1 hour 21 minutes is the largest of any month in this guide, and most of it is delivered in a single night. Before Sunday 14 March, sunset is 18:01. After it, 19:02. Sunrise moves the wrong way at the same moment, from 06:09 to 07:07, so early mornings become dark again for a fortnight while evenings gain an hour.',
      'Rainfall at 109mm returns to a fully wet-season figure after February\'s dry 81mm, and this is the month where it starts falling as rain rather than snow more often than not. Late March in New York is genuinely muddy underfoot in the parks, which is worth knowing if Central Park is on the itinerary.',
    ],
  },

  crowds: {
    capsule:
      'March is quiet in the first half and picks up sharply in the second. St Patrick\'s Day on Wednesday 17 March is the largest single crowd of the month, and because Easter Sunday falls on 28 March the Easter weekend lands in March too, which is unusual.',
    body: [
      'The first fortnight of March is still winter pricing in practical terms, and it is the last of the genuinely cheap New York weeks before the spring market starts. Occupancy climbs steadily through the month and does not fall back again until the following autumn.',
      'St Patrick\'s Day is the crowd event. It falls on Wednesday 17 March, and the parade up Fifth Avenue is the oldest and largest in the world. A midweek date means it draws a working-day crowd rather than a full weekend one, which is fractionally better for anyone trying to move around Midtown, but Fifth Avenue and the cross streets in the fifties are effectively closed for the day.',
      'The Easter timing is the piece worth planning around and almost every guide gets it wrong. Easter Sunday 2027 falls on 28 March, which means the Fifth Avenue Easter Parade and Bonnet Festival happens in March, not April. Anyone booking an April trip expecting to catch Easter in New York will miss it entirely, and anyone booking the last weekend of March gets both Easter and the start of the spring weather.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for March so that the products coming out of their winter restrictions rise. The full harbour cruise schedule returns on 5 March and the Ellis Island Hard Hat Tour goes back to six departures a day.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A view with an hour more evening after 14 March',
        why: 'Returns to the top on review volume. The specific March advantage is the clock change: after Sunday 14 March a late-afternoon slot leaves you a whole evening afterwards, which was not true in any month since October.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'The Ellis Island hospital tour back at full frequency',
        why: 'Ranked up substantially. From March the Ellis Island Hard Hat Tour returns to six departures a day after running at four through January and February, so the island visit you can actually build is bigger than it has been since December.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'The first month the full cruise schedule is back',
        why: 'Moved up hard on a hard date. The operator\'s winter season ends on Friday 5 March, so the flagship full-island cruise resumes after two months with no departures at all and the landmarks sailing returns to four a day. March is the first month since December with a complete choice.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A snowy first half of the month',
        why: 'Stays high because March is snowier than December, at a 13cm normal against 12cm. An entirely underground museum remains the most weather-proof serious booking in the city, and March weather is the least predictable of the ten months.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'An outdoor deck as it becomes usable again',
        why: 'Rising as the temperature does. Its published policy still applies, with heated and cleared outdoor floors on snowy days and closures possible in high winds, but at 9.9C average highs standing on an open deck becomes a choice rather than an ordeal.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Sunset at a proper evening hour again',
        why: 'The clock change on 14 March moves sunset from 18:01 to 19:02 overnight, which restores the sunset slot to a genuine evening booking. This is also the deck whose view contains the Empire State Building rather than being on it.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A reliable answer to unreliable weather',
        why: 'Ranked lower than in January and February but still firmly in the ten, because March is the month you cannot predict. Having one large indoor booking that works whatever happens is worth more in this month than in a settled one.',
      },
      {
        slug: 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus',
        bestFor: 'Returning after four months out',
        why: 'Back in the ranking for the first time since October. At 9.9C an uncovered top deck is finally defensible again, particularly in the second half of the month once the evenings have lengthened. There is still no official guarantee that the top deck is covered or heated, so pick a mild day.',
      },
      {
        slug: 'nyc-contrasts-tour-by-harlem-the-bronx-queens-brooklyn',
        bestFor: 'Covering ground before the spring crowds',
        why: 'A four-and-a-half-hour coach tour with walking segments works properly again from March, and it does it in the last month before spring pricing arrives. Good value on a day when the weather is too uncertain to commit to a long outdoor plan.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'St Patrick\'s week, 21 and over',
        why: 'Prohibition history in a city that spends the week of Wednesday 17 March thinking about drink is a reasonable pairing, and three hours largely below street level still suits a 2.1C evening. The age limit is 21 and identification is expected.',
      },
    ],
    note:
      'The Chinatown and Little Italy food tour steps back out of the ten after its February peak, because Lunar New Year has passed and the walking conditions in a 13cm snow month are worse than in February\'s drier air. The helicopter tour stays out: normal cancellation terms apply in March, but the operator\'s spring no-refund window opens on 14 April, so it is worth knowing that an early April booking is fine and a mid-April one is not. The Niagara Falls day trip remains out; a twenty-two hour round trip to a partly frozen waterfall is a poor use of a New York March.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For March we ranked on schedule restoration rather than weather, because the two products that change most this month change on fixed dates: the harbour cruise winter band ends on 5 March and the Ellis Island Hard Hat Tour returns to six departures a day.',
  },

  events: {
    capsule:
      'March holds two of the biggest dates in the New York year and they are three weekends apart. St Patrick\'s Day falls on Wednesday 17 March, and because Easter Sunday is 28 March the Fifth Avenue Easter Parade lands in March rather than April this year.',
    rows: [
      { event: 'Harbour cruise winter season ends', dates: 'Friday 5 March', where: 'Hudson River piers', free: 'Full-island cruise resumes after two months of no departures' },
      { event: 'Daylight saving resumes', dates: 'Sunday 14 March', where: 'Nationwide', free: 'Sunset jumps from 18:01 to 19:02 overnight' },
      { event: 'St Patrick\'s Day Parade', dates: 'Wednesday 17 March', where: 'Fifth Avenue, Midtown', free: 'Free to watch. Fifth Avenue closed all day' },
      { event: 'Easter Sunday', dates: 'Sunday 28 March', where: 'Citywide', free: 'Not a federal holiday in the US' },
      { event: 'Easter Parade and Bonnet Festival', dates: 'Sunday 28 March', where: 'Fifth Avenue around St Patrick\'s Cathedral', free: 'Free, and free to join in a hat' },
      { event: 'NYBG Orchid Show', dates: 'Running to Sunday 25 April', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. Garden closed Mondays' },
    ],
    body: [
      'The Easter date is the correction worth carrying away from this page. Easter Sunday 2027 is 28 March, which puts the Fifth Avenue Easter Parade and Bonnet Festival in March. It is not a formal parade so much as a slow, free procession of people in elaborate hats along Fifth Avenue around St Patrick\'s Cathedral, and anyone can join simply by wearing one. If you have planned an April trip around Easter in New York, the date has moved out from under you.',
      'St Patrick\'s Day on Wednesday 17 March is the older and larger of the two events, and the parade up Fifth Avenue is the biggest of its kind anywhere. Practically, Fifth Avenue is closed from the mid-forties north through the day, cross-town traffic is very slow, and Midtown bars are extremely busy from lunchtime onwards. A midweek date makes it marginally more manageable than a weekend one.',
      'The Orchid Show at the New York Botanical Garden continues through the whole month, closing on Sunday 25 April. In a month with a 13cm snowfall normal, a heated glasshouse in the Bronx is a better wet-day plan than most, and the Garden is closed on Mondays.',
    ],
  },

  closures: {
    capsule:
      'March is the month closures reverse. The harbour cruise winter band ends on 5 March and the flagship full-island sailing resumes. The Ellis Island Hard Hat Tour returns to six departures a day. The zoos come off winter hours during the month, though the changeover date is not published.',
    rows: [
      { site: 'Harbour cruises, flagship full-island route', closed: 'Resumes Friday 5 March', note: 'The winter band ran 5 January to 5 March with zero departures on the flagship route. The landmarks cruise returns to four sailings a day from two.' },
      { site: 'Ellis Island Hard Hat Tour', closed: 'Back to six departures a day', note: 'The four-a-day reduction covered January and February only. The full schedule runs March through December.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Winter hours end during March', note: 'Winter operation ran from 1 November. The exact date the summer schedule and the seasonal exhibits resume is not published in advance, so check before travelling for the Children\'s Zoo or the Monorail.' },
      { site: 'Fifth Avenue', closed: 'Wednesday 17 March, all day', note: 'St Patrick\'s Day Parade closures through Midtown, with heavy delays on every cross street.' },
      { site: 'New York Botanical Garden', closed: 'Every Monday', note: 'Applies throughout the Orchid Show, which runs to Sunday 25 April.' },
      { site: 'Central Park rowing boats', closed: 'Not yet open', note: 'The season runs roughly April to November. Walk-up only, first come first served, and never bookable in advance.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in March', note: 'Only Thanksgiving and 25 December close it.' },
    ],
    body: [
      'The 5 March date is the one to build around if a full harbour cruise matters to you. From Tuesday 5 January to Friday 5 March the flagship full-island cruise had no departures at all, and the landmarks sailing ran at half frequency. From the 5th the complete schedule returns. Booking on the 4th and booking on the 6th are genuinely different propositions.',
      'The zoo changeover is the one seasonal date in this guide we cannot pin down. The winter operation, with reduced hours of 10:00 to 16:30 and the Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing all closed, runs from 1 November through to some point in March. The exact resumption date is not published in advance, so if you are travelling specifically for those attractions, check with the zoo before you commit.',
      'One more piece of March housekeeping. Cherry blossom is the question everyone asks about a late-March New York trip, and it is one we deliberately do not answer with a date. Peak bloom is confirmed by the botanic gardens in real time and is never reliably predictable more than a couple of weeks ahead. Any guide giving you a specific 2027 bloom window is guessing.',
    ],
  },

  packing: {
    capsule:
      'Pack for two months in one bag. With a 13cm snowfall normal and 9.9C average highs, the first half of March can still be winter and the second half can be spring, so the practical answer is winter footwear plus lighter upper layers.',
    body: [
      'Keep the boots. It is tempting to treat March as spring, but the snowfall normal is higher than December\'s and the average low of 2.1C is close enough to freezing that wet pavements are still a hazard overnight. Waterproof footwear is the item you will regret leaving behind.',
      'Above the ankles you can lighten considerably. A mid-weight coat with layers underneath covers a 9.9C afternoon and a 2.1C evening far better than a single heavy winter coat, and by the last week of the month you may not need the coat at all in the middle of the day.',
      'Add sunglasses and something for wind. March is the windiest feeling month in Manhattan, partly because the avenues are still funnelling cold air while the sun is strong enough to be in your eyes.',
    ],
    list: [
      'Waterproof boots, because March snowfall exceeds December\'s',
      'A mid-weight coat plus layers rather than one heavy winter coat',
      'Something green if you are here on Wednesday 17 March',
      'A hat, if you want to join the Easter Parade on Sunday 28 March',
      'Sunglasses, for a strong low sun over wet pavements',
    ],
  },

  faqs: [
    {
      question: 'When is Easter in New York in 2027, and does the Easter Parade fall in March or April?',
      answer: 'Easter Sunday 2027 is 28 March, so the Fifth Avenue Easter Parade and Bonnet Festival falls in March, not April. This catches a lot of people out, because Easter is often an April event. It is free, informal and takes place along Fifth Avenue around St Patrick\'s Cathedral, and anyone wearing a hat can join the procession rather than only watching it.',
    },
    {
      question: 'Does it still snow in New York in March?',
      answer: 'Yes, and more than in December. The NOAA Central Park normal for March is 13cm against December\'s 12cm, and well above November\'s 1.3cm. March snow is generally wetter and clears faster than midwinter snow, but the first three weeks of the month can produce a genuine snow event, so waterproof footwear is still the right call.',
    },
    {
      question: 'When do the clocks go forward in New York?',
      answer: 'Sunday 14 March 2027. The effect is dramatic: sunset moves from 18:01 on Saturday the 13th to 19:02 on Sunday the 14th, an hour of evening daylight gained overnight. Sunrise moves the other way at the same time, from 06:09 to 07:07. March gains 1 hour 21 minutes of daylight in total, the largest monthly gain in this guide.',
    },
    {
      question: 'Can you take a full Manhattan cruise in March?',
      answer: 'From Friday 5 March, yes. The operator\'s winter season band runs from 5 January to 5 March, and during it the flagship full-island cruise has no departures at all while the landmarks sailing runs at half frequency. From the 5th the full schedule resumes, which makes March the first month since December with the complete range of harbour cruises available.',
    },
    {
      question: 'When is the New York St Patrick\'s Day Parade in 2027?',
      answer: 'Wednesday 17 March 2027, up Fifth Avenue through Midtown. It is the oldest and largest St Patrick\'s Day parade in the world and it is free to watch. Practically, Fifth Avenue is closed for the day from the mid-forties north, cross-town traffic is very slow, and Midtown bars fill from lunchtime. A midweek date makes it slightly easier to navigate than a weekend one.',
    },
    {
      question: 'Will the cherry blossom be out in New York in late March?',
      answer: 'We will not give you a date, and neither should anyone else. Peak bloom is confirmed by the botanic gardens in real time and is not reliably predictable more than roughly two weeks ahead, because it depends on the temperatures in the preceding weeks. Any 2027 bloom window published now is a guess. Check the gardens directly in the fortnight before you travel.',
    },
  ],
};

export const april: MonthContent = {
  slug: 'new-york-in-april',
  month: 'April',
  monthKey: 'april',
  yearOffset: 1,
  prevMonth: 'March',
  prevPath: '/new-york-in-march',
  nextMonth: 'May',
  nextPath: '/new-york-in-may',
  metaDescription:
    'New York in April: 16.6C highs, 13 hours 21 minutes of daylight and no Easter, because Easter Sunday fell on 28 March. Central Park rowing boats return but cannot be booked, and ten tours ranked for spring.',
  heroCapsule:
    'April is the month New York goes outdoors again. Average highs climb 6.7C from March to 16.6C, daylight passes thirteen hours and the snow effectively stops at a 1cm normal. One thing April does not have this year is Easter, which fell on 28 March.',

  verdict: {
    capsule:
      'Yes, and it is the best-value good-weather month in this guide. Average highs of 16.6C with 13 hours 21 minutes of daylight give you October conditions without October prices, because the autumn conference season has no spring equivalent.',
    body: [
      'April is where the argument for a spring trip becomes obvious. The average high jumps from 9.9C in March to 16.6C, the biggest month-on-month rise anywhere in this ten-month set, and the snowfall normal collapses to 1cm, effectively a trace. Meanwhile daylight passes thirteen hours and sunset is at 19:36 by mid-month.',
      'The pricing has not caught up in the way it does in autumn. October, with almost identical weather at 18.1C, recorded 89.4 per cent hotel occupancy, the highest of any top-25 US market. April does not have an equivalent demand peak, because the corporate and conference calendar that drives New York rates concentrates in the autumn. You get comparable conditions for meaningfully less.',
      'The one thing April lacks this year is the event most people assume it has. Easter Sunday 2027 is 28 March, so the Fifth Avenue Easter Parade and the whole Easter weekend fall in March. If Easter in New York was the plan, April is the wrong month, and that is worth knowing before you book flights.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 16.6C and lows of 7.5C, with 104mm of precipitation and a snowfall normal of just 1cm. Mid-April gives 13 hours 21 minutes of daylight, sunrise 06:15 and sunset 19:36, and the month gains 1 hour 14 minutes of daylight.',
    body: [
      'The 6.7C jump in average high from March to April is the largest month-to-month change in this entire guide, and you feel every degree of it. The practical effect is that outdoor plans stop being a gamble. A walk across Brooklyn Bridge, a full afternoon in Central Park or a ferry crossing all become straightforwardly pleasant rather than something to be endured.',
      'The snowfall normal of 1cm is worth stating plainly because it is the point at which winter kit can be left at home. It represents an occasional early-month event rather than a working expectation, and it is a fifteenth of March\'s figure.',
      'Rainfall stays high at 104mm, and April rain in New York is genuinely showery: it arrives, it clears, and it does it several times a day rather than settling in for the afternoon the way October systems do. That makes a packable waterproof more useful than a serious rain jacket, and it makes the hour-by-hour forecast more useful than the daily one.',
    ],
  },

  crowds: {
    capsule:
      'April is meaningfully cheaper than the autumn months with comparable weather. The spring market builds gradually rather than spiking, and the Easter weekend that would normally compress demand into a few days has already passed, on 28 March.',
    body: [
      'The absence of Easter genuinely changes the shape of April this year. Normally the Easter weekend concentrates family travel into a few days and lifts rates around it. In 2027 that pressure sits in March, which leaves April unusually smooth, without the school-holiday spike that usually defines it.',
      'What does build through the month is general spring demand, and it does so steadily rather than in bursts. The first half of April is closer to March pricing and the second half closer to May, so if you are choosing within the month, earlier is cheaper.',
      'One practical crowd note that applies specifically to April: the Central Park rowing boats come back into season, and they cannot be booked. They are walk-up only, first come first served, from ten in the morning until dusk, weather permitting. On a warm April weekend the queue at the boathouse is long by early afternoon. Several competing guides imply advance reservation is possible. It is not, in any month.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for April so that outdoor and walking experiences rise on the back of a 6.7C jump in average high. This is the first month since October where the ranking is genuinely led by the outdoors.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A long spring evening at altitude',
        why: 'Holds first place on review volume, and April gives it a different character: with sunset at 19:36 you can do a full day of sightseeing and still take a sunset slot afterwards rather than instead of something else.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'Both islands in comfortable weather',
        why: 'Ranked up strongly. At 16.6C the exposed ferry crossing and the outdoor security queue at Battery Park are pleasant rather than punishing, and with 13 hours 21 minutes of daylight there is time to do Liberty Island and Ellis Island properly. The Hard Hat Tour is on its full six-a-day schedule.',
      },
      {
        slug: 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus',
        bestFor: 'The open roof, properly',
        why: 'Ranked well above its review position for the second month running and rising further. An uncovered top deck at 16.6C with long evenings is exactly what this product is for, and April is only fractionally behind October as the best month for it.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A showery afternoon',
        why: 'Drops from its winter position but stays firmly in the ten. April brings 104mm of showery rain rather than settled systems, so an underground museum remains the right answer for the two hours in the middle of the day when a shower comes through.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'Standing outside a hundred floors up again',
        why: 'The highest outdoor sky deck in the city, and April is the month the outdoor part becomes the point rather than a formality. The published policy on high winds and lightning still applies, but the cold-weather clauses stop mattering.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'A harbour evening with light to spare',
        why: 'Fully out of the winter schedule since 5 March, so the whole range of sailings runs. With sunset at 19:36 the evening cruise is back to being a genuine sunset sailing rather than the after-dark lights cruise it becomes in December and January.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Central Park in leaf, from above',
        why: 'The northward view up Central Park is the reason to choose this deck in spring, when the park changes from bare to green across the month. Southward it takes in the Empire State Building, whose 102nd floor is enclosed and whose 86th is the open-air one.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A wet morning without losing the day',
        why: 'Ranked considerably lower than in the winter, which is deliberate. In a month with 16.6C highs and 13 hours 21 minutes of daylight, a full day indoors is a waste of what April is offering. As a morning, it is still excellent.',
      },
      {
        slug: 'nyc-chinatown-and-little-italy-lunchtime-food-tour',
        bestFor: 'Two hours of walking that is finally comfortable',
        why: 'Back in the ten. This is a walking food tour, and the walking part is what the weather decides. At 16.6C it is straightforwardly enjoyable, which was not true in the 13cm snow of March.',
      },
      {
        slug: 'brooklyn-graffiti-lesson',
        bestFor: 'An outdoor workshop that needs mild weather',
        why: 'Enters the ranking for the first time in this guide. It is a hands-on outdoor session with a local artist, rated 4.8, and it needs conditions where standing still outside for an hour is pleasant. April is the first month of the ten where that is reliably true.',
      },
    ],
    note:
      'The Manhattan helicopter tour is out of the April ten on a specific date rather than a judgement: the operator runs a published no-refund period from 14 April to 31 May, so a flight before the 14th carries normal cancellation terms and one after it does not. If a helicopter matters to you, book it in the first fortnight. The Harlem gospel concerts and the indoor short-format experiences also step back, not because they got worse but because 16.6C and 13 hours 21 minutes of daylight are the strongest argument of the year so far for being outside.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For April we inverted the winter logic: the 6.7C jump in average high from March, the biggest month-on-month rise in this guide, means outdoor and walking experiences move up and full-day indoor bookings move down.',
  },

  events: {
    capsule:
      'April is unusually light on dated events this year, because Easter Sunday fell on 28 March and took the Easter Parade with it into the previous month. The Orchid Show closes on Sunday 25 April and the Central Park rowing season restarts.',
    rows: [
      { event: 'Central Park rowing boats, season restarts', dates: 'Roughly from April, 10:00 to dusk, weather permitting', where: 'The Lake, Central Park', free: 'Paid on the day. Walk-up only, no advance booking in any month' },
      { event: 'NYBG Orchid Show closes', dates: 'Sunday 25 April', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. Garden closed Mondays' },
      { event: 'Helicopter no-refund period opens', dates: 'Wednesday 14 April to Monday 31 May', where: 'Downtown Manhattan Heliport', free: 'Bookings from the 14th cannot be cancelled for a refund' },
      { event: 'Easter, for reference', dates: 'Already passed, Sunday 28 March', where: 'Fifth Avenue', free: 'The Easter Parade is a March event this year, not April' },
      { event: 'Harbour cruises, full schedule', dates: 'All month', where: 'Hudson River piers', free: 'Winter restrictions ended 5 March' },
    ],
    body: [
      'The most useful thing this table does is tell you what is not here. In most years the Fifth Avenue Easter Parade and Bonnet Festival is the April headline. In 2027 Easter Sunday is 28 March, so it belongs to the previous month. If you have an April trip booked on the assumption that Easter falls in it, that assumption is wrong.',
      'The Central Park rowing boats are the April addition worth knowing about, and the important part is the booking model rather than the date. They cannot be reserved. It is walk-up only, first come first served, from ten in the morning until dusk, weather permitting, roughly April through November. On a warm weekend afternoon expect a queue. Guides that describe an advance booking process for them are simply wrong.',
      'Cherry blossom is the other April question, and we are not going to publish a date for it. Peak bloom is confirmed by the city\'s botanic gardens in real time and cannot be predicted reliably more than about a fortnight out, so the 2027 window is unknowable at the time of writing. The same applies to the Sakura Matsuri festival and to the Luna Park opening at Coney Island, neither of which had confirmed 2027 dates.',
    ],
  },

  closures: {
    capsule:
      'April is the first month since October with essentially no seasonal restrictions. Every cruise runs its full schedule, the Ellis Island Hard Hat Tour is at six departures a day and the zoos are back on summer operation. The only new constraint is a helicopter no-refund period from 14 April.',
    rows: [
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund period from 14 April to 31 May', note: 'Bookings before the 14th keep normal cancellation terms. There are no Sunday flights at any time of year: Monday to Friday 10:00 to 17:00 and Saturday 10:00 to 16:30.' },
      { site: 'Central Park rowing boats', closed: 'Open, but cannot be booked in advance', note: 'Walk-up only, first come first served, 10:00 to dusk, weather permitting. There is no reservation system in any month, contrary to what several guides suggest.' },
      { site: 'NYBG Orchid Show', closed: 'Ends Sunday 25 April', note: 'The Garden itself stays open and remains closed on Mondays throughout the year.' },
      { site: 'Harbour cruises', closed: 'No restrictions', note: 'The winter season band ended on 5 March. Full-island, landmarks and harbour lights sailings all run their complete schedules.' },
      { site: 'Ellis Island Hard Hat Tour', closed: 'Six departures a day', note: 'Full schedule, as it runs from March through December.' },
      { site: 'Statue of Liberty crown', closed: 'Longer lead times return', note: 'Reported lead times lengthen from roughly 75 to 90 days in the winter to around 90 to 120 days from April to September. Advance reservation only, about 500 tickets a day, maximum four per order.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in April', note: 'Only Thanksgiving and 25 December close it.' },
    ],
    body: [
      'April is the easiest month of the ten to plan, because for the first time since October there is nothing seasonal to work around. Every harbour sailing runs, the Ellis Island hospital tour is back at full frequency, and the zoos have come off the winter hours that shut the Children\'s Zoo, the Monorail, the Butterfly Garden, the Zoo Shuttle and Budgie Landing from 1 November.',
      'The one new restriction is a booking term rather than a closure. The helicopter operator runs a published no-refund period from Wednesday 14 April to Monday 31 May, which means a flight booked from the 14th onwards cannot be cancelled for a refund. Book in the first fortnight of April and normal terms apply. The heliport still does not fly on Sundays, in any month.',
      'April also marks the return of the long Statue of Liberty crown lead times. Reported waits stretch from the 75 to 90 days typical of the winter back out to roughly 90 to 120 days for the April to September window. Those figures are secondary rather than official, since the National Park Service does not publish a lead time, but the direction is consistent and the practical advice is unchanged: book months ahead or plan on the pedestal.',
    ],
  },

  packing: {
    capsule:
      'Pack for showers and a wide daily range rather than for cold. With a 16.6C average high and a 7.5C average low, mornings and evenings still want a layer, but the winter boots can finally stay at home in a month with a 1cm snowfall normal.',
    body: [
      'The 9.1C gap between the average high and low is the biggest of any month in this guide, so April is genuinely a layering month. A midday that is warm enough for shirtsleeves in the sun turns into an evening that wants a jacket, and the difference arrives quickly once the sun drops.',
      'The rain is showery rather than settled, which changes the right kit. A packable waterproof you can pull on for twenty minutes and stuff back in a bag beats a heavy rain coat you have to carry all day, and it beats an umbrella in the wind that comes with spring showers.',
      'Footwear can go back to normal walking shoes. The 1cm snowfall normal means the ice hazard has effectively gone, and the parks are the only place you will meet mud.',
    ],
    list: [
      'A packable waterproof for showers that clear within the hour',
      'Layers to cover a 9.1C daily range, the widest in this guide',
      'Ordinary walking shoes rather than winter boots',
      'Sun cream, because a 16.6C spring day still burns on an open ferry deck',
      'Cash or card for the Central Park boats, which are walk-up only',
    ],
  },

  faqs: [
    {
      question: 'Is Easter in April in New York in 2027?',
      answer: 'No. Easter Sunday 2027 falls on 28 March, so the Fifth Avenue Easter Parade and Bonnet Festival and the whole Easter weekend belong to March this year. Anyone booking an April trip in the expectation of catching Easter in New York will miss it. It is the single most consequential date error we found in New York content for this spring.',
    },
    {
      question: 'What is the weather like in New York in April?',
      answer: 'A significant improvement on March. The NOAA Central Park normals give an average high of 16.6C and an average low of 7.5C, a rise of 6.7C in the daytime figure, which is the largest month-on-month jump in this guide. Precipitation is 104mm, falling as showers rather than settled systems, and the snowfall normal drops to 1cm.',
    },
    {
      question: 'Can you book Central Park rowing boats in advance?',
      answer: 'No, and this is worth being clear about because several guides imply otherwise. The boats are walk-up only, first come first served, from 10:00 until dusk, weather permitting, roughly April to November. There is no reservation system in any month. On a warm April weekend the queue builds through the afternoon, so go in the morning.',
    },
    {
      question: 'Is April cheaper than October in New York?',
      answer: 'Yes, and the weather is not far behind. April averages 16.6C against October\'s 18.1C, but October recorded 89.4 per cent hotel occupancy, the highest of any top-25 US market, while April has no comparable demand peak because New York\'s conference and corporate calendar concentrates in the autumn. April is the best value good-weather month in this guide.',
    },
    {
      question: 'When will the cherry blossom peak in New York in 2027?',
      answer: 'Nobody can tell you honestly, and we will not guess. Peak bloom depends on the temperatures in the preceding weeks and is confirmed by the city\'s botanic gardens in real time, typically no more than about a fortnight ahead. Any published 2027 peak-bloom window is speculation. Check the gardens directly shortly before you travel.',
    },
    {
      question: 'Is a helicopter tour a good idea in April?',
      answer: 'In the first two weeks, yes. From Wednesday 14 April to Monday 31 May the operator runs a published no-refund period, so a booking from the 14th onwards cannot be cancelled for money back. Before that, normal terms apply. Remember also that the Downtown Manhattan Heliport does not fly on Sundays in any month, running Monday to Friday 10:00 to 17:00 and Saturday 10:00 to 16:30.',
    },
  ],
};

export const may: MonthContent = {
  slug: 'new-york-in-may',
  month: 'May',
  monthKey: 'may',
  yearOffset: 1,
  prevMonth: 'April',
  prevPath: '/new-york-in-april',
  nextMonth: 'June',
  nextPath: '/best-time-to-visit-new-york#june',
  metaDescription:
    'New York in May: 21.9C highs, no snow and 14 hours 31 minutes of daylight, the longest in this guide. The Five Boro Bike Tour closes the FDR and the bridges on Sunday 2 May. Weather, events, closures and ten ranked tours.',
  heroCapsule:
    'May is the best all-round month to visit New York. Average highs of 21.9C arrive without August humidity, the snowfall normal is zero, and mid-month daylight reaches 14 hours 31 minutes with sunset at 20:07. Two Sundays need planning around: the bike tour on the 2nd and Memorial Day weekend at the end.',

  verdict: {
    capsule:
      'Yes, and if you can only make one trip from this guide, make it this one. Average highs of 21.9C with lows of 12.8C give warmth without the 20.5C August nights, and 14 hours 31 minutes of daylight is the most of any month covered here.',
    body: [
      'May is what August wants to be. The average high of 21.9C is warm enough for everything outdoors, and the average low of 12.8C means the city cools down properly overnight, which is precisely what New York does not do in July and August. Every walking, water-borne and open-air experience in this guide is at or near its best.',
      'The daylight is the other half of the case. Mid-May gives 14 hours 31 minutes, with sunrise at 05:36 and sunset at 20:07, and by the 31st the sun is not down until 20:21. That is more usable evening than any other month in this ten-month set, and it changes what a day can contain: a full day of sightseeing and a sunset cruise afterwards, rather than one or the other.',
      'The costs are modest and specific. Rates climb through the month towards the summer, the Memorial Day weekend at the end is a genuine domestic travel peak, and the Five Boro Bike Tour on Sunday 2 May closes the FDR Drive, the BQE and several bridges for most of the day. None of these is a reason to avoid May; all three are reasons to check your dates against them.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 21.9C and lows of 12.8C, with 101mm of precipitation and a snowfall normal of zero. Mid-May gives 14 hours 31 minutes of daylight, sunrise 05:36 and sunset 20:07, the most daylight of any month in this guide.',
    body: [
      'The comparison that matters is with August. Both months are warm, but May averages 21.9C by day and 12.8C at night while August averages 28.5C and 20.5C. That 7.7C difference in the overnight figure is why May feels comfortable and August feels heavy: the city actually cools down, so you start each day fresh rather than in accumulated heat.',
      'Rainfall of 101mm is the second lowest total in this guide after February\'s 81mm, and it falls mostly as showers and the occasional thunderstorm rather than as the settled frontal systems of autumn. The pattern is closer to April than to October, so the hourly forecast is more useful than the daily one.',
      'Snowfall is zero, not a trace. May, June, July, August and September all carry a snowfall normal of exactly zero at Central Park, which makes May the first genuinely snow-free month since the previous September and the point at which winter contingency planning can stop entirely.',
    ],
  },

  crowds: {
    capsule:
      'May builds steadily rather than spiking, but it ends with the Memorial Day weekend on Monday 31 May, one of the biggest domestic travel weekends of the year. The Five Boro Bike Tour on Sunday 2 May closes major roads and bridges across the city for most of the day.',
    body: [
      'The month divides at either end. The first weekend carries the Five Boro Bike Tour on Sunday 2 May, which closes the FDR Drive, the Brooklyn-Queens Expressway and several bridges. It is a superb thing to watch and a genuine problem if you have an airport transfer that morning. The last weekend carries Memorial Day, which lifts rates and fills the city with domestic visitors.',
      'The stretch in between, roughly the 4th to the 22nd, is one of the best windows in this whole guide: peak daylight, comfortable temperatures, full attraction schedules and no major crowd event. If you have flexibility within May, that is where to aim.',
      'Fleet Week begins around Wednesday 26 May and runs into the first days of June, bringing naval vessels to the Hudson piers and sailors in uniform across Manhattan. It coincides with the Memorial Day weekend by design, which means the end of May carries two overlapping demand events rather than one.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for May so that everything outdoors, on the water and on foot sits at the top. This is the month our indoor rankings invert completely from January, and the reason is 14 hours 31 minutes of daylight.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A 20:07 sunset slot with the whole day already behind you',
        why: 'Top on review volume and easily justified on timing. With sunset at 20:07 in mid-May you can spend a full day at ground level and still take the last light from ninety-three floors up, which is not possible in any month from October to March.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'The best ferry conditions in this guide',
        why: 'Ranked at its highest point of the ten months. At 21.9C the open crossing is a pleasure rather than an exposure, the Battery Park queue is bearable, and 14 hours 31 minutes of daylight means Liberty Island and Ellis Island fit comfortably into one day with time to spare.',
      },
      {
        slug: 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus',
        bestFor: 'The open top deck at its peak',
        why: 'At its highest position anywhere in this guide, above October. An uncovered top deck at 21.9C with the sun up until 20:07 is the product working exactly as intended, and unlike October the evenings are long enough to use the whole ticket in a day.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'A genuine sunset sailing',
        why: 'The full schedule has been back since 5 March, and May gives it the best light of the year. With sunset at 20:07 the evening sailing is out on the water through the whole of golden hour rather than arriving after dark, which is what happens to the same booking in December.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'The outdoor deck without a single caveat',
        why: 'For the first time in this guide, no weather qualification is needed. The heating and snow-clearing clauses in Edge\'s published policy are irrelevant in a month with a zero snowfall normal, and high wind is the only remaining risk.',
      },
      {
        slug: 'nyc-statue-of-liberty-sunset-cruise-ticket',
        bestFor: 'Ninety minutes at the best time of day',
        why: 'Back in the ten for the first time since August, and for the same reason: sunset timing. At 20:07 a 90-minute evening sailing is entirely in daylight and golden hour. In the winter months the same product sails into darkness at 16:30.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A serious two hours that does not need good weather',
        why: 'Ranked lower than at any other point in this guide, and that is a compliment to May rather than a criticism of the museum. It remains the best value serious indoor experience in the city; there is simply more competition for your daylight this month.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Central Park in full leaf from above',
        why: 'The northward view over a fully green Central Park is at its best in May, and the southward view carries the Empire State Building. Worth repeating, because most guides state it backwards: the Empire State\'s 102nd floor is the enclosed deck and the 86th is the open-air one.',
      },
      {
        slug: 'nyc-chinatown-and-little-italy-lunchtime-food-tour',
        bestFor: 'Walking between neighbourhoods in comfort',
        why: 'A two-hour walking food tour is at its most enjoyable at 21.9C with no humidity to speak of. It rises higher in September for San Gennaro and in February for Lunar New Year, but May is the month the walking itself is best.',
      },
      {
        slug: 'brooklyn-graffiti-lesson',
        bestFor: 'A hands-on hour outdoors',
        why: 'Holds its place from April and improves on it. An outdoor workshop with a local artist, rated 4.8, needs weather where standing outside for an hour is comfortable, and May is the best month in this guide for exactly that.',
      },
    ],
    note:
      'The American Museum of Natural History drops out of the May ten for the only time in this guide, and not because anything about it has changed. In January it sat first, because a 22cm snowfall normal makes a large indoor space the most valuable thing in the city. In May, with 21.9C highs, zero snow and 14 hours 31 minutes of daylight, committing a full day to an interior is the one thing this month argues against. The Manhattan helicopter tour is also out, because the operator\'s published no-refund period runs from 14 April to 31 May and covers the entire month, and the heliport does not fly on Sundays in any case.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For May we ranked almost entirely on daylight and comfort, because 14 hours 31 minutes with a 20:07 sunset and no snow at all is the strongest outdoor case in this guide, which is why the museum that led our January page does not appear on this one.',
  },

  events: {
    capsule:
      'May is bracketed by two events that close roads. The TD Five Boro Bike Tour on Sunday 2 May shuts the FDR Drive, the BQE and several bridges, and the Memorial Day weekend ends the month, overlapping with Fleet Week from around Wednesday 26 May.',
    rows: [
      { event: 'TD Five Boro Bike Tour', dates: 'Sunday 2 May', where: 'All five boroughs, 40 miles of closed roads', free: 'Free to watch. Riding is ticketed' },
      { event: 'Fleet Week New York', dates: 'Around Wednesday 26 May to Tuesday 1 June', where: 'Hudson River piers and across Manhattan', free: 'Ship visits free when open' },
      { event: 'Memorial Day', dates: 'Monday 31 May', where: 'Nationwide', free: 'Federal holiday, major domestic travel weekend' },
      { event: 'Governors Island, seasonal Brooklyn ferry restarts', dates: 'From late May, weekends and holidays', where: 'Brooklyn Bridge Park Pier 6', free: 'Ferry fare, island entry free' },
      { event: 'Central Park rowing boats', dates: 'Daily 10:00 to dusk, weather permitting', where: 'The Lake, Central Park', free: 'Walk-up only, no advance booking in any month' },
      { event: 'Helicopter no-refund period', dates: 'Continues to Monday 31 May', where: 'Downtown Manhattan Heliport', free: 'No refunds on cancellation during this window' },
    ],
    body: [
      'The Five Boro Bike Tour on Sunday 2 May is the one to check your dates against. Forty miles of road across all five boroughs are closed to traffic for most of the day, including the FDR Drive, the Brooklyn-Queens Expressway and several bridges. If you are arriving or departing that Sunday morning, allow far more time than usual for an airport transfer, or use the subway and the AirTrain rather than a car.',
      'Memorial Day on Monday 31 May closes the month with the first big domestic travel weekend of the American summer. Rates rise for the long weekend, the beaches and the parks fill, and Fleet Week overlaps it from around Wednesday 26 May, bringing naval ships to the Hudson piers with free public visits when they are open to the public.',
      'The seasonal Governors Island ferry from Brooklyn Bridge Park restarts in late May and runs weekends and public holidays through to early November. The island is open all year and the Manhattan route from the Battery Maritime Building runs year-round, so what returns in May is the additional Brooklyn crossing rather than access to the island itself.',
    ],
  },

  closures: {
    capsule:
      'Almost nothing is closed or reduced in May. Every cruise runs its full schedule, the Ellis Island Hard Hat Tour is at six departures a day and the zoos are on summer operation. The two things to plan around are road closures on Sunday 2 May and a helicopter no-refund window that covers the whole month.',
    rows: [
      { site: 'FDR Drive, BQE and several bridges', closed: 'Sunday 2 May, most of the day', note: 'Five Boro Bike Tour route closures across all five boroughs. Airport transfers by road that morning are a bad idea.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund period all month, to 31 May', note: 'The window runs 14 April to 31 May. No Sunday flights at any point in the year: Monday to Friday 10:00 to 17:00, Saturday 10:00 to 16:30.' },
      { site: 'Statue of Liberty crown', closed: 'Longest lead times of the year', note: 'Advance reservation only, roughly 500 tickets a day, maximum four per order, with reported lead times of around 90 to 120 days from April to September.' },
      { site: 'Central Park rowing boats', closed: 'Open, but never bookable in advance', note: 'Walk-up only, first come first served, 10:00 to dusk, weather permitting. There is no reservation system in any month.' },
      { site: 'Harbour cruises', closed: 'No restrictions', note: 'Full-island, landmarks and harbour lights sailings all run complete schedules. The winter band ended on 5 March.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in May', note: 'Only Thanksgiving and 25 December close it, and the Hard Hat Tour is on its full six-departures-a-day schedule.' },
      { site: 'New York Botanical Garden', closed: 'Every Monday', note: 'A year-round rule. The Orchid Show finished on 25 April.' },
    ],
    body: [
      'May is the least restricted month in this entire guide, which is part of why it ranks as the best all-round choice. There is no season band on the cruises, no reduced tour frequency at Ellis Island, no winter hours at the zoos and no attraction on a shortened schedule. Everything is simply open.',
      'The two constraints are both about booking rather than opening. The helicopter no-refund period runs from 14 April right through to 31 May, so any May flight is a committed purchase, and the Downtown Manhattan Heliport does not operate on Sundays at any time of year. And the Statue of Liberty crown is at its hardest to secure, with reported lead times back at the 90 to 120 day summer level.',
      'If you are reading this page while deciding between months, the honest summary of this ten-month set is that May and October are the two best, and they lose to each other on different grounds. October has marginally better temperatures at 18.1C and a fuller events calendar, but it is the most expensive month of the year at 89.4 per cent occupancy and has only 11 hours 11 minutes of daylight. May has three and a half more hours of daylight, no crowd peak until the final weekend, and every single attraction running without restriction.',
    ],
  },

  packing: {
    capsule:
      'Pack lightly and for a 9.1C daily range. May averages 21.9C by day and 12.8C at night, so the middle of the day needs summer clothes and the evening needs one layer, and with a snowfall normal of zero nothing winter-related earns its place.',
    body: [
      'The one thing people underpack for May is the evening. A 21.9C afternoon is genuinely warm, but with sunset at 20:07 you will be outside long after the temperature has started falling towards the 12.8C average low, particularly on the water, where the harbour breeze is significant.',
      'Sun protection matters more than the temperature suggests. By mid-May the sun is high, the days are 14 hours 31 minutes long, and an open ferry deck or a top-deck bus seat delivers several unbroken hours of it. This is the first month of the ten where sunburn is a realistic outcome of a day of sightseeing.',
      'Everything else is straightforward. Ordinary walking shoes, a light rain layer for 101mm of showery rain, and nothing heavier.',
    ],
    list: [
      'One evening layer for the drop to 12.8C after a 20:07 sunset',
      'Sun cream and sunglasses for long days on open decks',
      'A light packable rain layer for showers rather than settled rain',
      'Ordinary walking shoes, with no winter footwear needed at all',
      'A plan that avoids road transfers on Sunday 2 May',
    ],
  },

  faqs: [
    {
      question: 'Is May the best month to visit New York?',
      answer: 'On balance, yes, alongside October. May gives average highs of 21.9C with lows of 12.8C, a snowfall normal of zero and 14 hours 31 minutes of daylight, the most of any month in this guide, with sunset at 20:07. October has slightly better temperatures at 18.1C but only 11 hours 11 minutes of daylight and the highest hotel occupancy of the year at 89.4 per cent.',
    },
    {
      question: 'How does May compare with August in New York?',
      answer: 'Much more comfortable. August averages 28.5C by day and 20.5C overnight, while May averages 21.9C and 12.8C. The 7.7C difference in the overnight figure is what matters: New York cools down properly at night in May and does not in August, so the heat does not accumulate. August also has more rain, at 116mm against 101mm.',
    },
    {
      question: 'What is the Five Boro Bike Tour and does it affect visitors?',
      answer: 'It runs on Sunday 2 May and closes forty miles of road across all five boroughs to traffic for most of the day, including the FDR Drive, the Brooklyn-Queens Expressway and several bridges. It is free and excellent to watch. It is also a serious problem for anyone with an airport transfer by road that morning, so use the subway and AirTrain instead if your flight falls on that Sunday.',
    },
    {
      question: 'How much daylight does New York get in May?',
      answer: '14 hours 31 minutes on the 15th, with sunrise at 05:36 and sunset at 20:07, rising to 14 hours 56 minutes by the 31st when the sun sets at 20:21. That is the most daylight of any month covered in this guide, and roughly five hours more than mid-December. It is the single strongest practical argument for a May trip.',
    },
    {
      question: 'Is anything closed in New York in May?',
      answer: 'Essentially nothing. Every harbour cruise runs its full schedule, the Ellis Island Hard Hat Tour is at six departures a day, the zoos are back on summer operation and the Statue of Liberty ferry sails every day. The only two constraints are the helicopter no-refund window, which runs from 14 April to 31 May, and the road closures for the bike tour on Sunday 2 May.',
    },
    {
      question: 'When is Memorial Day in 2027 and does it matter?',
      answer: 'Monday 31 May 2027. It is the first major domestic travel weekend of the American summer, so rates rise for the long weekend and the city fills with visitors from elsewhere in the US. Fleet Week overlaps it from around Wednesday 26 May, bringing naval vessels to the Hudson piers. If you want quieter May conditions, aim for roughly the 4th to the 22nd.',
    },
  ],
};
