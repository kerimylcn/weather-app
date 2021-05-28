import { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Weather from './Components/Weather';


const App = () => {

  const [data, setDatas] = useState({});
  const [city, setCity] = useState('');


 useEffect(()=>{
    search()
 },[city])
   
   async  function search() {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=bfc9399e5cd9455ca1e103248210703&q=${city}&days=3`);
       if (response.ok){
         var json = await response.json()
         console.log(json);
         setDatas(json);
       }
   }




  return (
    <div className="weather-wrapper">
     <Search city={city} setCity={setCity} />
     {
       data.current && <Weather data={data} />
     }
    
    </div>
  );
}

export default App;

