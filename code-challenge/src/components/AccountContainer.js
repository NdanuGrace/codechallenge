import React, {useState , useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[infoTransaction, setTransactions] = useState([])

  useEffect(() =>{
    fetch(" http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTransactions(data)
      });

  }, []);
function submitData(formData){
  const dataArray=[...infoTransaction, formData];
setTransactions(dataArray);

}
  return (
    <div>
      <Search />
      <AddTransactionForm submit={submitData}/>
      <TransactionsList transactions={ infoTransaction}/>
    </div>
  );
}

export default AccountContainer;
