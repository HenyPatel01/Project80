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
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("SpaceCrafts")}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}></Image>

                    </TouchableOpacity>
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
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        marginTop: -50
    },
    routeCard: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginTop: -50
    },
    iconImage: {
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        right: -19,
        top: -12.5,
    }
})