import "./Portfolio.css";
import { useState } from "react";
import Websites from "./components/Websites/Websites";
import Games from "./components/Games/Games";

export default function Portfolio() {
  const [tab, setTab] = useState("websites");

  return (
    <>
      <div className="tab-button-group">
        <button
          className={tab === "websites" ? "tab-buttons-selected" : "tab-buttons-unselected"}
          onClick={() => setTab("websites")}
        >
          Projects
        </button>
        <button className={tab === "games" ? "tab-buttons-selected" : "tab-buttons-unselected"} onClick={() => setTab("games")}>
          Games
        </button>
      </div>
      <div className="divider" />
      {tab === "websites" && <Websites />}
      {tab === "games" && <Games />}
    </>
  );
}
