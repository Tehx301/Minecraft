import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { receiveMessageOnPort } from "worker_threads";
export default function app() {
  return (
    <View
      style={Styles.container}>
      <Text style={Styles.titlhe}>seja bem vindo</Text>
      <Link href="/MINECRAFT">
     
      <ImageBackground source={require("../assets/images/mineSerto.png" )}style={Styles.imagen}>entar</ImageBackground>
      </Link>
       
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c5dddc"
  },
  titlhe: {
    fontSize: 50,
    color: "white",

  },
  TITLHE: {
    fontSize: 30,
    color: "#a1872b"
  },
  imagen: {
    justifyContent: "center",
    alignItems: "center",
    color: "#c5dddc",
    fontSize: 30,
    width: 130,   
    height: 130,
  
  }
})