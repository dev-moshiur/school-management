
import { useContext } from "react";
import { useState } from "react";
import React from "react";
const dataContext = React.createContext();
export const useData = () => {
  return useContext(dataContext);
};

export default function DataContext({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const url = `https://school-management-api-six.vercel.app`
  

  // const checkAdmin = () => {
  //   if (!data.adminChecked) {
  //     fetch(`https://school-management-api-six.vercel.app/checkAdmin`, {
  //       credentials: "include",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.admin) {
  //           setIsAdmin(true)
  //         } else {
  //         }
  //       });
  //   }
  // };

  const showMessage = (message) => {
    setPopupMessage(message)
    setTimeout(
      () =>
      setPopupMessage(''),
      2500
    );
  };
  const allData = {
    isAdmin,
    popupMessage,
    showMessage,
    menuOpen, 
    setMenuOpen,
    setIsAdmin,
    url
  };
  return (
    <dataContext.Provider value={allData}>{children}</dataContext.Provider>
  );
}
