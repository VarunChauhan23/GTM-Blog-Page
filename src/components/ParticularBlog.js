import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './ParticularBlog.module.css';

const ParticularBlog = () => {

    const [blog, setBlog] = useState([]);

    const { _id } = useParams();

    useEffect(() => {
        const fetchParticularBlog = () => {
            try {

                const Api_Uri = `https://gtm-backend.onrender.com/api/blog/find/${_id}`;

                axios.get(Api_Uri).then((res) => {
                    setBlog(res.data);
                });
            } catch (error) {
                console.log("error: ", error);
            }
        }

        fetchParticularBlog();
    }, [_id]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        // Extract day, month, and year
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        // Concatenate the formatted date
        return `${day} ${month}, ${year}`;
    }


    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['image-div']}>
                    <img src={blog.avatar} alt="blog avatar" />
                </div>
                <div className={styles['title-div']}>
                    <p className={styles['blog-heading']}>{blog.title}</p>
                    <p className={styles['blog-date']}>{formatDate(blog.createdAt)}</p>
                </div>
                <div className={styles['description-div']}>
                    <p className={styles['description']}>{blog.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ParticularBlog