import React from "react";
import {
  StyledPage,
  StyledBody,
  StyledHeading1,
  StyledTrail,
  StyledCard,
  StyledInfo,
  StyledBackground,
} from "../assets/styles";

// import gsap, { ScrollTrigger } from "gsap";

function Home() {
  // useEffect(() => {
  //   // gsap.to("#page2-trigger", {
  //   //   duration: 2,
  //   //   ease: "none",
  //   //   transformOrigin: "bottom",
  //   //   scaleY: 0.8,
  //   //   scrollTrigger: {
  //   //     trigger: "#page2-trigger",
  //   //   },
  //   // });
  // }, []);

  return (
    <>
      <StyledBackground page="home" />
      <StyledTrail
        page="home"
        width="188"
        height="476"
        viewBox="0 0 188 476"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88 0H120C58.2972 31.2833 213 376 184 477H0C140 349 11.6845 49.9532 88 0Z"
          fill="#F3ECED"
        />
      </StyledTrail>
      <StyledPage id="home">
        <StyledBody>
          <StyledHeading1>
            Let's make
            <br />
            things happen
          </StyledHeading1>
        </StyledBody>
        <StyledCard>
          <StyledInfo />
        </StyledCard>
      </StyledPage>
    </>
  );
}

export default Home;
