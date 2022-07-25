import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameRows = (props) => {
  return ( 
    <div className='images_container'>
      <div>
        <p>{props.gameName}</p>
        <img  className='image' src={props.imageUrl} alt={props.gameName}></img>
      </div>
    </div>
)
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/sellers")
    .then(res => {
      setData(res.data);
      console.log(res.data[0].games[0]);
    })
  }, [])


 if(data != null)
 return(
    <div>
      <div className='sellers'>
          {data.map(item=>{
            return <div><h1>{item.sellerName}</h1>
            {item.games.map(it=>
              {
                return <GameRows gameName={it.gameName} imageUrl={it.imageUrl}></GameRows>
              })}
            </div>
          })}
        </div>
        <form className='login' action='http://localhost:8080/login'>
          <input className='login-btn' type='submit' value = "Go Login"/>
        </form>
        <div><br></br></div>
    </div>
);
}

export default App;
