import "./Unknown.css";

export default function Unknown({ log }) {
  return <p>{log === "caret" ? "Caret color changed." : "Unknown command or in progress."}</p>;
}
