import React from 'react';
import { useDimensions } from '@react-native-community/hooks'
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';


const LandingScreen = ({navigation}) => {
    const { window } = useDimensions();
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/Landing.png")}
        >
            {/* <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/icon.png")}
                />
                <Text style={styles.welcomeText}>Sell What You Don't Need</Text>
            </View> */}

            <TouchableOpacity
                style={styles.loginButton}
                activeOpacity="0.8"
                
                onPress={() => navigation.navigate('Sign Up')}
            >
                <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default LandingScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start", // main axis
        alignItems: "center",   //aligns items on a per row basis around secondary axis
        //flexWrap: "wrap",
        //alignContent: "center", // aligns the total content if wrapping
    },
    loginButton: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        marginTop: 150,
        opacity: 0.9,
        width: "80%",
        flexDirection: "row",
      },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    welcomeText: {
        top: 10,
    },
    logo: {
        width: 150,
        height: 150,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      fontSize: 24,
      textAlign: 'center',
      flexGrow: 1,
    },
})