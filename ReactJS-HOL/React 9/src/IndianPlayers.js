
export default function IndianPlayers(){
const team=['A','B','C','D','E','F'];
const [odd1,even1,odd2,even2,odd3,even3]=team;
const t20=['Virat','Rohit','Surya'];
const ranji=['Pujara','Rahane','Jaiswal'];
const merged=[...t20,...ranji];
return <div>
<h2>Odd Team</h2><p>{odd1}, {odd2}, {odd3}</p>
<h2>Even Team</h2><p>{even1}, {even2}, {even3}</p>
<h2>Merged Players</h2><ul>{merged.map((p,i)=><li key={i}>{p}</li>)}</ul>
</div>;
}
