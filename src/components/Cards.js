import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

const Cards = (props) => {
    const { image_url, desc, _id } = props;

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };

    return (
        <>
            <div className={styles["card"]}>
                <img src={image_url} alt="card-logo" className={styles['image']} />
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <p className={styles['card-title']}>{truncateTitle(desc, 50)}</p>
                    </div>
                    <div className={styles["link"]}>
                        <Link to={`/particularBlog/${_id}`} className={styles['link-text']} target='_blank'>READ MORE {">>"}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;