import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {

	onChangeEmail(text) {
		this.props.emailChanged (text);
	}

	onChangePassword(text) {
		this.props.passwordChanged (text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser ({ email, password });
	}

	renderError() {
		const { error } = this.props;
		const { errorStyle } = styles;

		if(error) {
			return (
				<View>
					<Text style={errorStyle}>{error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if( this.props.loading) {
			return <Spinner/>;
		}

		return (
			<Button onPress={this.onButtonPress.bind (this)}>
				Login
			</Button>
		);
	}


	render() {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.props.email}
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onChangeEmail.bind (this)}
					/>
				</CardSection>
				<CardSection>
					<Input
								 label="Password"
								 placeholder="password"
								 onChangeText={this.onChangePassword.bind (this)}
					/>
				</CardSection>

				{this.renderError ()}

				<CardSection>
					{this.renderButton ()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorStyle: {
		color: 'red',
		alignSelf: 'center',
		lineHeight: 30
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
	}
}

export default connect (mapStateToProps, {
	emailChanged, passwordChanged, loginUser,
}) (LoginForm);