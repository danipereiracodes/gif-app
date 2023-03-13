import PropTypes from 'prop-types'

const GifCard = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
            
        </div>
    )
}

GifCard.propTypes = {

    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifCard