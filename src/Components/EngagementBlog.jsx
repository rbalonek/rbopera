import React from "react";
import "./CSS/EngagementBlog.css";

export default function EngagementBlog(props) {
  return (
    <div className="blog_container">
      <h3 className="blog-title">{props.title}</h3>
      <img className="blog-img" alt={props.title} src={props.img}></img>
    </div>
  );
}
