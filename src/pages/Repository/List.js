import React from 'react';
import {
	FlatList,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity as Button,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import moment from 'moment/min/moment-with-locales';

import gitLogo from '../../assets/githublogo.png';

moment.locale('pt-Br');

const style = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#fafafa',
	},
	list: {
		padding: 20,
	},
	itemContainer: {
		marginBottom: 4,
		padding: 10,
		backgroundColor: '#fff',
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 5,
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	itemUpdated: {
		alignSelf: 'flex-end',
		fontSize: 10,
		color: '#999',
	},
	itemButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#3498db',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	itemButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#3498db',
	},
});

const List = ({data}) => {
	const renderItem = ({item}) => {
		const {commit} = item;
		const {author} = item;
		return (
			<View style={style.itemContainer}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Image
						source={author.avatar_url ? {uri: item.author.avatar_url} : gitLogo}
						style={{borderRadius: 100, width: 50, height: 50}}
					/>
					<View style={{marginLeft: 8, justifyContent: 'center'}}>
						<Text style={style.itemTitle}>{commit.author.name}</Text>
						<Text>{commit.message}</Text>
					</View>
				</View>
				<Text style={style.itemUpdated}>
					{moment(commit.author.date).format('LL')}
				</Text>
			</View>
		);
	};
	return (
		<FlatList
			contentContainerStyle={style.container}
			data={data}
			keyExtractor={repo => repo.sha}
			renderItem={renderItem}
		/>
	);
};

export default withNavigation(List);
