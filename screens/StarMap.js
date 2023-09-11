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
    Image, 
    TextInput
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state={
            latitude:'',
            longitude:""
        }
    }
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})