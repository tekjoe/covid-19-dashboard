import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./App";

const AppWithHelmet = () => {
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        </style>
      </Helmet>
      <App />
    </>
  );
};

ReactDOM.render(<AppWithHelmet />, document.getElementById("root"));
