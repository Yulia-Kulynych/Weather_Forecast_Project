// import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherSportList } from "../rdx/grocList/selectorsW";
import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { WeatherItem } from "../components/WeatherItem";
import "./Home.css";
import { UserForm } from "./UserForm";

export const HomeW = () => {
  const items = useSelector(selectWeatherSportList);
  console.log(items);

  // const [show, setShow] = useState(false);

  // const buttonOnHourClick = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     console.log(event);
  //     setShow(true);
  //   },
  //   [setShow]
  // );

  return (
    <div>
      <div className="Home">
        {items ? (
          <WeatherItem key={items.id} oneElement={items}></WeatherItem>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

// {show && (
//   <div>
//     {i.hour.map((h) => (
//       <Hours key={h.time} iElement={h}></Hours>
//     ))}
//   </div>
// )}

// {localStorage.getItem(userName)
//   ? (i.hour.map((ii) => {
//       <Hours key={ii.time} iElement={ii}></Hours>;
//     }))
//   : }

//import { UserForm } from "../components/WeatherItem";
