import { useState } from 'react'
import { NewCategory, GifGrid } from './components'

const GifApp = () => {

    const [categories, setCategories] = useState(['The office'])


    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories((cat) => [newCategory, ...cat])
    }


    return (
        <>
        
            <h1>Gif App</h1>
        
            < NewCategory onAddCategory={newCategory => onAddCategory(newCategory)} />

          
            
            {categories.length > 0 ? categories.map((category) => (
            
                    <GifGrid 
                    key={category} 
                    category={category} />

                
            )) : <p>There aren't any categories yet</p>}
    
            
        </>
    )
}

export default GifApp