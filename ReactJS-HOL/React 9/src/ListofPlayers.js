
export default function ListofPlayers(){
const players=[
{name:'Player1',score:90},{name:'Player2',score:80},{name:'Player3',score:65},
{name:'Player4',score:72},{name:'Player5',score:55},{name:'Player6',score:88},
{name:'Player7',score:69},{name:'Player8',score:91},{name:'Player9',score:60},
{name:'Player10',score:77},{name:'Player11',score:84}
];
const below=players.filter(p=>p.score<70);
return <div><h2>All Players</h2><ul>{players.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul>
<h2>Players with Score below 70</h2><ul>{below.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul></div>;
}
