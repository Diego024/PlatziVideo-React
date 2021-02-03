const reducer = (state, action) => {
    
    switch (action.type) {
        
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
            // if (state.myList.find(items => {
            //     console.log(items.id)
            //     return items.id !== action.payload
            // })) {
            //     // console.log(items.id)
            //     console.log(action.payload)
            //     return state
            // } else {
            //     return {
            //         ...state,
            //         myList: [...state.myList, action.payload]
            //     }   
            // }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter( items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ... state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(items => items.id === Number(action.payload)) 
                || state.originals.find(items => items.id === Number(action.payload)) 
                || []
            }
        default:
            return state;
    }

}

export default reducer