import styled from "styled-components";

export const AddImageButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4682b4; 
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4169e1; 
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ffa500; 
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  background-color: #ffd700; 
  width: 70%;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
`;

export const StyledTextArea = styled.input`
  border-radius: 10px;
  border: 2px solid #ffa500; /* Border color changed to orange */
  padding: 10px;
  width: 100%;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  text-align: center;
  border-radius: 25px;
  color: white;
  background-color: #ff6347;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: 200px; 
  font-size: 16px; 

  &:hover {
    background-color: #ff4500; 
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentsTextArea = styled.textarea`
  border-radius: 10px;
  border: 2px solid #ffa500; 
  padding: 10px;
  height: 62px;
  width: 100%;
  font-weight: bold;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  text-align: center;
  border-radius: 25px;
  color: white;
  background-color: #ff6347; 
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: 200px; 
  font-weight: bold;
  font-size: 16px; 
  &:hover {
    background-color: #ff4500; 
  }
`;
