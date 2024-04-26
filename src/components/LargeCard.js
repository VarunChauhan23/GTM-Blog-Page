// import React, { useState } from 'react';
// import styles from './LargeCard.module.css';
// import { Link } from 'react-router-dom';

// const LargeCard = ({ postArray }) => {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredPosts = postArray.filter(post =>
//     post.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const truncateTitle = (title, maxLength) => {
//     if (title.length > maxLength) {
//       return title.substring(0, maxLength) + '...';
//     }
//     return title;
//   };

//   return (
//     <>
//       <div className={styles['large-card']}>
//         <div className={styles['search-area']}>
//           <label htmlFor="search">Search</label>
//           <input type="text" name="search" id={styles["search"]} placeholder='Search' onChange={handleSearch} />
//           <button className={styles['search-button']}>Search</button>
//         </div>
//         <div className={styles['post-link-div']}>
//           <div className={styles['post-heading']}>
//             <p>{searchQuery ? 'Search Results' : 'Recent Posts'}</p>
//           </div>
//           {filteredPosts.slice(-5).reverse().map((post, index) => {
//             return (
//               <div className={styles["post-links"]} key={index}>
//                 <Link to={`/particularBlog/${post._id}`} target='_blank'>{truncateTitle(post.desc, 100)}</Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default LargeCard;

import React, { useState } from 'react';
import styles from './LargeCard.module.css';
import { Link } from 'react-router-dom';

const LargeCard = ({ postArray }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = postArray.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <>
      <div className={styles['large-card']}>
        <div className={styles['search-area']}>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" id={styles["search"]} placeholder='Search' onChange={handleSearch} />
          <button className={styles['search-button']}>Search</button>
        </div>
        <div className={styles['post-link-div']}>
          <div className={styles['post-heading']}>
            <p>{searchQuery ? 'Search Results' : 'Recent Posts'}</p>
          </div>
          <div className={styles['post-links-container']} style={{ overflowY: 'auto' }}>
            {/* When there are no search results, display only the last 5 posts */}
            {!searchQuery &&
              filteredPosts.slice(-5).reverse().map((post, index) => {
                return (
                  <div className={styles["post-links"]} key={index}>
                    <Link to={`/particularBlog/${post._id}`} target='_blank'>{truncateTitle(post.desc, 100)}</Link>
                  </div>
                );
              })
            }
            {searchQuery &&
              filteredPosts.map((post, index) => {
                return (
                  <div className={styles["post-links"]} key={index}>
                    <Link to={`/particularBlog/${post._id}`} target='_blank'>{truncateTitle(post.desc, 100)}</Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default LargeCard;
