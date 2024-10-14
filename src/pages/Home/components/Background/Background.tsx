import "./Background.css";
import { Fade } from "react-awesome-reveal";

export default function Background() {
  return (
    <div className="background-container">
      <Fade triggerOnce={true}>
        <div className="background-container-sub">
          <h1 className="fixed-margin-top">Education</h1>
          <div className="subcontent">
            <h2>New York University</h2>
            <p className="text">Bachelor's of Science in Computer Science, Minor in Mathematics</p>
            <p className="text">
              Attended from September 2020 to May 2024. I have taken a number of classes related to software development
              including: Data Structures & Algorithms, Object Oriented Programming, Computer Architecture, Operating
              Systems, Computer Networking, Software Engineering, Game Design, Game Engineering.
            </p>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce={true}>
        <div className="background-container-sub">
          <h1 className="fixed-margin-top">Experience</h1>
          <div className="subcontent">
            <div>
              <h2>Genesys</h2>
              <p className="text">Software Engineer Intern</p>
              <p className="text">
                From May 2023 to August 2023. I designed and implemented a new feature that helps new customers easily
                obtain necessary resources. The feature was built with Angular and the ServerLess Framework, both using
                TypeScript.
              </p>
            </div>
            <div>
              <h2>HABNET Chamber of Commerce</h2>
              <p className="text">Web Associate Intern</p>
              <p className="text">
                From July 2022 to August 2022. I assisted in the development of a new mobile app geared towards helping
                local merchants connect with eachother. The app was built with React Native and TypeScript.
              </p>
            </div>
            <div>
              <h2>AiTudier</h2>
              <p className="text">Software Engineer Intern</p>
              <p className="text">
                From June 2022 to August 2022. I assisted in the development of a landing page with React. I implemented
                the landing page based on the UI team's designs and also helped allocate tasks to improve productivity.
                I was also part of code review, where I reviewed my colleague's work.
              </p>
            </div>
            <div>
              <h2>EGD Collective</h2>
              <p className="text">Gameplay Programmer</p>
              <p className="text">
                From October 2021 to April 2022. I worked with a team to develop a 2D fighting game in Unity, where my
                primary role was developing the C# scripts for the game's characters.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
