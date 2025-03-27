const WeatherDisplay = () => {
  return (
    <div className="flex flex-col justify-start gap-5 rounded-xl p-10 w-[500px] bg-white mt-30">
      <div className="border border-gray-300 p-2 rounded-xl">
        <span className="font-bold">City:</span>
      </div>
      <div className="border border-gray-300 p-2 rounded-xl">
        <span className="font-bold">Datetime:</span>
      </div>
      <div className="border border-gray-300 p-2 rounded-xl">
        <span className="font-bold">Timezone:</span>
      </div>
      <div className="border border-gray-300 p-2 rounded-xl">
        <span className="font-bold">Temperature:</span>
      </div>
      <div className="border border-gray-300 p-2 rounded-xl">
        <span className="font-bold">Humidity:</span>
      </div>
      <div className="border border-gray-300 p-2 rounded-xl h-20">
        <span className="font-bold">Description:</span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
