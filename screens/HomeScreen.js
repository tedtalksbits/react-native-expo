import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { Button } from "react-native-web";
import { styles } from "../App";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const nav = useNavigation();

    useLayoutEffect(() => {
        nav.setOptions({
            headerTitle: "Testing title",
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to CounterScreen"
                onPress={() => navigation.navigate("Counter")}
            />
        </SafeAreaView>
    );
}
