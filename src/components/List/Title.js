import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  editableTitle: {
    flexGrow: "1",
  },
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  input: {
    margin: theme.spacing(1),
    "&: focus": {
      background: "#ddd",
    },
  },
}));

const Title = () => {
  const [open, setOpen] = useState();
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value='Todo'
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
