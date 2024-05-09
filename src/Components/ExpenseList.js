import React from 'react';
import { Link } from 'react-router-dom';

function ExpenseList({items, deleteItem}) {
    return (
        
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map(({id, description, amount, category}) => (
                    <tr key = {id}>
                        <td>{description}</td>
                        <td>{amount}</td>
                        <td>{category}</td>
                        <td>
                            <Link to= {`/more-info/${id}`}>
                            <button className='more' >More Info</button></Link></td>
                        <td><button className="btn btn-outline-danger" onClick={() =>deleteItem(id)}>Delete</button></td>
                    </tr>
                    ))}

                    <tr>
                        <td><h4>Total</h4></td>
                        <td><h4>{items.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2)}</h4></td>

                    </tr>





                </tbody>
            </table>
        
    )
}

export default ExpenseList
