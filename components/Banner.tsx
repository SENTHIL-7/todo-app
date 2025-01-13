import { View ,StyleSheet} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function Banner() {
    return (
        <ThemedView style={styles?.container}>
            <ThemedText  type="title">Hi!</ThemedText>
            <ThemedText  type="title">Senthil welcome..</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:"center",
        alignItems:"flex-start",
        height:300,
        width:"100%"
    },
    title:{
      
    }
});