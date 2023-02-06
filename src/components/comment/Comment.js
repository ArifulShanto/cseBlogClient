import React from 'react';
import { Link } from 'react-router-dom';
import './comment.css';

const Comment = ({ comment }) => {
    // console.log(comment);
    return (
        <div className='comment'>
            <div className='comment-up'>
                <div className='comment-left'>
                    <img src={comment?.profilePic} alt="" />
                    <p><Link className="link" to={`/?user=${comment?.username}`}>
                        {comment?.username}
                    </Link></p>
                </div>
                <p>{new Date(comment?.createdAt).toDateString()}</p>
            </div>
            <p>{comment?.commentDesc}</p>
        </div>
    );
};

export default Comment;