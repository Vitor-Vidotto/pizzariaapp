import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebaseconfig';

function Entrar({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(authentication, email, password);
      console.log(response);
      navigation.navigate('Menu');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    }
  }

  const RecuperarSenha = () => {
    navigation.navigate('RecuperarSenha');
  };

  const NovoUsuario = () => {
    navigation.navigate('NovoUsuario');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../iconpizza.png')}
        style={styles.Image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.text}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RecuperarSenha} onPress={RecuperarSenha}>
          <Text style={styles.RecuperarSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNewUser} onPress={NovoUsuario}>
          <Text style={styles.texto2}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DBA855',
  },
  Image: {
    width: 154,
    height: 143,
    marginBottom: 30,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    backgroundColor: '#FFC929',
    color: '#DBA855',
  },
  button: {
    backgroundColor: "#E93B47",
    borderRadius: 12,
    padding: 12,
    marginTop: 35,
    margin: 5,
    height: 45,
    width: 200,
  },
  text: {
    color: "#1E1E1E",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  texto2: {
    color: "#1E1E1E",
    textAlign: "center",
  },
  RecuperarSenha: {
    color: '#1E1E1E',
    textAlign: 'center',
  }
});

export default Entrar;
