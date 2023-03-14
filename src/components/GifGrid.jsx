import PropTypes from 'prop-types'
import { GifCard } from './'
import { useFetchGifs } from '../hooks/useFetchGifs';




const GifGrid = ({ category }) => {

    const { img, isLoading } = useFetchGifs(category)
    
    return (
        <>
        <h3>{category}</h3>
        {isLoading && (<h2>loading...</h2>)}
        
            {<div className='card-grid'>
                {img.length > 0 && img.map((gif) => (
                    < GifCard key={gif.id} {...gif} />
                ))}
            </div>}
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid