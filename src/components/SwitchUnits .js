import { Switch } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { changeUnits } from "../rdx/weatherSportUser/user/actionsUser";
import "./Weather.css";

export const SwitchUnits = () => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const onChangeUnits = useCallback(
    (event) => {
      setChecked(event.target.checked);
      console.log(checked);
      dispatch(changeUnits(checked));
    },
    [checked]
  );

  return (
    <div>
      <Switch
        checked={checked}
        onChange={onChangeUnits}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div className="metr_imper">metric/imperial </div>
    </div>
  );
};
