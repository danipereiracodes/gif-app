import { useState } from 'react'

const gifApiKey = 'uIwcIRsHBQdzNI2DuE3GoqIydxwAqFD3'

const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])


  return (
    <>
    {/* title */}
    <h1>Gif App</h1>
    {/* input  */}
    {/*  list grid  */}
    <ol>
        {categories.length > 0 ? categories.map((categorie, i) => (
            <li key={categorie[i]}>{categorie}</li>
        )) : <p>There aren't any categories yet</p>}
    </ol>
      {/* list item */}
    </>
  )
}

export default GifApp