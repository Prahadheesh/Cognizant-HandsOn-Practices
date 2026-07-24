
import React,{useState} from 'react';

function GuestPage(){
 return(<div><h2>Guest Page</h2><p>Browse available flight details.</p></div>);
}
function UserPage(){
 return(<div><h2>User Page</h2><p>Welcome! You can now book flight tickets.</p></div>);
}

export default function App(){
 const [loggedIn,setLoggedIn]=useState(false);
 return(
  <div style={{fontFamily:'Arial',padding:'20px'}}>
   <h1>Ticket Booking App</h1>
   {loggedIn ? <button onClick={()=>setLoggedIn(false)}>Logout</button>
             : <button onClick={()=>setLoggedIn(true)}>Login</button>}
   <hr/>
   {loggedIn ? <UserPage/> : <GuestPage/>}
  </div>
 );
}
