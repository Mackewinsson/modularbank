import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  width: 60%;
  border: 2px solid white;
  flex-direction: column;

  > h1 {
    color: white;
  }
  > form {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
  }
  > form div {
    display: flex;
    color: white;
    font-size: 0.8em;
    flex-direction: column;
  }

  > form div input {
    width: 315px;
    padding: 7px 11px 7px 11px;
  }
`;

const Form = () => {
  const handleChangeLast = (e) => {
    setLastName(e.target.value.toUpperCase());
  };
  const handleChange = (e) => {
    setFirstName(e.target.value.toUpperCase());
  };

  return (
    <StyledForm>
      <h1>Contact Us</h1>
      <form action="submit" method="POST">
        <div className="firstname">
          <label htmlFor="firstname">First Name*</label>
          <input name="firstname" type="text" />
        </div>
        <div className="lastname">
          <label>Last Name*</label>
          <input type="text" />
        </div>
        <div className="firstname">
          <label>First Name*</label>
          <input type="text" />
        </div>
        <div className="lastname">
          <label>Last Name*</label>
          <input type="text" />
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
