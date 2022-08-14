import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { useSelector } from "react-redux";
import { selectWeatherSportList } from "../rdx/weatherSportUser/weather_sport/selectorsW";
import { selectUserSettings } from "../rdx/weatherSportUser/user/selectorsUST";
import "./Home.css";

export const Forecast = () => {
  const items = useSelector(selectWeatherSportList);
  console.log(items);
  const unitsUser = useSelector(selectUserSettings);
  console.log(unitsUser);

  return (
    <div className="Home">
      {items.location ? (
        <WeatherItemHistory
          key={items.id}
          oneElementHistory={items}
          unitsUser={unitsUser}
        ></WeatherItemHistory>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
