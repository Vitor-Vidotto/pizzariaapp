import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entrar from './Pages/Entrar';
import NovoUsuario from './Pages/NovoUsuario';
import RecuperarSenha from './Pages/RecuperarSenha';
import MenuPage from './Pages/MenuPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Entrar" component={Entrar} options={{ title: 'Entrar' }} />
        <Stack.Screen name="NovoUsuario" component={NovoUsuario} options={{ title: 'Novo Usuário' }} />
        <Stack.Screen name="Menu" component={MenuPage} options={{ title: 'Menu' }} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperar Senha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
