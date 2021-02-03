import React from 'react'
import classNames from 'classnames'
import '../assets/styles/components/Search.scss'

const Search = ({isHome, isFound}) => {
    
    const inputStyle = classNames('input', {
        isHome
    });

    const titleStyle = classNames('main_title', {
        isFound
    });
    
    return (
        <section className="main">
        <h2 className={titleStyle}>¿Qué quieres ver hoy?</h2>
        <input className={inputStyle} type="text" placeholder="Buscar..."/>
        </section>
    )
}

export default Search;