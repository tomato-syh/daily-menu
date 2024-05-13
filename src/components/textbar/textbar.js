import React from "react";
import { StyledTextBar, StyledTextBarContents } from "./styled";

export const TextBar = ({ props }) => {
  return (
    <StyledTextBar>
      <StyledTextBarContents style={{ width: "100px" }}>
        {props.menu}
      </StyledTextBarContents>
      <StyledTextBarContents
        style={{
          width: "200px",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
        }}
      >
        {props.taste}
      </StyledTextBarContents>
      <StyledTextBarContents
        style={{
          width: "200px",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
        }}
      >
        {props.needs}
      </StyledTextBarContents>
    </StyledTextBar>
  );
};
