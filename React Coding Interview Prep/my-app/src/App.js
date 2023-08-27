import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
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
const filterMap = () =>{
  let numberLessThan5 = numbers
  .filter((number)=>{
    return number < 5;
  }).map((number)=>{
    return number*number;
  })
  setNumbers(numberLessThan5)
}

const mapFilter= () =>{
  let numberSquare = numbers
  .map((number)=>{
    return number*number;
  }).filter((number)=>{
    return number <=5;
  })
  setNumbers(numberSquare)
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
      <div>
        {numbers.map((number)=>{
          return <div>{number}</div>
        })
        }
      </div>
      <button onClick={myData}>click me</button>
      <button onClick={mapFilter}>mapFilter</button>
    </div>
  );
}

export default App;
