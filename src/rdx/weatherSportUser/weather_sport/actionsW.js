export const FETCH_ITEMS_ACTION_REQUEST = "FETCH_ITEMS_ACTION_REQUEST";
export const FETCH_ITEMS_ACTION_SUCCESS = "FETCH_ITEMS_ACTION_SUCCESS";
export const FETCH_ITEMS_ACTION_FAILURE = "FETCH_ITEMS_ACTION_FAILURE";

export const fetchItemsSuccess = (dataArray) => {
  return {
    type: FETCH_ITEMS_ACTION_SUCCESS,
    items: dataArray,
  };
};
export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_ACTION_REQUEST,
  };
};
export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_ACTION_FAILURE,
    error,
  };
};

export const fetchItems = (city) => {
  console.log(city);
  // let today = new Date();
  // let todayDay = today.toISOString().split("T")[0];

  return async (dispatch, getState) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
        // `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "2ced90d541msh9e0c6a4327850f6p1ed5f7jsne629a715dd0b",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);

      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchItemsFailure(error.message));
    }
  };
};

export const FETCH_ITEMSH_ACTION_REQUEST = "FETCH_ITEMSH_ACTION_REQUEST";
export const FETCH_ITEMSH_ACTION_SUCCESS = "FETCH_ITEMSH_ACTION_SUCCESS";
export const FETCH_ITEMSH_ACTION_FAILURE = "FETCH_ITEMSH_ACTION_FAILURE";

export const fetchItemsHSuccess = (dataArray) => {
  return {
    type: FETCH_ITEMSH_ACTION_SUCCESS,
    items: dataArray,
  };
};
export const fetchItemsHRequest = () => {
  return {
    type: FETCH_ITEMSH_ACTION_REQUEST,
  };
};

export const fetchItemsHFailure = (error) => {
  return {
    type: FETCH_ITEMSH_ACTION_FAILURE,
    error,
  };
};

