import React from "react";
import styled from "styled-components";
import Details from "../components/Details";
import Form from "../components/Form";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #22314f;
`;

const index = () => {
  return (
    <StyledWrapper>
      <Details />
      <Form />
    </StyledWrapper>
  );
};

const StyledIndex = styled(index)`
  height: 100%;
`;

export default StyledIndex;
