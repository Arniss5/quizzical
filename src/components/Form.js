import React from 'react'

export default function Form(props) {
    

    function handleChange(event) {
        
        const {name, value, type, checked} = event.target
        props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form className='quiz-form'>
            <label htmlFor="number">Number of questions  </label>
            <input
                id="number"
                type="number"
                placeholder="number"
                min="1"
                onChange={handleChange}
                name="number"
                value={props.formData.number}
            />
            
            <br />
            <br />
            
            <fieldset>
                <legend>Select difficulty</legend>
                <input 
                    type="radio"
                    id="easy"
                    name="difficulty"
                    value="easy"
                    checked={props.formData.difficulty === "easy"}
                    onChange={handleChange}
                />
                <label htmlFor="easy"> Easy</label>
                <br />
                
                <input 
                    type="radio"
                    id="medium"
                    name="difficulty"
                    value="medium"
                    checked={props.formData.difficulty === "medium"}
                    onChange={handleChange}
                />
                <label htmlFor="medium"> Medium</label>
                <br />
                
                <input 
                    type="radio"
                    id="hard"
                    name="difficulty"
                    value="hard"
                    checked={props.formData.difficulty === "hard"}
                    onChange={handleChange}
                />
                <label htmlFor="hard"> Hard</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="category">Select category</label>
            <br />
            <select 
                id="category"
                value={props.formData.category}
                onChange={handleChange}
                name="category"
            >
                <option value="9">General knowledge</option>
                <option value="23">History</option>
                <option value="11">Film</option>
                <option value="10">Books</option>
                <option value="12">Music</option>
                <option value="21">Sports</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
            </select>
        </form>
    )
}
