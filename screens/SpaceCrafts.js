import React, {Component} from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    FlatList,
    ImageBackground, 
    Image
} from 'react-native';
import axios from "axios";

export default class SpaceCraftsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: []
        }
    }

    componentDidMount() {
        this.getData()

    }

    getData=()=>{
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
                .then(response => {
                    this.setState({ aircrafts: response.data.results })
                    console.log(response.data.results)
                })
                .catch(error => {
                    console.log(error.message)
                })
    }

    render() {
        return (
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Space Crafts Screen</Text>
            </View>
        )
    }
}