import { useCallback, useState } from "react";
import { Card, CardContent, Button, Box } from "@mui/material";
import { Hours } from "./Hours";

export const WeatherItem = ({ oneElement, unitsUser }) => {
  const [show, setShow] = useState(false);
  console.log(unitsUser);

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
                    <div>
                      <img src={oneElement.current.condition.icon} />
                    </div>

                    {unitsUser ? (
                      <div>
                        <div>Temperature {oneElement.current.temp_c} C</div>
                        <div> </div>
                        <div>Feels like {oneElement.current.feelslike_c} C</div>
                        <div>Wind {oneElement.current.wind_kph} km/h</div>
                        <div>Pressue {oneElement.current.pressure_mb} mb</div>
                      </div>
                    ) : (
                      <div>
                        <div>Temperature {oneElement.current.temp_f} F</div>
                        <div> </div>
                        <div>Feels like {oneElement.current.feelslike_f} F</div>
                        <div>Wind {oneElement.current.wind_mph} m/h</div>
                        <div>Pressue {oneElement.current.pressure_in} in</div>
                      </div>
                    )}

                    {show && (
                      <div>
                        {oneElement.forecast.forecastday[0].hour.map((h) => (
                          <Hours
                            key={h.time}
                            iElement={h}
                            unitsUser={unitsUser}
                          ></Hours>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Box>{" "}
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
