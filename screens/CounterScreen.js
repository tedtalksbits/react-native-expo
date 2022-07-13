import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../App";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-web";

export default function CounterScreen({ navigation }) {
    const [count, setCount] = useState(0);
    const onPressAddCount = () => {
        setCount(count + 1);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From React Native</Text>
            <StatusBar style="auto" />
            <Button
                onPress={
                    count < 10
                        ? onPressAddCount
                        : () => {
                              console.log("max number reached");
                          }
                }
                title="Add more More"
                color="#841584"
                accessibilityLabel="CLick to add more"
            />
            <Text style={styles.text}>
                {Array(count)
                    .fill()
                    .map((_, i) => `Hello from react native ${i + 1}`)
                    .join("\n")}
            </Text>
        </View>
    );
}
