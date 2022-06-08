import React from "react";
import Favorite from "../../assets/icons/favorite";
import "./index.css";

function Card({ title, description, url }) {
  return (
    <div className="news__card">
      {/* Heading  */}
      <div className="news__card-heading">
        <h3 className="news__card-title">{title}</h3>
        <div className="section_divider" />
      </div>
      {/* Content  */}
      <p className="news__card-content">
        {description}
      </p>
      {/* Card Footer  */}
      <div className="news__card-footer">
        {/* <a href="">Read full story</a> */}
        <a href={url} target="_blank" rel="noopener noreferrer">Read full story</a>
        <div className="news__card-footer-bookmark">
          <Favorite />
          <span>Add to bookmarks</span>
        </div>
        <p className="news__card-footer-timeupadated">5 mins ago</p>
      </div>
    </div>
  );
}

export default Card;
