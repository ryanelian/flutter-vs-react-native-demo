import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

const Home: React.FC<HomeProps> = function ({ navigation }) {

    function clickMe(){
        navigation.navigate('Details');
    }

    return (
        <View style={styles.container}>
            <Button title="Click Me!" onPress={clickMe} ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Home };
