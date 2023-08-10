import React from "react";
import {
  StyledPage,
  StyledBody,
  StyledHeading3,
  StyledHeading4,
  CenteredStack,
  Stack,
  StyledMeiaNoites,
} from "../assets/styles";

function NotFound() {
  return (
    <>
      <StyledPage id="home">
        <StyledBody>
          <CenteredStack>
            <Stack>
              <StyledMeiaNoites
                src="assets/meia-noites.png"
                alt="Cat can't find this page"
              />
              <StyledHeading3>Oh no!</StyledHeading3>
              <StyledHeading4>Meia noite can't find this page!</StyledHeading4>
            </Stack>
          </CenteredStack>
        </StyledBody>
      </StyledPage>
    </>
  );
}

export default NotFound;
