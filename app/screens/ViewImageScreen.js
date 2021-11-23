import React from "react";
import { Image, StyleSheet, View, TouchableHighlight, Text } from "react-native";

function ViewImageScreen({ navigation }) {
  const pressed = () => { console.log('clicked') }
  return (
    <View style={styles.container}>
      <TouchableHighlight style={{position: "absolute"}} onPress={() => {console.log('hello')}}>
        <View style={styles.closeIcon}>
          <Text>Close</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {console.log('hello')}}>
        <View style={styles.deleteIcon} />
      </TouchableHighlight>

      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: "absolute",
    top: 15,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: "absolute",
    top: 15,
    right: 30
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen;
