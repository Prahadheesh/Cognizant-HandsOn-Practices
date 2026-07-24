import React,{Component} from 'react';

class Posts extends Component{
 constructor(props){
  super(props);
  this.state={posts:[]};
 }
 loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(r=>r.json())
  .then(data=>this.setState({posts:data}))
  .catch(e=>this.componentDidCatch(e));
 }
 componentDidMount(){ this.loadPosts(); }
 componentDidCatch(error){ alert(error); }
 render(){
  return(
   <div>
    <h1>Blog Posts</h1>
    {this.state.posts.map(p=>(
      <div key={p.id}>
       <h3>{p.title}</h3>
       <p>{p.body}</p><hr/>
      </div>
    ))}
   </div>
  );
 }
}
export default Posts;
