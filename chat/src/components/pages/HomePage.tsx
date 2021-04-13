import React, { useEffect } from "react";
import logging from "../config/logging";
import Spinner from "../spinner/Spinner";
const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    logging.info("Loading application.");
  }, []);

  return (
    <div>
      <h1>Home page is here</h1>
      <div>
        here is the block
        <Spinner hello={null} />
      </div>
    </div>
  );
};
export default HomePage;
