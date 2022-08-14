// import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherSportList } from "../rdx/grocList/selectorsW";
import { selectWeatherSportListError } from "../rdx/grocList/selectorsEr";
import { selectUserSettings } from "../rdx/grocList/selectorsUST";
import { WeatherItem } from "../components/WeatherItem";
import "./Home.css";

export const HomeW = () => {
  const items = useSelector(selectWeatherSportList);
  console.log(items);
  const error = useSelector(selectWeatherSportListError);
  console.log(error);

  const unitsUser = useSelector(selectUserSettings);
  console.log(unitsUser);

  return (
    <div>
      <div className="Home">
        {items ? (
          <WeatherItem
            key={items.id}
            oneElement={items}
            unitsUser={unitsUser}
          ></WeatherItem>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
