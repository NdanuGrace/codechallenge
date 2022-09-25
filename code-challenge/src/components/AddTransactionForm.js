import React ,{useState}from "react";


function AddTransactionForm() {

   const[submittedData, setSubmittedData] = useState([])
   const[data, setData] = useState ({
    date: "",
    description: "",
    category: "",
    amount: 0

   })

function handleSubmit(e){
  e.preventDefault();
  const formData={
  date: data.date,
  description: data.description,
  category: data.category,
  amount: data.amount

}
const dataArray=[...submittedData, formData];
setSubmittedData(dataArray);
setData("");

    
}

const listOfSubmissions= submittedData.map((prop, index)=> {
  return(
    <div key={index}>
      {prop.data}
    </div>
  )
})


   function handle(e){
     const newdata={...data}
     newdata[e.target.id]= e.target.value
     setData(newdata)
console.log(newdata)
   }
  return (
    <div className="ui segment">
      <form onSubmit ={(e) => handleSubmit(e)} className="ui form">
        <div className="inline fields">
          <input onChange={(e) =>handle(e)} id="date" value={data.date}type="date" name="date" />
          <input  onChange={(e) =>handle(e)} id="description" value={data.description} type="text" name="description" placeholder="Description" />
          <input  onChange={(e) =>handle(e)} id="category" value={data.category} type="text" name="category" placeholder="Category" />
          <input  onChange={(e) =>handle(e)} id="amount" value={data.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">  
          Add Transaction
        </button>
      </form>
     
     {listOfSubmissions}
    </div>
  );
}

export default AddTransactionForm;