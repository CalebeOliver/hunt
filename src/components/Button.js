import React from 'react';

import styled from 'styled-components';

const Button = ({text, ...rest}) => {
	const TouchableOpacity = styled.TouchableOpacity`
		height: 40px;
		margin: 2px;
		padding: 8px;
		background-color: #3498db;
		border-radius: 4px;
		border: 1px solid #e3e3e3;
	`;
	const Text = styled.Text`
		color: white;
		text-align: center;
	`;
	return (
		<TouchableOpacity {...rest}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};
export default Button;
