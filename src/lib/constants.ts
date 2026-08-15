export const SITE_NAME = 'Best NYC Tours';
export const SITE_CITY = 'New York';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://best-nyc-tours.com';
export const SITE_DESCRIPTION = 'Discover the best tours, attractions, and experiences in New York. Book skip-the-line tickets and guided tours with instant confirmation and free cancellation.';
export const GYG_PARTNER_ID = 'LPT26IL';
export const GYG_CAMPAIGN = 'best_nyc_tours';
export const GYG_LOCATION_ID = '59';
// Display / FX default for this market (no-geo fallback only). Catalogue rows
// are still stored as GBP (every tour.currency in tours.ts is GBP); we do not
// rewrite those amounts. Do not lock widgets to this value.
export const SITE_CURRENCY = 'USD';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-W0DE3CDTYD';
export const CONTENT_DATE = '2026-08-07';
// The date every tour price, rating and review count was last re-verified
// against live GetYourGuide data. Only move this when that check is actually rerun.
export const DATA_CHECKED = '2026-08-07';

// Direct link to this city's full tour catalogue on GetYourGuide (partner-attributed).
export const GYG_CITY_URL = `https://www.getyourguide.com/${SITE_CITY.toLowerCase().replace(/\s+/g, '-')}-l${GYG_LOCATION_ID}/?partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;
