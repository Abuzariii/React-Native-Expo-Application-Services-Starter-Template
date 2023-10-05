import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./app/styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is my project</Text>
      <Text>Fuck yes this is working</Text>
      <Text>Fuck yes this is working</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
