import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogData = [
    { id: 1, img: "https://picsum.photos/id/1011/600/400", desc: "Exploring innovative startup ideas." },
    { id: 2, img: "https://picsum.photos/id/1012/600/400", desc: "Journey of a young entrepreneur." },
    { id: 3, img: "https://picsum.photos/id/1015/600/400", desc: "Business strategies for growth." },
    { id: 4, img: "https://picsum.photos/id/1016/600/400", desc: "Power of teamwork in startups." },
    { id: 5, img: "https://picsum.photos/id/1021/600/400", desc: "Leadership lessons from founders." },
    { id: 6, img: "https://picsum.photos/id/1024/600/400", desc: "Innovation driving success." },
    { id: 7, img: "https://picsum.photos/id/1025/600/400", desc: "Technology empowering entrepreneurs." },
    { id: 8, img: "https://picsum.photos/id/1027/600/400", desc: "Marketing hacks for startups." },
    { id: 9, img: "https://picsum.photos/id/1031/600/400", desc: "Managing finances effectively." },
    { id: 10, img: "https://picsum.photos/id/1033/600/400", desc: "Networking to expand opportunities." },
    { id: 11, img: "https://picsum.photos/id/1035/600/400", desc: "Staying motivated through challenges." },
    { id: 12, img: "https://picsum.photos/id/1037/600/400", desc: "Celebrating entrepreneurial success." }
  ];

  return (
    <div className="blogs-page">
      {/* Grid of cards */}
      <div className="blogs-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt="blog visual" />
            <p>{blog.desc}</p>
            <button className="view-btn">
              View <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Locked overlay */}
      <div className="locked-overlay">
        <div className="locked-message">
          <div className="lock-icon">🔒</div>
          <h1>The page is not yet unlocked</h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
