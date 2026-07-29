import { MonthContent } from '@/lib/season-types';

// August through December.
//
// Climate figures come from the NOAA 1991 to 2020 normals for Central Park.
// Daylight, sunrise and sunset are computed for the Central Park coordinates and
// rendered in local New York time. Every weekday stated below was calculated from
// the calendar, not assumed.
//
// Nothing on the "could not verify" list is stated as fact anywhere on these
// pages: the 2026-27 dates for the Rockefeller Center rink, Wollman Rink, Bryant
// Park Winter Village and the Union Square and Columbus Circle holiday markets;
// the Radio City Christmas Spectacular closing date; the 2027 NYC Winter Outing
// dates; Sakura Matsuri 2027 and cherry blossom peak; the 2027 Luna Park opening;
// helicopter winter cancellation rates; and observation deck wait times. The
// Brookfield Place rink is not listed anywhere because its rink page no longer
// resolves and we could not confirm it still exists.

export const august: MonthContent = {
  slug: 'new-york-in-august',
  month: 'August',
  monthKey: 'august',
  yearOffset: 0,
  prevMonth: 'July',
  prevPath: '/best-time-to-visit-new-york#july',
  nextMonth: 'September',
  nextPath: '/new-york-in-september',
  metaDescription:
    'New York in August: 28.5C average highs, 116mm of thunderstorm rain and sunset still at 19:55. Weather table, harbour cruise timings, the Statue crown booking trap, dated events and ten ranked tours.',
  heroCapsule:
    'August is New York at its hottest, with average highs of 28.5C, overnight lows of 20.5C and 116mm of rain, more than any other month in this guide. Sunset holds at 19:55 in mid-August, so a 19:00 harbour sailing is still a full daylight sailing. Keep the middle of the day indoors.',

  verdict: {
    capsule:
      'Yes, provided you treat the harbour as your air conditioning. Average highs of 28.5C sit on top of 20.5C nights, which is why Manhattan feels hotter than the raw number suggests. In exchange you get 13 hours 51 minutes of daylight and evening water tours that are still in full sun.',
    body: [
      'New York in August is a humid city, not simply a hot one. The 28.5C average high is not extreme by world standards, but it comes with an average overnight low of 20.5C, and a grid of asphalt and glass that holds that heat after dark. Subway platforms are consistently the hottest place you will stand all trip, often noticeably warmer than the street above them.',
      'The saving grace is the water. New York is a harbour city and the temperature difference between Midtown at street level and the deck of a boat off Battery Park in the same hour is genuinely large. That is why our August ranking pushes the cruises up and the open-top bus out. It is also why the ferry to Liberty Island, which most guides treat as a summer default, is better taken on the first sailing of the day than at two in the afternoon.',
      'One thing New York does not do is close. If you have planned an August trip to Rome or Paris before, you will be used to museums shutting for public holidays and whole neighbourhoods going dark for a fortnight. That does not happen here. The Statue of Liberty ferry runs every day in August. The American Museum of Natural History runs its normal schedule. The Bronx Zoo does not move to winter hours until 1 November. Nothing in this city takes an August break.',
    ],
  },

  weather: {
    capsule:
      'Expect average highs of 28.5C and lows of 20.5C, the warmest of the ten months covered here, with 116mm of precipitation, also the highest. It falls as short violent thunderstorms rather than steady rain. Mid-August gives 13 hours 51 minutes of daylight, sunrise 06:04 and sunset 19:55.',
    body: [
      'The rainfall figure surprises people. At 116mm, August is wetter than any month between here and next May, and wetter than November, December, January and February. What differs is the delivery. Summer rain in New York arrives as a convective thunderstorm that dumps most of its total in forty minutes, floods a few intersections and then clears. It rarely writes off a day. Winter rain arrives grey and stays.',
      'Humidity is the number that is not in the table and the one you will feel. With overnight lows averaging 20.5C, the city does not cool down properly between afternoons, so a 28.5C day in New York is a heavier experience than the same reading in a drier climate. Anything with an outdoor queue in direct sun becomes the worst part of the trip.',
      'Daylight is the great August asset and it drains fast. The month opens with 14 hours 22 minutes of daylight and closes with 13 hours 11 minutes, a loss of 1 hour 11 minutes. Sunset slides from 20:13 on the 1st to 19:31 on the 31st. If you want a sunset cruise that is genuinely on the water for the sunset itself, book it in the first half of the month.',
    ],
  },

  crowds: {
    capsule:
      'August is busy but it is not the year\'s peak on price. That is October, when New York hotel occupancy reached 89.4 per cent, the highest of any major US market. August fills with families and international visitors, while the corporate travel that drives September and October rates is largely absent.',
    body: [
      'The pricing pattern in New York is the reverse of most European cities. Summer is not the expensive season. Autumn is. October 2025 recorded 89.4 per cent hotel occupancy, the highest of any top-25 US market, and September 2024 set the city\'s all-time record average daily room rate of $417. August sits below both, because business travel, conferences and the United Nations calendar all belong to the autumn.',
      'What August does have is queue pressure at the outdoor attractions. The ferry terminal at Battery Park, the security screening for Liberty Island and the boarding line for the Staten Island route are all outdoor, unshaded waits. A timed ticket does not remove the security queue, it only removes the ticket queue. Take the earliest departure you can and you will do the whole thing before the heat arrives.',
      'The Statue of Liberty crown is the one thing you cannot fix on arrival. Crown access is advance-reservation only, roughly 500 tickets a day, with a maximum of four per order. Reported lead times cluster around 90 to 120 days in the April to September window, which means an August crown slot was gone in the spring. There is no official National Park Service figure for lead time, so treat those numbers as guidance rather than a published rule, but do not plan a trip around walking up for one.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for August so that air-conditioned interiors and water-borne evenings sit above anything with an unshaded queue or an open roof. Two products drop out of the ten purely because of the heat.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'The middle of a 28.5C afternoon',
        why: 'The most-reviewed experience on this site and the right answer for a New York August afternoon, because almost all of it is enclosed, glazed and cooled. The mirrored rooms photograph best in strong overhead summer light, which is exactly what this month gives you.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'The coolest two hours of your day',
        why: 'Moved up sharply for August. On the water off Lower Manhattan the air is several degrees kinder than it is on Sixth Avenue, and with sunset at 19:55 in mid-month the evening sailing is still a daylight sailing rather than a dark one. This is the month the timing genuinely works.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A thunderstorm afternoon',
        why: 'August is the wettest month in this guide at 116mm, and that rain arrives as sudden downpours. The museum is entirely below ground, takes two to three hours comfortably and is the strongest wet-weather booking in the city at this price.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'Families waiting out the heat',
        why: 'Ranked up on seasonal fit rather than reviews. It is vast, cool and forgiving of a five-year-old, and unlike much of the city it is genuinely a full half-day indoors. Nothing here goes on to a reduced schedule in summer.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'An early start on the harbour',
        why: 'The official Statue City Cruises ferry runs every single day in August, and the Ellis Island Hard Hat Tour is on its full six-departures-a-day schedule from March through December. Take the first boat: the security screening at Battery Park is outdoors and it is the part of the day that August punishes.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'An outdoor deck with a stated weather policy',
        why: 'Edge is the only major New York observation deck that publishes a weather policy at all, and in August the relevant clause is the one about the outdoor deck closing in high winds or lightning. That is a real August risk with this much thunderstorm activity, so build in a flexible slot.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'The classic Empire State photograph',
        why: 'The one deck whose view contains the Empire State Building, which is why it beats standing on the Empire State itself for photographs. Worth knowing before you choose: the Empire State\'s 102nd floor is the enclosed one and the 86th is the open-air deck, which most guides state the wrong way round.',
      },
      {
        slug: 'nyc-statue-of-liberty-sunset-cruise-ticket',
        bestFor: 'A short evening on the water',
        why: 'Ranked up for August only. Ninety minutes is the right length in this heat, and with sunset at 19:55 the boat is out during the best light of the day rather than after dark. In December the same product sails into a 16:30 sunset and becomes a different experience entirely.',
      },
      {
        slug: 'nyc-harlem-hallelujah-gospel-wednesday-concert',
        bestFor: 'A cool hour and the best value on the list',
        why: 'One hour, indoors, and the cheapest thing in our New York catalogue. It carries a 4.8 rating from more than three thousand reviews, and in a month where the constraint is heat rather than money it is the easiest good decision on this page.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'Adults after dark, 21 and over',
        why: 'Ranked up for the season because the venues are basements and back rooms, which is the correct place to be in a New York August evening. Note the age limit: this is a 21-and-over tour and photo identification is expected at the door.',
      },
    ],
    note:
      'Two popular products are deliberately out of the August ten. The open-top hop-on hop-off bus, with more than six thousand reviews, sells an uncovered top deck, and an uncovered top deck in 28.5C heat during the wettest month of the year is not a selling point; it returns in September. The Manhattan helicopter tour is also out, because 15 June to 15 September is one of the operator\'s published no-refund periods, so an August booking carries more risk than the same flight in October. The Washington DC and Niagara Falls day trips, at fifteen and twenty-two hours respectively, are long coach days that August does not flatter.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For August we then moved indoor and water-borne experiences up and anything with an unshaded queue or an open roof down, because 28.5C average highs on 20.5C nights is the single fact that decides how an August day in New York actually goes.',
  },

  events: {
    capsule:
      'August is the thinnest month of the year for fixed dated events in New York. The one that matters is the US Open, whose main draw begins on Sunday 30 August at Flushing Meadows and runs into September. Everything else in August is a season rather than a date.',
    rows: [
      { event: 'US Open main draw begins', dates: 'Sunday 30 August to Sunday 13 September', where: 'USTA Billie Jean King National Tennis Center, Flushing Meadows, Queens', free: 'Ticketed' },
      { event: 'Ellis Island Hard Hat Tour, full schedule', dates: 'Six departures a day, March through December', where: 'Ellis Island', free: 'Ticketed, separate from the ferry' },
      { event: 'Governors Island, seasonal Brooklyn ferry route', dates: 'Weekends and public holidays, late May to early November', where: 'Brooklyn Bridge Park Pier 6', free: 'Ferry fare, island entry free' },
      { event: 'Central Park rowing boats', dates: 'Daily 10:00 to dusk, roughly April to November, weather permitting', where: 'The Lake, Central Park', free: 'Paid on the day, walk-up only' },
      { event: 'Beach season at Coney Island and Rockaway', dates: 'Through the Labor Day weekend, ending Monday 7 September', where: 'Brooklyn and Queens', free: 'Beach access free' },
    ],
    body: [
      'The US Open is the only thing in August that will materially change your trip, and it changes it in two directions. It pushes hotel rates in Queens and eastern Manhattan up from the last weekend of the month, and it puts the 7 train under real pressure in the evenings. If you are not going to the tennis, that is simply congestion to plan around. If you are, the main draw runs from Sunday 30 August through to Sunday 13 September.',
      'The rest of the August calendar is made of seasons rather than dates, which is why the table above lists operating windows. The most useful of them is the rowing boats on the Central Park lake, because it is the one thing in this guide that you cannot book in advance at all. It is walk-up only, first come first served, from ten in the morning until dusk, roughly April to November and weather permitting. Several competing New York guides imply you can reserve. You cannot.',
      'Labor Day falls on Monday 7 September, so the last weekend of August is the run-up rather than the holiday itself. City beaches at Coney Island and the Rockaways are at their busiest across it, and the return traffic into Manhattan on that Monday evening is the worst road congestion of the late summer.',
    ],
  },

  closures: {
    capsule:
      'Almost nothing closes in New York in August, which sets the city apart from European destinations in the same month. The constraints are operator rules rather than shut doors: no Sunday helicopter flights all year, a published no-refund window from 15 June to 15 September, and Statue crown reservations that were taken months ago.',
    rows: [
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No Sunday flights, in any month', note: 'Monday to Friday 10:00 to 17:00 and Saturday 10:00 to 16:30. 15 June to 15 September is a published no-refund period, so an August booking cannot be cancelled for a refund.' },
      { site: 'Statue of Liberty crown', closed: 'Effectively sold out for August', note: 'Advance reservation only, roughly 500 tickets a day, maximum four per order. April to September carries the longest lead time of the year, clustered around 90 to 120 days.' },
      { site: 'Central Park rowing boats', closed: 'Cannot be booked in advance at all', note: 'Walk-up only, first come first served, 10:00 to dusk, roughly April to November and weather permitting. There is no reservation system.' },
      { site: 'Edge outdoor deck', closed: 'Short unscheduled closures possible', note: 'The outdoor deck can close in high winds or lightning. Edge is the only major New York deck that publishes any weather policy, so treat the silence from the others as unknown rather than as a guarantee.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in August', note: 'The ferry and the island run every day of the year except Thanksgiving and 25 December, neither of which falls in this month.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Full summer operation', note: 'Reduced winter hours and the seasonal ride and exhibit closures do not begin until 1 November.' },
    ],
    body: [
      'The absence of closures is the story here, and it is worth saying explicitly because it is the opposite of what a European August trains you to expect. There is no Ferragosto, no shuttered neighbourhood and no fortnight when the museums go dark. New York attractions run their standard schedule right through the month.',
      'What replaces closures is operator small print, and the helicopter rules are the sharpest example. Flights from the Downtown Manhattan Heliport operate Monday to Friday from 10:00 to 17:00 and Saturday from 10:00 to 16:30, with no Sunday service at any point in the year. Layer on the 15 June to 15 September no-refund window and an August helicopter booking is the least flexible thing you can buy in this city.',
      'One deliberate omission from this page. The City Climb experience that used to sit alongside Edge has disappeared from the operator\'s current frequently asked questions, and we could not confirm from the official source that it is still running. Rather than describe or sell something we cannot verify, we have left it out. If it matters to your trip, check the Edge site directly before you build a day around it.',
    ],
  },

  packing: {
    capsule:
      'Pack for 28.5C days, 20.5C nights and sudden downpours, and then pack a layer anyway. New York air conditioning in museums, cinemas and restaurants is set far colder than most European visitors expect, so the practical August wardrobe is summer clothes plus one long sleeve you carry all day.',
    body: [
      'The rain is the packing decision people get wrong. With 116mm falling in short, heavy bursts, an umbrella is more useful here than a waterproof jacket, because you want to be able to shed it the moment the sun comes back rather than wear it in 28.5C humidity. Street vendors sell umbrellas within minutes of a downpour starting, at a predictable mark-up.',
      'Footwear matters more than in most cities because the walking distances are longer than the map suggests. Twenty Manhattan blocks is about a mile, and a normal sightseeing day in August will put sixty to eighty of them under you. Add a subway system whose platforms are hotter than the street, and thin, breathable shoes stop being a preference.',
    ],
    list: [
      'A compact umbrella for the short, heavy afternoon storms',
      'One long-sleeve layer for aggressively air-conditioned interiors',
      'Refillable bottle, since New York tap water is drinkable and free everywhere',
      'Breathable walking shoes, not sandals, for sixty-plus blocks a day',
      'Sunglasses and high-factor sun cream for the unshaded ferry queue at Battery Park',
      'Photo identification if you have booked the 21-and-over speakeasy tour',
    ],
  },

  faqs: [
    {
      question: 'Does New York shut down in August like some European cities?',
      answer: 'No. There is no August closure period in New York at all. The Statue of Liberty ferry runs every day of the month, the museums keep their normal schedules, and the Bronx Zoo does not move to reduced winter hours until 1 November. The only things restricted in August are operator rules rather than closures, such as the absence of Sunday helicopter flights and the 15 June to 15 September no-refund window on those flights.',
    },
    {
      question: 'How hot does New York get in August?',
      answer: 'The NOAA 1991 to 2020 normal for Central Park is an average high of 28.5C and an average low of 20.5C, making August the warmest month of the ten covered in this guide. The overnight figure is the one that matters: because the city does not cool properly after dark, August in New York feels heavier than the same temperature does in a drier European summer.',
    },
    {
      question: 'Can you still get Statue of Liberty crown tickets for August?',
      answer: 'Almost certainly not if you are booking now. Crown access is advance-reservation only, with roughly 500 tickets released per day and a maximum of four per order. Reported lead times cluster around 90 to 120 days for the April to September period. The National Park Service does not publish an official lead time, so treat that as guidance, but plan on booking several months ahead or visiting the pedestal instead.',
    },
    {
      question: 'Does it rain a lot in New York in August?',
      answer: 'More than in any other month covered here. The Central Park normal is 116mm, ahead of December and October at 111mm and well ahead of February at 81mm. The character is different from winter rain: August precipitation comes as short, intense thunderstorms that clear within the hour rather than as all-day grey, so it rarely costs you a whole day of sightseeing.',
    },
    {
      question: 'What time does it get dark in New York in August?',
      answer: 'Sunset is 19:55 on 15 August, having been 20:13 on the 1st and falling to 19:31 by the 31st. Mid-month daylight runs 13 hours 51 minutes, and the month loses 1 hour 11 minutes in total. That is why a 19:00 harbour cruise in early August is a genuine sunset sailing, while the same booking at the end of the month is closer to dusk.',
    },
    {
      question: 'Is August the most expensive time to visit New York?',
      answer: 'No, and this is the most common mistake in New York travel content. October is the most expensive month, with hotel occupancy reaching 89.4 per cent in October 2025, the highest of any top-25 US market, and September 2024 set the record average daily rate of $417. August sits below both because the corporate and conference travel that drives autumn rates is largely absent.',
    },
  ],
};

