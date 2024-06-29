import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          I offer a wide range of services to help you achieve your business
          goals. <br /> My expertise includes:
          <br />
          <br />
          - Web Development: Creating responsive and dynamic websites <br />{" "}
          using modern technologies like React.
          <br />
          <br />
          - UI/UX Design: Crafting intuitive and engaging <br /> user
          experiences.
          <br />
          <br />
          - SEO Optimization: Enhancing your website's visibility and <br />{" "}
          search engine ranking.
          <br />
          <br />- E-commerce Solutions: Building and managing online stores{" "}
          <br /> with seamless user experiences.
          <br />
          <br />
          - Content Management: Integrating and customizing CMS <br />
          for easy content updates.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* First card */}
        <motion.div
          initial={{ left: "-12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend Development"}
            detail={
              "HTML, CSS, JavaScript, TypeScript, React, Next.js\nTailwind CSS, Shadcn, Sanity.io"
            }
          />
        </motion.div>

        {/* Second card */}
        <motion.div
          initial={{ top: "12px", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Backend Development"}
            detail={"Node.js, Express, MongoDB, REST APIs, SQL, Firebase"}
          />
        </motion.div>

        {/* Third card */}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Creating intuitive and user-friendly designs with a focus on accessibility."
            }
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}
