import React, { useState } from "react";
import { StyledMainContainer, MoveButton, FlavorsContainer, FlavorLabel, SelectedFlavorLabel } from "./styled";

import { useNavigate } from "react-router-dom";


const flavors = ["酸", "甜", "苦", "辣", "咸"];

const getRandomFlavor = () => {
  const randomIndex = Math.floor(Math.random() * flavors.length);
  return flavors[randomIndex];
};

export const Main = () => {
  const navigate = useNavigate();
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedFlavor(getRandomFlavor());
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <StyledMainContainer>
      <FlavorsContainer>
        {flavors.map((flavor, index) => (
          <React.Fragment key={index}>
            {selectedFlavor === flavor ? (
              <SelectedFlavorLabel onClick={() => setSelectedFlavor(flavor)}>{flavor}</SelectedFlavorLabel>
            ) : (
              <FlavorLabel onClick={() => setSelectedFlavor(flavor)}>{flavor}</FlavorLabel>
            )}
          </React.Fragment>
        ))}
      </FlavorsContainer>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <MoveButton onClick={handleButtonClick} disabled={isAnimating}>
        Random Selection
        </MoveButton>
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#333" }}>Result: {selectedFlavor}</p>
      </div>
      <MoveButton onClick={() => navigate("/search")} style={{ marginTop: "20px" }}>
        Search
      </MoveButton>
    </StyledMainContainer>
  );
};
