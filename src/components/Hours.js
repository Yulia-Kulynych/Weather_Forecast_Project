import { Card } from "@mui/material";
import "./Hours.css";
export const Hours = ({ iElement, unitsUser }) => {
  {
    console.log(iElement);
  }
  return (
    <div>
      {unitsUser ? (
        <div>
          {" "}
          <Card variant="outlined">
            <div className="hours">
              {iElement.time.split(" ")[1]}...{iElement.temp_c} C...
              {iElement.condition.text}...{iElement.wind_mph} m/h
              <img src={iElement.condition.icon} />
              <div></div>
            </div>{" "}
          </Card>
        </div>
      ) : (
        <div>
          <Card variant="outlined">
            <div className="hours">
              {iElement.time.split(" ")[1]}...{iElement.temp_f} F...
              {iElement.condition.text}...{iElement.wind_kph} k/h
              <img src={iElement.condition.icon} />
              <div></div>
            </div>{" "}
          </Card>
        </div>
      )}
    </div>
  );
};
