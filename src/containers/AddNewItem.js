// import { useCallback, useState } from "react";
// import { useDispatch } from "react-redux/es/exports";
// import { addNewItem } from "../rdx/grocList/actions";

// export const AddNewItem = () => {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");

//   const dispatch = useDispatch();

//   const onNameChanged = useCallback(
//     (event) => {
//       setName(event.target.value);
//     },
//     [setName]
//   );

//   const onCategoryChanged = useCallback(
//     (event) => {
//       setCategory(event.target.value);
//     },
//     [setCategory]
//   );

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       dispatch(
//         addNewItem({
//           name,
//           category,
//           show: true,
//         })
//       );
//     },
//     [name, category, dispatch]
//   );
//   return (
//     <form onSubmit={onSubmit}>
//       <div>Name:</div>
//       <input value={name} onChange={onNameChanged} />
//       <br />
//       <div>Category:</div>
//       <input value={category} onChange={onCategoryChanged} />
//       <br />
//       <input type={"submit"} value={"Save"} />
//     </form>
//   );
// };
