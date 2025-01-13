import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import JoinLobby from './screens/JoinLobby';
import Lobby from './screens/Lobby';
import PlayerDraw from './screens/PlayerDraw';
import PlayerGuess from './screens/PlayerGuess';
import RegisterScreen from './screens/RegisterScreen';



const Stack = createNativeStackNavigator();

export default function App() {

  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={({ }) => ({
              title: 'Create an Account',
              headerStyle: {
                backgroundColor: '#FF6347',
              },
              headerTintColor: '#EBF2FA',
              headerLeft: () => (
                <TouchableOpacity 
                onPress={() => navigationRef.navigate('Login')}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              ),
        }) } name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen options={({ }) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#FF6347',
              },
              headerTintColor: '#EBF2FA',
              headerLeft: () => (
                <TouchableOpacity onPress={() => {}}/>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigationRef.navigate('Profile')}
                >
                  <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
              ),
        })
        } name="Home" component={HomeScreen} />
        <Stack.Screen options={({ }) => ({
              title: 'Profile',
              headerStyle: {
                backgroundColor: '#FF6347',
              },
              headerTintColor: '#EBF2FA',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigationRef.navigate('Home')}
                >
                  <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
              ),
              /*headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigationRef.navigate('EditProfile')}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              )*/
         })
         } name="Profile" component={Profile} />
         <Stack.Screen options={({ }) => ({
              title: 'Edit Your Profile',
              headerStyle: {
                backgroundColor: '#FF6347',
              },
              headerTintColor: '#EBF2FA',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigationRef.navigate('Profile')}
                  style={styles.buttonHeader}
                >
                  <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
              ),
              
         })
         } name="EditProfile" component={EditProfile} />
        <Stack.Screen options={({ }) => ({
            title: 'Draw Something',
            headerStyle: {
            backgroundColor: '#FF6347',
            },})}name="PlayerDraw" component={PlayerDraw} />

        <Stack.Screen options={({ }) => ({
              title: 'Guess The Word',
              headerStyle: {
                backgroundColor: '#FF6347',
              },})}name="PlayerGuess" component={PlayerGuess} />

        <Stack.Screen options={({ }) => ({
              title: 'Host A Game',
              headerStyle: {
                backgroundColor: '#FF6347',
              },})}name="Lobby" component={Lobby} />

         <Stack.Screen options={({ }) => ({
              title: 'Join A Lobby',})}name="JoinLobby" component={JoinLobby} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});