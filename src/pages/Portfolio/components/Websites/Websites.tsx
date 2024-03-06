import "./Websites.css";
import { Fade } from "react-awesome-reveal";
import SentimentAnalysisImage from "./assets/sentiment-analysis.png";
import HelldiversCompanionImage from "./assets/hd-companion.jpg";

export default function Websites() {
  return (
    <div>
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            Sentiment Analysis |{" "}
            <a href="https://sentiment-analysis-app.netlify.app/" target="_blank" className="anchor-link">
              Link
            </a>
          </h2>
          <p className="text">Hugging Face Transformers, PyTorch, React</p>
          <p className="text">
            I used the Hugging Face Transformers API to finetune a BERT model on sentiment analysis. The dataset used was the
            Toxic Tweets Dataset from Kaggle. The finetuning process was achieved using PyTorch and Jupyter Notebook, and utilized
            Google Colab GPU resources to speed up the training process.
          </p>
          <p className="text">
            React is used to create a simple web interface for users to input text and receive a sentiment analysis prediction.
            Model is deployed on Hugging Face.
          </p>
          <img src={SentimentAnalysisImage} className="sentiment-analysis-img" />
        </div>
      </Fade>
      <div className="games-divider" />
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            Helldivers Companion |{" "}
            <a href="https://main--helldivers-companion.netlify.app/" target="_blank" className="anchor-link">
              Link
            </a>
          </h2>
          <p className="text">SvelteKit, TypeScript</p>
          <p className="text">
            Using a community API, I created a web app to display information about the game Helldivers. The app displays all the
            information provided, such as the sectors and each planet within them. Each planet can also open a modal, which will
            display its liberation status and current owner. The webapp also includes a reactive search bar to allow users to
            easily find planets they want to view.
          </p>
          <p className="text">SvelteKit with TypeScript is used to create the web app. The app is deployed on Netlify.</p>
          <img src={HelldiversCompanionImage} className="sentiment-analysis-img" />
        </div>
      </Fade>
      <div className="games-divider" />
    </div>
  );
}
