import React from "react";
import Header from "./Header";
import Main from "../router/Main";
import Footer from "./Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import withAuthentication from './Session/withAuthentication';
import { Provider } from "react-redux";
import firebase from "../firebase/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { store } from "./store";

library.add(faFacebookSquare, faEnvelope, faKey);

const rrfProps = {
	firebase,
	config: {
		userProfile: "users"
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

const App = () => (
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <div>
    <Header /> 
    <Main />    
    <Footer />
  </div>
  </ReactReduxFirebaseProvider>
	</Provider>
);

export default withAuthentication(App);

