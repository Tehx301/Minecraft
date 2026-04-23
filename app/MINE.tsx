import { Link } from "expo-router";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
export default function app() {
    return (
        <View
            style={Styles.nova}>
            <Text style={Styles.texto}>
                {"\n"}
                O mincraft pode ser jogado em varios dispositivos{"\n"}
                sendo eles PC,PS,XBOX e celular{"\n"}
                {"\n"}
                o jogo resebe duas atualização por ano mantendo{"\n"}
                sua comunidade ativa e sempre a espera de mais
            </Text>
            <Text style={Styles.texto2}>
              os serves podem ser criados por você
                  </Text>
            <Text style={Styles.texto3}>
         ou você pode entrar num que ja existe com
                  </Text>
            <Text style={Styles.texto4}>
                         o objetivo de se divertir
             </Text>
            <Text style={Styles.texto5}>
        com seus amigos ou achar amigos para jogar
            </Text>
            <Link href="/mods"><Text style={Styles.TITLHE}>proximo</Text></Link>
            <ImageBackground source={require("../assets/images/PC.png")} style={Styles.imagen}></ImageBackground>
            <ImageBackground source={require("../assets/images/PS.webp")} style={Styles.imagen2}></ImageBackground>
        </View>
    );
}

const Styles = StyleSheet.create({
    nova: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#938daf"
    },
    texto: {
        color: "white",
        fontSize: 30,
        top: "-20%",
        left: 160,
    },
    texto2: {
        color: "white",
        fontSize: 30,
        top: "10%",
        left: -80,
    },
    texto3: {
        color: "white",
        fontSize: 30,
        top: "10%",
        left: -123,
    },
    texto4: {
        color: "white",
        fontSize: 30,
        top: "10%",
        left: 6,
    },
    texto5: {
        color: "white",
        fontSize: 30,
        top: "10%",
        left: -136,
    },
    imagen: {
        position: "absolute",
        width: 600,
        top: "1%",
        left: 10,
        height: 400,
    },
    imagen2: {
        position: "absolute",
        width: 600,
        top: "42%",
        left: 980,
        height: 400,
    },
    TITLHE: {
        color: "white",
        fontSize: 30,
        top: "-500%",
    }
})