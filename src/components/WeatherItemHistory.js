import { useCallback, useState } from "react";
import { Card, CardContent, Box } from "@mui/material";
import { Hours } from "./Hours";

export const WeatherItemHistory = ({ oneElementHistory, unitsUser }) => {
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
      {oneElementHistory.forecast ? (
        <div>
          <br />
          <div>{oneElementHistory.location.name}</div>
          <div>{oneElementHistory.location.country}</div>
          <br />

          {oneElementHistory.forecast.forecastday.map((i) => {
            return (
              <button onClick={buttonOnHourClick}>
                by hours
                <Box
                  className="Boxes"
                  key={i.date}
                  sx={{ minWidth: "150 px", margin: "10px" }}
                >
                  <Card variant="outlined">
                    <CardContent>
                      <div>
                        <div>{i.date}</div>

                        {unitsUser ? (
                          <div>
                            <div>Temperature {i.day.maxtemp_c} C</div>
                            <div>
                              <img src={i.day.condition.icon} />
                            </div>
                            <div>Wind {i.day.maxwind_kph}km/h</div>
                            <div>Humidity {i.day.avghumidity}</div>
                          </div>
                        ) : (
                          <div>
                            <div>Temperature {i.day.maxtemp_f} F</div>
                            <div>
                              <img src={i.day.condition.icon} />
                            </div>
                            <div>Wind {i.day.maxwind_mph}m/h</div>
                            <div>Humidity {i.day.avghumidity}</div>
                          </div>
                        )}
                        {show && (
                          <div>
                            {i.hour.map((h) => (
                              <Hours
                                key={h.time}
                                iElement={h}
                                unitsUser={unitsUser}
                              ></Hours>
                            ))}
                          </div>
                        )}

                        {/* 
                          return (
                            <div>
                              <div>{ii.time}</div>
                              <div>{ii.temp_c} C</div>
                            </div>
                          );
                        })} */}
                      </div>
                    </CardContent>
                  </Card>
                </Box>{" "}
              </button>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
