import { Canvas, Rect, Path, Skia, TouchInfo, useTouchHandler } from '@shopify/react-native-skia';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useCallback, useState, useEffect } from 'react'
import { generate } from "random-words";


const PlayerDraw = () => {
    const width = 350;
    const height = 350;
    const [paths, setPaths] = useState([]);
    const [word, setWord] = useState(); 

  const onDrawingStart = useCallback((touchInfo) => {
    setPaths((old) => {
      const { x, y } = touchInfo;
      const newPath = Skia.Path.Make();
      newPath.moveTo(x, y);
      return [...old, newPath];
    });
  }, []);

  const onDrawingActive = useCallback((touchInfo) => {
    setPaths((currentPaths) => {
      const { x, y } = touchInfo;
      const currentPath = currentPaths[currentPaths.length - 1];
      const lastPoint = currentPath.getLastPt();
      const xMid = (lastPoint.x + x) / 2;
      const yMid = (lastPoint.y + y) / 2;

      currentPath.quadTo(lastPoint.x, lastPoint.y, xMid, yMid);
      return [...currentPaths.slice(0, currentPaths.length - 1), currentPath];
    });
  }, []);

  const touchHandler = useTouchHandler(
    {
      onActive: onDrawingActive,
      onStart: onDrawingStart,
    },
    [onDrawingActive, onDrawingStart]
  );

  useEffect(() => {

    function generateWord() {
        setWord(word => generate({minLength: 5, maxLength: 10}));
    }
    generateWord();
  }, []);
  

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeMessage}>Draw Your Word : {word}</Text>
                <Canvas style={{ width, height }} onTouch={touchHandler}>
                    <Rect x={0} y={0} width={width} height={height} color={"white"}/>
                        {paths.map((path, index) => (
                            <Path
                            key={index}
                            path={path}
                            color={"black"}
                            style={"stroke"}
                            strokeWidth={2}
                            />
                        ))}
                </Canvas>
            <View style={styles.options}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button2}
                >
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button2}
                >
                    <Text style={styles.buttonText}>UNDO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button2}
                >
                    <Text style={styles.buttonText}>REDO</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    )
}

export default PlayerDraw

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
        marginTop: 48,
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
        marginTop: 30,
        marginBottom: 30,
      },
    options: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        padding: 15,
        
    },
    button2: {
        justifyContent: 'center',
        backgroundColor: '#FF6347',
        width: '30%',
        height: '15%',
        padding: 15,
        marginHorizontal: 3,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})