import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ExpenseList({ items, deleteItem, updateExpense }) {
    const [editingItem, setEditingItem] = useState(null);
    const [editedDescription, setEditedDescription] = useState('');
    const [editedAmount, setEditedAmount] = useState('');
    const [editedCategory, setEditedCategory] = useState('');

    const handleEdit = (id, description, amount, category) => {
        setEditingItem(id);
        setEditedDescription(description);
        setEditedAmount(amount);
        setEditedCategory(category);
    };

    const handleSave = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    description: editedDescription,
                    amount: editedAmount,
                    category: editedCategory,
                };
            }
            return item;
        });
        updateExpense(updatedItems);

        // Reset editing state
        setEditingItem(null);
        setEditedDescription('');
        setEditedAmount('');
        setEditedCategory('');
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, description, amount, category }) => (
                    <tr key={id}>
                        <td>{editingItem === id ? <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} /> : description}</td>
                        <td>{editingItem === id ? <input type="text" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} /> : amount}</td>
                        <td>{editingItem === id ? <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} /> : category}</td>
                        <td>
                            {editingItem === id ? (
                                <button className="btn btn-outline-success" onClick={() => handleSave(id)}>Save</button>
                            ) : (
                                <>
                                    <Link to={`/more-info/${id}`}>
                                        <button className='more'>More Info</button>
                                    </Link>
                                    <button className="btn btn-outline-danger" onClick={() => deleteItem(id)}>Delete</button>
                                    <button className="btn btn-outline-primary" onClick={() => handleEdit(id, description, amount, category)}>Edit</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
                <tr>
                    <td><h4>Total</h4></td>
                    <td><h4>{items.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2)}</h4></td>
                </tr>
            </tbody>
        </table>
    );
}

export default ExpenseList;