import HotKnifeGif from "./assets/hot_knife_game.gif";
import AsteroidsGif from "./assets/asteroids_gif.gif";
import DungeonFightGif from "./assets/dungeon_fight_gif.gif";
import { Fade } from "react-awesome-reveal";
import "./Games.css";

export default function Games() {
  return (
    <div>
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            1000 Degree Hot Knife |{" "}
            <a href="https://jipinyaozi.itch.io/1000-degree-hot-knife" target="_blank" className="anchor-link">
              Itch.io
            </a>
          </h2>
          <p className="text">Unity Game Engine, C#</p>
          <p className="text">
            This game was built as a prototype with an emphasis on the theme of minimalism. Alongside two other contributors, we
            built a game with the goal of being simple to play and having minimalistic graphics. I was responsible for the
            development of the scripts (written in C#) for the game mechanics, such as the score and shields.
          </p>
          <p className="text">
            Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback
            is welcome!
          </p>
          <img src={HotKnifeGif} className="hot-knife-gif" />
        </div>
        <div className="games-divider" />
      </Fade>
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            Asteroids |{" "}
            <a href="https://ac8736.itch.io/trails" target="_blank" className="anchor-link">
              Itch.io
            </a>
          </h2>
          <p className="text">Unity Game Engine, C#</p>
          <p className="text">
            This game was built as a prototype with an emphasis on game feel. Alongside two other contributors, we built a game
            with the goal of being simple to play and to have toggleable options for various different game feels, such as camera
            shake, particles, and sound effects. I was responsible for the development of the scripts (written in C#) for the main
            game mechanics, such as the shooting, asteroids spawning, and animations.
          </p>
          <p className="text">
            Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback
            is welcome!
          </p>
          <img src={AsteroidsGif} className="asteriods-gif" />
        </div>
        <div className="games-divider" />
      </Fade>
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            Dungeon Fight |{" "}
            <a href="https://ac8736.itch.io/fight" target="_blank" className="anchor-link">
              Itch.io
            </a>
          </h2>
          <p className="text">Unity Game Engine, C#</p>
          <p className="text">
            This game was built as a prototype with an emphasis on dexterity. Alongside two other contributors, we built a game
            with the goal of requiring high dexterity to play, with inspiration coming from the Souls genre. I was responsible for
            the development of the player scripts (written in C#), such as the movement, fighting, health, and animations. This
            entire development process took one week, from designing to implementation.
          </p>
          <p className="text">
            Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback
            is welcome!
          </p>
          <img src={DungeonFightGif} className="dungeon-fight-gif" />
        </div>
        <div className="games-divider" />
      </Fade>
    </div>
  );
}
