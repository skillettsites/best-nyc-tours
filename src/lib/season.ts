// Single build-time constant for the seasonal month pages.
//
// The set runs August of SEASON_BASE_YEAR through May of the following year. The
// year is rendered in the <title> tag and in the events section heading only. It
// never appears in a URL or in an H1, so rolling the whole set forward is a
// one-line edit here plus a content refresh.
export const SEASON_BASE_YEAR = 2026;

// Article datePublished / dateModified for the seasonal set.
export const SEASON_PUBLISHED = '2026-07-29';
export const SEASON_UPDATED = '2026-07-29';

// Months from August of the base year carry offset 0, January onwards carry 1.
export function seasonYear(yearOffset: 0 | 1): number {
  return SEASON_BASE_YEAR + yearOffset;
}

export const HUB_PATH = '/best-time-to-visit-new-york';

/** The date every price, rating and review count on these pages was checked against GetYourGuide. */
export const TOUR_DATA_CHECKED = '28 July 2026';

// Sources cited on the month pages. Each was read directly for this build.
export const CLIMATE_SOURCE = {
  label: 'NOAA 1991 to 2020 US Climate Normals, Central Park station USW00094728',
  url: 'https://www.ncei.noaa.gov/access/us-climate-normals/',
};

export const DAYLIGHT_SOURCE = {
  label: 'sunrise and sunset times computed for Central Park, 40.783N 73.965W',
  url: 'https://sunrise-sunset.org/',
};

export const CRUISE_SOURCE = {
  label: 'the Circle Line published seasonal sailing schedule',
  url: 'https://www.circleline.com/',
};

export const LIBERTY_SOURCE = {
  label: 'the National Park Service hours page for the Statue of Liberty',
  url: 'https://www.nps.gov/stli/planyourvisit/hours.htm',
};

export const EDGE_SOURCE = {
  label: 'the Edge NYC visitor information',
  url: 'https://www.edgenyc.com/',
};
