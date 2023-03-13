import PropTypes from 'prop-types'
import { GifCard } from './'
import { useFetchGifs } from '../hooks/useFetchGifs';




const GifGrid = ({ category }) => {

    const { img, isLoading } = useFetchGifs(category)
    
    return (
        <div style={{paddingTop:'3rem'}}>
        {isLoading && <h2>loading</h2>}
        <h2>{category.toUpperCase()}</h2>
            {<div className='card-grid'>
                {img.length > 0 && img.map((gif) => (
                    < GifCard key={gif.id} {...gif} />
                ))}
            </div>}
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid