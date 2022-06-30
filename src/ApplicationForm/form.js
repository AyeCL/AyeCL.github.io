import React from 'react'

export default function form() {
  return (
    // Make a form with inputs for name, email, phone number and a dropdown for Stream with options of "Science", "Management", "Humanities" and "Law".
    <div>
        <form action='https://api.sheetmonkey.io/form/8LXkZmgCssqSPFq2mbvCjG' method='POST'>
            <label>Name
                <input type="text" />
            </label>
            <label>Email
                <input type="email" />
            </label>
            <label>Phone Number
                <input type="number" />
            </label>
            <label>Stream
                <select>
                    <option value="Science">Science</option>
                    <option value="Management">Management</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Law">Law</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
