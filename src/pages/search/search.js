import React from "react";
import {
  StyledSearchContainer,
  StyledSearchBox,
  StyledTextBar,
  StyledTextBarContents,
} from "./styled";

import { BoldText } from "../../components/globalStyle";
import { useSelector } from "react-redux";
import { TextBar } from "../../components/textbar/textbar";

export const Search = () => {
  const contents = useSelector((state) => state.contents);

  return (
    <StyledSearchContainer>
      <BoldText style={{ marginTop: "30px", marginBottom: "30px", color: "white" }}>
        {" "}
        Search
      </BoldText>
      <StyledSearchBox>
        <StyledTextBar>
          <StyledTextBarContents style={{ width: "100px", color: "white" }}>
            Menu
          </StyledTextBarContents>
          <StyledTextBarContents
            style={{
              width: "200px",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
              color: "white",
            }}
          >
            Taste
          </StyledTextBarContents>
          <StyledTextBarContents
            style={{
              width: "200px",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
              color: "white",
            }}
          >
            Needs
          </StyledTextBarContents>
          <StyledTextBarContents
            style={{
              width: "200px",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
              color: "white",
            }}
          >
            Image
          </StyledTextBarContents>
        </StyledTextBar>
        {contents?.map((e, i) => {
          return <TextBar key={i} props={e} />;
        })}
      </StyledSearchBox>
    </StyledSearchContainer>
  );
};
