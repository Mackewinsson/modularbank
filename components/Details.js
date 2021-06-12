import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  width: 40%;
  height: 100%;

  > h4 {
    color: white;
    font-weight: bold;
  }

  > a {
    text-decoration: none;
    color: #de3c4b;
  }

  > ul {
    list-style: none;
    line-height: 20px;
    color: white;
  }
`;

const Details = () => {
  return (
    <StyledDetails>
      <h4>Media enquires:</h4>
      <a href="#">press@modularbank.co</a>
      <h4>Media enquires:</h4>
      <a href="#">press@modularbank.co</a>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        </li>
      </ul>
    </StyledDetails>
  );
};

export default Details;
