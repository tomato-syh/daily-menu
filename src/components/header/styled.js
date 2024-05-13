import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #ffcc66; /* Light orange */
`;

export const StyledButton = styled.div`
  background-color: #ff6347; /* Tomato red */
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500; /* Darker orange */
  }
`;
