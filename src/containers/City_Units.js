import { useSelector } from "react-redux";
import { selectUser } from "../rdx/weatherSportUser/user/selectorsU";
import { FormCity } from "../components/FormCity";
import { SwitchUnits } from "../components/SwitchUnits ";

export const City_Units = () => {
  const auth = useSelector(selectUser);
  console.log(auth);

  return (
    <div>
      {auth.userName == "" ? (
        <div></div>
      ) : (
        <div>
          <FormCity>City</FormCity>
          <SwitchUnits />
        </div>
      )}
    </div>
  );
};
