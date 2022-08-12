import { useCallback, useState } from "react";
import { Card, CardActions, CardContent, Button, Box } from "@mui/material";
import { Hours } from "./Hours";
import { minWidth } from "@mui/system";
import { Link } from "react-router-dom";
// import "./GrocItem.css";

export const WeatherItem = ({ oneElement }) => {
  const [show, setShow] = useState(false);

  const buttonOnHourClick = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event);
      setShow(true);
    },
    [setShow]
  );
  return (
    <div>
      {oneElement.forecast ? (
        <div>
          {" "}
          <br />
          <div>{oneElement.location.name}</div>
          <div>{oneElement.location.country}</div>
          <br />
          {/* {oneElementHistory.forecast.forecastday.map((i) => { */}
          {/* return ( */}
          <button onClick={buttonOnHourClick}>
            by hours
            <Box
              className="Boxes"
              key={oneElement.current.last_updated}
              sx={{ minWidth: "150 px", margin: "10px" }}
            >
              <Card variant="outlined">
                <CardContent>
                  <div>
                    <div>Current weather </div>
                    <div>{oneElement.current.last_updated}</div>
                    {/* <div>{oneElement.current.condition.text} day</div> */}
                    <div>
                      <img src={oneElement.current.condition.icon} />
                    </div>
                    <div>Temperature {oneElement.current.temp_c} C</div>
                    <div> </div>
                    <div>Feels like {oneElement.current.feelslike_c} C</div>
                    <div> </div>

                    <div>Wind {oneElement.current.wind_kph} km/h</div>
                    <div>Pressue {oneElement.current.pressure_mb} mb</div>
                    <div> </div>

                    {show && (
                      <div>
                        {oneElement.forecast.forecastday[0].hour.map((h) => (
                          <Hours key={h.time} iElement={h}></Hours>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Box>{" "}
          </button>
          {/* ); })} */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

//products/${product.id}
//{'edit/' + product.id}

//<div>{product.id}</div>
//<div>{product.name}</div>
//<div>{product.category}</div>

{
  /* <CardContent>
            <div>TODAY</div>
            <div>{oneElement.location.name}</div>
            <div>{oneElement.location.country}</div>
            <div>{oneElement.forecast.forecastday[0].date}</div>
            <div>maxtemp </div>
            <div>{oneElement.forecast.forecastday[0].day.maxtemp_c} C</div>
            <div>maxtemp at time </div>
            <div>{oneElement.forecast.forecastday[0].hour[8].time}</div>
            <div>{oneElement.forecast.forecastday[0].hour[8].temp_c} C</div>
            <div>{oneElement.forecast.forecastday[0].day.maxtemp_f} F</div>
          </CardContent> */
}
