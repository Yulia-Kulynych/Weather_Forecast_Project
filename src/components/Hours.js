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
