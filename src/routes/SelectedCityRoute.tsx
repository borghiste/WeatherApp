import SelectedCity from '../components/SelectedCity/SelectedCity'
import { useSearchParams } from "react-router-dom";

export default function SelectedCityRoute(){
const [params]= useSearchParams();
const lon = params.get('lon');
const lat = params.get('lat');

    return(
        <>

        <SelectedCity coords={{lat,lon}}/>
        </>
    )
}