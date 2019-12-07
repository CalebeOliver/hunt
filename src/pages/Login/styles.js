import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: 10px;
`;

const Title = styled.Text`
	font-weight: bold;
	font-size: 20px;
	width: 100%;
	text-align: center;
`;

const Login = styled.View`
	width: 80%;
	padding: 8px;
`;

export {Container, Login, Title};
