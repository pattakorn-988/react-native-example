import React from "react";
import {StyleSheet, View, Image, Text, TouchableHighlight, Button} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text>Voice Recognition and Image Processing Prototype</Text>
      </View>
      <TouchableHighlight onPress={() => navigation.navigate('LiveChat') } style={styles.chatButton}>
        <View style={styles.chatButton}>
          <Text>Live Chat</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Voice') } style={styles.voiceButton}>
        <View style={styles.voiceButton}>
          <Text>Voice</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Image') } style={styles.imageButton}>
        <View style={styles.imageButton}>
          <Text>Image</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: '30%',
    paddingHorizontal: '3%'
  },
  chatButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: "center",
  },
  voiceButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    justifyContent: "center",
    alignItems: "center",
  },
  imageButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
  }
})

export default WelcomeScreen;
