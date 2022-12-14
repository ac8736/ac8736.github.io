import "./Command.css";

export default function Command() {
  return (
    <div>
      <p>================================================================</p>
      <div className="commands-container">
        <p>List of available commands. (More to come in future versions.)</p>
        <p>Helper Commands</p>
        <div className="indent command-section">
          <p className="p-margin">HELP</p>
          <p className="p-margin desc">Instructions on how to use the terminal.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">COMMANDS</p>
          <p className="p-margin desc">List of available commands.</p>
        </div>
        <p>Main Commands</p>
        <div className="indent command-section">
          <p className="p-margin">WELCOME</p>
          <p className="p-margin desc">An introduction to who I am.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">EDUCATION</p>
          <p className="p-margin desc">My education history.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">EXPERIENCE</p>
          <p className="p-margin desc">List of previous experience.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">PORTFOLIO</p>
          <p className="p-margin desc">A list of my current and previous projects I am working or have worked on.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">CONTACT</p>
          <p className="p-margin desc">A list of ways to contact me.</p>
        </div>
        <p>Miscellaneous Commands</p>
        <div className="indent command-section">
          <p className="p-margin">CLEAR</p>
          <p className="p-margin desc">Clears the terminal.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">EXIT</p>
          <p className="p-margin desc">Exits the terminal.</p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">Theme</p>
          <p className="p-margin desc">
            Changes the theme of the terminal.
            <br />
            Usage: theme {"<color>"}
          </p>
        </div>
        <div className="indent command-section">
          <p className="p-margin">CARET</p>
          <p className="p-margin desc">
            Changes the color of the input caret.
            <br />
            Usage: caret {"<color>"}
          </p>
        </div>
      </div>
      <p>================================================================</p>
    </div>
  );
}
