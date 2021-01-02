import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'
import useInitiaState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initialState'

const App = () => {
    
    const InitiaState = useInitiaState(API);

    return (
        <div className="App">
            <Header/>
            <Search/>

            { InitiaState.mylist.length > 0 && 
                <Categories title="Mi Lista">
                    <Carousel>
                        { InitiaState.mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />   
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    { InitiaState.trends.map(item =>  
                        <CarouselItem key={item.id} {...item} />
                    )} 
                </Carousel>
            </Categories>

            <Categories title="Para ti">
                <Carousel>
                    { InitiaState.originals.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer/>

        </div>
    )
}

export default App