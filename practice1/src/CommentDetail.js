import React from "react";
import faker from "faker";


const CommentDetail = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
  <span className="date"> {faker.date.weekday()} </span>
          </div>
  <div className="text"> {faker.lorem.words()} </div>
        </div>
      </div>
    </div>
  );
};



export default CommentDetail;