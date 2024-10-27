import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/portfolio.jpg";
import ImageOnee from "../../images/1.jpeg";
import ImageTwo from "../../images/aws.avif";
import ImageThree from "../../images/parking.png";
import ImageFour from "../../images/iare.webp";
// import ImageFive from "../../images/image5.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Java Project",
    image: ImageOnee,
    link: "https://github.com/balavardhan224/Java-project-Employee-Management", // Update with a valid link
  },
  {
    id: 1,
    name: "Portfolio Webpage",
    image: ImageOne,
    link: "/", // Update with a valid link
  },
  {
    id: 2,
    name: "AWS Project",
    image: ImageTwo,
    link: "",
  },
  {
    id: 3,
    name: "Parking App",
    image: ImageThree,
    link: "https://github.com/balavardhan224/smart-parking",
  },
  {
    id: 4,
    name: "IARE Fest App",
    image: ImageFour,
    link: "https://github.com/balavardhan224/IARE-Fest",
  },
  // {
  //   id: 5,
  //   name: "Shopping Cart Design",
  //   image: ImageFive,
  //   link: "https://your-shopping-cart-design-link.com",
  // },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projets"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer"> 
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
