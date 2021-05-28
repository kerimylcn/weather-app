import React, { useEffect,useState } from 'react';
import './Weather.css';




const Weather = ({data}) => {

 
    if(data.location){
      const {location,current,forecast} = data;
       
     return <div class="card">
       <h2>{location.name},{location.country}</h2>
      
      <h1>{current.temp_c}°</h1>
 
      {
          forecast.forecastday.map((item,key) =>{
            return  <div key={key} className="daily-weather-box">
                 
                  <table>
            <tr>
                <td>{item.date}</td>
                
            </tr>
            <tr>
                <td>{item.day.maxtemp_c}°</td>
                  
            </tr>
            <tr>
                <td><img src={item.day.condition.icon}></img></td>
                           
            </tr>
        </table>
          
              </div>        
              
          })


      }
     </div>
     
    }
}

export default Weather; 





