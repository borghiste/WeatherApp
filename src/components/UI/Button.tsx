import styled from "styled-components";

const StyledButton = styled.button`
background-color:#ceaaee;`

export default function Button({children,handleClick}){
    return(
        <StyledButton onClick={handleClick} >{children}</StyledButton>
    )
}