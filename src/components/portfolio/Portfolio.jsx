import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Fighting Game",
    github: "https://github.com/LuShuhong/fighting-game",
    demo: "https://fighting-game-lac.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce Shopping Cart ",
    github: "https://github.com/LuShuhong/shopping-cart",
    demo: "https://shopping-cart-lushuhong.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Responsive eBook Webstie",
    github: "https://github.com/LuShuhong/book-website",
    demo: "https://bookslover.netlify.app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;