// components/Blogs.jsx
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blogs" className="blogs-section">
      <h2 className="blogs-heading">Our Blogs</h2>
      <div className="blogs-container">
        <div className="blog-card">
          <h3 className="blog-title">From Idea to Execution</h3>
          <p className="blog-summary">
            Learn how student founders transformed their ideas into thriving startups with E-Cell's support.
          </p>
          <a href="#" className="read-more">Read More →</a>
        </div>
        <div className="blog-card">
          <h3 className="blog-title">Startup Culture in Colleges</h3>
          <p className="blog-summary">
            Why nurturing entrepreneurial culture in academic institutions is the need of the hour.
          </p>
          <a href="#" className="read-more">Read More →</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
