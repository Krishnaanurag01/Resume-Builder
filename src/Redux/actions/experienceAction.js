import * as experienceActions from './actions' ;

export const SetExperience = (experience) =>{
    return{
        type:experienceActions.SET_EXPERIENCE,
        payload : experience
    }
}


export const UpdateExperience = (experience) =>{
    return{
        type: experienceActions.UPDATE_EXPERIENCE,
        payload: experience
    }
}