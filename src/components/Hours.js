// import { useCallback } from "react";
// import { Card, CardActions, CardContent, Button, Box } from "@mui/material";
// import { minWidth } from "@mui/system";
// import { Link } from "react-router-dom";

// import "./GrocItem.css";

export const Hours = ({ iElement }) => {
  {
    console.log(iElement);
  }
  return (
    <div>
      <div>
        {iElement.time.split(" ")[1]} {iElement.temp_c} C
      </div>
    </div>
  );
};
