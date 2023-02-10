import reducer from "./reducer";
import { useContext } from "react";
import { useReducer } from "react";
import React from "react";
const dataContext = React.createContext();
export const useData = () => {
  return useContext(dataContext);
};

export default function DataContext({ children }) {
  let intialState = {
    popup: "",
    popupMessage: "",
    adminChecked: false,
    isAdmin: false,
    loading: false,
    url: `https://school-management-api-six.vercel.app`,
  };
  const [data, dispatch] = useReducer(reducer, intialState);

  const checkAdmin = () => {
    if (!data.adminChecked) {
      fetch(`https://school-management-api-six.vercel.app/checkAdmin`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.admin) {
            dispatch({
              type: "setAdmin",
              value: true,
            });
          } else {
          }
        });
    }
  };

  const showMessage = (message) => {
    dispatch({
      type: "popupMessage",
      value: {
        popup: "popupMessage",
        message: message,
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: "popupMessage",
          value: {
            popup: "",
            massage: message,
          },
        }),
      2500
    );
  };
  const allData = {
    data,
    dispatch,
    showMessage,
  };
  return (
    <dataContext.Provider value={allData}>{children}</dataContext.Provider>
  );
}
