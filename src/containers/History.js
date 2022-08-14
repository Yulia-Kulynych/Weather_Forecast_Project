import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { useSelector } from "react-redux";
import { selectWeatherHSportList } from "../rdx/grocList/selectorsWH";
import { selectUserSettings } from "../rdx/grocList/selectorsUST";
import "./Home.css";

export const History = () => {
  const itemsH = useSelector(selectWeatherHSportList);
  console.log(itemsH);
  const unitsUser = useSelector(selectUserSettings);
  console.log(unitsUser);

  return (
    <div className="Home">
      {itemsH.location ? (
        <WeatherItemHistory
          key={itemsH.id}
          oneElementHistory={itemsH}
          unitsUser={unitsUser}
        ></WeatherItemHistory>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
