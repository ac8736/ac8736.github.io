import { useState, useEffect, ChangeEvent } from "react";
import "./Switch.css";

type Theme = "dark" | "light";

export function Switch() {
  const [theme, setTheme] = useState<Theme>("light");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container-switch">
      <span>Dark Mode</span>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={theme === "dark"} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
