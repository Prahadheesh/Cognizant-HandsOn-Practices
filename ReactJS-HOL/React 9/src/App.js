
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
export default function App(){
const flag=true;
return <div>{flag?<ListofPlayers/>:<IndianPlayers/>}</div>;
}
