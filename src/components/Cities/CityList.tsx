import { useState,forwardRef} from "react";
import styled from "styled-components";

import InputForm from "../UI/InputForm";
import Button from "../UI/Button";

import { nanoid } from "nanoid";



import { useDispatch, useSelector } from "react-redux";

import CityItem from "./CityItem";






const List = styled.div`background: ${(props)=>props.theme.primary};
                        display:flex;
                        justify-content:center;
                        flex-direction:column;
                        margin: 0 auto;
                    
                        `

                        const ButtonsContainer = styled.div`display:flex;
                        max-width:30rem;
                        margin:0 auto;
                        justify-content:center;
                        flex-direction:column;`



export default function CityList(){
                        const [addCityInput,setaddCityInput]=useState(false);
                         const cities = useSelector((state) => state.cities);
                        const dispatch = useDispatch();
                        
             


                    


function handleinputChange(e){console.log(e.target.value);
}





  



    return(
            
            <>
<ButtonsContainer>
    <Button handleClick={()=>setaddCityInput(!addCityInput)} >add city</Button>
    <Button handleClick={()=>console.log(addCityInput)} >add position</Button>
</ButtonsContainer>

<InputForm  placeholder={'Filter City'} buttonText={'clear filter'}   />

<InputForm handleChange={handleinputChange} placeholder={'Add City'} buttonText={'Search City'}  /> 
<List>
 {cities.map(city=> <CityItem city={city} name={city.name} key={city.id}/>)}
        </List>

        </>

    )
}