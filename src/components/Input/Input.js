import "./Input.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLog, clearLog } from "../../features/terminalLogs/terminalLogsSlice";
import { change } from "../../features/caretSlice";

export default function Input() {
  const [input, setInput] = useState("");
  const [disable, setDisable] = useState(false);
  const caret = useSelector((state) => state.caret.value);
  const dispatch = useDispatch();

  function submitCommand(e) {
    e.preventDefault();
    const split = input.toLowerCase().split(" ");
    if (split[0] === "caret") {
      dispatch(change(split[1]));
    } else if (split[0] === "theme") {
      dispatch(change(split[1]));
    } else if (split[0] === "exit") {
      window.close();
    } else if (split[0] === "clear") {
      dispatch(clearLog());
      return;
    }
    setDisable(true);
    dispatch(addLog(split[0]));
    dispatch(addLog("input"));
  }

  return (
    <div className="input-container">
      <label htmlFor="input">\\ac8736.github.io:-$ </label>
      <form onSubmit={submitCommand}>
        <input
          autoFocus
          disabled={disable}
          type="text"
          className="input-line"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ caretColor: caret }}
        />
      </form>
    </div>
  );
}
