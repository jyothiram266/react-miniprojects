import {React , useEffect , useState} from "react"
import { getposts , getrandomuser } from './api';
import Postcard from "./api/Postcard";
import Usercard from "./api/Usercard";
import './App.css';

function App() {
  const [data,setdata] = useState(null);
  const [udata,setuserdata] = useState(null);
  useEffect(()=>{
    getposts().then((posts) => setdata(posts));
},[]);
  useEffect(()=>{
    getrandomuser().then((user) => setuserdata(user.results[0]));
  },[]);
  
  return (
    <div className="App">
      {udata && <Usercard data={udata} />}
      <button>click me</button>
      {data ? data.map((e) => <Postcard title={e.title} body={e.body} /> ) : <p> No Data</p>}
    </div>
  );
}

export default App;
