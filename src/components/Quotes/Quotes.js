import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);
  const getNewQuote = () => {
    getQuote();
  };
  const { content, author } = quotes;

  return (
    <div>
      <div className="f1 br3 ">
        <p className="f1 pa5 bg-light-red white">❝{content}❝</p>
        <div className="bg-dark-gray center white  f1 center">
          <h3>"{author}"</h3>
        </div>
      </div>
      <div className="center">
        <div className="form pa3">
          <button
            className="w-50 grow f1 link ph3 pv2 dib white bg-dark-green"
            onClick={getNewQuote}
          >
            Generate Quote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
