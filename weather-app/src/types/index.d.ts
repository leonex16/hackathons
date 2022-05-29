export interface Settings {
  isSaveNetworkActive: boolean;
  isDarkModeActive: boolean;
}

export interface AutocompleteResponse {
  id: string;
  name: string;
  region: string;
  country: string;
  src: string;
}

export interface WeatherRealtimeResponse {
  id: string;
  condition: Condition;
  isMinimized: boolean;
  location: Location;
  current: Current;
}

interface Condition {
  icon: string;
  text: string;
}

interface Current {
  dayOrNight: string;
  temperature: Temperature;
  humidity: Humidity;
  lastUpdated: string;
  precipitation: Humidity;
  wind: Humidity;
}

interface Humidity {
  label: string;
  value: number;
  unit: string;
}

interface Temperature {
  C: number;
  F: number;
}

interface Location {
  name: string;
  country: string;
  localtime: string;
  region: string;
}
