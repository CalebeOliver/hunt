import React from 'react';
import {AsyncStorage, View, Image, Text} from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment/min/moment-with-locales';

moment.locale('pt-Br');

const Perfil = styled.View`
	padding: 0px;
	background-color: #e3e3e3;
`;
const UserInfo = ({navigation, photo, name, repos, since}) => {
	const Element = styled.View`
		margin-top: 0px;
		background-color: #3498db;
	`;
	const Name = styled.Text`
		color: white;
		font-weight: bold;
		font-size: 24px;
	`;
	const Button = styled.TouchableOpacity`
		align-self: flex-end;
		width: 50px;
		height: 50px;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
	`;
	return (
		<Element>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<Photo source={photo} />
				<View>
					<Name>{name}</Name>
					<Text style={{color: 'white', fontSize: 14}}>Usuário desde</Text>
					<Text style={{color: 'white', fontSize: 12}}>
						{moment(since).format('LL')}
					</Text>
					<Text style={{color: 'white', fontSize: 14}}>
						{repos} repositórios
					</Text>
				</View>
			</View>
		</Element>
	);
};
const Photo = ({source}) => {
	return (
		<Image
			source={source}
			style={{
				alignSelf: 'center',
				borderRadius: 100,
				borderWidth: 4,
				margin: 10,
				width: 100,
				height: 100,
			}}
		/>
	);
};

export {Perfil, UserInfo, Photo};
