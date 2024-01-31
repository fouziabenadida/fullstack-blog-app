import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../home.css";
import { format } from "date-fns";

const Home = () => {
  const cat = useLocation().search;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img
                src={post.cover}
                alt=""
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
              <div className="meta-info">
                <time className="created-at">
                  Created At:{" "}
                  {format(new Date(post.createdAt), "MMM d, yyy HH:mm ")}
                </time>
              </div>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
