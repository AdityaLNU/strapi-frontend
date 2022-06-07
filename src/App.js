import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
const App = () => {

  const [data, setData] = useState();

  const apiCalling = async () =>{
    const options = {
      method:"GET",
      url:`${process.env.REACT_APP_STRAPI_URL}/api/about`
    }
    const res = await axios.request(options);
    setData(res.data.data.attributes.Title);
    console.log(res.data.data.attributes.Title)

  }

  useEffect(() =>{
    apiCalling();
  },[])
  return (
    <div className="App">
      <h1>React Strapi example</h1>
      {data ? (<p>Response from API: <em><strong>{data}</strong></em> </p>):"Yet to recieve"}
    </div>
  );
}

export default App;
