import { useState } from 'react';

import styled from 'styled-components';
import Button from "./Button";

const StyledInputForm = styled.div`
  text-align: center;
  margin: 1rem;
`
const Input = styled.input`
  padding: 0.4rem;
`

const StyledButton = styled.button`
background-color:${(props)=> props.theme.primarylighter};
height:2rem;`
export default function InputForm({
  inputAction, 
  placeholder, 
  inputValue, 
  buttonAction, 
  buttonText
}) {
  const [localInputValue, setLocalInputValue] = useState('');

  function handleInputChange(e) {
    if(inputAction) {
      inputAction(e.target.value);
    } else {
      setLocalInputValue(e.target.value)
    };
  }
  
  function handleButtonClick() {
    buttonAction((inputAction) ? inputValue : localInputValue);
  }
  
  return (
    <StyledInputForm>
      <Input type="text" placeholder={placeholder} onChange={handleInputChange} 
        value={(inputAction) ? inputValue : localInputValue}
      />
      <StyledButton handleClick={handleButtonClick}>{buttonText}</StyledButton>
    </StyledInputForm>
  )
}