export const Hours = ({ iElement, unitsUser }) => {
  {
    console.log(iElement);
  }
  return (
    <div>
      {unitsUser ? (
        <div>
          {iElement.time.split(" ")[1]} {iElement.temp_c} C
        </div>
      ) : (
        <div>
          {iElement.time.split(" ")[1]} {iElement.temp_f} F
        </div>
      )}
    </div>
  );
};
