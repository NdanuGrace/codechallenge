import {useState, useEffect} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const[infoTransaction, setTransactions] = useState([])

  useEffect(() =>{
    fetch(" http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTransactions(data)
      });
  }, []);
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    
    </div>
  );
}

export default App;
