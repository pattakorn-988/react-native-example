import React from "react";
import {StyleSheet, View, Button, Text, TouchableHighlight} from 'react-native';

function Details ({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>Item ID: {JSON.stringify(route.params.itemId)}</Text>
      <Button title='Go to Details... again' onPress={() => { navigation.push('Details') }} />
      <Button title='Go to Home' onPress={() => navigation.navigate('Welcome')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Details;
