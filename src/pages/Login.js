/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Login extends Component {
  state = {
    nomeusuario: ""
  };
  navegar = () => {
    this.props.navigation.navigate("TimeLine");
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate);

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Icon name="twitter" size={64} color="#38a1f3" />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.nomeusuario}
          placeholder="Insira seu login"
          onChangeText={texto => this.setState({ nomeusuario: texto })}
        />
        <TouchableOpacity onPress={this.navegar} style={styles.botaoEntrar}>
          <Text style={styles.textoBotao}> Entrar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    alignSelf: "stretch",
    borderRadius: 5,
    height: 54,
    padding: 10
  },
  botaoEntrar: {
    marginTop: 10,
    height: 54,
    backgroundColor: "#38A1F3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  textoBotao: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  }
});