export const september: MonthContent = {
  slug: 'new-york-in-september',
  month: 'September',
  monthKey: 'september',
  yearOffset: 0,
  prevMonth: 'August',
  prevPath: '/new-york-in-august',
  nextMonth: 'October',
  nextPath: '/new-york-in-october',
  metaDescription:
    'New York in September: 24.6C highs, 109mm of rain and the United Nations General Assembly closing roads from 22 to 28 September. Weather table, the record-setting room rates, San Gennaro dates and ten ranked tours.',
  heroCapsule:
    'September is New York\'s best-weather month, with 24.6C average highs and 12 hours 31 minutes of daylight. It is also its most expensive week for hotels: the United Nations General Assembly high-level week, roughly 22 to 28 September, is the single worst road-closure and room-rate event of the New York year.',

  verdict: {
    capsule:
      'Yes on weather, with one date to avoid. Average highs drop 3.9C from August to 24.6C while the humidity breaks, which makes September the most comfortable walking month of the ten. The cost is price: September 2024 set New York\'s all-time record average room rate of $417.',
    body: [
      'September is the month New York stops being uncomfortable and starts being easy. The average high falls from 28.5C to 24.6C and the overnight low from 20.5C to 16.8C, which is the shift that actually matters, because it is the humidity breaking rather than the daytime peak dropping. Walking the length of the High Line or across Brooklyn Bridge is a pleasure in September in a way it is not in August.',
      'The trap is the diary. New York in late September hosts the United Nations General Assembly high-level week, which typically runs around 22 to 28 September. It brings motorcades, closed avenues on the east side of Midtown, an enormous security footprint and the highest hotel rates of the New York year. If your dates are flexible by even a few days, move them out of that week and you will pay materially less and travel across town faster.',
      'The first half of the month is the sweet spot. The US Open main draw finishes on Sunday 13 September, Labor Day on Monday 7 September clears the domestic holiday traffic, and the General Assembly has not yet started. Between the 8th and the 20th you get the best weather of the year without the two events that define the month at either end.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 24.6C and lows of 16.8C, with 109mm of precipitation and no snow. Mid-September gives 12 hours 31 minutes of daylight, sunrise 06:35 and sunset 19:06. The month loses 1 hour 17 minutes of daylight, the joint steepest fall of the year alongside October.',
    body: [
      'This is the month the New York year turns, and the daylight table shows it more clearly than the temperature does. September opens with 13 hours 8 minutes of daylight and closes with 11 hours 51 minutes. Sunset moves from 19:29 on the 1st to 18:41 on the 30th, so an evening plan that works comfortably in the first week is running into dusk by the last.',
      'The autumnal equinox falls on Tuesday 22 September, when day and night are close to even at 12 hours 12 minutes. From that point New York has less daylight than darkness for the next six months, which is the single most useful framing for anyone deciding between a September trip and a spring one.',
      'Rainfall eases slightly to 109mm from August\'s 116mm, but the character changes. September rain is less likely to be a fast-clearing thunderstorm and more likely to be a longer, cooler system, particularly late in the month. It is also the tail of the Atlantic hurricane season, and while a direct strike on New York is rare, the remnants of a tropical system passing offshore can produce a genuinely wet 48 hours. Nothing about that is predictable months ahead, so build one flexible day into the itinerary rather than trying to plan around it.',
    ],
  },

  crowds: {
    capsule:
      'September is the most expensive month of the year to sleep in New York on a per-night basis. September 2024 recorded the city\'s all-time record average daily rate of $417, driven by the United Nations General Assembly week and the return of corporate travel after Labor Day.',
    body: [
      'The New York hotel market splits sharply on either side of Labor Day, Monday 7 September. Before it, rates are shaped by leisure demand. After it, conferences, corporate travel and the diplomatic calendar all restart within a fortnight, and prices move fast. If you can only travel in September, the first week is a different market from the fourth.',
      'The General Assembly high-level week, roughly Tuesday 22 to Monday 28 September, is the peak of that. Beyond the room rates, the practical effect is on the ground: expect rolling closures on First and Second Avenues and around the east forties, unpredictable delays for anything crossing Midtown, and taxi journeys that would normally take fifteen minutes taking three times that. Downtown and Brooklyn are much less affected, which is worth factoring into where you stay.',
      'New York Fashion Week, around 10 to 15 September, adds pressure of a different kind: it fills specific hotels and restaurants in the Meatpacking District, SoHo and Chelsea rather than the whole city. And the Feast of San Gennaro, from Thursday 17 to Sunday 27 September, effectively closes Mulberry Street in Little Italy to traffic for eleven days, which is a good thing if you want the street festival and a nuisance if you have booked a restaurant expecting to arrive by car.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for September so that walking, open-air and street-level experiences rise on the back of 24.6C highs and lower humidity. The open-top bus comes back into the ten and the food tour jumps on the San Gennaro dates.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'The clearest air of the year',
        why: 'Holds the top slot on review volume, and September gives it the best conditions it will get. Once the summer humidity breaks the visibility across the harbour improves noticeably, which matters more on a glass observation floor than on any other kind of booking.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A visit around the anniversary',
        why: 'The anniversary of the attacks falls on Friday 11 September and the site handles that day differently from every other day of the year, with commemorative arrangements that change public access. Check the museum\'s own published arrangements before booking a slot on or immediately around the 11th.',
      },
      {
        slug: 'nyc-chinatown-and-little-italy-lunchtime-food-tour',
        bestFor: 'The Feast of San Gennaro',
        why: 'Moved up hard, from near the bottom of our list on review volume to the top third for September alone. The Feast of San Gennaro runs Thursday 17 to Sunday 27 September along Mulberry Street, which is the exact ground this tour walks. For eleven days a year the route is a street festival.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'The best ferry conditions of the year',
        why: 'The outdoor security queue at Battery Park that punishes you in August is merely a queue in September, and 12 hours 31 minutes of daylight still gives you time for both islands. Crown reservation lead times shorten from roughly 90 to 120 days to 75 to 90 from October, so September remains the harder month to secure one.',
      },
      {
        slug: 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus',
        bestFor: 'Returning to the ten after the summer',
        why: 'Back in the ranking after being ranked out of August. An uncovered top deck at 24.6C with the humidity gone is a genuinely pleasant way to see the city, which is not something we would say about the same seat in a 28.5C August afternoon or a 6.8C December one.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'The outdoor deck at its best',
        why: 'The highest outdoor sky deck in the city, and September is when standing on it stops being an endurance test. The published weather policy still applies: the outdoor deck can close in high winds or lightning, and the late-September remnants of Atlantic systems are the realistic cause.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Sunset without a late night',
        why: 'Sunset falls from 19:29 to 18:41 across September, which puts a sunset slot at a civilised hour rather than late in the evening. This is the deck that looks at the Empire State Building, so it is the one that produces the photograph people actually have in mind.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'A harbour evening with the light still in it',
        why: 'The operator is still in its full-schedule season through September, so departure choice is at its widest. Book early in the month if the sunset is the point: by the 30th the sun is down at 18:41 and the same sailing becomes a lights-of-the-city cruise instead.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A wet day in hurricane season',
        why: 'Ranked lower than in August, deliberately, because September weather rewards being outside. It stays in the ten as the best indoor fallback in the city for the two-day soaking that a passing Atlantic system can deliver late in the month.',
      },
      {
        slug: 'nyc-contrasts-tour-by-harlem-the-bronx-queens-brooklyn',
        bestFor: 'Seeing all five boroughs comfortably',
        why: 'A four-and-a-half-hour coach tour is a much better proposition at 24.6C than at 28.5C, because the walking segments between stops are the part that summer ruins. September is the first month of the ten where this works properly all day.',
      },
    ],
    note:
      'The Manhattan helicopter tour sits just outside the ten in September, and the reason is a date rather than the weather: the operator\'s published no-refund period runs to 15 September, so a flight in the first half of the month carries the same inflexibility as an August one. From the 16th it is a straightforwardly good September booking. The Niagara Falls and Washington DC day trips also stay out, because a twenty-two hour and a fifteen hour coach day are a poor use of the best-weather month New York has.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For September we moved street-level and open-air experiences up, because 24.6C highs with the humidity broken is the best walking weather of the ten months, and we moved the Chinatown and Little Italy food tour up several places purely on the Feast of San Gennaro dates.',
  },

  events: {
    capsule:
      'September is the most heavily dated month in this guide. The US Open finishes on Sunday 13 September, the Feast of San Gennaro runs Thursday 17 to Sunday 27 September, and the United Nations General Assembly high-level week, roughly 22 to 28 September, closes roads across east Midtown.',
    rows: [
      { event: 'Labor Day', dates: 'Monday 7 September', where: 'Nationwide', free: 'Public holiday' },
      { event: 'New York Fashion Week', dates: 'Around 10 to 15 September', where: 'Chelsea, SoHo and the Meatpacking District', free: 'Industry, most shows closed' },
      { event: '11 September anniversary', dates: 'Friday 11 September', where: '9/11 Memorial plaza, Lower Manhattan', free: 'Commemorative arrangements differ from a normal day' },
      { event: 'US Open, second week and finals', dates: 'To Sunday 13 September', where: 'Flushing Meadows, Queens', free: 'Ticketed' },
      { event: 'Feast of San Gennaro', dates: 'Thursday 17 to Sunday 27 September', where: 'Mulberry Street, Little Italy', free: 'Free to attend' },
      { event: 'UN General Assembly high-level week', dates: 'Around Tuesday 22 to Monday 28 September', where: 'UN headquarters and east Midtown', free: 'Closed to the public, road closures citywide' },
      { event: 'Autumnal equinox', dates: 'Tuesday 22 September', where: 'Citywide, 12h 12m of daylight', free: 'Free' },
    ],
    body: [
      'San Gennaro is the one to build a day around. Eleven days of street food, processions and closed traffic along Mulberry Street, free to walk into, and the single best reason to book the Chinatown and Little Italy food tour in this month rather than any other. It is busiest on the two weekends and calmest on a weekday lunchtime.',
      'The General Assembly is the one to build a day around avoiding. The high-level segment brings heads of state, motorcades and rolling closures to the east side of Midtown for the best part of a week. There is no public access and no upside for a visitor. Stay downtown or in Brooklyn that week, use the subway rather than taxis, and treat any east-west journey across the forties as unpredictable.',
      'The anniversary of 11 September falls on a Friday this year. The memorial plaza and the museum operate differently that day from every other day in the calendar, with commemorative arrangements that affect public access. We are not going to state a specific access rule here, because the arrangements are published each year rather than fixed. Check the museum\'s own site before booking a timed entry on or immediately around the 11th.',
    ],
  },

  closures: {
    capsule:
      'Nothing significant closes for the season in September. What changes is access: the General Assembly week closes roads rather than sites, the 11 September anniversary alters access at the memorial, and Governors Island\'s seasonal Brooklyn ferry route is entering its final weeks.',
    rows: [
      { site: 'East Midtown road network', closed: 'Around 22 to 28 September', note: 'Rolling closures around the UN headquarters and the east forties during General Assembly high-level week. Sites stay open; getting to them is the problem.' },
      { site: '9/11 Memorial plaza', closed: 'Altered access, Friday 11 September', note: 'Commemorative arrangements on the anniversary differ from a normal operating day and are published each year. Check before booking a slot on that date.' },
      { site: 'Governors Island, Brooklyn ferry route', closed: 'Weekends and holidays only, ending early November', note: 'The seasonal Brooklyn Bridge Park route is weekend and holiday only. The Manhattan route from the Battery Maritime Building runs all year.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund period to 15 September, no Sunday flights', note: 'From 16 September a booking regains normal cancellation terms. Sunday flights do not operate in any month.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in September', note: 'The only two closure days in the year are Thanksgiving and 25 December.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Full schedule until 31 October', note: 'Reduced winter hours and the seasonal exhibit closures begin on 1 November, not in the autumn.' },
    ],
    body: [
      'September is the last month before New York\'s seasonal machinery starts switching off, which makes it the easiest month of the ten to plan. Every attraction in this guide is on its normal schedule, the ferry runs daily, and no operator has cut its sailings yet.',
      'The exception to plan around is the Governors Island ferry. The island itself is open all year, and the route from the Battery Maritime Building in Manhattan runs year-round. What is seasonal is the Brooklyn Bridge Park Pier 6 route, which operates weekends and public holidays only from late May to early November. If you have read that Governors Island closes for the winter, that is a misreading of the ferry timetable rather than the island.',
      'Two of the more useful September facts are about what has not been published rather than what has. The NYC Winter Outing promotion, which bundles restaurant week, two-for-one Broadway and two-for-one attractions, ran from 20 January to 12 February in 2026, but the 2027 dates were not out when this page was written. Likewise the Rockefeller Center tree lighting date for this winter is expected in early December but is not officially confirmed. We describe both as patterns rather than stating dates we cannot support.',
    ],
  },

  packing: {
    capsule:
      'Pack for a genuine transition. September opens at close to August conditions and ends nearer October, so 24.6C average highs conceal a real spread. The one item nobody packs and everybody needs is a light waterproof, because 109mm falls in longer systems than August storms.',
    body: [
      'The temperature range within the month is wider than the single average suggests. The first week can behave like late August, warm and humid, while the last week regularly wants a jacket after dark once the sun is down at 18:41. Layering is not a cliche here, it is the only way one suitcase covers both ends of the month.',
      'If you are travelling in the second half of the month, add a compact waterproof rather than the umbrella that August calls for. Late-September rain in New York tends to arrive on the back of an Atlantic system, which means wind as well as water, and wind is what turns an umbrella into litter.',
    ],
    list: [
      'Layers that cover both a 24.6C afternoon and a 16.8C evening',
      'A light waterproof with a hood for wind-driven late-month rain',
      'Comfortable walking shoes, since this is the best walking month of the ten',
      'Something smarter than shorts if you are eating out during General Assembly week',
      'A subway map or app, because taxis across Midtown are unreliable from 22 to 28 September',
    ],
  },

  faqs: [
    {
      question: 'Is September a good month to visit New York?',
      answer: 'It is the best-weather month of the ten covered here. Average highs of 24.6C with average lows of 16.8C mean the summer humidity has broken while the days are still 12 hours 31 minutes long in mid-month. The drawback is price rather than climate: September 2024 set New York\'s all-time record average daily hotel rate of $417.',
    },
    {
      question: 'What is the UN General Assembly week and does it affect visitors?',
      answer: 'Yes, more than any other single event in the New York year. The high-level week runs roughly 22 to 28 September and brings heads of state, motorcades and rolling road closures to east Midtown, along with the year\'s highest hotel rates. Attractions stay open; travelling across Midtown becomes slow and unpredictable. Staying downtown or in Brooklyn and using the subway largely avoids it.',
    },
    {
      question: 'When is the Feast of San Gennaro in 2026?',
      answer: 'Thursday 17 to Sunday 27 September, along Mulberry Street in Little Italy. It is free to attend and runs for eleven days, closing the street to traffic. It is the reason our Chinatown and Little Italy food tour is ranked several places higher in September than in any other month, because the tour route and the festival occupy the same few blocks.',
    },
    {
      question: 'Is New York expensive in September?',
      answer: 'Very. September is the peak month for New York room rates, and the record average daily rate of $417 was set in September 2024. The month splits at Labor Day on Monday 7 September: the first week is a leisure market, and from the second week corporate travel, conferences and the diplomatic calendar all restart. The last full week is the most expensive of the month.',
    },
    {
      question: 'How much daylight does New York get in September?',
      answer: '12 hours 31 minutes on the 15th, with sunrise at 06:35 and sunset at 19:06. The month loses 1 hour 17 minutes overall, from 13 hours 8 minutes on the 1st to 11 hours 51 minutes on the 30th. The autumnal equinox falls on Tuesday 22 September at 12 hours 12 minutes, after which the city has more darkness than daylight until March.',
    },
    {
      question: 'Can you visit the 9/11 Memorial on 11 September?',
      answer: 'The site operates differently on the anniversary from every other day of the year, with commemorative arrangements that change public access to the memorial plaza. Those arrangements are published annually rather than being a fixed rule, so we do not state one here. If your trip includes Friday 11 September, check the museum\'s own published arrangements before booking a timed entry for that day.',
    },
  ],
};

