import React from 'react';
import styles from './LargeCard.module.css';

const LargeCard = ({ Post_Array }) => {

  return (
    <>
      <div className={styles['large-card']}>
        <div className={styles['search-area']}>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" id={styles["search"]} placeholder='Search' />
          <button className={styles['search-button']}>Search</button>
        </div>
        <div className={styles['post-link-div']}>
          <div className={styles['post-heading']}>
            <p>Recent Posts</p>
          </div>
          {Post_Array.slice(0,5).map((post, index) => {
            return (
              <div className={styles["post-links"]} key={index}>
                <a href="/" target='_blank'>{post.title}</a>
              </div>
            );
          })}
        </div>
      </div >
    </>
  )
}

export default LargeCard