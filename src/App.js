import "./App.css";
import { useEffect } from "react";
import Input from "./components/Input/Input";
import Introduction from "./components/Introduction/Introduction";
import Help from "./components/Commands/Help/Help";
import Command from "./components/Commands/Command/Command";
import Unknown from "./components/Unknown/Unknown";
import { useSelector, useDispatch } from "react-redux";
import { addLog } from "./features/terminalLogs/terminalLogsSlice";
import Welcome from "./components/Commands/Welcome/Welcome";
import Education from "./components/Commands/Education/Education";
import Experience from "./components/Commands/Experience/Experience";
import Contact from "./components/Commands/Contact/Contact";
import Portfolio from "./components/Commands/Portfolio/Portfolio";

function App() {
  const terminalLogs = useSelector((state) => state.terminalLogs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function terminalCheck() {
      if (terminalLogs.length === 0) dispatch(addLog("input"));
    }
    terminalCheck();
  }, [terminalLogs, dispatch]);

  const terminalLogsComponents = terminalLogs.map((log, index) => {
    if (log === "introduction") {
      return <Introduction key={index} />;
    } else if (log === "input") {
      return <Input key={index} />;
    } else if (log === "help") {
      return <Help key={index} />;
    } else if (log === "commands") {
      return <Command key={index} />;
    } else if (log === "welcome") {
      return <Welcome key={index} />;
    } else if (log === "education") {
      return <Education key={index} />;
    } else if (log === "experience") {
      return <Experience key={index} />;
    } else if (log === "contact") {
      return <Contact key={index} />;
    } else if (log === "portfolio") {
      return <Portfolio key={index} />;
    } else {
      return <Unknown key={index} log={log} />;
    }
  });

  return <div className="App">{terminalLogsComponents}</div>;
}

export default App;
