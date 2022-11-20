import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Div from "./About.style";

const About = () => {
  return (
    <>
      <Navbar />
      <Div>
        Designed By N.F.ATCA
        <div>
          <AiFillLinkedin
            href="https://www.linkedin.com/in/nurullahfurkanatca"
            target="_blank"
            color="#0072b1"
            fontSize="3rem"
            cursor="pointer"
          />
          <AiFillGithub
            href="https://github.com/nfatca"
            target="_blank"
            color="#171515"
            fontSize="3rem"
            cursor="pointer"
          />
        </div>
      </Div>
    </>
  );
};

export default About;
