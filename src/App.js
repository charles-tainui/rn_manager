import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyA0K8pYoI51U0NPbEO9iL8ei6Rk2D2occM',
			authDomain: 'rn-manager-731bd.firebaseapp.com',
			databaseURL: 'https://rn-manager-731bd.firebaseio.com',
			projectId: 'rn-manager-731bd',
			storageBucket: '',
			messagingSenderId: '546237651452'
		};

		firebase.initializeApp (config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;