import React from "react";

import Routes from "./routers/routes";

import "./global.scss"

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.wrappper}>
      <Routes />
    </div>
  );
}

export default App;
