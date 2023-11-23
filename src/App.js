import twitterIcon from "./assets/twitter-icon.svg";
import tumblrIcon from "./assets/tumblr-icon.png";
import { useEffect, useState } from "react";
import "./App.css";

export const colors = [
  "#faebd7",
  "#00ffff",
  "#7fffd4",
  "#0000ff",
  "#8a2be2",
  "#a52a2a",
  "#7fff00",
  "#d2691e",
  "#6495ed",
  "#dc143c",
  "#00ffff",
  "#00008b",
  "#b8860b",
  "#006400",
  "#8b008b",
  "#ff8c00",
  "#9932cc",
  "#9400d3",
  "#228b22",
  "#adff2f",
  "#4b0082",
  "#0000cd",
  "#ff4500",
  "#663399",
  "#ff0000",
  "#00ff7f",
  "#ff6347",
  "#40e0d0",
  "#ee82ee",
  "#ffff00",
];

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [color, setColor] = useState(colors[0]);

  const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNumber]);
  };

  const startFetchQuote = () => {
    setLoading(true);
  };

  const successFetchQuote = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "XV86LxxaiSoo2hfSnwwsOA==76jpGUFREtLljoDT",
      },
    });
    if (response.status === 200) {
      const quote = await response.json();
      getRandomColor();
      setQuote(quote);
      setLoading(false);
    } else {
      setLoading(false);
      setError("Somethig went wrong");
      alert(error);
    }
  };

  const fetchNewQuote = () => {
    startFetchQuote();
    successFetchQuote();
    getRandomColor();
  };
  useEffect(() => {
    startFetchQuote();
    successFetchQuote();
    getRandomColor();

    //eslint-disable-next-line
  }, []);
  const singleQuote = quote && quote[0];
  return (
    <div className="app" style={{ backgroundColor: `${color}` }}>
      <div id="quote-box" className="quote-box" style={{ color }}>
        <div
          className="quote-text"
          style={loading ? { opacity: 0 } : { opacity: 1 }}
        >
          <i className="fa fa-quote-left"> </i>
          <span id="text">{singleQuote && singleQuote.quote}</span>
        </div>
        <h3 id="author" style={loading ? { opacity: 0 } : { opacity: 1 }}>
          - {singleQuote && singleQuote.author}
        </h3>
        <div className="card_footer">
          <div className="social_media_buttons">
            <a
              target="_blank"
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              style={{ backgroundColor: color }}
            >
              <img src={twitterIcon} alt="" />
            </a>
            <a
              href="twitter.com/intent/tweet"
              id="trumble-quote"
              target="_blank"
              style={{ backgroundColor: color }}
            >
              <img src={tumblrIcon} alt="" />
            </a>
          </div>
          <button
            id="new-quote"
            style={{ backgroundColor: color }}
            onClick={fetchNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
