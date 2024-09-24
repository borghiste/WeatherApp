import styled from "styled-components";

const StyledButton = styled.button`
background-color:${(props)=> props.theme.primarylighter};
min-height:2rem;
border-radius:30px;
`

export default function Button({children,handleClick}){
    return(
        <StyledButton onClick={handleClick} >{children}</StyledButton>
    )
}