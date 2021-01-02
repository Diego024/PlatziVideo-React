import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    
    //El primero es el estado, el segundo la propiedad que nos permite cambiarlo.
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });


    //Esto nos ayuda a ejecutar un código cuando el estado del componente se modifique.
    useEffect( () => {
        fetch(API)
            .then(resp => resp.json())
            .then(data => setVideos(data));
    }, []);

    return videos;
}

export default useInitialState