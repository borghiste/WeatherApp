import { useState} from "react";
import styled from "styled-components";
import InputForm from "../UI/InputForm";
import Button from "../UI/Button";
import { weatherApi } from "../../features/weatherApiSlice";
import { useDispatch, useSelector } from "react-redux";
import CityItem from "./CityItem";
import { nanoid } from "nanoid";
import { lastDayOfQuarter } from "date-fns";

const EmptyState = styled.div`
text-align:center;
padding-top:1rem;`



const List = styled.div`background: ${(props)=>props.theme.primary};
                        display:flex;
                        justify-content:center;
                        flex-direction:column;
                        margin: 0 auto;
                    
                        `

                        const ButtonsContainer = styled.div`display:flex;
                        
                        margin:0 auto;
                        justify-content:center;
                        flex-direction:column;
                        `



export default function CityList({city}){
                        const [addCityInput,setaddCityInput]=useState(false);
                         const cities = useSelector((state) => state.cities);
                        const dispatch = useDispatch();
                        
  








function handleaddCity(city){
    
    let CityId = nanoid();
   
   
  const {data,error}=  dispatch(weatherApi.endpoints.getCoordinatesByCityName.initiate({
       
    name:city,
    id:CityId
})

);


}


    


 

  








  



    return(
            
            <>
<ButtonsContainer>
    <Button handleClick={()=>setaddCityInput(!addCityInput)} >add city</Button>
    <Button  >add position</Button>
</ButtonsContainer>

<InputForm  placeholder={'Filter City'} buttonText={'clear filter'}   />

  <InputForm placeholder={'Add City'} buttonText={'Search City'} buttonAction={handleaddCity}  />   

<List>
  
    
 {cities?.map(city=> <CityItem city={city} name={city.name} key={city.id}/>)}
        </List>

        </>

    )
    
    }