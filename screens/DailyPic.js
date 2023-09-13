import React, {Component} from 'react';
import {Text, View} from 'react-native';
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
        return (
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Pic Screen</Text>
            </View>
        )
    }
}