import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Hello!</h1>
      <h2>
        I'm <span className="span">Andy Chen</span>, a passionate software engineer who loves developing websites and video games.
      </h2>
      <div className="button-container">
        <button className="button" onClick={() => window.open("https://github.com/ac8736")}>
          GitHub
        </button>
        <button className="button" onClick={() => window.open("https://ac8736.itch.io/")}>
          Itch.io
        </button>
        <button className="button" onClick={() => navigate("/portfolio")}>
          Portfolio
        </button>
      </div>
      <p className="contact-email">
        If you have any inquiries, please feel free to contact me:{" "}
        <a href="mailto:andy.chen.swe@gmail.com">andy.chen.swe@gmail.com</a>
      </p>
    </header>
  );
}
