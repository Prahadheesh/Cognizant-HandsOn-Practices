
import React,{useState} from 'react';

function CurrencyConvertor(){
 const [inr,setInr]=useState(0);
 const [eur,setEur]=useState(0);
 const handleSubmit=()=>setEur((inr/90).toFixed(2));
 return(<div>
 <h2>Currency Convertor</h2>
 <input type="number" value={inr} onChange={e=>setInr(Number(e.target.value))}/>
 <button onClick={handleSubmit}>Convert</button>
 <p>Euro: €{eur}</p>
 </div>);
}

export default function App(){
 const [count,setCount]=useState(0);
 const sayHello=()=>alert("Hello! Welcome to React Events");
 const increment=()=>setCount(c=>c+1);
 const decrement=()=>setCount(c=>c-1);
 const increase=()=>{increment();sayHello();};
 const welcome=(msg)=>alert(msg);
 const onPress=()=>alert("I was clicked");
 return(<div style={{padding:20,fontFamily:'Arial'}}>
 <h1>Event Examples App</h1>
 <h2>Counter: {count}</h2>
 <button onClick={increase}>Increment</button>
 <button onClick={decrement}>Decrement</button><br/><br/>
 <button onClick={()=>welcome("Welcome")}>Say Welcome</button><br/><br/>
 <button onClick={onPress}>OnPress</button>
 <hr/>
 <CurrencyConvertor/>
 </div>);
}
