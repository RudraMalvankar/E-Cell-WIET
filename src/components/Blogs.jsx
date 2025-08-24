import React from "react";
import "./Blogs.css";
import Blog1 from '../assets/Blog1 img.jpeg'
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogData = [
    { id: 1, img: Blog1, desc: "E-Cell Inauguration Day" }   
  ];

  return (
    <div className="blogs-page">
      {/* Grid of cards */}
      <div className="blogs-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt="blog visual" />
            <p>{blog.desc}</p>
            <Link to="/viewblogs" className="view-btn">
              View <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
