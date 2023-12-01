import { StyleSheet } from 'react-native'

export const LoginStyle = (StyleSheet.createstyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


    },

    logo: {
        width: '10%',
        height: '5%',
        resizeMode: 'cover',

    },
    mainTitle: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        margin: 10,
        marginBottom: 20,
    },
    email: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        margin: 10,
    },
    emailContainer: {
        width: '300px',
        height: '10%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,

    },
    passwordMainContainer: {

        width: '300px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    password: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
    },
    passwordForgot: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4F46E5',
        textAlign: 'right',
    },
    passwordContainer: {
        width: '300px',
        height: '10%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,


    },
    signInButton: {
        width: '400px',
        height: '11%',
        backgroundColor: '#4F46E5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    signInText: {

        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20
    },
}

));