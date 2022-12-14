import "./App.css";
import { useEffect } from "react";
import Input from "./components/Input/Input";
import Introduction from "./components/Introduction/Introduction";
import Help from "./components/Commands/Help/Help";
import Command from "./components/Commands/Command/Command";
import Unknown from "./components/Unknown/Unknown";
import { useSelector, useDispatch } from "react-redux";
import { addLog } from "./features/terminalLogs/terminalLogsSlice";

function App() {
  const terminalLogs = useSelector((state) => state.terminalLogs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function terminalCheck() {
      if (terminalLogs.length === 0) dispatch(addLog("input"));
    }
    terminalCheck();
  }, [terminalLogs, dispatch]);

  // const background = useSelector((state) => state.background.value);

  const terminalLogsComponents = terminalLogs.map((log, index) => {
    if (log === "introduction") {
      return <Introduction key={index} />;
    } else if (log === "input") {
      return <Input key={index} />;
    } else if (log === "help") {
      return <Help key={index} />;
    } else if (log === "commands") {
      return <Command key={index} />;
    } else {
      return <Unknown key={index} log={log} />;
    }
  });

  return <div className="App">{terminalLogsComponents}</div>;
}

export default App;