export const october: MonthContent = {
  slug: 'new-york-in-october',
  month: 'October',
  monthKey: 'october',
  yearOffset: 0,
  prevMonth: 'September',
  prevPath: '/new-york-in-september',
  nextMonth: 'November',
  nextPath: '/new-york-in-november',
  metaDescription:
    'New York in October: 18.1C highs, the year\'s highest hotel occupancy at 89.4 per cent, and sunset at 18:17. Weather table, Comic Con and Open House dates, Halloween, and ten ranked tours for the best walking month.',
  heroCapsule:
    'October is the most expensive month to visit New York, not December. Hotel occupancy hit 89.4 per cent in October 2025, the highest of any major US market. You pay it for 18.1C average highs, the finest walking weather of the year, and a city that has not yet lost its evening light.',

  verdict: {
    capsule:
      'Yes, and it is the strongest month on the ground, but it is the one you will pay most for. Average highs of 18.1C with lows of 10.8C are ideal for walking all day. New York hotel occupancy reached 89.4 per cent in October 2025, the highest figure of any top-25 US market.',
    body: [
      'If you asked a New Yorker which month to bring a visitor, most would say October, and the numbers back them. An 18.1C average high is the temperature at which you can walk from the Village to Midtown without regretting it, cross the Brooklyn Bridge in the afternoon, and still sit outside for a drink afterwards. The 10.8C average low is jacket weather rather than coat weather.',
      'The catch is that everybody else has worked this out. October 2025 recorded 89.4 per cent hotel occupancy in New York, the highest of any of the top twenty-five US markets. This is the single most misunderstood fact in New York travel writing, because most guides assume the Christmas period is the expensive one. December has the most expensive week. October has the most expensive month.',
      'The other October feature is that the light changes fast and the clocks have not changed yet. Sunset is 18:39 on the 1st and 17:54 on the 31st, still late enough for a full day plus an evening. Then daylight saving ends on Sunday 1 November and sunset drops to 16:53 overnight. If you have a choice between the last week of October and the first week of November, that hour of evening light is the deciding factor.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 18.1C and lows of 10.8C, with 111mm of precipitation and a snowfall normal of just 0.3cm, a trace rather than a real risk. Mid-October gives 11 hours 11 minutes of daylight, sunrise 07:06 and sunset 18:17. The month loses 1 hour 17 minutes of daylight.',
    body: [
      'October is the first month in this guide with a snowfall figure at all, and it deserves context rather than alarm. The Central Park normal is 0.3cm, which represents the occasional freak late-month flurry rather than anything you should plan around. Meaningful snow does not arrive until November at 1.3cm and does not become a real feature until December at 12cm.',
      'What October does deliver is rain, at 111mm, essentially the same total as December and only slightly below August. The difference from summer is the pattern: October rain comes in frontal systems that can settle in for most of a day, so unlike a fast-moving August thunderstorm it can genuinely change what you do. Keep one museum booking loose in the itinerary.',
      'Daylight falls at the same rate as September, 1 hour 17 minutes across the month, from 11 hours 48 minutes to 10 hours 31 minutes. Because daylight saving continues until 1 November, all of that loss shows up as later sunrises and slightly earlier sunsets rather than as the sudden cliff that November brings.',
    ],
  },

  crowds: {
    capsule:
      'October is New York\'s peak month for hotel demand. Occupancy of 89.4 per cent in October 2025 was the highest of any top-25 US market. Book accommodation as far ahead as you can, and expect the observation decks and the ferry to run at full capacity across the middle weekends.',
    body: [
      'Understanding the New York price calendar properly saves real money. October is the most expensive month, driven by conference season, the return of business travel and the fact that the weather is at its best. December\'s monthly average is dragged down by a genuinely soft first ten days, even though the week between Christmas and New Year is the most expensive single week of the year. Most travel content merges these two facts into one and gets both wrong.',
      'The event calendar concentrates the pressure. New York Comic Con, Thursday 8 to Sunday 11 October, fills hotels around the Javits Center and Hudson Yards and takes over the 7 train. Open House New York, Friday 16 to Sunday 18 October, opens buildings across the five boroughs that are normally shut, which is a superb free weekend and a busy one. And Halloween falls on Saturday 31 October, which puts the Village Halloween Parade on the best possible night for attendance and the worst possible night for moving around Greenwich Village.',
      'One thing that gets easier in October is the Statue of Liberty crown. Reported lead times shorten from the 90 to 120 day summer band to roughly 75 to 90 days from October onwards. That is still a long way ahead of a normal booking, and it is not an officially published figure, but October is the month where planning ahead starts to be enough rather than needing to have been lucky in the spring.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for October so that the open-air experiences sit at their highest point of the whole ten-month set. This is the peak month for the open-top bus and for the outdoor observation decks, and the ranking says so.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'The clearest, driest air of the autumn',
        why: 'Keeps the top slot on review volume. October gives it the best combination it will see all year: crisp air for long-range visibility, and a sunset at 18:17 that is late enough to fit after a full day of sightseeing rather than instead of one.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'Standing outdoors a hundred floors up',
        why: 'Ranked up for October, which is the best month of the ten to actually use an outdoor sky deck. At 18.1C you can stay out on the deck rather than looking at it through glass, and the wind and lightning closures that the operator warns about are far less likely than in August.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Autumn colour over Central Park',
        why: 'Moved up because of what it is pointed at. This is the deck with the northward view straight up Central Park, and October is the month that view changes colour. The southward view carries the Empire State Building, which no other deck can offer.',
      },
      {
        slug: 'new-york-hop-on-hop-off-sightseeing-tour-by-open-top-bus',
        bestFor: 'The one month the open roof is the point',
        why: 'Ranked well above its review position because October is the peak month for an uncovered top deck. There is no official statement that the top deck is covered or heated on this service, so the seasons where it works are the mild ones, and 18.1C is as good as this gets.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A frontal-system afternoon',
        why: 'October rain arrives as an all-day system rather than a passing storm, which is exactly what an entirely subterranean museum is for. At this price it remains the best value serious indoor booking in the city.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'Both islands without rushing',
        why: 'With 11 hours 11 minutes of daylight in mid-month there is still time to do Liberty Island and Ellis Island properly in a day, which stops being true by December. The Ellis Island Hard Hat Tour is still on its six-a-day schedule; that drops to four in January and February.',
      },
      {
        slug: 'nyc-manhattan-sightseeing-helicopter-tour',
        bestFor: 'The clearest flying month, and full refund terms',
        why: 'October sits between the operator\'s two published no-refund periods, which run to 15 September and from 20 November, so an October booking has normal cancellation terms. Remember the heliport does not fly on Sundays in any month, so build it into a weekday.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A wet-day fallback that fills a whole afternoon',
        why: 'Sits mid-table in October rather than near the top as it will in midwinter. With 111mm of rain across the month you will probably want it once, but the weather does not force you indoors the way January\'s 22cm of snow does.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'The last of the late sunsets',
        why: 'Still on the full pre-winter schedule, and worth booking this month rather than next. Sunset falls from 18:39 to 17:54 across October, then to 16:53 on 1 November when the clocks go back, so the evening character of this sailing changes completely in a single night.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'Halloween week, 21 and over',
        why: 'A three-hour walk through Prohibition-era basements is well suited to the last week of October, when the whole city leans into the theme. Halloween itself falls on Saturday 31 October, so book earlier in the week if you want the history rather than the crowd.',
      },
    ],
    note:
      'The Washington DC day trip drops out of the October ten on daylight arithmetic rather than quality. It is a fifteen-hour day, and with sunrise at 07:06 and sunset at 18:17 a significant part of it now happens in the dark at both ends. The Niagara Falls trip, at twenty-two to twenty-three hours, is out for the same reason. Both make more sense in the long days of late spring than in the month the light starts running out. One more deliberate absence, and it applies to every month in this guide: the New York CityPASS holds over eleven thousand reviews but never appears in these rankings, because it is a bundle of admissions rather than an experience in its own right. In the most expensive month of the year it is arguably the best-value thing on the whole site, so consider it alongside the ten above rather than instead of them.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For October we pushed the open-air products to their highest position anywhere in this ten-month set, because 18.1C average highs with 11 hours 11 minutes of daylight is the best outdoor sightseeing weather New York offers, and we ranked the long coach day trips out on the shortening light.',
  },

  events: {
    capsule:
      'October carries three fixed weekends worth planning around: New York Comic Con from Thursday 8 to Sunday 11 October, Open House New York from Friday 16 to Sunday 18 October, and Halloween itself on Saturday 31 October, which puts the Village parade on a weekend night.',
    rows: [
      { event: 'New York Comic Con', dates: 'Thursday 8 to Sunday 11 October', where: 'Javits Center, Hudson Yards', free: 'Ticketed, sells out early' },
      { event: 'Open House New York', dates: 'Friday 16 to Sunday 18 October', where: 'Several hundred buildings across all five boroughs', free: 'Free, some sites need advance reservation' },
      { event: 'Village Halloween Parade', dates: 'Saturday 31 October', where: 'Sixth Avenue, Greenwich Village', free: 'Free to watch, free to join in costume' },
      { event: 'Daylight saving ends', dates: 'Sunday 1 November, the day after Halloween', where: 'Nationwide', free: 'Sunset drops from 17:54 to 16:53 overnight' },
      { event: 'Ellis Island Hard Hat Tour, full schedule', dates: 'Six departures a day, through December', where: 'Ellis Island', free: 'Ticketed, separate from the ferry' },
      { event: 'Governors Island, seasonal Brooklyn ferry', dates: 'Weekends and holidays, final weeks of the season', where: 'Brooklyn Bridge Park Pier 6', free: 'Ferry fare' },
    ],
    body: [
      'Open House New York is the best free thing in the New York calendar and almost no visitor guide mentions it. For one weekend, Friday 16 to Sunday 18 October, several hundred buildings that are normally closed to the public open their doors across all five boroughs: engineering works, private houses, industrial sites, religious buildings and government interiors. Some are walk-up and some require an advance reservation that is released a couple of weeks beforehand, so check the programme when it is published rather than turning up hopefully.',
      'Comic Con is the opposite: a ticketed event that sells out months ahead and whose effect on a non-attending visitor is purely congestion around Hudson Yards and on the 7 train from Thursday 8 to Sunday 11 October. If you are staying near the Javits Center that weekend, expect the neighbourhood to be busy in costume.',
      'Halloween on a Saturday is a significant detail. The Village Halloween Parade proceeds up Sixth Avenue and is free both to watch and, unusually, to join if you are in costume. On a weekend it draws its largest crowds, and Greenwich Village becomes effectively impassable from late afternoon. The following morning, Sunday 1 November, the clocks go back, so that is also the night everyone in New York gains an hour.',
    ],
  },

  closures: {
    capsule:
      'Nothing shuts for the season in October, which makes it the last completely unrestricted month of the year. From 1 November the zoos move to winter hours, the seasonal Governors Island ferry ends, and the helicopter operator\'s winter no-refund period begins on 20 November.',
    rows: [
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Last month of full operation', note: 'From 1 November hours become 10:00 to 16:30 daily and the Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing all close for the winter.' },
      { site: 'Governors Island, Brooklyn ferry route', closed: 'Final weeks, ends early November', note: 'Weekends and public holidays only. The Manhattan route from the Battery Maritime Building continues all year.' },
      { site: 'Central Park rowing boats', closed: 'Season winding down', note: 'Walk-up only, 10:00 to dusk, roughly April to November and weather permitting. There is no advance booking in any month.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No Sunday flights', note: 'October falls between the two published no-refund windows, so cancellation terms are at their most flexible this month. The winter window opens on 20 November.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Open every day in October', note: 'Thanksgiving and 25 December are the only two closure days in the year, and both fall later.' },
      { site: 'Greenwich Village streets', closed: 'Saturday 31 October, evening', note: 'The Halloween parade route along Sixth Avenue and the surrounding streets become impassable from late afternoon.' },
    ],
    body: [
      'October is the last month where you can plan without checking an operator\'s season band, which is a real advantage that is easy to overlook. Every cruise runs its full timetable, every zoo is on summer hours, the Hard Hat Tour at Ellis Island is at six departures a day, and no attraction in this guide has cut anything back.',
      'The clock change on Sunday 1 November is the hard edge of the month and it is worth planning around rather than discovering. Sunset on Saturday 31 October is 17:54. On Sunday 1 November it is 16:53. Nothing about the weather changes, but an hour of usable evening disappears overnight, which alters every sunset cruise, every rooftop plan and every walk home from a museum.',
      'We are not listing seasonal ice rinks or holiday markets on this page. The 2026-27 opening dates for the Rockefeller Center rink, Wollman Rink in Central Park, Bryant Park\'s Winter Village and the Union Square and Columbus Circle markets had not been published when this page was written. They typically open from late October or early November, but a typical pattern is not a date, and we will not publish one we cannot source.',
    ],
  },

  packing: {
    capsule:
      'Pack for 18.1C afternoons and 10.8C mornings, which is one jacket rather than a coat. The item that earns its space in October is a genuinely waterproof outer layer, because 111mm falls in slow frontal systems that can rain for most of a day.',
    body: [
      'The daily spread is the thing to dress for. A 7.3C gap between the average high and low means the walk to breakfast and the drink after dinner both want a layer that the middle of the day does not. A packable jacket that lives in a bag from eleven until five is the single most useful October item.',
      'Do not pack for snow. The October snowfall normal for Central Park is 0.3cm, which is a trace figure representing the rare late-month flurry. Real winter kit is a November decision at the earliest, and genuinely a December one.',
    ],
    list: [
      'A waterproof jacket rather than an umbrella, for all-day frontal rain',
      'One warm mid-layer for 10.8C mornings and post-sunset evenings',
      'Broken-in walking shoes, because this is the month you will walk furthest',
      'A costume, or at least something dark, if you are in the Village on Saturday 31 October',
      'A reminder that the clocks go back on Sunday 1 November, the morning after Halloween',
    ],
  },

  faqs: [
    {
      question: 'Is October the most expensive month to visit New York?',
      answer: 'Yes, on a monthly basis, and this is the fact most New York guides get wrong. Hotel occupancy reached 89.4 per cent in October 2025, the highest of any top-25 US market. December contains the most expensive single week, between Christmas and New Year, but December\'s monthly average is pulled down by a soft first ten days. October has no soft period at all.',
    },
    {
      question: 'What is the weather like in New York in October?',
      answer: 'The best of the year for walking. The NOAA Central Park normals give an average high of 18.1C and an average low of 10.8C, with 111mm of precipitation. The snowfall normal is 0.3cm, a trace rather than a genuine risk. Mid-month daylight is 11 hours 11 minutes, with sunrise at 07:06 and sunset at 18:17.',
    },
    {
      question: 'When do the clocks change in New York?',
      answer: 'Daylight saving ends on Sunday 1 November 2026 and resumes on Sunday 14 March 2027. The effect is immediate: sunset falls from 17:54 on Saturday 31 October to 16:53 on Sunday 1 November. That single hour is the biggest practical difference between a late-October trip and an early-November one, because it decides whether you get an evening after your last attraction.',
    },
    {
      question: 'What is Open House New York?',
      answer: 'A free weekend, Friday 16 to Sunday 18 October, when several hundred buildings across all five boroughs that are normally closed to the public open their doors. It covers private houses, infrastructure, industrial sites and government interiors. Some venues are walk-up and some release advance reservations shortly beforehand, so check the published programme rather than arriving on spec.',
    },
    {
      question: 'Is the Village Halloween Parade worth going to?',
      answer: 'It falls on Saturday 31 October this year, which makes it the busiest possible night for it. The parade runs up Sixth Avenue in Greenwich Village, is free to watch and is unusual in that anyone in costume can join the procession rather than only watching it. The trade-off is that the surrounding streets become impassable from late afternoon, so arrive early or watch from further up the route.',
    },
    {
      question: 'Is October a good month for the observation decks?',
      answer: 'It is the best month of the ten covered here for the outdoor ones. At 18.1C you can actually stand on an open deck rather than glance at it, and the wind and lightning closures that Edge warns about in its weather policy are far less likely than in the summer storm season. Top of the Rock also gets its strongest month, because its northward view over Central Park is the one that changes colour.',
    },
  ],
};

