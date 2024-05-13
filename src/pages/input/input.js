import React, { useState } from "react";
import { BoldText, NormalText } from "../../components/globalStyle";
import {
  StyledInputContainer,
  StyledInputBox,
  HorizontalContainer,
  StyledTextArea,
  SubmitButton,
  ContentsTextArea,
  AddImageButton,
} from "./styled";

import { useDispatch } from "react-redux";
import { setContents } from "../../storage/actions";

export const Input = () => {
  const [menu, setMenu] = useState("");
  const [taste, setTaste] = useState("");
  const [needs, setNeeds] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (menu === "" || taste === "" || needs === "") {
        alert("Please complete your input.");
      } else {
        submit();
      }
    }
  };

  const submit = () => {
    dispatch(
      setContents({ menu: menu, taste: taste, needs: needs, image: image })
    );
    setMenu("");
    setTaste("");
    setNeeds("");
    setImage(null);
    alert("Your menu has been saved.");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <StyledInputContainer>
      <BoldText>Add Menu</BoldText>
      <StyledInputBox>
        <HorizontalContainer>
          <NormalText>Menu:</NormalText>
          <StyledTextArea
            type="text"
            placeholder="Enter menu name"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </HorizontalContainer>

        <HorizontalContainer>
          <NormalText>Taste:</NormalText>
          <StyledTextArea
            type="text"
            placeholder="Enter the menu taste"
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </HorizontalContainer>

        <HorizontalContainer>
          <NormalText>Needs:</NormalText>
          <ContentsTextArea
            type="text"
            placeholder="Enter what the menu needs"
            value={needs}
            onChange={(e) => setNeeds(e.target.value)}
          />
        </HorizontalContainer>

        <HorizontalContainer>
          <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
              id="fileInput"
            />
            <AddImageButton>Add Image</AddImageButton>
          </div>
          {image && <img src={image} alt="Uploaded" style={{ maxWidth: "100px", maxHeight: "100px", marginLeft: "10px" }} />}
        </HorizontalContainer>

        <SubmitButton onClick={submit}>Submit</SubmitButton>
      </StyledInputBox>
    </StyledInputContainer>
  );
};
