import * as contactActions from './actions'

export const SetContact = (contact) => {
    return {
        type:contactActions.SET_CONTACT,
        payload : contact
    }
}

export const UpdateContact = (contact) => {
    return {
        type:contactActions.UPDATE_CONTACT,
        payload:contact
    }
}