
function App(){
 const offices=[
  {name:'Tech Park A',rent:55000,address:'Chennai',image:'https://via.placeholder.com/250'},
  {name:'Business Hub',rent:75000,address:'Bengaluru',image:'https://via.placeholder.com/250'},
  {name:'Corporate Tower',rent:62000,address:'Hyderabad',image:'https://via.placeholder.com/250'}
 ];
 return(
  <div style={{fontFamily:'Arial',padding:'20px'}}>
   <h1>Office Space Rental App</h1>
   {offices.map((office,index)=>(
    <div key={index} style={{border:'1px solid #ccc',padding:'15px',marginBottom:'15px',width:'320px'}}>
      <img src={office.image} alt="Office Space" width="250" height="150"/>
      <h2>{office.name}</h2>
      <p><b>Address:</b> {office.address}</p>
      <p><b>Rent:</b> <span style={{color:office.rent<60000?'red':'green'}}>₹{office.rent}</span></p>
    </div>
   ))}
  </div>
 );
}
export default App;
