import "./App.css";
import List from "./components/List/List";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";
import InputContainer from "./components/Input/InputContainer";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "green",
  },
}));

function App() {
  const classes = useStyle();
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    console.log("add more cards envoie les infos suivantes ", title, listId);
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

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type='list' />
      </div>
    </StoreApi.Provider>
  );
}

export default App;
