import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function RecuperarSenha({ navigation }) {
    const [email, setEmail] = useState('');

    const RecuperarSenha = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Email de alteração de senha enviado!")
        }).catch((error) => {
            alert("Email não enviado: " + error)
        })
      }

    return (
        
        <View style={styles.container}>
            <Image
            source={require('../iconpizza.png')}
            style={styles.Image}
            />
            <Text style={styles.RecuperarSenha}>Recuperar senha</Text>
            <Text style={styles.text}></Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#1E1E1E"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={RecuperarSenha}>
                  <Text style={styles.textB}>ENTRAR</Text>
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
    backgroundColor: '#DBA855'
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    backgroundColor: '#FFC929'
  },
  textB: {
    color: '#1E1E1E',
    textAlign: 'center',
  },
  text: {
    color: '#1E1E1E',
    textAlign: 'left'
  },
  RecuperarSenha: {
    color: '#1E1E1E',
    textDecorationLine: 'underline',
    fontSize: 20,
    paddingBottom: 85,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#E93B47",  
    borderRadius: 12, 
    padding: 10, 
    marginTop: 55,
    margin: 5,
    height: 45,
    width: 200,
  },
  Image: {
    width:154,
    height:143,
    marginBottom:30,
    borderRadius:10,
  }
});

export default RecuperarSenha;