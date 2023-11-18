import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function NovoUsuario({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [VerPassword, setVerPassword] = useState('');


    const signUp = async () => {
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Usuário Criado!');
      } catch (error) {
        console.log(error);
        alert('Falha no login: ' + error.message);
      }
    }

    return (
        <View style={styles.container}>
            <Image
            source={require('../iconpizza.png')}
            style={styles.Image}
            />
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                placeholderTextColor={"#1E1E1E"}
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={"#1E1E1E"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={"#1E1E1E"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                placeholderTextColor={"#1E1E1E"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={VerPassword}
            />
              <TouchableOpacity style={styles.button} onPress={signUp}>
                  <Text style={styles.text}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DBA855'
  },
  Image: {
    width:154,
    height:143,
    marginBottom:30,
    borderRadius:10,
  },
  input: {
    width: '100%',
    height: 40, 
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    backgroundColor: '#FFC929'
  },
  button: {
    backgroundColor: "#E93B47",  
    borderRadius: 12, 
    padding: 10, 
    marginTop: 35,
    margin: 5,
    height: 45,
  },
  text: {
    color: "#1E1E1E"
  },
  ForgotPassword: {
    color: "#1E1E1E",
    textDecorationLine: 'underline',
  },
});

export default NovoUsuario;