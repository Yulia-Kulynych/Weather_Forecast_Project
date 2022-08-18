import { useCallback, useState } from "react";
import { Card, CardContent, Box } from "@mui/material";
import { Hours } from "./Hours";
import "./Weather.css";

export const WeatherItemHistory = ({ oneElementHistory, unitsUser }) => {
  const [show, setShow] = useState(false);

  const buttonOnHourClick = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event);
      setShow(!show);
    },
    [show, setShow]
  );

  return (
    <div>
      {oneElementHistory.forecast ? (
        <div>
          {/* <br />
          <div>{oneElementHistory.location.name}</div>
          <div>{oneElementHistory.location.country}</div>
          <br /> */}

          {oneElementHistory.forecast.forecastday.map((i) => {
            return (
              <button onClick={buttonOnHourClick} className="cardButtonHours">
                <div className="by_hours">by hours</div>
                <Box
                  className="Boxes"
                  key={i.date}
                  sx={{ minWidth: "150 px", margin: "10px" }}
                >
                  <Card variant="outlined">
                    <CardContent>
                      <div>
                        <div className="date">{i.date}</div>
                        <br />
                        {/* <div>{i.date}</div> */}
                        {unitsUser ? (
                          <div>
                            <div className="Temp"> {i.day.maxtemp_c} C</div>
                            {/* Temperature */}
                            <div>
                              <img src={i.day.condition.icon} />
                            </div>
                            <div className="weath_sum">
                              <div>{i.day.condition.text}</div>
                            </div>
                            <br />
                            <div>Wind...... {i.day.maxwind_mph}m/h</div>
                            <div>Humidity........... {i.day.avghumidity}</div>
                          </div>
                        ) : (
                          <div>
                            <div className="Temp"> {i.day.maxtemp_f} F</div>
                            {/* Temperature */}
                            <div>
                              <img src={i.day.condition.icon} />
                            </div>
                            <div className="weath_sum">
                              <div>{i.day.condition.text}</div>
                            </div>
                            <br />
                            <div>Wind...... {i.day.maxwind_kph}km/h</div>
                            <div>Humidity......... {i.day.avghumidity}</div>
                          </div>
                        )}

                        {show ? (
                          <div>
                            {i.hour.map((h) => (
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
