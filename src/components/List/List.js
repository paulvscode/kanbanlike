import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card";
import Title from "./Title";
import InputContainer from "../Input/InputContainer";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
}));

const List = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Card />
        <Card />
        <Card />
        <InputContainer />
      </Paper>
    </div>
  );
};

export default List;
