import UserPrompt from "./components/UserPrompt";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div className="bg-emerald-300 flex flex-col justify-start items-center h-[100vh]">
      <h1 className="m-3 text-4xl text-white font-bold">Wheather Dashboard</h1>
      <div className="flex flex-col w-[50%] justify-center items-center">
        <UserPrompt />
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
