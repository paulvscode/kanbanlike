import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  editableTitle: {
    marginLeft: theme.spacing(1),
  },
}));

const Title = () => {
  const [open, setOpen] = useState();
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase value='Todo' />
        </div>
      ) : (
        <div>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Title;
