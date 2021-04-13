import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputBase } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../../style/signup.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(5),
        width: "25ch",
        position: "relative",
        display: "flex",
        bottom: theme.spacing(1),
      },
    },
  })
);

const Signup: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Sign up now</h1>
      <div className="form">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Username" color="primary" />
          <TextField id="standard-basic" label="Email" />
          <TextField id="standard-basic" label="Password" color="secondary" />
        </form>
      </div>
      <div>
        <Link to="/">go home</Link>
      </div>
    </div>
  );
};
export default Signup;
