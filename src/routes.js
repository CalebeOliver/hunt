import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import Repository from './pages/Repository';

export default createAppContainer(
	createSwitchNavigator(
		{
			Login,
			Home,
			Repository,
		},
		{
			navigationOptions: {
				headerStyle: {
					backgroundColor: '#3498db',
				},
				headerTintColor: '#FFF',
			},
		},
	),
);
