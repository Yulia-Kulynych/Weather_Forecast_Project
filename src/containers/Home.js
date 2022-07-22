import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from "../rdx/todoList/selectors";
import { TodoItem } from "../components/TodoItem";
import { removeItem, filteredItem } from "../rdx/todoList/actions";
import "./Home.css";

export const Home = () => {
  const items = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const onItemDelete = useCallback(
    (id) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  const onItemFiltrate = useCallback(
    (assignee) => {
      dispatch(filteredItem(assignee));
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
              <TodoItem key={i.id} task={i} onDelete={onItemDelete}></TodoItem>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
