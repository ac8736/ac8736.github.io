import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const first_text = "ac8736.github.io:-$ cd ac8736/portfolio";
  const second_text = "console.log('hello')";
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    let begin = 0;
    const signature = setTimeout(() => {
      setText1(first_text.slice(begin, text1.length + 1));
    }, 10);

    return () => clearTimeout(signature);
  }, [text1]);

  return (
    <div className="App">
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
}

export default App;
