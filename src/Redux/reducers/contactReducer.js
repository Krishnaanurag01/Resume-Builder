import * as contactAction from '../actions/actions' ;
import initialState from './initialState.json' ;

const contactReducer = (state = initialState.contact, actions ) => {

    switch (actions.type) {
        case contactAction.SET_CONTACT:
            return {...actions.payload}

        case contactAction.UPDATE_CONTACT :
            return {...actions.payload}
    
        default:
            return state ;
    }
} 

export default contactReducer ;