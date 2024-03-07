import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-portfolio">
      <h1>Portfolio</h1>
      <h2>Welcome to my little corner of the Internet! Below are projects that I have worked on.</h2>
      <button className="button-portfolio" onClick={() => navigate("/")}>
        Go back
      </button>
    </header>
  );
}
