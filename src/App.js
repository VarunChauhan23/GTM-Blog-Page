import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Cards from "./components/Cards";
import LargeCard from "./components/LargeCard";
import axios from 'axios';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ParticularBlog from './components/ParticularBlog';

function App() {

  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === "initial-card-container") {
            if (window.innerWidth < 700) {
              entry.target.classList.add(styles['slideFromRight']);
            } else {
              entry.target.classList.add(styles['slideFromBottom']);
            }
          } else if (entry.target.id === "large-card-container") {
            if (window.innerWidth < 700) {
              entry.target.classList.add(styles['slideFromLeft']);
            } else {
              entry.target.classList.add(styles['slideFromRight']);
            }
          } else {
            const sectionIndex = Array.from(document.querySelectorAll('section')).indexOf(entry.target);
            const isMobile = window.innerWidth < 700;
            if (isMobile) {
              if (sectionIndex % 2 === 0) {
                entry.target.classList.add(styles['slideFromLeft']);
              } else {
                entry.target.classList.add(styles['slideFromRight']);
              }
            } else {
              if (sectionIndex % 3 === 0) {
                entry.target.classList.add(styles['slideFromLeft']);
              } else if (sectionIndex % 3 === 1) {
                entry.target.classList.add(styles['slideFromBottom']);
              } else {
                entry.target.classList.add(styles['slideFromRight']);
              }
            }
            observer.unobserve(entry.target);
          }
        }
      });
    });

    document.querySelectorAll('section').forEach(e => {
      observer.observe(e);
    });

    const initialCardContainer = document.getElementById("initial-card-container");
    if (initialCardContainer) {
      observer.observe(initialCardContainer);
    }

    const largeCardContainer = document.getElementById("large-card-container");
    if (largeCardContainer) {
      observer.observe(largeCardContainer);
    }

    const fetchBlogs = () => {
      try {

        const Api_Uri = "https://gtm-backend.onrender.com/api/blog/getall";

        axios.get(Api_Uri).then((res) => {
          setPostArray(res.data);
        });
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchBlogs();
  }, [postArray]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<>
          <p className={styles['main-heading']}>Latest Blogs</p>
          <div className={styles['top-container']}>
            <div id='initial-card-container' className={styles["cards"]}>
              {postArray.slice(-2).reverse().map((post, index) => {
                return (
                  <Cards key={index} image_url={post.avatar} desc={post.desc} card_title={post.title} _id={post._id} />
                );
              })}
            </div>
            <div id='large-card-container' className={styles["large-card-div"]}>
              <LargeCard postArray={postArray} />
            </div>
          </div>
          <div className={styles['bottom-container']}>
            <p className={styles['main-heading']}>Blogs</p>
            <div className={styles['blog-cards']}>
              {postArray.map((post, index) => {
                return (
                  <section key={index} className={styles["animated-cards"]}>
                    <Cards image_url={post.avatar} desc={post.desc} card_title={post.title} _id={post._id} />
                  </section>
                );
              })}
            </div>
          </div>
        </>}>
        </Route>
        <Route path="/particularBlog/:_id" element={<ParticularBlog />}>
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
