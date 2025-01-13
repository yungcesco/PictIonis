import { Canvas, RoundedRect } from '@shopify/react-native-skia';
import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Image, Text } from 'react-native'
import React, {FC} from 'react'
import search from "../assets/icons/search.png";

const PlayerGuess = () => {
    const width = 300;
    const height = 300;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeMessage}>Try To Guess The Word !</Text>
            <Canvas style={{ width, height }}>
                <RoundedRect x={0} y={0} width={width} height={height} r={30} color={"white"}/>
            </Canvas>

            <View style={styles.searchContainer}> 
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onChange={() => {}}
                        placeholder="Type Here..."
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image
                        source={search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
    </View>
      </SafeAreaView>
    )
}

export default PlayerGuess

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#daa38d',
        flex: 1,
        alignItems: 'center'
      },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: "100%",
      },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
      },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: "#FF7754",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "#F3F4F8",
      },
    welcomeMessage: {
        fontSize: 24,
        color: "#312651",
        marginTop: 20,
        marginBottom: 20,
      },
})