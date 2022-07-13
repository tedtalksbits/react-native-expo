import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import CounterScreen from "./screens/CounterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Counter" component={CounterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: "30px",
    },
});
