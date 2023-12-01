import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LoginStyle } from '../Styles/Views/Login';
import Logo from '../../assets/images/mark.png'
import { useState } from 'react';
import { checkEmail, checkPassword } from '../Utils/Regex';



export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    function handleLogin() {
        setEmail('')
        setPassword('')
        if (checkEmail(email) === false) {
            setEmailError("Incorrect email format")
        }
        else if (checkPassword(password) === false) {
            setPasswordError("Incorrect password format, 1 upper, 1 lower, 1 digit required")
        } else{
            Alert.alert("Login successful")
    }

    }


    return (
        <View style={LoginStyle.mainContainer}>
            <Image source={Logo}
                style={LoginStyle.logo}

            />
            <Text
                style={LoginStyle.mainTitle}
            >Sign in to your account</Text>
            <View>
                <Text
                    style={LoginStyle.email}
                >Email Adress</Text>
                <TextInput
                    style={LoginStyle.emailContainer}
                    onChangeText={setEmail}
                    inputMode='email'
                />
                <Text
                    style={LoginStyle.error}

                >
                    {emailError && emailError}

                </Text>
                <View
                    style={LoginStyle.passwordMainContainer}
                >
                    <Text
                        style={LoginStyle.password}
                    >Password</Text>
                    <Text
                        style={LoginStyle.passwordForgot}

                    >Forgot Password?</Text>

                </View>
                <TextInput
                    style={LoginStyle.passwordContainer}
                    onChangeText={setPassword}
                    secureTextEntry />
                <Text
                    style={LoginStyle.error}
                >
                    {passwordError && passwordError}

                </Text>
                <TouchableOpacity
                    style={LoginStyle.signInButton}
                    onPress={() => {
                        handleLogin()
                    }}
                >
                    <Text
                        style={LoginStyle.signInText}
                    >Sign in</Text>
                </TouchableOpacity>
                <Text
                    style={LoginStyle.SignInTitle}

                >Not a member? Start a 14 days trial</Text>

            </View>
        </View>
    )
}