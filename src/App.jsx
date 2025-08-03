import { useState } from "react"


export default function App() {
  const [city,setCity] = useState('');
  const [whetherData, setWhetherData] = useState(null);
  const fetchWhetherData  = async() => {
   try{ const response = await fetch( `'Your Api'=${city}`)
    const data = await response.json();
    setWhetherData(data);
  }catch(error){
    console.log("errror" + error)

  }
  }

  return (
    <>
    <label htmlFor="cityInput">Enter city...</label><br />
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
    <button onClick={fetchWhetherData}>Search</button>
    {whetherData && setWhetherData && (<div>
      <h3>{whetherData.location.name}</h3>
      <p>temp: {whetherData.current.temp_c}</p>
      <p>humidity: {whetherData.current.humidity}</p>
      <p> Condition: {whetherData.current.condition.text}</p>
    </div>)}
    </>
  )
}
