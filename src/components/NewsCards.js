import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, Grow, Typography } from '@material-ui/core';


function NewsCards({ articles }) {
  return (
    <div>
      <h1>Swipe left and right to read more News</h1>
      <div className="tinderCards__container">
        {articles.map((article, i) => (
          <h1>this</h1>
        ))}
      </div>
    </div>
  );
}

export default NewsCards;

// DataCue == publishedAt
// Source.name
// title
// description
// button Learn more
// index = i
