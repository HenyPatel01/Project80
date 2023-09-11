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
                <SafeAreaView style={styles.droidSafeArea}/>
                <View>
                    <Text style={styles.titleText}>Star Map</Text>
                    <TextInput
                        style={{height: 40, borderColor: "gray", borderWidth: 1}}
                        placeholder="Enter your latitude"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={{height: 40, borderColor: "gray", borderWidth: 1}}
                        placeholder="Enter your longitude"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center"
    }
})