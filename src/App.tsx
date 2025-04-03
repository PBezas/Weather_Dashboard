import UserPrompt from "./components/UserPrompt";
import WeatherDisplay from "./components/WeatherDisplay";
import sendPrompt from "./api";
import { useState } from "react";
import { WeatherDataType } from "./types/types";

function App() {
  const [data, setData] = useState<WeatherDataType | null>(null);

  const sumbitPrompt = async (prompt: string) => {
    const weatherData = await sendPrompt(prompt);
    setData(weatherData);
  };

  return (
    <div className="bg-emerald-300 flex flex-col justify-start items-center h-[100vh]">
      <h1 className="m-3 text-4xl text-white font-bold">Wheather Dashboard</h1>
      <div className="flex flex-col w-[50%] justify-center items-center">
        <UserPrompt sumbitPrompt={sumbitPrompt} />
        <WeatherDisplay weatherData={data as unknown as WeatherDataType} />
      </div>
    </div>
  );
}

export default App;
