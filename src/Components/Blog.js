import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Blog = () => {
  const { id } = useParams();
  const blog = data.find((b) => b.id.toString() === id);
  const img = require(`../Images/${data[id - 1].image}`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="blog">
        <div className="image blog">
          <img src={img} alt={blog.title} />
        </div>
      </div>
      {blog ? (
        <div className="blog-content">
          <h1>{blog.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: blog.blog.replace(/\n/g, "<br>"),
            }}
          ></p>
        </div>
      ) : (
        <p>Blog post not found</p>
      )}
    </div>
  );
};

export default Blog;
