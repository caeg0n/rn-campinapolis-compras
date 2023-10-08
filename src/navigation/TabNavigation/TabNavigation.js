import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AccountStack,
  ActivityHistoryStack,
  ExploreStack,
  NotificationStack,
} from '../Stacks';
import { Icon } from '@src/components';
import { fontSize } from '@src/theme';
import styles from './TabNavigation.style';
//import { Documentation } from '@src/screens';

const Tab = createBottomTabNavigator();
const { Navigator } = Tab;

const renderTabBarIcon = (routeName) => {
  return (props) => {
    const { color } = props;
    let iconName = 'compass';
    switch (routeName) {
      case 'ExploreTab':
        // iconName = 'compass';
        iconName = 'home';
        break;
      case 'ActivityHistoryTab':
        iconName = 'timer';
        break;
      case 'NotificationTab':
        iconName = 'notifications';
        break;
      case 'AccountTab':
        iconName = 'person-circle';
        break;
      case 'DocumentationTab':
        iconName = 'logo-react';
        break;
      default:
        break;
    }
    return <Icon name={iconName} size={fontSize.xl} color={color} />;
  };
};

const TabNavigation = () => {
  console.log('TabNavigation');
  return (
    <Navigator
      initialRouteName="ExploreTab"
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          headerShown: false,
          tabBarIcon: renderTabBarIcon(routeName),
          tabBarItemStyle: styles.tabItem,
        };
      }}>
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStack}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="ActivityHistoryTab"
        component={ActivityHistoryStack}
        options={{
          // title: 'Historico',
          title: 'Pedidos',
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationStack}
        options={{
          title: 'Notifications',
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountStack}
        options={{
          title: 'Accounts',
        }}
      />
      {/* <Tab.Screen
        name="DocumentationTab"
        component={Documentation}
        options={{
          title: 'Storybook',
        }}
      /> */}
    </Navigator>
  );
};

export default TabNavigation;
