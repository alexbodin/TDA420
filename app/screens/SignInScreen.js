import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
 
const SignInScreen = ({ onSignIn, failed }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up:</Text>
      <Text style={{...styles.textStyleRed, opacity: failed ? 1 : 0 }}>Wrong username or password</Text>
      <TextInput
          style={styles.inputAddItem}
          placeholder="Email"
          returnKeyType="next"
          onChangeText={(text) => setUsername(text)}
      />
      <TextInput
          style={styles.inputAddItem}
          secureTextEntry={true}
          placeholder="Password"
          keyboardType="visible-password"
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
      />
      <TextInput
          style={styles.inputAddItem}
          secureTextEntry={true}
          placeholder="Confirm Password"
          keyboardType="visible-password"
          returnKeyType="done"
      />

      <View style={styles.row}>
          <TouchableOpacity
              style={styles.modalButton}
              activeOpacity="0.7"
              onPress={() => {
                onSignIn(username, password);
              }}
          >
              <Text style={styles.textStyle}>Sign Up</Text>
          </TouchableOpacity>
      </View>
      
      <Text style={{color: colors.red, marginBottom: 10}}>*The entered information will not be saved in this prototype</Text>
    </View>
  );
};
 
export default SignInScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
    paddingTop: 42,
  },
  header: {
      backgroundColor: colors.white,
      fontSize: 32,
      paddingHorizontal: 12,
      color: colors.text,
  },

    row: {
      flexDirection: "row",
    },
    modalButton: {
      backgroundColor: colors.primary,
      borderRadius: 20,
      padding: 12,
      elevation: 2,
      margin: 12,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    textStyleRed: {
      color: colors.red,
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    
  inputAddItem: {
      width: "100%",
      height: 40,
      margin: 8,
      marginBottom: 4,
      paddingHorizontal: 8,
      borderColor: colors.gray,
      borderWidth: 1,
      borderRadius: 8,
  },
  
});