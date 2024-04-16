import React, { useEffect } from 'react';
import styles from './App.module.css';
import Cards from "./components/Cards";
import LargeCard from "./components/LargeCard";

function App() {
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

    observer.observe(document.getElementById("initial-card-container"));
    observer.observe(document.getElementById("large-card-container"));
  }, []);

  const Post_Array = [
    { title: "Crafting Digital Adventures: Good Tech Mind to Game Development", imageUrl: "https://imgs.search.brave.com/GYbjgjr-nrgNTwSsetzqOHOT-KOQqWjmDXiy2G2PDu8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZXZlbG9waW5n/LXByb2dyYW1tZXIt/cmVhZGluZy1jb21w/dXRlci1jb2Rlcy1k/ZXZlbG9wbWVudC13/ZWJzaXRlLWRlc2ln/bi1jb2RpbmctdGVj/aG5vbG9naWVzXzQ1/MDQxLTM3Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" },
    { title: "Riding the Wave: The latest trends in Mobile App Development", imageUrl: "https://imgs.search.brave.com/sgNnolKN2EOptHWyVbxMiRCjQFUcMXdlzjD9dHSs7I0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDkyOTM3Ny9waG90/by9jbG9zZS11cC1v/Zi1jb21wdXRlci1w/cm9ncmFtbWVyLWNv/ZGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dmxvQkhr/d0I4azVfWUszTXRf/NUJvbG50VG1qUnFP/Z2tBSzUzMXlzM2hr/bz0" },
    { title: "How UI/UX Design is Revolutionising the Digital World: Insights from Good Tech Mind", imageUrl: "https://imgs.search.brave.com/aXO7tvfoRjgu4oYnFdCb-d6Bb5ymJT4SX0N9j1RZ6BA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MjAwNjM5MS9waG90/by9jb21wdXRlci1w/cm9ncmFtbWVyLXdv/cmtpbmctb24tbmV3/LXNvZnR3YXJlLXBy/b2dyYW0uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWd2SHRf/dkZqdGNOcnkxMlho/MHFDdEp1WEF3X0Rt/cTdsejRIV2tVd0lY/ak09" },
    { title: "Leading the Charge in React Native App Development: A Closer Look at Good Tech Mind Approach", imageUrl: "https://imgs.search.brave.com/E5P4YDtYUVGwDPV1HZBpOOjgebZo1XaE-uytBNMaYzA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MDQ1OTM1Ni9waG90/by95b3VuZy1mZW1h/bGUtZW5naW5lZXIt/Y29kaW5nLW92ZXIt/bGFwdG9wLWluLWl0/LXN0YXJ0dXAtY29t/cGFueS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d1ZmX0JX/LVZuelh3c21ZQXFN/YnYySk9WandfUXBP/ZHYxY2thUGRZa2Nr/ST0" },
    { title: "Revolutionising Businesses with Chatbot Development", imageUrl: "https://imgs.search.brave.com/iURhaJHY3dpZya6s1CxYzLcRkv_GUdDE0NsQT-pLl5g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NzM2MTcxMS9waG90/by9tYWxlLWNvbXB1/dGVyLXByb2dyYW1t/ZXJzLWRpc2N1c3Np/bmctb3Zlci1jb2Rl/cy1hdC1kZXNrLWlu/LW9mZmljZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9amZO/RmxiMW9HUzE0Szc4/LV9fVkoxQVEtZjl0/YW53X1pYbllxaDF1/Y2dfOD0" },
    { title: "Knowing the facts attached with ERP and CRM development - Good Tech Mind", imageUrl: "https://imgs.search.brave.com/KSesv4uwGIllsu5_blundpFPXgmZVxL-Z4RpSlCAOss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9haS1nZW5lcmF0/ZWQtaGFja2VyLWxh/cHRvcC13aXRoLWJp/bmFyeS1jb21wdXRl/ci1jb2RlLWludGVy/bmV0LW5ldHdvcmst/c2VjdXJpdHlfNzcx/ODYtNjczNi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" }
  ];

  return (
    <>
      <p className={styles['main-heading']}>Latest Blogs</p>
      <div className={styles['top-container']}>
        <div id='initial-card-container' className={styles["cards"]}>
          {Post_Array.slice(0, 2).map((post, index) => {
            return (
              <Cards key={index} image_url={post.imageUrl} card_title={post.title} />
            );
          })}
        </div>
        <div id='large-card-container' className={styles["large-card-div"]}>
          <LargeCard Post_Array={Post_Array} />
        </div>
      </div>
      <div className={styles['bottom-container']}>
        <p className={styles['main-heading']}>Blogs</p>
        <div className={styles['blog-cards']}>
          {Post_Array.map((post, index) => {
            return (
              <section key={index} className={styles["animated-cards"]}>
                <Cards image_url={post.imageUrl} card_title={post.title} />
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
