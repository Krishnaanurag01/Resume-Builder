import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore ,  applyMiddleware } from 'redux' ;
import {Provider} from 'react-redux' ;
import {composeWithDevTools} from 'redux-devtools-extension' ;
import rootReducer from './Redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore' ;
import 'firebase/compat/auth' ;
import thunk from 'redux-thunk';
import { reduxFirestore , getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';



/// firebase set up 

const firebaseConfig = {
  apiKey: "AIzaSyCpjSPOIR0ongR8EWEdZ8hBj_JbUKlYPgo",
  authDomain: "resume-project-da020.firebaseapp.com",
  projectId: "resume-project-da020",
  storageBucket: "resume-project-da020.appspot.com",
  messagingSenderId: "216208806646",
  appId: "1:216208806646:web:2d5e97c8bf4aa4083d52d7"
};

firebase.initializeApp(firebaseConfig) ;
firebase.firestore() ;

const reduxStore = createStore(rootReducer,composeWithDevTools(  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase))) ;





ReactDOM.render(

    <BrowserRouter>

    <Provider store={reduxStore} >
      
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={ reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>

    </Provider>
  
    </BrowserRouter>
,
  document.getElementById('root')
);