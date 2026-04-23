import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function app() {
    return (
        <View
            style={Styles.nova}>
            <Text>oi4</Text>
            <Link href="/youtubes"><Text style = {StyleSheet.TITLHE}>entrar</Text></Link>
        </View>
    );
}

const Styles = StyleSheet.create({
    nova: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3ab69"
    },
    titlhe: {
        color: "white",
        sizer: 20
    },
    TITLHE: {
        sizer: 20
    },
})