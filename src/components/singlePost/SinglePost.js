import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import parse from "html-react-parser";
import { Context } from "../../context/Context";
import AddComment from "../addComment/AddComment";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  // console.log(post);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // console.log(post);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <div>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.thumbnailImage && (
            <img className="singlePostImg" src={post.thumbnailImage} alt="" />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            {user?.username === post.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to={`/?user=${post.username}`}>
                  {post.username}
                </Link>
              </b>
            </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="singlePostDesc" style={{ marginBottom: "50px" }}>
            {post.desc}
          </p>
          <div>{"content" in post ? parse(post?.content) : ""}</div>
        </div>
      </div>
      <div>
        <AddComment cPost = {post._id}></AddComment>
      </div>
    </div>
  );
};

export default SinglePost;
