import Button from "./Button";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { added } from "../../features/CitiesSlice";
import { nanoid } from "nanoid";
import { useRef } from "react";



const StyledForm = styled.form`
display:flex;
justify-content:center
background-color:${(props)=> props.theme.primary}`



export default function InputForm({placeholder,
    buttonText, 
    buttonAction,
handleChange}){
        
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il comportamento predefinito di invio del form
        buttonAction(); // Esegui l'azione desiderata
    }


    
    return(
        <StyledForm onSubmit={handleSubmit}>
<input onChange={handleChange} placeholder={placeholder} type="text"/>
<Button  handleClick={buttonAction}>{buttonText}</Button>
</StyledForm>
    )
    }