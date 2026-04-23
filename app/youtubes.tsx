import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function app() {
    return (
        <View
            style = {Styles.nova}>
            <Text style = {StyleSheet.titlhe}>oi5</Text>
            <Link href="/index"><Text style = {StyleSheet.TITLHE}>voltar</Text></Link>
        </View>
    );
}

const Styles = StyleSheet.create({
    nova: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#62181d"
    },
    titlhe: {
        color: "white",
        sizer: 20
    },
    TITLHE: {
        sizer: 20
    },
})