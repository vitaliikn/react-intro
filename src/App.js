import './App.css';

function App(props) {
  const aut=props.state

return (
  <div className="wrapper">
  {aut.map(a=>{
    return(
      <div className="authors">
      <div className="photo"><img src={a.photo}/></div>
    <div className="postCard"> <div className="name">{a.name}</div>
    <div className="nickName">{a.nickName}</div>
    <div className="date">{a.date}</div>
    <div className="postMessage">{a.content}</div>
    <div className="postImage"><img src={a.image}/></div>
    </div>
    </div>
    )
  })}
  </div>
)

}
export default App;
