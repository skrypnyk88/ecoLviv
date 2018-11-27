import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Main, ChooseDistrict, DistrictInfo } from './scenes/main';
import {scenes} from './constants';

const AppNavigator = createStackNavigator({
  [scenes.MAIN]: { screen: Main, navigationOptions: { header: null } },
  [scenes.DISTRICT_INFO]: { screen: DistrictInfo, navigationOptions: { header: null } },
  [scenes.CHOOSE_DISTRICT]: { screen: ChooseDistrict, navigationOptions: { header: null } },
}, {
  initialRouteName: scenes.MAIN,
});

export default createAppContainer(AppNavigator);
