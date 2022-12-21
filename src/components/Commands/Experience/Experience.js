import "./Experience.css";
import { ExperienceContent } from "./ExperienceContent";

export default function Experience() {
  return (
    <div>
      <p>Experience</p>
      {ExperienceContent.map((experience, index) => (
        <div className="experience" key={index}>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Duration: {experience.duration}</p>
          <p>Responsibilities:</p>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
