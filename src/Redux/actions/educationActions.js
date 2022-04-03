import * as educationAction from './actions' ;

export const SetEducation =  (education) => {
    return {
        type : educationAction.SET_EDUCATION,
        payload : education
    }
}



export const UpdateEducation =  (education) => {
    return {
        type : educationAction.UPDATE_EDUCATION,
        payload : education
    }
}