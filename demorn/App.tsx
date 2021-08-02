import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider style={styles.main}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
});
