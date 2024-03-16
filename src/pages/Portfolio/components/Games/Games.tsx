import { Fade } from "react-awesome-reveal";
import { IContent, unityGamesPrototype, gameMakerGames } from "./Content";
import "./Games.css";

export default function Games() {
  const prototypeGameMakerGames = gameMakerGames.map((item: IContent, index) => (
    <Fade triggerOnce={true} key={index}>
      <div className="subcontent">
        <h2>
          {item.title} |{" "}
          <a href={item.link} target="_blank" className="anchor-link">
            Itch.io
          </a>
        </h2>
        <p className="text">{item.tech}</p>
        <p className="text">{item.description}</p>
        <p className="text">{item.closing}</p>
        <img src={item.img} className="hot-knife-gif" />
      </div>
      <div className="games-divider" />
    </Fade>
  ));

  const prototypeUnityGames = unityGamesPrototype.map((item: IContent, index) => (
    <Fade triggerOnce={true} key={index}>
      <div className="subcontent">
        <h2>
          {item.title} |{" "}
          <a href={item.link} target="_blank" className="anchor-link">
            Itch.io
          </a>
        </h2>
        <p className="text">{item.tech}</p>
        <p className="text">{item.description}</p>
        <p className="text">{item.closing}</p>
        <img src={item.img} className="hot-knife-gif" />
      </div>
      <div className="games-divider" />
    </Fade>
  ));

  return (
    <div>
      {prototypeGameMakerGames}
      <h2 className="subtitle">
        The following six games are part of a six week journey. Each week, I developed a game with emphasis on a specific
        characteristic.
      </h2>
      {prototypeUnityGames}
    </div>
  );
}
