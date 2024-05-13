import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  background-color: #fff
`;

export const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #ffa500; 
  border-radius: 15px;
  background-color: #ffd700; 
  box-shadow: 0px 2px 5px #c9c9c9;
`;

export const StyledTextBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  width: 70%;
  cursor: pointer;
  border-bottom: 1px solid #ffa500; 
  &:hover {
    color: white;
    background-color: #ff6347; 
  }
`;

export const StyledTextBarContents = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
