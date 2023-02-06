import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
    return (
        <div className="post">
            {
                post?.thumbnailImage && (
                    <img
                        className="postImg"
                        src={post.thumbnailImage}
                        alt=""
                    />
                )
            }
            
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to={`/?cat=${post.categories[0]}`} >
                            {post.categories[0]}
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to={`/post/${post._id}`} className="link">
                        {
                            post.title
                        }
                    </Link>
                </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    );
};

export default Post;