import * as educationAction from '../actions/actions' ;
import initialState from './initialState.json' ;

const educationReducer = (state = initialState.education, actions ) => {

    switch (actions.type) {
        case educationAction.SET_EDUCATION:
            return {...actions.payload}

        case educationAction.UPDATE_EDUCATION :
            return {...actions.payload}
    
        default:
            return state ;
    }
} 

export default educationReducer ;