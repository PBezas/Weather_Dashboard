import UserPrompt from "./components/UserPrompt";
import WeatherDisplay from "./components/WeatherDisplay";
import sendPrompt from "./api";
import { useEffect, useState } from "react";
import { WeatherDataType } from "./types/types";
import { AxiosError } from "axios";

function App() {
  const [data, setData] = useState<WeatherDataType | null>(null);
  const [error, setError] = useState("");

  const sumbitPrompt = async (prompt: string) => {
    try {
      const weatherData = await sendPrompt(prompt);
      setData(weatherData);
    } catch (err) {
      setError((err as AxiosError)?.response?.data as string);
      throw err;
    }
  };

  useEffect(() => {
    const timeId = setTimeout(() => setError(""), 2000);
    return () => clearTimeout(timeId);
  }, [error]);

  return (
    <div className="bg-emerald-300 flex flex-col justify-start items-center h-[100vh]">
      <h1 className="m-3 text-4xl text-white font-bold">Wheather Dashboard</h1>
      <div className="flex flex-col w-[50%] justify-center items-center">
        <UserPrompt sumbitPrompt={sumbitPrompt} />
        <WeatherDisplay weatherData={data as unknown as WeatherDataType} />
        {error && (
          <div className="text-white font-bold mt-10 bg-red-400 p-4 rounded-2xl">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
