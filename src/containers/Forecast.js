import { WeatherItem } from "../components/WeatherItem";
import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherSportList } from "../rdx/grocList/selectorsW";
import "./Home.css";

export const Forecast = () => {
  const items = useSelector(selectWeatherSportList);
  console.log(items);

  return (
    <div className="Home">
      {items.location ? (
        <WeatherItemHistory
          key={items.id}
          oneElementHistory={items}
        ></WeatherItemHistory>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
