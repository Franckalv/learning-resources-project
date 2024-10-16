import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './components/SearchScreen';
import ResourcesScreen from './components/ResourcesScreen';
import AddScreen from './components/AddScreen';
import DeleteScreen from './components/DeleteScreen';
import ModifyScreen from './components/ModifyScreen';
import HomeScreen from './components/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="All Resources" component={ResourcesScreen} />
        <Drawer.Screen name="Search resources" component={SearchScreen} />
        <Drawer.Screen name="Add resources" component={AddScreen} />
        <Drawer.Screen name="Delete resources" component={DeleteScreen} />
        <Drawer.Screen name="Modify resources" component={ModifyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}