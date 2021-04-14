import React from "react";
import "../../style/chatroom.css";

const Chatroom: React.FC<{}> = () => {
  return (
    <div className="hm-gradient">
      <div className="hm-gradient">
        <main>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center default-text py-3">
                      <i className="fa fa-lock"></i> Login:
                    </h3>
                    <div className="md-form">
                      <i className="fa fa-envelope prefix grey-text"></i>
                      <input
                        type="text"
                        id="defaultForm-email"
                        className="form-control"
                      />
                      <label htmlFor="defaultForm-email">Your email</label>
                    </div>
                    <div className="md-form">
                      <i className="fa fa-lock prefix grey-text"></i>
                      <input
                        type="password"
                        id="defaultForm-pass"
                        className="form-control"
                      />
                      <label htmlFor="defaultForm-pass">Your password</label>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-default waves-effect waves-light">
                        next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card indigo form-white">
                  <div className="card-body">
                    <h3 className="text-center white-text py-3">
                      <i className="fa fa-user"></i> Login:
                    </h3>
                    <div className="md-form">
                      <i className="fa fa-envelope prefix white-text"></i>
                      <input
                        type="text"
                        id="defaultForm-email1"
                        className="form-control"
                      />
                      <label htmlFor="defaultForm-email1">Your email</label>
                    </div>
                    <div className="md-form">
                      <i className="fa fa-lock prefix white-text"></i>
                      <input
                        type="password"
                        id="defaultForm-pass1"
                        className="form-control"
                      />
                      <label htmlFor="defaultForm-pass1">Your password</label>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-outline-white waves-effect waves-light">
                        next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card ripe-malinka-gradient form-white">
                  <div className="card-body">
                    <form>
                      <h2 className="text-center font-up font-bold py-4 white-text">
                        Sign up
                      </h2>
                      <div className="md-form">
                        <i className="fa fa-user prefix white-text"></i>
                        <input
                          type="text"
                          id="orangeForm-name2"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-name2">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix white-text"></i>
                        <input
                          type="text"
                          id="orangeForm-email2"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-email2">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-lock prefix white-text"></i>
                        <input
                          type="password"
                          id="orangeForm-pass2"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-pass2">Your password</label>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-outline-white waves-effect waves-light">
                          next
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <h2 className="text-center font-up font-bold deep-orange-text py-4">
                        Sign up
                      </h2>
                      <div className="md-form">
                        <i className="fa fa-user prefix grey-text"></i>
                        <input
                          type="text"
                          id="orangeForm-name3"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-name3">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input
                          type="text"
                          id="orangeForm-email3"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-email3">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-lock prefix grey-text"></i>
                        <input
                          type="password"
                          id="orangeForm-pass3"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-pass3">Your password</label>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-deep-orange">
                          next
                          <i
                            className="fa fa-angle-double-right pl-2"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <h2 className="text-center py-4 font-bold font-up danger-text">
                        Contact us
                      </h2>
                      <div className="md-form">
                        <i className="fa fa-user prefix grey-text"></i>
                        <input
                          type="text"
                          id="form31"
                          className="form-control"
                        />
                        <label htmlFor="form31">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input
                          type="text"
                          id="form21"
                          className="form-control"
                        />
                        <label htmlFor="form21">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-tag prefix grey-text"></i>
                        <input
                          type="text"
                          id="form321"
                          className="form-control"
                        />
                        <label htmlFor="form341">Subject</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-pencil prefix grey-text"></i>
                        <textarea
                          id="form81"
                          className="md-textarea"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="form81">Your message</label>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-outline-danger btn-lg">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card bg-secondary form-white">
                  <div className="card-body">
                    <form>
                      <h2 className="text-center py-4 font-bold font-up white-text">
                        Contact us
                      </h2>
                      <div className="md-form">
                        <i className="fa fa-user prefix white-text"></i>
                        <input
                          type="text"
                          id="form32"
                          className="form-control"
                        />
                        <label htmlFor="form32">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix white-text"></i>
                        <input
                          type="text"
                          id="form22"
                          className="form-control"
                        />
                        <label htmlFor="form22">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-tag prefix white-text"></i>
                        <input
                          type="text"
                          id="form322"
                          className="form-control"
                        />
                        <label htmlFor="form342">Subject</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-pencil prefix white-text"></i>
                        <textarea
                          id="form82"
                          className="md-textarea"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="form82">Your message</label>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-info btn-lg">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card near-moon-gradient form-white">
                  <div className="card-body">
                    <form>
                      <h3 className="text-center indigo-text font-bold py-4">
                        <strong>Subscribe</strong>
                      </h3>
                      <div className="md-form">
                        <i className="fa fa-user prefix white-text"></i>
                        <input
                          type="text"
                          id="form35"
                          className="form-control"
                        />
                        <label htmlFor="form35">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix white-text"></i>
                        <input
                          type="text"
                          id="form25"
                          className="form-control"
                        />
                        <label htmlFor="form25">Your email</label>
                      </div>
                      <div className="text-center py-4">
                        <button className="btn btn-indigo">
                          Send <i className="fa fa-paper-plane-o ml-1"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <h3 className="text-center pink-text font-bold py-4">
                        <strong>Subscribe</strong>
                      </h3>
                      <div className="md-form">
                        <i className="fa fa-user prefix grey-text"></i>
                        <input
                          type="text"
                          id="orangeForm-name37"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-name37">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input
                          type="text"
                          id="orangeForm-email37"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-email37">Your email</label>
                      </div>
                      <div className="text-center py-4">
                        <button className="btn btn-outline-pink">
                          Send <i className="fa fa-paper-plane-o ml-1"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Chatroom;
