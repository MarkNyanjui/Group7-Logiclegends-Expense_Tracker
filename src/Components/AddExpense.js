import React, { useState } from 'react';
import './AddExpense.css'

const AddExpense = ({ onAddExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) {
            alert('Please fill in all fields');
            return;
        }
        onAddExpense({ description, amount, category });
        setDescription('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-expense-form">
            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group mb-4">
                <label>Amount ($)</label>
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Category</label>
                <select
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Clothing">Clothing</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
    );
};

export default AddExpense;