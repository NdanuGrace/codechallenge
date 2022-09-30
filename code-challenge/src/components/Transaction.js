import React from "react";

function Transaction({
	transaction: { id, date, category, amount, description }
	
}) {
	return (
		<tr>
			<td>{date}</td>
			<td>{description}</td>
			<td>{category}</td>
			<td>{amount}</td>
			
		</tr>
	);
}

export default Transaction;


