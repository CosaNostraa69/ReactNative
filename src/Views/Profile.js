import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProfileStyle } from "../Styles/Views/Profile"; 
import Monstre from '../../assets/images/monstres.jpeg'

const Home = ({ navigation }) => {
    return (
        <View style={ProfileStyle.mainContainer}>
            <Text style={ProfileStyle.mainTitle}>Profil de monstre</Text>
            <Image
                source={Monstre}
                style={ProfileStyle.image}
            />
            <Text style={ProfileStyle.mainText}>Tié un 
                Brother</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={ProfileStyle.profileButton}
                >
                <Text style={ProfileStyle.profileButtonText} >Naviguer vers l'Accueil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home