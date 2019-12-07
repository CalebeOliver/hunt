import React, {useState, useEffect} from 'react';
import {AsyncStorage, Alert, Image} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import {Container, Login, Title} from './styles';

import gitLogo from '../../assets/githublogo.png';

import git from '../../services/git';

export default ({navigation}) => {
	const [username, setUsername] = useState('SDEverton');

	const handlerLogin = async () => {
		git
			.get(`/users/${username}`)
			.then(async response => {
				await AsyncStorage.setItem('userData', JSON.stringify(response.data));
				navigation.navigate('Home');
			})
			.catch(err => {
				Alert.alert('Usuário não existe!');
				console.log(err);
			});
	};

	useEffect(() => {
		async function load() {
			const userData = await AsyncStorage.getItem('userData');
			if (userData) {
				navigation.navigate('Home');
			}
		}
		load();
	});

	return (
		<Container>
			<Login>
				<Image
					source={gitLogo}
					style={{alignSelf: 'center', width: 100, height: 100}}
				/>
				<Title>Login GitHub</Title>
				<Input
					value={username}
					placeholder="Username"
					onChangeText={e => {
						setUsername(e);
					}}
					autoCorrect={false}
				/>
				<Button
					text="Entrar"
					onPress={() => {
						handlerLogin();
					}}
				/>
			</Login>
		</Container>
	);
};
