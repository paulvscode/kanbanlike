import React from "react";
import { Button, Paper, InputBase, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    paddingBottom: theme.spacing(4),
    margin: theme.spacing(0, 1, 1, 1),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));
const InputCard = ({ setOpen }) => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            placeholder='Enter a title for this card...'
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button onClick={() => setOpen(false)} className={classes.btnConfirm}>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
