import { useCallback, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addNewItem } from "../rdx/grocList/actions";

export const AddNewItem = () => {
  const [name, setName] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const onNameChanged = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const oncategoryChanged = useCallback(
    (event) => {
      setcategory(event.target.value);
    },
    [setcategory]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        addNewItem({
          name,
          category,
          show: true,
        })
      );
    },
    [name, category, dispatch]
  );
  return (
    <form onSubmit={onSubmit}>
      <div>Name:</div>
      <input value={name} onChange={onNameChanged} />
      <br />
      <div>Category:</div>
      <input value={category} onChange={oncategoryChanged} />
      <br />
      <input type={"submit"} value={"Save"} />
    </form>
  );
};
