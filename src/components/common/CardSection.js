import React from 'react';
import {View, Text, Image} from 'react-native';

const CardSection = (props) => {
	const {containerStyle} = styles;
	
	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		padding:5,
		// justifyContent:'flex-start',
		flexDirection:'row',
		backgroundColor:'#fff',
		color:'red',
		borderBottomColor:'#ccc',
		borderBottomWidth:1,
		borderBottomStyle: 'solid',
	}
}

export {CardSection};