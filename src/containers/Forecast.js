import { WeatherItem } from "../components/WeatherItem";
import { WeatherItemHistory } from "../components/WeatherItemHistory";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherSportList } from "../rdx/grocList/selectorsW";
// import { fetchItems, fetchItemsH } from "../rdx/grocList/actionsW";
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

    // <div className="Home">
    //   {items.location ? (
    //     <WeatherItem key={items.id} oneElement={items}></WeatherItem>
    //   ) : (
    //     <div>Loading...</div>
    //   )}
    // </div>
  );
};
//name="city"
// import { useCallback, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectWeatherSportList } from "../rdx/grocList/selectorsW";
// import { selectWeatherHSportList } from "../rdx/grocList/selectorsWH";

// import { WeatherItem } from "./WeatherItem";

// const dispatch = useDispatch();

// const itemsH = useSelector(selectWeatherHSportList);
// console.log(itemsH);

// const [city, setCity] = useState("");

// const onChangeCity = useCallback(
//   (event) => {
//     setCity(event.target.value);
//     console.log(event.target.value);
//   },

//   [setCity]
// );

// const onSubmit = useCallback(
//   (event) => {
//     event.preventDefault();
//     console.log(city);
//     dispatch(fetchItems(city));
//     dispatch(fetchItemsH(city));
//   },
//   [dispatch, city]
// );

/* //   <form onSubmit={onSubmit}>
    //     <select onChange={onChangeCity} value={city}>
    //       <option value="" default>
    //         Choose the city
    //       </option>
    //       <option value="London">London</option>
    //       <option value="Paris">Paris</option>
    //       <option value="Vienna">Vienna</option>
    //       <option value="Berlin">Berlin</option>
    //       <option value="Rome">Rome</option>
    //       <option value="Kiev">Kyiv</option>
    //     </select>
    //     <button type="submit">Get weather data</button>
    //   </form> */

/* <div className="Home">
        {items ? (
          <WeatherItem key={items.id} oneElement={items}></WeatherItem>
        ) : (
          <div>Loading...</div>
        )}
      </div> */
