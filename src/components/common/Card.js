import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
	const {containerStyle} = styles;

	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		borderWidth:1,
		borderRadius:2,
		borderColor:'#dddddd',
		backgroundColor:'#fff',
		margin:5,
		padding:5,
		shadowBlur:10,
		shadowOpacity: 0.5,
		shadowColor: '#111',
	}
}

export {Card};