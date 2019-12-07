import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {ScrollView, AsyncStorage, FlatList, View} from 'react-native';

import moment from 'moment/min/moment-with-locales';

import git from '../../services/git';

import {UserInfo} from './styles';

import Header from '../../components/Header';
import List from '../../components/List';

moment.locale('pt-Br');

export default ({navigation}) => {
	const [userData, setUserData] = useState({});
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		async function load() {
			const res = JSON.parse(await AsyncStorage.getItem('userData'));
			await setUserData(res);
			git
				.get(`/users/${res.login}/repos`)
				.then(response => {
					setRepos(response.data);
				})
				.catch(err => {
					setRepos([]);
					console.log(err);
				});
		}
		load();
	}, []);

	const renderItem = ({item}) => (
		<View style={{borderWidth: 1, margin: 2}}>
			<Text>{item.full_name}</Text>
			<Text>{item.created_at}</Text>
		</View>
	);

	return (
		<>
			<Header
				buttons={[
					{text: userData.login},
					{
						text: 'Sair',
						onPress: async () => {
							await AsyncStorage.removeItem('userData');
							navigation.navigate('Login');
						},
					},
				]}
			/>
			<ScrollView>
				<UserInfo
					navigation={navigation}
					photo={{uri: userData.avatar_url}}
					name={userData.name}
					repos={repos.length}
					since={userData.created_at}
				/>
				<List
					data={repos}
					keyExtractor={repo => repo.id}
					renderItem={renderItem}
				/>
			</ScrollView>
		</>
	);
};
