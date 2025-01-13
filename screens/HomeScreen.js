import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import PlayerGuess from './PlayerGuess'
import PlayerDraw from './PlayerDraw'
import Lobby from './Lobby'
import JoinLobby from './JoinLobby'



const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
        <Text style={styles.userName}>Yo {auth.currentUser?.email} !</Text>
        <Text style={styles.welcomeMessage}>LET'S PLAY PICTIONIS !</Text>
        <TouchableOpacity
            onPress={() => {navigation.navigate(Lobby)}}
            style={styles.button}
        >
            <Text style={styles.buttonText}>HOST</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {navigation.navigate(JoinLobby)}}
            style={styles.button2}
        >
            <Text style={styles.buttonText}>JOIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {navigation.navigate(PlayerDraw)}}
            style={styles.button2}
        >
            <Text style={styles.buttonText}>TRY A GAME (DRAW)</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {navigation.navigate(PlayerGuess)}}
            style={styles.button2}
        >
            <Text style={styles.buttonText}>TRY A GAME (GUESS)</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#daa38d',
    flex: 1,
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#FF6347',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 300,
  },
  button2: {
    backgroundColor: '#FF6347',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    color: "#444262",
    marginTop: 20,
  },
  welcomeMessage: {
    fontSize: 24,
    color: "#312651",
    marginTop: 50,
  },
})