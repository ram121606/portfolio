import React from "react";
import "./portfolio.css";
import ltcode from "../../assets/ltcode.jpg";
import comment from "../../assets/comment.png";
import sales from "../../assets/sales.jpg";
import sql from "../../assets/sqlalchemy.jpg";
import todo from "../../assets/todo.png";
import url from "../../assets/url-short.png";

const data = [
  {
    id: 1,
    image: url,
    title: "URL-Nicknamer",
    github: "https://github.com/ram121606/shorturl_angular",
  },
  {
    id: 2,
    image: comment,
    title: "Comment Analysis",
    github: "https://github.com/ram121606/comment-analysis",
  },
  {
    id: 3,
    image: sales,
    title: "Sales Forecast",
    github: "https://github.com/ram121606/flask_app_sales",
  },
  {
    id: 4,
    image: ltcode,
    title: "Leetcode-stats",
    github: "https://github.com/ram121606/leetcode-scrape",
  },
  {
    id: 5,
    image: sql,
    title: "Sqlalchemy",
    github: "https://github.com/ram121606/sqlalchemy",
  },
  {
    id: 6,
    image: todo,
    title: "Todo-list",
    github:
      "https://github.com/ram121606/todo-list-react",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <br></br>
      {/* <h2>Full-stack Login page</h2> */}

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
