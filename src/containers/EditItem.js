import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { editItem } from "../rdx/grocList/actions";
import { useParams } from "react-router-dom";
import { selectGrocList } from "../rdx/grocList/selectors";

export const EditItem = () => {
  const products = useSelector(selectGrocList);
  const { id } = useParams();
  const product = products.find((element) => element.id == id);

  //const [id, setId] = useState()
  const [name, setName] = useState("");
  const [category, setcategory] = useState("");

  useEffect(
    (event) => {
      if (product && product.id) {
        setName(product.name);
        setcategory(product.category);
      }
    },
    [product]
  );

  const dispatch = useDispatch();

  //const onIdChanged = useCallback((event)=>{
  //    setId(event.target.value);
  //}, [setId])

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
        editItem({
          id,
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
/*<div>Id:</div>
        <input value = {product.id} onChange={onIdChanged}/>
        <br />*/
