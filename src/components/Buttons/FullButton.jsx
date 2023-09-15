import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className='animate pointer radius8'
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#ffe520")};
  background-color: ${(props) => (props.border ? "transparent" : "#ffe520")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "black")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#ffe520")};
    color: ${(props) => (props.border ? "#ffe520" : "#fff")};
  }
`;