export const fetchItemsH = (city) => {
  console.log(city);
  let date = new Date();
  let todayDate = date.toISOString().split("T")[0];
  console.log(date);
  console.log(date.toISOString());
  console.log(date.toISOString().split("T")[0].split("-"));
  let todayDay = date.toISOString().split("T")[0].split("-")[2];
  let todayMonth = date.toISOString().split("T")[0].split("-")[1];
  let todayYear = date.toISOString().split("T")[0].split("-")[0];
  // let yesterdayDay = +todayDay - 1;
  // console.log(yesterdayDay);

  let yesterdayDate;
  if (+todayDay < 11 && +todayDay > 1) {
    yesterdayDate = `${todayYear}-${todayMonth}-0${+todayDay - 1}`;
    console.log(yesterdayDate);
  } else if (
    +todayDay == 1 &&
    (+todayMonth == 2 ||
      +todayMonth == 4 ||
      +todayMonth == 6 ||
      +todayMonth == 9 ||
      +todayMonth == 11)
  ) {
    if ((+todayMonth == 2)(+todayMonth == 4) || +todayMonth == 6) {
      yesterdayDate = `${todayYear}-0${+todayMonth - 1}-${31}`;
      console.log(yesterdayDate);
    } else if (+todayMonth == 11) {
      yesterdayDate = `${todayYear}-${+todayMonth - 1}-${31}`;
      console.log(yesterdayDate);
    } else {
      yesterdayDate = `${todayYear}-${+todayMonth - 1}-${30}`;
      console.log(yesterdayDate);
    }
  } else {
    yesterdayDate = `${todayYear}-${todayMonth}-${+todayDay - 1}`;
    console.log(yesterdayDate);
  }

  let dayBeforeYesterdayDate;
  if (+todayDay < 12 && +todayDay > 2) {
    dayBeforeYesterdayDate = `${todayYear}-${todayMonth}-0${+todayDay - 2}`;
    console.log(dayBeforeYesterdayDate);
  } else if (
    +todayDay == 2 &&
    (+todayMonth == 2 ||
      +todayMonth == 4 ||
      +todayMonth == 6 ||
      +todayMonth == 9 ||
      +todayMonth == 11)
  ) {
    if ((+todayMonth == 2)(+todayMonth == 4) || +todayMonth == 6) {
      dayBeforeYesterdayDate = `${todayYear}-0${+todayMonth - 1}-${31}`;
      console.log(dayBeforeYesterdayDate);
    } else if (+todayMonth == 11) {
      dayBeforeYesterdayDate = `${todayYear}-${+todayMonth - 1}-${31}`;
      console.log(dayBeforeYesterdayDate);
    } else {
      dayBeforeYesterdayDate = `${todayYear}-${+todayMonth - 1}-${30}`;
      console.log(dayBeforeYesterdayDate);
    }
  } else {
    dayBeforeYesterdayDate = `${todayYear}-${todayMonth}-${+todayDay - 2}`;
    console.log(dayBeforeYesterdayDate);
  }

  let twodaysBeforeYesterdayDate;
  if (+todayDay < 13 && +todayDay > 3) {
    twodaysBeforeYesterdayDate = `${todayYear}-${todayMonth}-0${+todayDay - 3}`;
    console.log(twodaysBeforeYesterdayDate);
  } else if (
    +todayDay == 3 &&
    (+todayMonth == 2 ||
      +todayMonth == 4 ||
      +todayMonth == 6 ||
      +todayMonth == 9 ||
      +todayMonth == 11)
  ) {
    if ((+todayMonth == 3)(+todayMonth == 4) || +todayMonth == 6) {
      twodaysBeforeYesterdayDate = `${todayYear}-0${+todayMonth - 1}-${31}`;
      console.log(twodaysBeforeYesterdayDate);
    } else if (+todayMonth == 11) {
      dayBeforeYesterdayDate = `${todayYear}-${+todayMonth - 1}-${31}`;
      console.log(twodaysBeforeYesterdayDate);
    } else {
      dayBeforeYesterdayDate = `${todayYear}-${+todayMonth - 1}-${30}`;
      console.log(twodaysBeforeYesterdayDate);
    }
  } else {
    twodaysBeforeYesterdayDate = `${todayYear}-${todayMonth}-${+todayDay - 3}`;
    console.log(twodaysBeforeYesterdayDate);
  }

  return async (dispatch, getState) => {
    dispatch(fetchItemsRequest());
    try {
      const responseH = await fetch(
        `https://weatherapi-com.p.rapidapi.com/history.json?q=${city}&dt=${twodaysBeforeYesterdayDate}&lang=en&end_dt=${yesterdayDate}`,
        // https://weatherapi-com.p.rapidapi.com/history.json?q=London&dt=2022-08-02&lang=en&end_dt=2022-08-07
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "2ced90d541msh9e0c6a4327850f6p1ed5f7jsne629a715dd0b",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      console.log("responseH:", responseH);
      const dataH = await responseH.json();
      console.log("data:", dataH);
      dispatch(fetchItemsHSuccess(dataH));
    } catch (error) {
      console.log(error);
      dispatch(fetchItemsHFailure(error.message));
    }
  };
};

export const FETCH_ITEMSS_ACTION_REQUEST = "FETCH_ITEMSS_ACTION_REQUEST";
export const FETCH_ITEMSS_ACTION_SUCCESS = "FETCH_ITEMSS_ACTION_SUCCESS";
export const FETCH_ITEMSS_ACTION_FAILURE = "FETCH_ITEMSS_ACTION_FAILURE";

export const fetchItemsSportSuccess = (dataArray) => {
  return {
    type: FETCH_ITEMSS_ACTION_SUCCESS,
    items: dataArray,
  };
};

export const fetchItemsSRequest = () => {
  return {
    type: FETCH_ITEMSS_ACTION_REQUEST,
  };
};

export const fetchItemsSFailure = (error) => {
  return {
    type: FETCH_ITEMSS_ACTION_FAILURE,
    error,
  };
};

export const fetchItemsS = (city) => {
  console.log(city);

  return async (dispatch, getState) => {
    try {
      const responseS = await fetch(
        `https://weatherapi-com.p.rapidapi.com/sports.json?q=${city}`,
        {
          method: "GETT",
          headers: {
            "X-RapidAPI-Key":
              "2ced90d541msh9e0c6a4327850f6p1ed5f7jsne629a715dd0b",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      console.log("responseS:", responseS);
      const dataS = await responseS.json();
      console.log("data:", dataS);
      dispatch(fetchItemsSportSuccess(dataS));
    } catch (error) {
      console.log(error);
      dispatch(fetchItemsSFailure(error.message));
    }
  };
};
