import { useState } from 'react'
import { NewCategory } from './components/NewCategory'

const gifApiKey = 'uIwcIRsHBQdzNI2DuE3GoqIydxwAqFD3'

const GifApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory )) return
        setCategories((cat) => [newCategory, ...cat])
    }


  return (
    <>
    {/* title */}
    <h1>Gif App</h1>
    {/* input  */}
    < NewCategory onAddCategory={newCategory => onAddCategory(newCategory)}/>
    
    {/*  list grid  */}
    <ol>
        {categories.length > 0 ? categories.map((categorie) => (
            <li key={categorie}>{categorie}</li>
        )) : <p>There aren't any categories yet</p>}
    </ol>
      {/* list item */}
    </>
  )
}

export default GifApp