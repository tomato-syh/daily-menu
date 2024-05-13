import styled, { keyframes } from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #f9f9f9;
`;

export const MoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  text-align: center;
  border: none;
  border-radius: 25px;
  background-color: #ff6347;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500; 
  }
`;

export const FlavorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-around;
  margin-top: 20px;
`;

export const FlavorLabel = styled.label`
  color: #555;
  font-size: 24px; /* 放大字体 */
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px 15px; /* 调整间距 */
  margin: 0 5px; /* 调整间距 */
  cursor: pointer;
  

  &:hover {
    border-color: #ff6347;
  }
`;


export const flavorAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const SelectedFlavorLabel = styled.label`
  font-weight: bold;
  font-size: 32px;
  color: #ff6347;
  border-color: #ff6347;
  border-radius: 5px;
  padding: 10px 15px; /* 调整间距 */
  margin: 0 5px; /* 调整间距 */
  cursor: pointer;
`;
