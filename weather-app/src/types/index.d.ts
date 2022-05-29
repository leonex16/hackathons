export interface Settings {
  isSaveNetworkActive: boolean;
  isDarkModeActive: boolean;
}

export interface AutocompleteResponse {
  id:      string;
  name:    string;
  region:  string;
  country: string;
  src:     string;
}

interface Condition {
  icon: string;
  text: string;
}

interface Current {
  dayOrNight:    string;
  temperature:   Temperature;
  humidity:      Humidity;
  precipitation: Humidity;
  wind:          Humidity;
}

interface Humidity {
  label: string;
  value: number;
  unit:  string;
}

interface Temperature {
  C: string;
  F: string;
}

interface Location {
  name:      string;
  country:   string;
  localTime: string;
}

export interface Weather {
  id:        string;
  condition: Condition;
  location:  Location;
  current:   Current;
}
