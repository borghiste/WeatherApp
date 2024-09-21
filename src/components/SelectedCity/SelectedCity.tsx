import Button from "../UI/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { weatherBackgroundColor } from "../../shared/weatherCackgroundColor";
import weather from "../../mock/weather";
import { CSSProp } from "styled-components";
import '../../SelectedCity.css';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import ScrollContainer from 'react-indiana-drag-scroll';





const Container = styled.div`
display:flex;
justify-content:center;
background:${(props)=> props.theme.primary};
max-width: 900px;
margin:0  auto;
margin-right:0;
  flex-direction:column;
  `

const MainBox = styled.section`
display:flex;
justify-content:center;
flex-direction:column;
max-width:500px;

border:1 px, solid, black;
background:${(props)=> props.theme.primarylight};
`

const TemperatureDetails = styled.div`box-shadow:${(props)=> props.theme.boxShadow};

margin:0.6rem;
text-align:start;
min-width:30rem;`

const Test = styled.div`
display:flex;

justify-content:space.between;

cursor: pointer;
max-width:50px;
margin: 20px 0 0 20px;
`



const DayCard = styled.div`
background:${(props)=> props.theme.cloudy};
min-width:8rem;
margin:0.5rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`




export default function SelectedCity({coords}){
   
const date =format( new Date(2024,9,21),'EEEE,MMMM,yyyy');
const data =weather;
const cardColor:CSSProp = weatherBackgroundColor(data.weather[0].icon);
    return(<>
    <Link to='/'>
    <Button>back</Button>
    </Link>
    <Container className="cont">
       
        <MainBox>
            <h1 className="big-text">{data.name}</h1>
            
            <p >{date}</p>
            <p>weather</p>
           <TemperatureDetails>
          <p>the temperarture is 0989 °C</p>
          <p>wind: 8909  atkjjkh</p>
          <p>humidity: 89%</p>
          <p>visibility:</p>
          <p>pressure:</p>
           </TemperatureDetails>
        </MainBox>

    </Container>
    <h1>icon</h1>

<ScrollContainer>
    <Test>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>

<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>
<DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard><DayCard>
   <p>day</p>
    <p>°C</p>
    card
</DayCard>



</Test>
</ScrollContainer>
    



    </>
    )
}