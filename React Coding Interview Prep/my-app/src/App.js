import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json)=>setUsers(json))
  }, []);

  const myData = () =>{
    let filteredData = users.filter((user)=>{
      return user.name.includes("a");
    } );
    console.log(filteredData);
  }
  return (
    <div className="App">
      <div>
        {users.map((user)=>(
          <div>
            <p>
              {user.name}
            </p>
            <p>
              {user.username}
            </p>
          </div>
        ))}
      </div>
      <button onClick={myData}>click me</button>
    </div>
  );
}

export default App;
