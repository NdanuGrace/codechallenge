import React ,{useState}from "react";


function AddTransactionForm({submit}) {

   const[submittedData, setSubmittedData] = useState({
    date:"",
    description: "",
    category:"",
    amount: 0
})
   const[data, setData] = useState ({
    date: "",
    description: "",
    category: "",
    amount: 0

   })
   
   function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
console.log(newdata)
  }

function handleSubmit(e){
  e.preventDefault();
  const formData={
  date: data.date,
  description: data.description,
  category: data.category,
  amount: data.amount

}
submit(formData)
    
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
     
    
    </div>
  );
}

export default AddTransactionForm;