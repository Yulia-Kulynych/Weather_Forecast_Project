import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGrocList } from "../rdx/grocList/selectors";
import { GrocItem } from "../components/GrocItem";
import { removeItem, filteredItem } from "../rdx/grocList/actions";
import "./Home.css";

export const Home = () => {
  const items = useSelector(selectGrocList);
  const dispatch = useDispatch();

  const onItemDelete = useCallback(
    (id) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  const onItemFiltrate = useCallback(
    (category) => {
      dispatch(filteredItem(category));
    },
    [dispatch]
  );

  const [filteredName, setFilterName] = useState("");

  return (
    <div>
      <input
        value={filteredName}
        onChange={(event) => {
          setFilterName(event.target.value);
          onItemFiltrate(event.target.value);
        }}
      />
      <div className="Home">
        {items.map((i) => {
          if (i.show) {
            return (
              <GrocItem
                key={i.id}
                product={i}
                onDelete={onItemDelete}
              ></GrocItem>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
