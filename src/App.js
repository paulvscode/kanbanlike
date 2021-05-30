import "./App.css";
import List from "./components/List/List";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";

function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
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
