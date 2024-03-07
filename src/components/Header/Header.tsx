import "./Header.css";
import { Switch } from "../Switch/Switch";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === "/" ? (
        <>
          <h1>Hello!</h1>
          <h2>
            I'm <span className="span">Andy Chen</span>, a passionate software engineer who loves developing websites and video
            games.
          </h2>
          <div className="button-container">
            <button className="button" onClick={() => navigate("/portfolio")}>
              Portfolio
            </button>
            <button className="button" onClick={() => window.open("https://github.com/ac8736")}>
              GitHub
            </button>
            <button className="button" onClick={() => window.open("https://ac8736.itch.io/")}>
              Itch.io
            </button>
          </div>
          <p className="contact-email">
            If you have any inquiries, please feel free to contact me:{" "}
            <a href="mailto:andy.chen.swe@gmail.com">andy.chen.swe@gmail.com</a>
          </p>
        </>
      ) : (
        <>
          <h1>Portfolio</h1>
          <h2>Welcome to my little corner of the Internet! Below are projects that I have worked on.</h2>
          <button className="button" style={{ marginBottom: "1rem" }} onClick={() => navigate("/")}>
            Go back
          </button>
        </>
      )}
      <Switch />
    </header>
  );
}
