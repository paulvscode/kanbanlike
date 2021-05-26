import "./App.css";
import List from "./components/List/List";
import React, { useState } from "react";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";

function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    console.log(title);
    console.log(listId);
  };
  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <div className='App'>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;
