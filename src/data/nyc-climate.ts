// New York monthly climate and daylight.
//
// Temperature, precipitation and snowfall: the NOAA 1991 to 2020 US Climate
// Normals for the Central Park station, GHCN id USW00094728, pulled from the
// NCEI Access Data Service (dataset normals-monthly-1991-2020, data types
// MLY-TMAX-NORMAL, MLY-TMIN-NORMAL, MLY-PRCP-NORMAL, MLY-SNOW-NORMAL). NOAA
// publishes those normals in Fahrenheit and inches; they are converted here and
// rounded to one decimal place for temperature and to the nearest millimetre
// and centimetre for precipitation and snowfall. Nothing is estimated.
// https://www.ncei.noaa.gov/access/us-climate-normals/
//
// Sunrise, sunset and length of day: computed for the Central Park coordinates
// 40.783N, 73.965W and rendered in local New York time, so the values already
// account for daylight saving. `daylight`, `sunrise` and `sunset` are for the
// 15th of the month. `daylightChange` is the difference in length of day between
// the first and the last day of that month.
// https://sunrise-sunset.org/
//
// US daylight saving in this window: clocks go back on Sunday 1 November 2026
// and forward on Sunday 14 March 2027.

export interface ClimateRow {
  month: string;
  avgHighC: number;
  avgLowC: number;
  /** Monthly precipitation normal, all forms, in millimetres. */
  precipMm: number;
  /** Monthly snowfall normal in centimetres. 0 means the normal is zero, not unknown. */
  snowCm: number;
  /** Length of day on the 15th. */
  daylight: string;
  /** Sunrise on the 15th, local time. */
  sunrise: string;
  /** Sunset on the 15th, local time. */
  sunset: string;
  /** Change in length of day between the 1st and the last day of the month. */
  daylightChange: string;
}

export const nycClimate: Record<string, ClimateRow> = {
  january: { month: 'January', avgHighC: 4.2, avgLowC: -2.3, precipMm: 92, snowCm: 22, daylight: '9h 38m', sunrise: '07:16', sunset: '16:54', daylightChange: 'gains 46m' },
  february: { month: 'February', avgHighC: 5.7, avgLowC: -1.4, precipMm: 81, snowCm: 26, daylight: '10h 43m', sunrise: '06:48', sunset: '17:31', daylightChange: 'gains 1h 07m' },
  march: { month: 'March', avgHighC: 9.9, avgLowC: 2.1, precipMm: 109, snowCm: 13, daylight: '11h 58m', sunrise: '07:05', sunset: '19:03', daylightChange: 'gains 1h 21m' },
  april: { month: 'April', avgHighC: 16.6, avgLowC: 7.5, precipMm: 104, snowCm: 1, daylight: '13h 21m', sunrise: '06:15', sunset: '19:36', daylightChange: 'gains 1h 14m' },
  may: { month: 'May', avgHighC: 21.9, avgLowC: 12.8, precipMm: 101, snowCm: 0, daylight: '14h 31m', sunrise: '05:36', sunset: '20:07', daylightChange: 'gains 55m' },
  june: { month: 'June', avgHighC: 26.5, avgLowC: 18.0, precipMm: 115, snowCm: 0, daylight: '15h 08m', sunrise: '05:22', sunset: '20:30', daylightChange: 'gains 9m' },
  july: { month: 'July', avgHighC: 29.4, avgLowC: 21.2, precipMm: 117, snowCm: 0, daylight: '14h 52m', sunrise: '05:36', sunset: '20:27', daylightChange: 'loses 42m' },
  august: { month: 'August', avgHighC: 28.5, avgLowC: 20.5, precipMm: 116, snowCm: 0, daylight: '13h 51m', sunrise: '06:04', sunset: '19:55', daylightChange: 'loses 1h 11m' },
  september: { month: 'September', avgHighC: 24.6, avgLowC: 16.8, precipMm: 109, snowCm: 0, daylight: '12h 31m', sunrise: '06:35', sunset: '19:06', daylightChange: 'loses 1h 17m' },
  october: { month: 'October', avgHighC: 18.1, avgLowC: 10.8, precipMm: 111, snowCm: 0.3, daylight: '11h 11m', sunrise: '07:06', sunset: '18:17', daylightChange: 'loses 1h 17m' },
  november: { month: 'November', avgHighC: 12.2, avgLowC: 5.6, precipMm: 91, snowCm: 1.3, daylight: '9h 58m', sunrise: '06:41', sunset: '16:39', daylightChange: 'loses 56m' },
  december: { month: 'December', avgHighC: 6.8, avgLowC: 1.0, precipMm: 111, snowCm: 12, daylight: '9h 19m', sunrise: '07:11', sunset: '16:30', daylightChange: 'loses 10m' },
};

export const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;

/** Annual context strings used in the weather table, so every page cites the same range. */
export const CLIMATE_CONTEXT = {
  high: 'Ranges from 4.2C in January to 29.4C in July',
  low: 'Ranges from -2.3C in January to 21.2C in July',
  precip: 'Driest is February at 81mm, wettest is July at 117mm',
  snow: 'Zero from May to September, heaviest in February at 26cm',
  daylight: 'From 9h 19m in mid-December to 15h 08m in mid-June',
  sunset: 'From 16:30 in mid-December to 20:30 in mid-June',
};
