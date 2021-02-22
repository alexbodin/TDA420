import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from "./app/screens/LandingScreen";
import SignInScreen from './app/screens/SignInScreen'
import HomeScreen from "./app/screens/HomeScreen";

const RootStack = createStackNavigator();

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  var user = "";

  const handleSignIn = (username, password) => {
    // TODO implement real signin

    //get usernames and passwords from a database
    const users = ["Alex", "Asdf", "Qwerty"];
    

    if (true || users.includes(username)) {
      console.log("Successfully logged in as: " + username);
      user = username
      setIsAuthenticated(true);
    }else{
      setLoginFailed(true);
      console.log("Failed to login");
    }
  }
  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };
  
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? ( <>

          {/* Protected by sign in */}
          <RootStack.Screen
            name="Home"
            options={{
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
            }}
          >
          {(props) => (
            <HomeScreen {...props} username={user} />
          )}
          </RootStack.Screen>
          
        </> ) : ( <>

          {/* Public without sign in */}
          <RootStack.Screen
            name="BikeFinder"
            title="Welcome"
            component={LandingScreen}
            options={{
              animationTypeForReplace: 'pop',
            }}
          />
          <RootStack.Screen name="Sign Up">
            {(props) => (
              <SignInScreen {...props} onSignIn={handleSignIn} onSignOut={handleSignOut} failed={loginFailed} />
            )}
          </RootStack.Screen>

        </> )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;