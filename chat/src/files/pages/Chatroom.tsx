import {
  createStyles,
  Input,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
import "../../style/chatroom.css";

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
  })
);

const Chatroom: React.FC<{}> = () => {
  const classes = useStyles();

  const [fakeData, setFakeData] = useState<number[]>([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);
  return (
    <div className="container">
      <h3 className=" text-center">Messaging</h3>
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