export const november: MonthContent = {
  slug: 'new-york-in-november',
  month: 'November',
  monthKey: 'november',
  yearOffset: 0,
  prevMonth: 'October',
  prevPath: '/new-york-in-october',
  nextMonth: 'December',
  nextPath: '/new-york-in-december',
  metaDescription:
    'New York in November: 12.2C highs, sunset at 16:39 and the 100th Macy\'s Thanksgiving Parade on Thursday 26 November. Weather table, zoo winter hours, marathon and parade dates, closures and ten ranked tours.',
  heroCapsule:
    'November is the month New York changes gear. The clocks go back on Sunday 1 November, the same morning the marathon runs, and sunset collapses from 17:54 to 16:53 overnight. Average highs of 12.2C, the 100th Macy\'s Thanksgiving Parade on Thursday 26 November, and the first zoo winter hours of the year.',

  verdict: {
    capsule:
      'Yes, and it is the best value of the autumn. Average highs of 12.2C and 91mm of precipitation make November the second driest month in this guide. The price is light: mid-month daylight is 9 hours 58 minutes and the sun is down by 16:39, so plan on afternoons ending early.',
    body: [
      'November divides cleanly into two halves and they behave like different months. The first ten days are the quietest and cheapest stretch of the autumn: the October conference season has finished, the holiday season has not started, and hotel rates dip properly for the first time since the summer. From about the 20th, Thanksgiving pulls everything back up again.',
      'The city itself is at its most manageable in that first fortnight. Attraction queues shorten noticeably, restaurant tables become bookable at short notice, and the walking weather is still perfectly workable at 12.2C. If you want New York without paying October prices, this is the window, and it is a genuinely underrated one.',
      'Then the calendar detonates. Radio City opens its Christmas run on Wednesday 4 November, the New York Botanical Garden Holiday Train Show opens on Saturday 14 November, and Thanksgiving on Thursday 26 November brings the 100th Macy\'s parade with the largest crowds of the New York year outside New Year\'s Eve. The city puts its whole winter machinery in place inside three weeks.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 12.2C and lows of 5.6C, with 91mm of precipitation, the second lowest of the ten months, and a snowfall normal of 1.3cm. Mid-November gives 9 hours 58 minutes of daylight, sunrise 06:41 and sunset 16:39, following the clock change on Sunday 1 November.',
    body: [
      'The clock change is the defining weather event of the month even though it is not weather. Sunset on 31 October is 17:54; on 1 November it is 16:53. That single overnight shift removes an hour of usable evening from every day for the rest of the season, and it happens before the temperature has fallen far at all. New York in the first week of November is mild and dark at the same time, which catches people out.',
      'The precipitation figure is the good news. At 91mm, November is drier than every month in this guide except February, and drier than August by a quarter. The snowfall normal of 1.3cm is real but marginal: it represents an occasional late-month event rather than a reliable feature, and it is a tenth of December\'s 12cm.',
      'Daylight loss slows from October\'s steep decline to 56 minutes across the month, from 10 hours 29 minutes on the 1st to 9 hours 33 minutes on the 30th. That is because the city is approaching the solstice, where the rate of change flattens out. Practically, it means the difference between the start and end of November is much smaller than the difference between the start and end of October.',
    ],
  },

  crowds: {
    capsule:
      'The first ten days of November are among the best-value days of the New York year. From roughly the 20th, Thanksgiving reverses that completely: the 100th Macy\'s parade on Thursday 26 November draws the largest daytime crowds the city sees outside New Year\'s Eve.',
    body: [
      'Two of the year\'s three cheapest windows fall in this guide, and this is one of them. The first ten days of November sit between the October conference peak and the holiday build-up, with nothing seasonal yet running and the weather still reasonable. The other is January after the first week, which is cheaper still but a great deal colder.',
      'The New York City Marathon on Sunday 1 November is a genuine consideration if you are arriving that weekend. It closes roads across all five boroughs for most of the day and puts serious pressure on hotels the night before. It also falls on the morning the clocks go back, which gives the field an extra hour in bed and every visitor an extra hour of Sunday.',
      'Thanksgiving week is its own animal. The parade on Thursday 26 November is the 100th, which will draw more people than a normal year, and the balloon inflation on the streets beside the American Museum of Natural History the evening before is a free event in its own right and increasingly crowded. Expect the Statue of Liberty ferry to be closed on Thanksgiving Day itself, along with the hop-on hop-off bus, and expect Friday 27 November to be one of the busiest retail days in Midtown all year.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for November so that indoor and early-finishing experiences rise as sunset moves to 16:39. The open-top bus drops out on the clock change and the helicopter loses its refund flexibility from the 20th.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A warm deck in a 12.2C month',
        why: 'Keeps top place, and November suits it. With sunset at 16:39 you can book a sunset slot in the late afternoon and still have a whole evening left, which is not possible in the long days of May. The enclosed, heated design matters more each month from here.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Looking down on Rockefeller Center as it dresses for winter',
        why: 'Moved up for November because of where it stands. This deck sits directly above the Rockefeller Center plaza, so from the middle of the month you are looking down on the whole holiday setup taking shape below you. The tree lighting is expected on Wednesday 2 December, though the exact date is not officially confirmed.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A full indoor half-day as the light goes',
        why: 'With only 9 hours 58 minutes of daylight, the calculation changes: an indoor booking no longer costs you outdoor time because there is far less of it to spend. This remains the best-value serious museum experience in the city.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'The Thanksgiving balloon inflation, and the day itself',
        why: 'Ranked up for a specific November reason. The Macy\'s parade balloons are inflated on the streets around the museum on the evening of Wednesday 25 November, which is free to watch and busy, and the museum is the natural anchor for that part of the Upper West Side over Thanksgiving week.',
      },
      {
        slug: 'nyc-mj-the-musical-on-broadway',
        bestFor: 'A Broadway evening that starts after dark anyway',
        why: 'Moved up because November is the first month where an evening show costs you nothing in daylight. Two important caveats: this booking is non-refundable, and the production has a closing date of Sunday 17 January, so a November booking is comfortably inside the run.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'An outdoor deck with a published cold-weather policy',
        why: 'Edge describes itself as all-weather and states that the outdoor floors are heated and cleared on snowy days, with closures possible in high winds or lightning. It is the only major New York deck that publishes anything on this at all, which becomes the deciding factor from November onwards.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'Both islands, if you start early',
        why: 'Still entirely doable, but the arithmetic has tightened: with sunset at 16:39 you need a morning departure to see Liberty Island and Ellis Island properly. Note the ferry does not run at all on Thanksgiving, Thursday 26 November, one of only two closure days in its year.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'A city-lights sailing rather than a sunset one',
        why: 'The same product, a different experience. After the clock change the sun is down at 16:39 by mid-month, so this becomes a lights-of-Manhattan cruise rather than a sunset cruise. Dress for the water: it is materially colder on deck than on shore.',
      },
      {
        slug: 'nyc-harlem-hallelujah-gospel-wednesday-concert',
        bestFor: 'A warm hour on a dark Wednesday afternoon',
        why: 'An indoor hour at the lowest price in our catalogue, rated 4.8 from more than three thousand reviews. In a month where usable daylight has fallen to under ten hours, short warm bookings that do not eat the middle of the day earn their place.',
      },
      {
        slug: 'nyc-speakeasy-drinks-and-prohibition-history-tour',
        bestFor: 'Adults, indoors and underground, 21 and over',
        why: 'Three hours largely below street level, which suits a 12.2C evening far better than a walking tour above it. Photo identification is expected: the age limit on this one is 21, not 18.',
      },
    ],
    note:
      'The open-top hop-on hop-off bus drops out of the ten from November until March. It has more than six thousand reviews and it is a good product in mild weather, but no official statement guarantees the top deck is covered or heated, and 12.2C with the sun down at 16:39 is not the season for an uncovered roof. The service also does not run at all on Thanksgiving Day. The Manhattan helicopter tour holds normal terms until 19 November and then enters the operator\'s published no-refund window from 20 November to 5 January, so a booking in the second half of the month cannot be cancelled for a refund.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For November we ranked on the clock change rather than the temperature: sunset moving from 17:54 to 16:53 on 1 November does more to a New York itinerary than the 5.9C fall in average high, so indoor and short-format bookings rose and anything with an open roof came out.',
  },

  events: {
    capsule:
      'November opens with the marathon on Sunday 1 November, the same morning the clocks go back, and ends with the 100th Macy\'s Thanksgiving Day Parade on Thursday 26 November. In between, the city\'s entire winter programme switches on across three weeks.',
    rows: [
      { event: 'TCS New York City Marathon', dates: 'Sunday 1 November', where: 'All five boroughs, finishing in Central Park', free: 'Free to watch, road closures all day' },
      { event: 'Daylight saving ends', dates: 'Sunday 1 November', where: 'Nationwide', free: 'Sunset falls from 17:54 to 16:53' },
      { event: 'Radio City Christmas Spectacular opens', dates: 'From Wednesday 4 November, 230 performances', where: 'Radio City Music Hall, Midtown', free: 'Ticketed' },
      { event: 'Veterans Day', dates: 'Wednesday 11 November', where: 'Fifth Avenue parade', free: 'Free to watch, federal holiday' },
      { event: 'NYBG Holiday Train Show opens', dates: 'Saturday 14 November to Sunday 10 January', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. The Garden is closed on Mondays' },
      { event: 'Macy\'s parade balloon inflation', dates: 'Wednesday 25 November, evening', where: 'Streets beside the American Museum of Natural History', free: 'Free to watch' },
      { event: 'Macy\'s Thanksgiving Day Parade, the 100th', dates: 'Thursday 26 November', where: 'Central Park West to Herald Square', free: 'Free to watch' },
      { event: 'Nutcracker season opens', dates: 'From Friday 27 November', where: 'Lincoln Center, Upper West Side', free: 'Ticketed' },
    ],
    body: [
      'The 100th Macy\'s parade is the headline and it deserves a plan rather than a hope. It runs on the morning of Thursday 26 November from Central Park West down to Herald Square, it is free, and for a milestone edition the crowd will be heavier than usual. The balloon inflation the previous evening, on the streets beside the American Museum of Natural History, has become an event in its own right and is the easier of the two to actually see.',
      'Radio City opens its Christmas run on Wednesday 4 November with 230 performances, the most it has ever scheduled. The closing date is not published on the official site. Third-party listings suggest early January, but we are not going to state a date we cannot verify from the source, so if you are planning a January trip around it, check the official schedule before booking flights.',
      'The New York Botanical Garden Holiday Train Show runs from Saturday 14 November to Sunday 10 January. Two practical points that trip people up: it is in the Bronx, not Manhattan, roughly twenty minutes on Metro-North from Grand Central, and the Garden is closed on Mondays. Neither is obvious from most listings.',
    ],
  },

  closures: {
    capsule:
      'November is when New York\'s winter restrictions begin. From 1 November the zoos move to 10:00 to 16:30 with five attractions closed for the season, the Statue of Liberty ferry closes for Thanksgiving on the 26th, and the helicopter no-refund window opens on 20 November.',
    rows: [
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Winter hours from 1 November to March', note: 'Daily 10:00 to 16:30. The Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing are all closed for the winter, and ticket prices are lower to reflect it.' },
      { site: 'Bronx Zoo', closed: 'Thanksgiving, Thursday 26 November', note: 'Also closed on Christmas Day, New Year\'s Day and Martin Luther King Jr Day.' },
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Thanksgiving, Thursday 26 November', note: 'One of only two days in the entire year when the ferry and the islands do not operate. The other is 25 December.' },
      { site: 'Hop-on hop-off sightseeing bus', closed: 'Thanksgiving, Thursday 26 November', note: 'The service runs daily except Thanksgiving and 31 December.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund window from 20 November to 5 January', note: 'Bookings from the 20th cannot be cancelled for a refund. No Sunday flights in any month.' },
      { site: 'Governors Island, Brooklyn ferry route', closed: 'Season ends early November', note: 'The island stays open all year and the Manhattan route from the Battery Maritime Building continues. Only the seasonal Brooklyn route stops.' },
      { site: 'Central Park rowing boats', closed: 'Season ends around November', note: 'Walk-up only, never bookable in advance, roughly April to November and weather permitting.' },
      { site: 'City roads, Sunday 1 November', closed: 'Marathon route closures all day', note: 'The course crosses all five boroughs. Crossing the route by car on marathon Sunday is close to impossible for most of the day.' },
    ],
    body: [
      'The zoo changeover on 1 November is the largest single seasonal reduction in the New York year and it is barely covered anywhere. Hours become 10:00 to 16:30 daily, and the Children\'s Zoo, the Monorail, the Butterfly Garden, the Zoo Shuttle and Budgie Landing all close until spring. Admission prices drop to reflect it, which is fair, but if you are taking small children specifically for the Children\'s Zoo, November is the wrong month.',
      'Thanksgiving is the one day of the month when significant things simply do not run. The Statue of Liberty ferry does not sail, which is one of only two days in the year, and the hop-on hop-off bus does not operate. The parade replaces both, which is a reasonable trade, but do not book a Liberty Island ticket for the 26th expecting it to work.',
      'One warning about winter helicopter bookings. From 20 November to 5 January the operator runs a published no-refund period, so a flight in that window cannot be cancelled for money back. Separately, a doors-off photography flight in genuine cold will very likely be flown with the doors closed, because that style of operator will not fly doors-off below about 2C, and a weather cancellation on those flights typically produces a twelve-month voucher rather than a refund. Both facts are worth knowing before you pay.',
    ],
  },

  packing: {
    capsule:
      'Pack a proper coat rather than a jacket. Average highs of 12.2C and lows of 5.6C sound manageable, but with the sun down at 16:39 you will spend a large share of your waking hours in the dark, and the wind off the harbour makes a cruise deck feel far colder than the forecast.',
    body: [
      'The mistake is dressing for the daytime average. A 12.2C afternoon in Midtown sun is pleasant; the same day at 17:30 in a wind funnelling down an avenue is not, and by late November it is fully dark by then. Anything on the water, and any observation deck with an outdoor section, wants a layer more than you think.',
      'If Thanksgiving is in your dates, add standing-still clothing. Watching a parade means being stationary outdoors for two to three hours in the morning, often having arrived before dawn to hold a position, and that is a completely different thermal problem from walking around. Warm boots and a hat do more than a heavier coat.',
    ],
    list: [
      'A proper winter coat, not a mid-season jacket',
      'Hat and gloves, particularly for anything on the harbour',
      'Warm, waterproof footwear for a 1.3cm snowfall normal and cold rain',
      'Extra layers if you are standing at the parade on Thursday 26 November',
      'A torch or phone light, since it is dark from 16:39 in mid-month',
    ],
  },

  faqs: [
    {
      question: 'When is the Macy\'s Thanksgiving Day Parade in 2026?',
      answer: 'Thursday 26 November 2026, and it is the 100th edition. The route runs from Central Park West down to Herald Square in the morning, and it is free to watch. The balloon inflation takes place the previous evening, Wednesday 25 November, on the streets beside the American Museum of Natural History, which is also free and generally easier to see than the parade itself.',
    },
    {
      question: 'Is anything closed in New York on Thanksgiving?',
      answer: 'Yes, more than on most holidays. The Statue of Liberty and Ellis Island ferry does not run at all, one of only two days in the year alongside 25 December. The hop-on hop-off sightseeing bus does not operate. The Bronx Zoo is closed. Broadway performance schedules also shift around the holiday, so check individual show times rather than assuming a normal Thursday.',
    },
    {
      question: 'What changes at New York zoos in November?',
      answer: 'A great deal. From 1 November through to March, the Bronx Zoo and Central Park Zoo run winter hours of 10:00 to 16:30 daily, and the Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing all close for the season. Ticket prices are reduced accordingly. The zoos are also closed on Thanksgiving, Christmas Day, New Year\'s Day and Martin Luther King Jr Day.',
    },
    {
      question: 'How dark is it in New York in November?',
      answer: 'Dark early, from the very start of the month. The clocks go back on Sunday 1 November and sunset drops from 17:54 to 16:53 overnight. By the 15th, sunset is 16:39 with sunrise at 06:41, giving 9 hours 58 minutes of daylight. The month loses another 56 minutes overall. Plan on your last outdoor activity finishing by mid-afternoon.',
    },
    {
      question: 'Is early November a cheap time to visit New York?',
      answer: 'It is one of the two best-value windows in this guide. The first ten days sit between the October conference peak, when occupancy reached 89.4 per cent, and the Thanksgiving build-up, with nothing seasonal yet running. The other cheap window is January after the first week, which is cheaper still but far colder, at 4.2C average highs and 22cm of snow.',
    },
    {
      question: 'When does the Rockefeller Center tree get lit?',
      answer: 'The lighting is expected on Wednesday 2 December, but treat that as expected rather than confirmed: published sources disagree between the 2nd and the 3rd, and we will not state a date we cannot verify. What is certain is that the tree itself goes up during November, so from the middle of the month the plaza is already dressed, which is worth knowing if you are booking Top of the Rock for the view down on to it.',
    },
  ],
};

export const december: MonthContent = {
  slug: 'new-york-in-december',
  month: 'December',
  monthKey: 'december',
  yearOffset: 0,
  prevMonth: 'November',
  prevPath: '/new-york-in-november',
  nextMonth: 'January',
  nextPath: '/new-york-in-january',
  metaDescription:
    'New York in December: 6.8C highs, 12cm of snow and sunset at 16:30. Why the first ten days are cheap and the last week is the most expensive of the year, plus closures, holiday dates and ten ranked tours.',
  heroCapsule:
    'December in New York is two separate trips wearing the same name. The first ten days are among the cheapest of the winter. The week between Christmas and New Year is the most expensive of the entire year. Average highs are 6.8C, the snowfall normal is 12cm, and the sun sets at 16:30.',

  verdict: {
    capsule:
      'Yes, if you pick your ten days carefully. December\'s monthly averages hide a split: the first third is quiet and affordable, the final week is the costliest in New York\'s calendar. The weather is genuinely cold, at 6.8C average highs and 1.0C lows, with 12cm of snow.',
    body: [
      'Almost every New York guide calls December the most expensive month. It is not. October is, on hotel occupancy, which reached 89.4 per cent in October 2025. What December has is the most expensive week, the stretch from about the 23rd to the 2nd of January, and a monthly average that is dragged down by a genuinely soft first ten days when the city is dressed for Christmas but nobody has arrived yet.',
      'That first third of December is the most under-appreciated window in this guide. The tree is up in Rockefeller Center, the shop windows are done, the Botanical Garden train show has been running since 14 November and Radio City has been playing since the 4th. Rates have not moved yet because the school holidays have not started. You get the entire spectacle at close to November prices.',
      'The other half of the argument is the light. Mid-December daylight is 9 hours 19 minutes, the least of the year, and the solstice on Monday 21 December bottoms out at 9 hours 18 minutes. Sunset sits at 16:30 through the first half of the month. New York handles this better than most cities because so much of what you would do here is indoors and lit anyway, but it does mean that afternoons effectively end at teatime.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 6.8C and lows of 1.0C, with 111mm of precipitation and a snowfall normal of 12cm, the first substantial snow month of the year. Mid-December gives 9 hours 19 minutes of daylight, sunrise 07:11 and sunset 16:30, the earliest sunset of the whole year.',
    body: [
      'December is the month New York snow stops being a curiosity. The Central Park normal is 12cm, up from 1.3cm in November, and it is enough that a snowy day during your trip is a realistic possibility rather than a lucky one. It is also, notably, less than January at 22cm and less than half of February at 26cm, so December is not the snowiest month despite being the one everyone pictures with snow.',
      'The daylight barely moves across the month, losing only ten minutes in total, because the city is sitting at the bottom of the annual curve. Sunset holds at around 16:30 from the 1st through to the middle of the month before starting to creep later, which means the very earliest sunsets of the New York year happen in the first half of December rather than at the solstice itself.',
      'Precipitation of 111mm is the same as October, and this is the month where it starts arriving in more than one form. The practical consequence is not the snow so much as what follows it: melt and refreeze overnight when lows average 1.0C, so pavements that were wet at four in the afternoon are icy at eight in the morning. That is the real December hazard, not the snowfall itself.',
    ],
  },

  crowds: {
    capsule:
      'The single most useful fact about a December trip is that the first ten days and the last ten days are different markets. Rates are soft until roughly the 10th and then climb steeply, peaking in the week between Christmas and New Year, the most expensive week of the New York year.',
    body: [
      'If your dates are flexible, moving a December trip from the third week to the first will save more money than any other decision on this page. The city looks identical: the tree is lit, the windows are done, the shows are running. What is missing in the first ten days is the school holidays, and with them the queues at every major attraction and the peak in room rates.',
      'From roughly the 20th, Midtown becomes genuinely difficult. Fifth Avenue between about 48th and 59th Street is the pinch point, with pedestrian flow around the Rockefeller Center tree slowing to a shuffle in the evenings. If you want to see the tree without the crush, go before nine in the morning, which is easy in a month where sunrise is 07:11 anyway.',
      'New Year\'s Eve in Times Square is the one thing that genuinely does not work as most visitors imagine. Access is by security-screened pen from early in the afternoon, there is no re-entry, and there are no public toilets inside the secured area. Plenty of New Yorkers have never done it once. It is worth knowing what you are signing up for before you build a trip around 31 December.',
    ],
  },

  tours: {
    capsule:
      'Ranked on verified GetYourGuide review volume, then re-ordered for December so that heated interiors and short formats rise against 6.8C highs, 12cm of snow and a 16:30 sunset. Everything on this list still runs: December is the last month before the harbour cruise winter season bites.',
    picks: [
      {
        slug: 'nyc-summit-one-vanderbilt-tickets',
        bestFor: 'A heated, enclosed view in the coldest daylight of the year',
        why: 'Stays top on review volume and holds up on seasonal fit. Almost all of it is enclosed and heated, and with sunset at 16:30 a late-afternoon slot puts you up there for the transition from day to a fully lit Manhattan without needing to be out late.',
      },
      {
        slug: '911-memorial-museum-admission-skip-the-ticket-line',
        bestFor: 'A serious two hours underground while it snows',
        why: 'Entirely below ground, so weather is irrelevant to it, which matters in the first month with a 12cm snowfall normal. It also has the advantage of not requiring you to be anywhere near the Midtown crush.',
      },
      {
        slug: 'american-museum-of-natural-history-super-saver-admission',
        bestFor: 'A full warm day out with children',
        why: 'Ranked up on seasonal logic. When the usable daylight is 9 hours 19 minutes and the pavement is icy, a museum you can spend five hours in stops being a rainy-day fallback and becomes the main event of the day.',
      },
      {
        slug: 'new-york-city-top-of-the-rock-observation-deck-ticket',
        bestFor: 'Looking straight down on the tree and the rink',
        why: 'This is its month. The deck sits directly above the Rockefeller Center plaza, so the tree and the skating rink are beneath you rather than a walk away. The tree lighting is expected on Wednesday 2 December, though published sources split between the 2nd and 3rd and we will not state it as confirmed.',
      },
      {
        slug: 'nyc-mj-the-musical-on-broadway',
        bestFor: 'A Broadway evening in the darkest month',
        why: 'Moved up because a 9 hours 19 minute day costs an evening show nothing at all. Two things to be clear about: the booking is non-refundable, and the production closes on Sunday 17 January, so December is one of the last full months of the run.',
      },
      {
        slug: 'nyc-edge-immersive-observation-deck-ticket',
        bestFor: 'The only outdoor deck with a stated snow policy',
        why: 'Edge describes itself as all-weather and states that its outdoor floors are heated and cleared on snowy days, with closures possible in high winds or lightning. SUMMIT, Top of the Rock and the Empire State Building publish no weather policy at all, so in a 12cm snow month this is the one deck where you know the answer in advance.',
      },
      {
        slug: 'new-york-city-the-friends-experience',
        bestFor: 'A warm hour indoors between other things',
        why: 'Ranked up for December purely on format. One hour, entirely indoors, in Midtown, which makes it a genuinely useful piece of scheduling in a month where you are looking for somewhere warm between two outdoor plans rather than a whole afternoon.',
      },
      {
        slug: 'nyc-circle-line-2h-harbor-lights-cruise-skip-the-box-office',
        bestFor: 'Manhattan lit up, while the schedule is still full',
        why: 'December still falls inside the operator\'s shoulder season band, so the full range of sailings runs. That changes on 5 January, when the winter season begins and the flagship full-island cruise stops entirely until March. If a harbour cruise is on your list for this winter, December is the month to do it.',
      },
      {
        slug: 'nyc-harlem-hallelujah-gospel-wednesday-concert',
        bestFor: 'The best-value warm hour in the city',
        why: 'One hour, indoors, and the cheapest booking in our New York catalogue, rated 4.8 across more than three thousand reviews. In the month with the shortest days of the year, short and warm is worth a great deal.',
      },
      {
        slug: 'statue-of-liberty-ellis-island-ticket-options-with-ferry',
        bestFor: 'A cold, clear, uncrowded harbour morning',
        why: 'Drops several places from its review position, and honestly so. The ferry is open-deck, the wind off the harbour in December is severe, and 9 hours 19 minutes of daylight makes a two-island day tight. It does not run at all on 25 December. Go early, wrap up, and it is one of the quietest visits of the year.',
      },
    ],
    note:
      'The open-top hop-on hop-off bus is out of the December ten, as it is from November through to March: no official statement guarantees a covered or heated top deck, and 6.8C with 12cm of snow is not the month to gamble on it. It also does not run at all on 31 December. The Manhattan helicopter tour is out too, because the whole of December sits inside the operator\'s published no-refund window from 20 November to 5 January. The Niagara Falls and Washington DC coach days are out on daylight: a twenty-two hour and a fifteen hour trip in a month with 9 hours 19 minutes of light means most of both happens in the dark.',
    methodNote:
      'The base order is verified GetYourGuide review volume. For December we ranked on heat and format rather than popularity, because 6.8C average highs, a 12cm snowfall normal and a 16:30 sunset mean the practical question is how long you can stay outside, and we flagged the 5 January harbour cruise cut-off on every water-borne booking.',
  },

  events: {
    capsule:
      'December\'s dated calendar is short but heavy. The Rockefeller Center tree lighting is expected on Wednesday 2 December, Christmas Day falls on a Friday, and the Times Square ball drop closes out Thursday 31 December. Several seasonal attractions started in November and run right through.',
    rows: [
      { event: 'Rockefeller Center tree lighting', dates: 'Expected Wednesday 2 December, not officially confirmed', where: 'Rockefeller Plaza, Midtown', free: 'Free to attend, extremely crowded' },
      { event: 'NYBG Holiday Train Show', dates: 'Running to Sunday 10 January', where: 'New York Botanical Garden, the Bronx', free: 'Ticketed. Closed Mondays' },
      { event: 'Radio City Christmas Spectacular', dates: 'Running since Wednesday 4 November', where: 'Radio City Music Hall, Midtown', free: 'Ticketed. Closing date not published officially' },
      { event: 'Nutcracker season', dates: 'Running since Friday 27 November', where: 'Lincoln Center, Upper West Side', free: 'Ticketed' },
      { event: 'Winter solstice, shortest day', dates: 'Monday 21 December, 9h 18m of daylight', where: 'Citywide', free: 'Free' },
      { event: 'Christmas Day', dates: 'Friday 25 December', where: 'Citywide', free: 'Public holiday. Statue of Liberty ferry does not run' },
      { event: 'New Year\'s Eve ball drop', dates: 'Thursday 31 December', where: 'Times Square', free: 'Free, but secured pens from early afternoon with no re-entry' },
    ],
    body: [
      'The tree lighting is the one date everybody wants and the one we cannot confirm. Published sources split between Wednesday 2 December and Thursday 3 December, and no official confirmation was available when this page was written, so we describe it as expected on the 2nd rather than stating it. Either way, the tree itself is installed and visible well before it is lit, so a trip in the last week of November or the first week of December sees it regardless.',
      'The seasonal attractions that matter in December mostly opened in November, which is why the table above shows running dates rather than start dates. The Botanical Garden train show finishes on Sunday 10 January and the Garden closes on Mondays. The Radio City run has 230 scheduled performances, the most in its history, but its closing date is not on the official site, so if you are planning a January visit around it, verify directly.',
      'We are not publishing dates for the Rockefeller Center rink, Wollman Rink, the Bryant Park Winter Village or the Union Square and Columbus Circle holiday markets. None had confirmed 2026-27 dates when this page was written. They typically run from late autumn to early January, and that is as specific as an honest page can be. Check each operator directly if a rink or a market is the reason for your trip.',
    ],
  },

  closures: {
    capsule:
      'December is the last month before the harbour cruise winter schedule begins on 5 January. Within the month, 25 December closes the Statue of Liberty ferry and 31 December closes the sightseeing bus, and the helicopter no-refund window covers the entire month.',
    rows: [
      { site: 'Statue of Liberty and Ellis Island ferry', closed: 'Friday 25 December', note: 'One of only two days in the year the ferry does not sail. The other was Thanksgiving on 26 November.' },
      { site: 'Hop-on hop-off sightseeing bus', closed: 'Thursday 31 December', note: 'The service runs daily except Thanksgiving and 31 December.' },
      { site: 'Helicopter flights, Downtown Manhattan Heliport', closed: 'No-refund window all month, to 5 January', note: 'No refunds for cancellation from 20 November to 5 January. No Sunday flights in any month.' },
      { site: 'Harbour cruises, flagship full-island route', closed: 'Last month before the winter cut', note: 'December falls in the operator\'s shoulder band so everything runs. From 5 January to 5 March the flagship full-island cruise has no departures at all.' },
      { site: 'Bronx Zoo and Central Park Zoo', closed: 'Winter hours, plus closed 25 December', note: 'Daily 10:00 to 16:30. Children\'s Zoo, Monorail, Butterfly Garden, Zoo Shuttle and Budgie Landing closed for the season. Also shut on New Year\'s Day.' },
      { site: 'New York Botanical Garden', closed: 'Every Monday', note: 'A year-round rule that catches people out during the Holiday Train Show, which runs to Sunday 10 January.' },
      { site: 'Times Square', closed: 'Thursday 31 December, from early afternoon', note: 'Secured viewing pens, no re-entry once inside, no public toilets within the secured area.' },
      { site: 'Central Park rowing boats', closed: 'Closed for the winter', note: 'Walk-up only in season, roughly April to November. There is no advance booking at any time of year.' },
    ],
    body: [
      'The single most valuable planning fact in this whole guide sits at the end of December. From 5 January to 5 March the harbour cruise operator moves to its winter season band, and in that window the flagship full-island cruise has no departures whatsoever, while the landmarks sailing halves from four departures a day to two. December is inside the shoulder band, so everything still runs. If a full harbour cruise is on your list for this winter, doing it in December rather than January is not a preference, it is the difference between possible and not.',
      'Christmas Day itself is quieter in New York than in most European cities, but the Statue of Liberty ferry is one of the things that genuinely stops. It runs every other day of the year apart from Thanksgiving. Many restaurants, particularly in Chinatown, trade normally, and the city does not empty the way a European capital does.',
      'A word on the Empire State Building, because the error is so widespread it is worth correcting on a page about the cold. The 102nd floor is the enclosed observatory and the 86th floor is the open-air one. Guides routinely state this the wrong way round, which matters a great deal in a month with 6.8C average highs: if you want to be indoors up there, you want the 102nd, not the 86th.',
    ],
  },

  packing: {
    capsule:
      'Pack for 6.8C days, 1.0C nights and a 12cm snowfall normal, and pack for ice specifically. With overnight lows sitting at freezing, the real December hazard is not falling snow but the melt from the afternoon refreezing on pavements overnight.',
    body: [
      'Footwear is the December decision that matters most. New York clears its main pavements quickly, but crossings, kerbs and subway stair treads hold water that freezes, and the city\'s uneven kerb cuts are where people go over. Boots with a genuine grip pattern are worth more than an extra coat layer.',
      'The wind is the second factor. Manhattan\'s avenue grid runs north to south and channels wind straight down it, so the effective temperature on Sixth Avenue in December is regularly well below the 6.8C average high. Anything on the harbour, including the ferry and every cruise on this page, is colder again by a clear margin.',
      'On the other hand, do not overdress for the interiors. American heating is set high, and you will move between a 1.0C street and a 22C museum a dozen times a day. Layers you can strip in ten seconds beat a single very warm coat.',
    ],
    list: [
      'Boots with a real grip sole, for overnight refreeze rather than snowfall',
      'A windproof outer layer for the north to south avenue wind',
      'Hat, gloves and a scarf, particularly for anything on the harbour',
      'Layers you can shed quickly for aggressively heated interiors',
      'A power bank, because cold drains phone batteries fast and it is dark by 16:30',
    ],
  },

  faqs: [
    {
      question: 'Is December the most expensive month to visit New York?',
      answer: 'No. October is the most expensive month, with hotel occupancy at 89.4 per cent in October 2025, the highest of any top-25 US market. December contains the most expensive week of the year, from roughly the 23rd to 2 January, but its monthly average is pulled down by a genuinely soft first ten days. Separating the two is the single most useful thing to know about pricing a December trip.',
    },
    {
      question: 'Does it snow in New York in December?',
      answer: 'Often, but less than you might expect. The NOAA Central Park normal for December is 12cm, against 22cm in January and 26cm in February. So December is the first substantial snow month of the winter but not the snowiest. The bigger practical issue is ice: with average lows of 1.0C, afternoon melt refreezes overnight on pavements and kerbs.',
    },
    {
      question: 'What time does it get dark in New York in December?',
      answer: 'Very early. Sunset is 16:30 on 15 December, having sat at around 16:30 since the start of the month, and mid-month daylight is 9 hours 19 minutes with sunrise at 07:11. The shortest day is Monday 21 December at 9 hours 18 minutes. The month only loses ten minutes of daylight overall, because New York is sitting at the flat bottom of the annual curve.',
    },
    {
      question: 'Can you do a harbour cruise in New York in December?',
      answer: 'Yes, and December is the month to do it. The operator\'s season bands put December in the shoulder period, so the full range of sailings runs. From 5 January to 5 March the winter band applies, and in that window the flagship full-island cruise has no departures at all while the landmarks sailing drops from four departures a day to two. December is the last month of the winter with an unrestricted schedule.',
    },
    {
      question: 'What is open in New York on Christmas Day?',
      answer: 'More than in most European cities, but not everything. The Statue of Liberty and Ellis Island ferry does not run on 25 December, one of only two days in its year. The Bronx Zoo is closed. Public transport runs on a holiday schedule rather than stopping, which is a significant difference from London. Restaurants in Chinatown are traditionally open and busy.',
    },
    {
      question: 'Is the Times Square New Year\'s Eve ball drop worth doing?',
      answer: 'Know what it involves before you commit. Access is through security-screened viewing pens that fill from early in the afternoon of Thursday 31 December, there is no re-entry once you are inside, and there are no public toilets within the secured area. That means a wait of many hours outdoors in a month with 1.0C average lows. It is genuinely iconic and genuinely uncomfortable.',
    },
  ],
};
