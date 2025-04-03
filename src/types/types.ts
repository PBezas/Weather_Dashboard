export interface WeatherDataType {
  address: string;
  currentConditions: { datetime: string; humidity: number; temp: number };
  description: string;
}

export interface WeatherDisplayProps {
  weatherData: WeatherDataType;
}

export interface UserPromptProps {
  sumbitPrompt: (value: string) => void;
}