import { View, Text, Image, TouchableOpacity } from "react-native";
import { HomeStyle } from "../Styles/Views/Home";
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect(() =>{
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition((info) => {
            setLatitude(info.coords.latitude)
            setLongitude(info.coords.longitude)
        });
    
    })

    return (
        <View style={HomeStyle.mainContainer}>
            <Text style={HomeStyle.mainTitle}>MonstrApp</Text>
            <Text style={HomeStyle.mainText}>Bienvenue sur MonstrApp
                les Brothers</Text>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1696246847440-bb0047ba93ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={HomeStyle.image}
            />
            <Text> {` latitude :${latitude} longitude :${longitude}`}</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}
                style={HomeStyle.profileButton}
                >
                <Text style={HomeStyle.profileButtonText} >Se connecter</Text>
    
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Profile')
                }}
                style={HomeStyle.profileButton}
                >
                <Text style={HomeStyle.profileButtonText} >Mon Profil</Text>
    
            </TouchableOpacity>
        </View>
    )
}

export default Home