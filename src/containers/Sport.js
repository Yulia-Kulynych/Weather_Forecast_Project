import { SportItem } from "../components/SportItem";
import { useSelector, useDispatch } from "react-redux";
import { selectWeatherSportList } from "../rdx/grocList/selectorsS";
// import { fetchItems, fetchItemsH } from "../rdx/grocList/actionsW";
import "./Home.css";

export const Sport = () => {
  const itemsS = useSelector(selectWeatherSportList);
  console.log(itemsS);

  return (
    <div className="Home">
      {itemsS.football ? (
        <SportItem key={itemsS.id} oneElement={itemsS}></SportItem>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
