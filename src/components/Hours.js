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
          <Card variant="outlined">
            <div className="hours">
              <table>
                <tr>
                  <td>{iElement.time.split(" ")[1]}</td>
                  <td>{iElement.temp_c} C </td>
                  <td>{iElement.condition.text}</td>
                  <td>{iElement.wind_mph} m/h</td>
                  <td>
                    <img src={iElement.condition.icon} />
                  </td>
                </tr>
              </table>
              <div></div>
            </div>
          </Card>
        </div>
      ) : (
        <div>
          <Card variant="outlined">
            <div className="hours">
              <table>
                <tr>
                  <td>{iElement.time.split(" ")[1]}</td>
                  <td>{iElement.temp_f} F</td>
                  <td>{iElement.condition.text}</td>
                  <td>{iElement.wind_kph} k/h</td>
                  <td>
                    <img src={iElement.condition.icon} />
                  </td>
                </tr>
              </table>
              <div></div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
