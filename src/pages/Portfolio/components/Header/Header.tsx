import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Portfolio</h1>
      <h2>Welcome to my little corner of the Internet! Below are projects that I have worked on.</h2>
      <button className="button" onClick={() => navigate("/")}>
        Go back
      </button>
    </header>
  );
}
