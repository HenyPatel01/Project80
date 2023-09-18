import React, {Component} from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView,
    ScrollView,
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    ImageBackground, 
    Image,
    Linking
} from 'react-native';
import axios from "axios";

export default class DailyPicScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            apod:{}
        }
    }

    componentDidMount(){
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=G5EFu6B4iIJZ77a9oPDdsOF0o4hbJYmchHXBOysH")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Loading</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground
                        source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <Text style={styles.routeText}>Astronomy Picture of The Day</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>
                        <ScrollView style={styles.listContainer}>
                        <TouchableOpacity
                        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                    >
                        <View style={styles.iconContainer}>
                            <Image source={{uri:this.state.apod.url}}
                        style={{width:"100%",height:300,borderRadius:20}}
                        ></Image>
                            <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                        </View>

                    </TouchableOpacity>
                            <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                        </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titleText: {
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#d271f0"
    },
    listContainer: {
        backgroundColor: '#8448d99e',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    explanationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    }
})