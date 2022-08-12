import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherHSportList } from "../rdx/grocList/selectorsWH";
// import { fetchItems, fetchItemsH } from "../rdx/grocList/actionsW";
import "./Home.css";

export const History = () => {
  const itemsH = useSelector(selectWeatherHSportList);
  console.log(itemsH);

  return (
    <div className="Home">
      {itemsH.location ? (
        <WeatherItemHistory
          key={itemsH.id}
          oneElementHistory={itemsH}
        ></WeatherItemHistory>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
