import {
  Button,
  createStyles,
  Input,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../../style/chatroom.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logging from "../config/logging";
import auth from "../config/auth";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    logoutBtn: {
      position: "relative",
      float: "right",
      marginBottom: "5%",
    },
  })
);

export interface UserData {
  username: string;
  email: string;
  token: string;
}
const Chatroom: React.FC<{}> = () => {
  const classes = useStyles();
  const history = useHistory();
  const [fakeData] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [userData, setUserData] = useState<UserData>({
    username: "ananymous",
    email: "ananymous",
    token: "ananymous",
  });
  /**
   * @function verifyUser
   * @param {empty}
   * @returns userData and check whether the user is allowed to keep staying login or it will redirect him to the login page
   *
   */
  const verifyUser: Function = () => {
    // we need to get the token from the localstorage
    const token = localStorage.getItem("token");
    // we need to set the token in the headers and send a get request to the endpoint verify
    const header = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get("http://localhost:3001/auth/verify", {
        headers: header,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setUserData(data);
        } else {
          localStorage.removeItem("token");
          history.push("/login");
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        history.push("/login");
      });
  };
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <div className="container">
      <h3 className=" text-center">Messaging for: {userData.username}</h3>
      <Button
        variant="contained"
        className={classes.logoutBtn}
        endIcon={<ExitToAppIcon />}
        onClick={(event) =>
          auth.logout(() => {
            history.push("/");
          })
        }
      >
        Logout
      </Button>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Search..." />
                  </form>
                </div>
              </div>
            </div>
            <div className="inbox_chat">
              {fakeData.map((element, i) => {
                return (
                  <div className="chat_list">
                    <div className="chat_people" key={i}>
                      <div className="chat_img">
                        {" "}
                        <img
                          src="https://ptetutorials.com/images/user-profile.png"
                          alt="sunil"
                        />{" "}
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Sunil Rajput{" "}
                          <span className="chat_date">Dec {element}</span>
                        </h5>
                        <p>
                          Test, which is a new approach to have all solutions
                          astrology under one roof.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mesgs">
            <div className="msg_history">
              <div className="incoming_msg">
                <div className="incoming_msg_img">
                  {" "}
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />{" "}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span className="time_date"> 11:01 AM | June 9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="type_msg">
              <div className="input_msg_write">
                <input
                  type="text"
                  className="write_msg"
                  placeholder="Type a message"
                />
                <div>
                  <Input
                    id="standard-adornment-amount"
                    className={classes.textField}
                  />
                  <button className="msg_send_btn" type="button">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chatroom;
