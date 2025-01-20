import React from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";

const ResumeLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;
`;

function Home() {
  return (
    <Shell>
      <ResumeLayout>
        <object
          data="assets/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label="Resume PDF"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="assets/resume.pdf">to the PDF!</a>
          </p>
        </object>
      </ResumeLayout>
    </Shell>
  );
}

export default Home;
