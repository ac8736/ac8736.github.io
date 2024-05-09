import HelldiversCompanionImage from "./assets/hd-companion.jpg";
import SentimentAnalysisImage from "./assets/sentiment-analysis.png";
import HiTeaImage from "./assets/hi-tea.jpg";

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
    title: "Sentiment Analysis",
    link: "https://sentiment-analysis-app.netlify.app/",
    tech: "Hugging Face Transformers, PyTorch, React",
    description:
      "I used the Hugging Face Transformers API to finetune a BERT model on sentiment analysis. The dataset used was the\
    Toxic Tweets Dataset from Kaggle. The finetuning process was achieved using PyTorch and Jupyter Notebook, and utilized\
    Google Colab GPU resources to speed up the training process. Overall, the model has a 93% accuracy.",
    closing:
      "React is used to create a simple web interface for users to input text and receive a sentiment analysis prediction. \
      Model is deployed on Hugging Face.",
    img: SentimentAnalysisImage,
  },
  {
    title: "Hi Tea",
    link: "https://www.hiteasyracuse.com/",
    tech: "HTML, CSS, JavaScript",
    description:
      "This website is for a local bubble tea shop in Syracuse, NY. The site is actively used by customers to view the menu\
      and other options available with Hi Tea.",
    closing: "The website is developed with HTML/CSS and JavaScript.",
    img: HiTeaImage,
  },
  {
    title: "Helldivers Companion",
    link: "https://main--helldivers-companion.netlify.app/",
    tech: "SvelteKit, TypeScript",
    description:
      "Using a community API, I created a web app to display information about the game Helldivers. The app displays all the\
      information provided, such as the sectors and each planet within them. Each planet can also open a modal, which will\
      display its liberation status and current owner. The webapp also includes a reactive search bar to allow users to\
      easily find planets they want to view.",
    closing: "SvelteKit with TypeScript is used to create the web app. The app is deployed on Netlify.",
    img: HelldiversCompanionImage,
  },
];
