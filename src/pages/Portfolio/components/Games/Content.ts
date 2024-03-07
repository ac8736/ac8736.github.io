import HotKnifeGif from "./assets/hot_knife_game.gif";
import AsteroidsGif from "./assets/asteroids_gif.gif";
import DungeonFightGif from "./assets/dungeon_fight_gif.gif";
import ForestGif from "./assets/forest_gif.gif";
import DeathGif from "./assets/death_gif.gif";
import GenAIGif from "./assets/gen_ai_gif.gif";

export interface IContent {
  title: string;
  link: string;
  tech: string;
  description: string;
  closing: string;
  img: string;
}

export const content: IContent[] = [
  {
    title: "1000 Degree Hot Knife | Minimalism",
    link: "https://jipinyaozi.itch.io/1000-degree-hot-knife",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype with an emphasis on the theme of minimalism. Alongside two other contributors, we\
    built a game with the goal of being simple to play and having minimalistic graphics. I was responsible for the\
    development of the scripts (written in C#) for the game mechanics, such as the score and shields.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: HotKnifeGif,
  },
  {
    title: "Asteroids | Game Feel",
    link: "https://ac8736.itch.io/trails",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype with an emphasis on game feel. Alongside two other contributors, we built a game\
      with the goal of being simple to play and to have toggleable options for various different game feels, such as camera\
      shake, particles, and sound effects. I was responsible for the development of the scripts (written in C#) for the main\
      game mechanics, such as the shooting, asteroids spawning, and animations.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: AsteroidsGif,
  },
  {
    title: "Dungeon Fight | Dexterity",
    link: "https://ac8736.itch.io/fight",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype with an emphasis on dexterity. Alongside two other contributors, we built a game\
      with the goal of requiring high dexterity to play, with inspiration coming from the Souls genre. I was responsible for\
      the development of the player scripts (written in C#), such as the movement, fighting, health, and animations. This\
      entire development process took one week, from designing to implementation.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: DungeonFightGif,
  },
  {
    title: "Forest | Level Design",
    link: "https://ac8736.itch.io/forest",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype, focusing on how to design levels. With two other contributors, our goal was to\
      produce two levels, the first to teach the basic mechanics of the game, and a second level to test the player and see\
      how well the tutorial taught. I was responsible for developing the player actions, like the movement and the ability\
      to pick up items. I was also involved in the designing of both levels.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: ForestGif,
  },
  {
    title: "Running From Death | Procedural Generation",
    link: "https://spearmintorbit.itch.io/dungeonfighter",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype, featuring procedurally generated content. Along with two other contributors, our\
      goal was to create a game that uses procedural generation algorithms to create levels. My main responsibility was to\
      implement procedural generation with Binary Partition and the Random Walk algorithms. I also developed the player and\
      shooting mechanics.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: DeathGif,
  },
  {
    title: "AI vs Vocaloid | Generative AI",
    link: "https://aqoursbaelz.itch.io/ai-or-vocaloid",
    tech: "Unity Game Engine, C#",
    description:
      "This game was built as a prototype, featuring generative AI. Along with three other contributors, our\
      goal was to create a game that uses generative AI, such as voice generation. I was involved in basic scripting with C# and assisting in AI voice generation.",
    closing:
      "Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback\
    is welcome!",
    img: GenAIGif,
  },
];
