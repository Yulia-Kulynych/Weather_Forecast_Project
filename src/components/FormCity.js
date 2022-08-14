import { useCallback, useState } from "react";
import {
  fetchItems,
  fetchItemsH,
  fetchItemsS,
} from "../rdx/weatherSportUser/weather_sport/actionsW";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

export const FormCity = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const onChangeCity = useCallback(
    (event, newValue) => {
      setCity(newValue);
      // setCity(event.target.value);
      console.log(newValue);
    },
    [setCity]
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(city);
      dispatch(fetchItems(city));
      dispatch(fetchItemsH(city));
      dispatch(fetchItemsS(city));
    },
    [dispatch, city]
  );
  const options = [
    "City",
    "Reykjavik",
    "Paris",
    "Berlin",
    "Bucharest",
    "Brussels",
    "Sofia",
    "Prague",
    "Copenhagen",
    "Tallinn",
    "Helsinki",
    "Athens",
    "Budapest",
    "Dublin",
    "Riga",
    "Luxembourg",
    "Podgorica",
    "Amsterdam",
    "Oslo",
    "Warsaw",
    "Ljubljana",
    "Stockholm",
    "Bern",
    "Kiev",
    "Bratislava",
    "Tirana",
    "Andorra",
    "Zagreb",
    "Vilnius",
    "Vienna",
    "Rome",
    "Lisbon",
    "Toronto",
    "Los Angeles",
  ];

  const [value, setValue] = React.useState(options[0]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
        <br />
        <Autocomplete
          value={value}
          onChange={onChangeCity}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose the city" />
          )}
        />
      </div>
      <button type="submit">Get weather data</button>
    </form>
  );
};
