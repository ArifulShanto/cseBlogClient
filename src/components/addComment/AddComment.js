import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import AllComment from "../allComment/AllComment";
import "./addComment.css";
import { toast } from 'react-toastify';

const AddComment = ({ cPost }) => {
    const { user } = useContext(Context);
    //   console.log(cPost);
    const [commentDesc, setCommentDesc] = useState("");
    const handleSubmit = (e) => {
        const newComment = {
            postId: cPost,
            commentDesc: commentDesc,
            username: user.username,
            profilePic: user.profilePic,
        };
        if (commentDesc !== "") {
            axios.post("/comment", newComment)
                .then((res) => {
                    console.log(res);
                    setCommentDesc("");
                    toast.success("Comment Done");
                });
        }
        else {
            toast.error("Please Comment !");
        }
    };
    return (
        <div>
            <div className="addComment">
                <p className="addComment-text">All Comments</p>
                <div className="commentInput">
                    <img src={user.profilePic} alt="" />
                    <form action="" onSubmit={handleSubmit}>
                        <textarea
                            onChange={(e) => setCommentDesc(e.target.value)}
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            value={commentDesc}
                            placeholder="Add Your Comment"></textarea>
                        <input type="submit" value="Comment" />
                    </form>
                </div>
                <div className="all-comment">
                    <AllComment postId={cPost}></AllComment>
                </div>
            </div>
        </div>
    );
};

export default AddComment;
