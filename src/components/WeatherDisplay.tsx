import { weatherDetails } from "../constants";
import { WeatherDisplayProps } from "../types/types";
import { getCorrectValue } from "../utils";

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
  return (
    <div className="flex flex-col justify-start gap-5 rounded-xl p-10 w-[500px] bg-white mt-30">
      {weatherDetails.map((detail, i) => {
        const weatherDetail = getCorrectValue(detail, weatherData);
        return (
          <div
            key={i}
            className="border border-gray-300 p-2 rounded-xl flex justify-start"
          >
            <span className="font-bold">{detail}</span>
            <span className="w-[250px]  flex justify-center font-bold text-blue-500 absolute ml-30">
              {weatherDetail ? weatherDetail : ""}
            </span>
          </div>
        );
      })}
      <div className="border border-gray-300 p-2 rounded-xl flex justify-start h-[100px]">
        <span className="font-bold">Description:</span>
        <span className="font-bold text-blue-500 ml-5">
          {weatherData?.description}
        </span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
