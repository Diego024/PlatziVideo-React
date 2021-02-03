import React from 'react';
import Header from '../components/Header'
import '../assets/styles/components/NotFound.scss';

const NotFound = () => {

    return(
        <>
            <section className="main_notFound">
            <h1 className="main__title">404</h1>
            <p className="main__p">Página no encontrada</p>
            </section>
        </>
    )
};

export default NotFound;