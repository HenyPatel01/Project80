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
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <Text>Home Screen</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS == "android"? StatusBar.currentHeight: 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "center"
    }
})