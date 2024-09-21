import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const weatherAPI = createApi({
    reducerPath:'WeatherAPI',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.openweathermap.org/'}),
    endpoints: (builder)=>({
        getWeatherByCoords: builder.query({
            query:(coords)=> `data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.CT_APP_OPENWEATHER_API}&units=metric`
        })
    })
})


export const {useGetWeatherByCoordsQuery} = weatherAPI