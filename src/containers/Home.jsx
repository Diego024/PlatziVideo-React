import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../assets/styles/App.scss';
import Header from '../components/Header'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitiaState from '../hooks/useInitialState'
import useInitialState from '../hooks/useInitialState';

const Home = ({ myList, trends, originals }) => {

    // CODIGO PARA CREAR UNA PANTALLA DE CARGA, SE PONE ANTES DEL PARENTESIS DEL RETURN
    // initialState.length === 0 ? <h1>Cargando...</h1>

    return (
        <>
            <Header/>
            <Search isHome isFound/>

            { myList.length > 0 && 
                <Categories title="Mi Lista">
                    <Carousel>
                        { 
                            myList.map(item => 
                                <CarouselItem 
                                    key={item.id} 
                                    {...item} 
                                    isList
                                />   
                            )
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    { trends.map(item =>  
                        <CarouselItem key={item.id} {...item} />
                    )} 
                </Carousel>
            </Categories>

            <Categories title="Para ti">
                <Carousel>
                    { originals.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

        </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
};

export default connect(mapStateToProps, null)(Home);