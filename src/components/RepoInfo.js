import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import moment from 'moment/min/moment-with-locales';

import styled from 'styled-components';

moment.locale('pt-Br');

const RepoInfo = ({navigation, photo, name, pushed, language}) => {
	return (
		<Container>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<Photo source={photo} />
				<View>
					<Text bold={true} size={18}>
						{name}
					</Text>
					<Text size={12}>Último push em</Text>
					<Text> {moment(pushed).format('LL')}</Text>
					<Text size={12}>{language}</Text>
				</View>
			</View>
		</Container>
	);
};

const Container = styled.View`
	background-color: #3498db;
`;

const Text = styled.Text`
	color: white;
	${props => props.bold && 'font-weight:bold;'}
	${props => props.size && `font-size: ${props.size}px;`}
`;
const Photo = styled.Image`
	margin: 8px;
	width: 100px;
	height: 100px;
`;

export default withNavigation(RepoInfo);
