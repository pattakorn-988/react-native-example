import React from 'react';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Details from "./app/screens/Details";
import Voice from "./app/screens/Voice";
import Image from "./app/screens/Image";
import LiveChat from "./app/screens/LiveChat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{ title: 'iiV Prototype' }}
        />
        <Stack.Screen name='Voice' component={Voice} />
        <Stack.Screen name='Image' component={Image} />
        <Stack.Screen name='LiveChat' component={LiveChat} />
        {/*<Stack.Screen*/}
        {/*  name='Details'*/}
        {/*  component={Details}*/}
        {/*  options={({ route }) => ({ title: route.params.itemId.toString() })}*/}
        {/*  initialParams={{ itemId: 42 }}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
