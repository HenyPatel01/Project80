import React, {Component} from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    ImageBackground, 
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <Text>Home Screen</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSHeet.create({

})