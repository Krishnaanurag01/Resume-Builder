import * as skillsActions from '../actions/actions' 
import initialState from './initialState.json'

const skillsReducer = (state = initialState.skill, actions) => {
    
    switch (actions.type) {
        case skillsActions.SET_SKILL:
            return [...actions.payload]

        case skillsActions.UPDATE_SKILL:
            return [...actions.payload]
    }
    return state ;
}

export default skillsReducer;