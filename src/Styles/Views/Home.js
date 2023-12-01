import { StyleSheet } from 'react-native'

export const HomeStyle = (StyleSheet.createstyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        
    },

    mainTitle:{
        width:'100%',
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '20%',
        color: '#14213D'

    },
    mainText:{
        width:'100%',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '20%',
        color: '#14213D'

    },
    image:{
        width: '75%',
        height: '40%',
        resizeMode: 'cover',
        marginTop: 40,
        marginHorizontal: '12.5%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',        

    },
    profileButton:{
        height: 44,
        width: '50%',
        marginHorizontal: '25%',
        backgroundColor: '#14213D',
        borderRadius: 25,
        marginTop: 40,
        
    },
    profileButtonText:{
        color: '#fff',
        textAlign: 'center',
        lineHeight: 44,
        fontWeight: 'bold',
    }

}));