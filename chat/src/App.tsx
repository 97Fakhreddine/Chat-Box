import React from "react";
import Spinner from "./components/spinner/Spinner";
import "./style/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      Typescript
      <div>
        <Spinner hello={null} />
      </div>
    </div>
  );
};

export default App;
