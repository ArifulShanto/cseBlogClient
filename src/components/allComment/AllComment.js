import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../comment/Comment';

const AllComment = ({ postId }) => {
    // console.log(postId);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get("/comment/" + postId)
            .then(res => {
                setComments(res.data.reverse())
            })
    }, [postId])
    return (
        <div style={{
            marginBottom: "100px"
        }}>
            {
                comments?.map(com => <Comment key={com._id} comment={com}></Comment>)
            }
        </div>
    );
};

export default AllComment;