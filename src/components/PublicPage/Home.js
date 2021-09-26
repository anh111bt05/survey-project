import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://pbs.twimg.com/media/EfsQYmRXkAAK6R_.jpg" />
      </div>
    </div>
  );
}

export default Home;
