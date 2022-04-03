import { combineReducers } from "redux";
import documentReducer from "./documentReducers";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import experienceReducer from "./experienceReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
    document : documentReducer ,
    contact : contactReducer ,
    education : educationReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    auth : authReducer,
    experience : experienceReducer,
    skill : skillsReducer
})

export default rootReducer 