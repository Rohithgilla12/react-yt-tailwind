import React from "react";
import NavBar from "./assets/components/NavBar";
import SideBar from "./assets/components/SideBar";
import ContentArea from "./assets/components/ContentArea";

function App() {
  return (
    <div className="bg-yt-body h-screen min-h-screen">
      <NavBar />
      <div class="grid grid-cols-5 gap-2">
        <SideBar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
