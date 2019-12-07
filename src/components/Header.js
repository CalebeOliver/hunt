import React from 'react';
import {View} from 'react-native';

import styled from 'styled-components';

const Text = styled.Text`
	color: white;
	${props => props.bold && 'font-weight:bold;'}
	${props => props.size && `font-size: ${props.size}px;`}
`;

const Button = ({text, onPress}) => {
	const Element = styled.TouchableOpacity`
		padding: 8px;
	`;
	return (
		<Element onPress={onPress}>
			<Text style={{color: 'white'}}>{text}</Text>
		</Element>
	);
};

export default ({navigation, buttons}) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			backgroundColor: '#3498db',
		}}>
		{buttons &&
			buttons.map(button => (
				<Button text={button.text} onPress={button.onPress} />
			))}
	</View>
);
