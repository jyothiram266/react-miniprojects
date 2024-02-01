import './index.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function Logo (){
  return <h1>Far Away</h1>
}

function Form (){
  function handlesubmit (e) {

    if(!description) return ;

    e.preventDefault();
    const newItems = { description, quantity , packed : false , id:Date.now() };
    console.log(newItems);
    setdescription("");
    setquantity(1);
  }
  const [description,setdescription] = useState("");
  const [quantity,setquantity] = useState(5);
  return(
    <form className='add-form' onSubmit={handlesubmit} >
      <h3>What Do You Need For Your Trip?</h3>
      <select value = {quantity} onChange={(e)=>setquantity(Number(e.target.value))}>
        {Array.from({length:20},(_,i)=>i+1).map((num)=>
          <option value={num} key={num}>{num}</option>
        )}
      </select>
      <input type="text" placeholder='item..' onChange={(e)=>setdescription(e.target.value)} value={description} ></input>
      <button>Add</button>
    </form>
  )
}

function PackingList () {
  return (
  <div className='list'>
  <ul>
  { initialItems.map((items)=>(
    <Items items={items} key={items.id}/>
  ))}
  </ul>
  </div>
  )
}

function Items ({items}) {
  return (
    <li>
      <span style={items.packed ?{textDecoration : "line-through"}:{}}>
        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  )
}


function Stats (){
  return(
    <footer className='stats'>
      <em>you have x items on your list and you already packed x</em>
    </footer>
  )
}



function App() {
  return (
    <div className="App">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  );
}

export default App;
