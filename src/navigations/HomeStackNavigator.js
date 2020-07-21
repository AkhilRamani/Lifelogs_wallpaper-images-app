import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen, FashionScreen } from '../screens';
import { ImagesListScreen } from '../screens/imagesList/imagesList.screen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => (
    <Stack.Navigator
        headerMode='none'
        screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.ScaleFromCenterAndroid
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fashion" component={FashionScreen} />

        <Stack.Screen name="ImagesList" component={ImagesListScreen} />
    </Stack.Navigator>
)