import React from 'react';
import styles from './Cards.module.css';

const Cards = (props) => {
    const { image_url, card_title } = props;

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
                        <p className={styles['card-title']}>{truncateTitle(card_title, 50)}</p>
                    </div>
                    <div className={styles["link"]}>
                        <a href="/" className={styles['link-text']} target='_blank'>READ MORE {">>"}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;