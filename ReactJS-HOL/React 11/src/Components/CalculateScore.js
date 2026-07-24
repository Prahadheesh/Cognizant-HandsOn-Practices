import '../Stylesheets/mystyle.css';

function CalculateScore(props){
  const average=(props.total/props.goal).toFixed(2);
  return(
    <div className="container">
      <h2>Student Score Calculator</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>School:</b> {props.school}</p>
      <p><b>Total:</b> {props.total}</p>
      <p><b>Goal:</b> {props.goal}</p>
      <p><b>Average Score:</b> {average}</p>
    </div>
  );
}
export default CalculateScore;
