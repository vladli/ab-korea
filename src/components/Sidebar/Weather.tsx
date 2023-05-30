import useWeather from "hooks/useWeather";

//icons
import { WiStrongWind } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";

const Weather = () => {
  const { data, loading } = useWeather("Seoul");
  if (loading || !data) return null;

  return (
    <div className="flex justify-center gap-5">
      <p className="flex items-center gap-1 font-semibold">
        <MdLocationCity size={20} />
        {data.name}
      </p>
      <p className="flex items-center gap-1">
        <CiTempHigh size={20} />
        {Math.round(data.main.temp)} &deg;C
      </p>
      <p className="flex items-center gap-1">
        <WiStrongWind size={20} />
        {Math.round(data.wind.speed)} m/s
      </p>
    </div>
  );
};

export default Weather;
