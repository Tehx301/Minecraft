import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

export default function Container() {
    return (
        <View
            style={Styles.nova}>
            <Text style={Styles.titlhe}> .            MINECRAFT </Text>

            <Text style={Styles.texto}>{"\n"}Minecraft
            esse jogo fez sucesso por ser um jogo{"\n"}
                de mundo aberto onde você pode faser {"\n"}
                de tudo des de construir,esplorar e {"\n"}
                lutar contra os mobs ou outros player {"\n"}
                ja que o jogo pode ser jogado tento {"\n"}
                no singoplayer quanto no multiplayer{"\n"}
                {"\n"}
                você pode criar um mundo ou um server{"\n"}
                e chamar seus amigos para jogar ou se{"\n"}
                preferir pode entrar em um server que{"\n"}
                ja existe aonde tera varios minigames{"\n"}
                podendo ser de construsao, parkur e PVP{"\n"}
                e podendo ate conhecer novas pessoas
             </Text>


            <ImageBackground source={require("../assets/images/capa.jpg")} style={Styles.imagens}></ImageBackground>
            <Link href="/MINE" style={Styles.image}>
                <ImageBackground source={require("../assets/images/images.png")} style={Styles.image}>
                </ImageBackground>
            </Link>
        </View>
    );
}
const Styles = StyleSheet.create({
    nova: {
        flex: 1,

        backgroundColor: "#97814e"
    },
    texto: {
        color: "white",
        fontSize: 30,
        left: 10,
    },
    titlhe: {
        color: "white",
        fontSize: 84,
        backgroundColor: "#75d369",
    },
    link: {
        color: "white",
        fontSize: 60,
        left: 10,
    },
    imagens: {
        position: "absolute",
        width: 800,
        left: 800,
        height: 710
    },
    image: {
        fontSize: 10,
        position: "absolute",
        width: 100,
        top: "1%",
        left: 10,
        height: 100
    },

})

