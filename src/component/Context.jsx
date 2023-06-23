import React, { useContext } from "react";
import { useState } from "react";
import data from "./Data";
const AppContext = React.createContext();

function AppProvider(prop) {
  const [open, setOpen] = useState(false);
  const [openSid, setOpenSid] = useState(false);
  const [opSub, setOpSub] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState();
  const [newData, setNewData] = useState([]);
  function openSub(page, locat) {
    const newPage = data.find((link) => link.name === page);
    setLocation(locat);
    setNewData(newPage);
    setOpen(true);
    setOpSub(false);
  }
  const values = {
    openSid,
    setOpenSid,
    open,
    setOpen,
    openSub,
    setLocation,
    setPage,
    page,
    location,
    newData,
    setNewData,
    opSub,
    setOpSub,
  };
  return (
    <AppContext.Provider value={values}>{prop.children}</AppContext.Provider>
  );
}
function useGlobalContext() {
  return useContext(AppContext);
}
export { AppProvider, AppContext, useGlobalContext };
