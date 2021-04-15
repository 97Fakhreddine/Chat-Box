import { ChangeEvent, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";
import auth from "../config/auth";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    display: {
      display: "block",
      margin: "2%",
      padding: "0px",
      flexWrap: "wrap",
      position: "relative",
      marginLeft: "10%",
    },
    h1: {
      marginRight: "20%",
      marginBottom: "5%",
    },
  })
);

export default function Login() {
  /**
   * @history when you use it, it allows you to push to the route that you want
   */
  let history = useHistory();

  const classes = useStyles();

  interface Form {
    email: string;
    password: string;
  }

  const [form, setForm] = useState<Form>({
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
    console.log(form);
  };

  const [failToLogin, setFailtoLogin] = useState<string>(
    "please fill all the information"
  );
  const sumbitLogin: Function = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (form.email == "" || form.password == "") {
      setFailtoLogin("please fill all the information");
      alert(failToLogin);
      return;
    } else {
      axios
        .post("http://localhost:3001/users/login", form)
        .then(({ data }) => {
          // test to redirect to home
          if (data.token) {
            auth.login(() => {
              localStorage.setItem("token", data.token);
              history.push("/chatroom");
            });
          } else {
            alert(data.message);
            history.push("/login");
          }
        })
        .catch((err) => {
          // we will check if one of the inputs are empty we'll change the message
          if (form.email == "" || form.password == "") {
            setFailtoLogin("please fill all the information");
            alert(failToLogin);
            history.push("/login");
            return;
          } else {
            alert(failToLogin);
            history.push("/login");
          }
        });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.display}>
        <h1 className={classes.h1}>Login now</h1>
        <FormControl className={classes.root}>
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
            name="email"
            onChange={(e) => updateForm(e)}
            type="email"
          />
        </FormControl>
        <TextField
          className={classes.root}
          id="input-with-icon-textfield"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          name="password"
          type="password"
          onChange={(e) => updateForm(e)}
        />
      </div>

      <Button
        variant="outlined"
        color="secondary"
        onClick={(event) => sumbitLogin(event)}
      >
        Login
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={(event) => history.push("/signup")}
      >
        Sign up
      </Button>
    </div>
  );
}
