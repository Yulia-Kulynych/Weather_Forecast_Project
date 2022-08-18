import { useCallback, useState } from "react";
import { Card, CardContent, Button, Box } from "@mui/material";
import { Hours } from "./Hours";
import "./Weather.css";

export const WeatherItem = ({ oneElement, unitsUser }) => {
  const [show, setShow] = useState(false);
  console.log(unitsUser);

  const buttonOnHourClick = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event);
      setShow(!show); // setShow(true);
    },
    [show, setShow]
  );
  return (
    <div>
      {oneElement.forecast ? (
        <div>
          {/* <br />
          <div>{oneElement.location.name}</div>
          <div>{oneElement.location.country}</div>
          <br /> */}
          <button onClick={buttonOnHourClick} className="cardButtonHours">
            <div className="by_hours">by hours</div>
            <Box
              className="Boxes"
              key={oneElement.current.last_updated}
              sx={{ minWidth: "150 px", margin: "10px" }}
            >
              <Card variant="outlined">
                <CardContent>
                  <div>
                    {unitsUser ? (
                      <div>
                        <div className="Temp">
                          {oneElement.current.temp_c}C{/* Temperature{" "} */}
                        </div>
                        <div className="cityName">
                          {/* {oneElement.location.name} */}
                        </div>

                        <div>
                          <img src={oneElement.current.condition.icon} />
                        </div>
                        <div className="weath_sum">
                          <div>{oneElement.current.condition.text}</div>
                          <div>Current weather </div>
                          <div>{oneElement.current.last_updated}</div>
                          <br />
                        </div>
                        <div>
                          Feels like..... {oneElement.current.feelslike_c} C
                        </div>
                        <div>Wind....... {oneElement.current.wind_mph} m/h</div>
                        <div>
                          Pressue... {oneElement.current.pressure_mb} mb
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="Temp">{oneElement.current.temp_f}F</div>
                        <div>
                          <img src={oneElement.current.condition.icon} />
                        </div>

                        <div className="weath_sum">
                          <div>{oneElement.current.condition.text}</div>
                          <div>Current weather </div>
                          <div>{oneElement.current.last_updated}</div>
                          <br />
                        </div>

                        <div>
                          Feels like..... {oneElement.current.feelslike_f} F
                        </div>
                        <div>
                          Wind.......... {oneElement.current.wind_kph} km/h
                        </div>
                        <div>
                          Pressue.... {oneElement.current.pressure_in} in
                        </div>
                      </div>
                    )}
                    {/* <div>Current weather </div>
                    <div>{oneElement.current.last_updated}</div> */}

                    {show ? (
                      <div>
                        {oneElement.forecast.forecastday[0].hour.map((h) => (
                          <Hours
                            key={h.time}
                            iElement={h}
                            unitsUser={unitsUser}
                          ></Hours>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Box>
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
