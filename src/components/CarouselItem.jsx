import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = (props) => {

    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }

    return( 
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img 
                            src="https://img.icons8.com/flat_round/64/000000/play--v1.png"
                            alt="Play"
                        />
                    </Link>
                    { isList ?
                        <img 
                            src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png" 
                            alt="Remove Icon"
                            onClick={() => {
                                handleDeleteFavorite(id)
                            }}
                        /> 
                    : 
                        <img 
                            src="https://img.icons8.com/flat_round/64/000000/plus.png" 
                            alt="Plus"
                            onClick={handleSetFavorite}
                        />
                    
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    { `${year} ${contentRating} ${duration}` }
                </p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)