import React, { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import './homepage.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';


const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data.reverse());

        }
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={ posts } />
                <Sidebar />
            </div>
        </>
    );
};

export default HomePage;