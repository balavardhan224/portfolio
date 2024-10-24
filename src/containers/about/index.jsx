import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
// import { DiApple, DiAndroid } from "react-icons/di";
// import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Balavardhan Reddy Malyala",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Cape Girardeau, MO, USA",
  },
  {
    label: "Email",
    value: "balavardhanrdy@gmail.com",
  },
  {
    label: "Contact No",
    value: "+1 3144595683",
  },
];

const jobSummary =
  "An experienced Assistant System Engineer adept in building mobile applications and system automation, with hands-on exposure working at Tata Consultancy Services. Demonstrates a solid foundation in computer science and software development frameworks, particularly proficient in Java and full-stack mobile app development. Successfully led projects such as building a multi-platform app for a leading firm and automating major banking systems to meet regulatory compliance. Aspires to leverage this expertise and experience as a Java Developer to contribute to dynamic software solutions";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Full - Stack Developer</h3>
          <p>{jobSummary}</p>

          <h3 className="personalInformationHeaderText">
            Personal Information
          </h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
