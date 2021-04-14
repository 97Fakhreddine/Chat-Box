import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../../style/signup.css";
import { Button, Icon } from "@material-ui/core";
import axios from "axios";
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

  interface Form {
    username: string;
    email: string;
    password: string;
  }

  const [form, setForm] = useState<Form>({
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
  const [failToLogin, setFailtoLogin] = useState<string>(
    "please fill all the information"
  );
  const sumbitSignUp: Function = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (form.username == "" || form.email == "" || form.password == "") {
      setFailtoLogin("please fill all the information");
      alert(failToLogin);
      return;
    } else {
      axios
        .post("http://localhost:3001/users/signup", form)
        .then(({ data }) => {
          // test to redirect to home
          localStorage.setItem("token", data.token);
          history.push("/chatroom");
        })
        .catch((err) => {
          // we will check if one of the inputs are empty we'll change the message
          if (form.username == "" || form.email == "" || form.password == "") {
            setFailtoLogin("please fill all the information");
            alert(failToLogin);
            return;
          } else {
            alert(failToLogin);
          }
        });
    }
  };

  // the url must be changed to the url of google callback

  const loginWithGoole: Function = () => {
    const win: any = window.open(
      "http://localhost:3001",
      "windowname1",
      "width=800, height=600"
    );
    const validateToken = (token: string) => {
      localStorage.setItem("token", token);
      history.push("/chatroom");
      window.clearInterval(pollTimer);
      clearInterval(pollTimer);
      win.close();
    };
    const pollTimer = window.setInterval(async () => {
      try {
        let url = win.document.URL;
        let token = url.slice(22, url.length - 1);
        console.log("====================================");
        console.log(token);
        console.log("====================================");
        if (token !== "") {
          localStorage.setItem("token", token);
          validateToken(token);
          return;
        }
        return;
      } catch (e) {}
    }, 1000);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div className="md-form">
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => loginWithGoole()}
          >
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
