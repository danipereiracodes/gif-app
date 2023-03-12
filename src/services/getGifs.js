
export const getGifs = async (category) => {

    const apiKey = 'uIwcIRsHBQdzNI2DuE3GoqIydxwAqFD3'
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=10`


    const resp = await fetch(searchUrl)
     const { data } = await resp.json()
     const gifs = data.map( img => ({
        id: img.id, 
        title: img.title,
        url: img.images?.downsized_medium.url
     }))
    
     return gifs 
}
