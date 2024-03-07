import "./Websites.css";
import { Fade } from "react-awesome-reveal";
import { IContent, content } from "./Content";

export default function Websites() {
  const websites = content.map((item: IContent, index) => {
    return (
      <Fade triggerOnce={true} key={index}>
        <div className="subcontent">
          <h2>
            {item.title} |{" "}
            <a href={item.link} target="_blank" className="anchor-link">
              Link
            </a>
          </h2>
          <p className="text">{item.tech}</p>
          <p className="text">{item.description}</p>
          <p className="text">{item.closing}</p>
          <img src={item.img} className="sentiment-analysis-img" />
        </div>
        <div className="games-divider" />
      </Fade>
    );
  });

  return <div>{websites}</div>;
}
