import { useState } from "react";
import PropTypes from 'prop-types'

export const NewCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
       
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
      
        e.preventDefault()
        inputValue.length > 2 
        && onAddCategory(inputValue.trim())

        setInputValue('')
    }

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="search gifs"
        name="new-category" 
        value={inputValue}
        onChange={handleInputChange} />
        
        
    </form>
  )
}

NewCategory.propTypes = {

  onAddCategory: PropTypes.func.isRequired


}