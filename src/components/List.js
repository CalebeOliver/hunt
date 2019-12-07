import React from 'react';
import {
	FlatList,
	View,
	Text,
	StyleSheet,
	TouchableOpacity as Button,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import moment from 'moment/min/moment-with-locales';

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
		padding: 20,
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
		marginTop: 5,
		fontSize: 16,
		color: '#999',
		lineHeight: 24,
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

const List = ({navigation, data}) => {
	const renderItem = ({item}) => (
		<View style={style.itemContainer}>
			<View>
				<Text style={style.itemTitle}>{item.full_name}</Text>
				<Text style={style.itemUpdated}>
					Atualizado em {moment(item.pushed_at).format('LL')}
				</Text>
				<Text style={style.itemUpdated}>{item.language}</Text>
				<Button
					style={style.itemButton}
					onPress={() => {
						navigation.navigate('Repository', {full_name: item.full_name});
					}}>
					<Text style={style.itemButtonText}>Acessar</Text>
				</Button>
			</View>
		</View>
	);
	return (
		<FlatList
			contentContainerStyle={style.container}
			data={data}
			keyExtractor={repo => repo.id}
			renderItem={renderItem}
		/>
	);
};

export default withNavigation(List);
