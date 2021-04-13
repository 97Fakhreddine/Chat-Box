import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../../style/signup.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "25ch",
      },
    },
  })
);

const makeAllInCenter = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "45ch",
        position: "relative",
        color: "#292b2c",
        gap: "normal",
        lineHeight: "24px",
        padding: "20px",
        background: "white",
        border: 0,
        boxShadow: "0 3px 5px 2px rgba(245, 245, 245 )",
      },
    },
  })
);

const Signup: React.FC<{}> = (props) => {
  const classes = useStyles();
  const all = makeAllInCenter();
  let history = useHistory();
  /**
   * @type {object}
   * @returns object contains the input data in order to be submitted.
   */

  const [form, setForm] = useState<object>({
    username: "",
    email: "",
    password: "",
  });

  /**
   * @argument {Event}
   * @returns returns object contains data input and change those data each time input data changes
   */
  const updateForm: Function = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const sumbitSignUp: Function = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // test to redirect to home
    history.push("/");
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div>
      <h1>Sign up now</h1>
      <div className={all.root} id="form">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Username"
            color="primary"
            name="username"
            onChange={(e) => updateForm(e)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            onChange={(e) => updateForm(e)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            color="secondary"
            name="password"
            onChange={(e) => updateForm(e)}
          />
        </form>
        <div className={classes.root}>
          <Button variant="contained" onClick={(e) => sumbitSignUp(e)}>
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Google
          </Button>
        </div>
      </div>
      <div>
        <Link to="/">GO BACK HOME</Link>
      </div>
    </div>
  );
};
export default Signup;
