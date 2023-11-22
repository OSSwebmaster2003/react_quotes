import twitterIcon from "./assets/twitter-icon.svg";
import tumblrIcon from "./assets/tumblr-icon.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div id="quote-box" className="quote-box">
        <div className="quote-text">
          <i class="fa fa-quote-left"> </i>
          <span id="text">
            Life is what we make it, always has been, always will be.
          </span>
        </div>
        <h3 id="author">- Author</h3>
        <div className="card_footer">
          <div className="social_media_buttons">
            <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote">
              {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
              <img src={twitterIcon} alt="" />
            </a>
            <a href="twitter.com/intent/tweet" id="trumble-quote">
              {/* <i class="fa fa-tumblr"></i> */}
              <img src={tumblrIcon} alt="" />
            </a>
          </div>
          <button id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
