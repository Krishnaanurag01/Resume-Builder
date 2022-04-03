import initialState from './initialState.json' ;
import * as experienceActions from '../actions/actions'

const experienceReducer = (state = initialState.experience, actions) =>{

    switch (actions.type) {
        case experienceActions.SET_EXPERIENCE :
            return {...actions.payload}

        case experienceActions.UPDATE_EXPERIENCE:
            return {...actions.payload}

        default:
            return state;
    }
}


export default experienceReducer;