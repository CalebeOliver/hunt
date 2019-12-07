import React, {useState, useEffect} from 'react';
import {AsyncStorage, ScrollView, Text} from 'react-native';

import Header from '../../components/Header';
import RepoInfo from '../../components/RepoInfo';
import List from './List';

import git from '../../services/git';

import gitLogo from '../../assets/loadgit.gif';

export default ({navigation}) => {
	const full_name = navigation.getParam('full_name');
	const [repo, setRepo] = useState({});
	const [commits, setCommits] = useState([]);
	const [msg, setMsg] = useState('');

	useEffect(() => {
		async function load() {
			git
				.get(`/repos/${full_name}`)
				.then(response => {
					setRepo(response.data);
				})
				.catch(err => {
					setRepo([]);
					console.log(err);
				});
			git
				.get(`/repos/${full_name}/commits`)
				.then(response => {
					setCommits(response.data);
				})
				.catch(err => {
					setMsg(err);
					console.log(err);
				});
		}
		load();
	}, []);

	const buttons = [
		{
			text: 'Voltar',
			onPress: () => {
				navigation.navigate('Home');
			},
		},
		{
			text: 'Sair',
			onPress: async () => {
				await AsyncStorage.removeItem('userData');
				navigation.navigate('Login');
			},
		},
	];

	return (
		<>
			<Header buttons={buttons} />
			<ScrollView>
				<RepoInfo
					photo={gitLogo}
					name={repo.name}
					pushed={repo.pushed_at}
					language={repo.language}
				/>
				<Text>Commits: {commits.length}</Text>
				<List data={commits} />
			</ScrollView>
		</>
	);
};
