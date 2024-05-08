import React from 'react'

const ExpenseFilter = ({ filterItem }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        // Check if the selected value is empty or not
        if (selectedValue !== "") {
            filterItem(selectedValue);
        }
        
    };

    return (
        <select name="" id="" className="form-select mb-3" onChange={handleChange}>           
            <option disabled selected value="">Select Category</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
        </select>
    );
};

export default ExpenseFilter;






