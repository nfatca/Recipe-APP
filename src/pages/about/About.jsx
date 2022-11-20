import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Div, { Link } from "./About.style";

const About = () => {
  return (
    <>
      <Navbar />
      <Div>
        Designed By N.F.ATCA
        <div>
          <Link href="https://github.com/nfatca" target="_blank">
            <AiFillGithub />
          </Link>
          <Link
            blue={"#0072b1"}
            target="_blank"
            href="https://www.linkedin.com/in/nurullahfurkanatca"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </Div>
    </>
  );
};

export default About;
