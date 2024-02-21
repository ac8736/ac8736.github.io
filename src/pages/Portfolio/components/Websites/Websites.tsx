import "./Websites.css";
import { Fade } from "react-awesome-reveal";
import SentimentAnalysisImage from "./assets/sentiment-analysis.png";

export default function Websites() {
  return (
    <div>
      <Fade triggerOnce={true}>
        <div className="subcontent">
          <h2>
            Sentiment Analysis |{" "}
            <a href="https://sentiment-analysis-app.netlify.app/" target="_blank" className="anchor-link">
              Link
            </a>{" "}
            |{" "}
            <a href="https://github.com/ac8736/Sentiment-Analysis" target="_blank" className="anchor-link">
              GitHub
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
    </div>
  );
}
