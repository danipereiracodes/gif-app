import { useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'

export const useFetchGifs = (category) => {

    const [img, setImg] = useState([])
    const [ isloading, setIsLoading ] = useState(true)

    const getGifImages = async () => {
        const gifs = await getGifs(category)
        setImg(gifs)
        setIsLoading(false)

    }

    useEffect(() => {

        getGifImages()

    }, [])


  return { 
    img,
    isloading
  }
}

