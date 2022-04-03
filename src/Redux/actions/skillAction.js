import * as skillActions from './actions' ;

export const setSkills = (skill) => {
    return{
        type: skillActions.SET_SKILL,
        payload : skill
    }
}


export const updateSkills = (skill) => {
    return{
        type: skillActions.UPDATE_SKILL,
        payload : skill
    }
}