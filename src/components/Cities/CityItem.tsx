import styled from "styled-components";
import weather from "../../mock/weather";
import { Link } from "react-router-dom";
import { weatherIconUrl } from '../../shared/baseUrls ';
import { CSSProp } from "styled-components";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


// declare module "react" 
    // {interface HTMLAttributes<T> extends DOMAttributes<T> {
    //   css?: CSSProp;}

    



import { weatherBackgroundColor } from "../../shared/weatherCackgroundColor";
import { useGetWeatherByCoordsQuery } from "../../features/weatherAPISlice";




const Card = styled.div<{cardColor:string}>`
background: ${props=> props.theme[props.cardColor]};
min-width:40rem;
margin:2rem;


`

const Header = styled.header`
display:flex;
justify-content:flex-end;

`


const DeleteButton= styled.button`
background-color:red;
;
`

const Article= styled.article`display:flex;
align-items:center;
justify-content:space-between;`


const Text = styled.div`
text-align:start;
line-height:1;
`



















export default function CityItem({city,icon}){
let {data, error, isloading}= useGetWeatherByCoordsQuery(city.coords)

    const cardColor:CSSProp = weatherBackgroundColor(data.weather[0].icon);
    
    
    





    return(
            <Link to={`/city?lat=${city.lat}&lon=${city.lon}}`}  >
            <Card cardColor={cardColor}>
                <Header>
                    <DeleteButton>
                        <strong>X</strong>
                    </DeleteButton>
                </Header>
                <Article>
                
                      
                        <Text>
                             <h1>{city.name}</h1>
                            <h3>{format( new Date((data.dt + data.timezone)* 1000),'EEEE,MMMM,yyyy')}</h3>
                         
                           
                            <p>3:31 pm</p>
                        </Text>
                    <img src={`${weatherIconUrl}${icon}@2x.png`} alt="" />
                    <h1 className="big-text">°C</h1>
                </Article>
              
          </Card>
          </Link>  
                
                

        
        
    )
}