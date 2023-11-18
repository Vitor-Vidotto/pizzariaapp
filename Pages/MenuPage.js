import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { getPizzas } from '../Services/pizzaService';
import Header from './Header';

const MenuPage = ({ navigation }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]); // Carrinho de compras

  useEffect(() => {
    getPizzas((pizzasData) => {
      console.log('Pizzas do Firebase:', pizzasData);
      setPizzas(pizzasData || []);
    });
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, { ...pizza, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  const groupPizzasByName = () => {
    const groupedPizzas = cart.reduce((result, pizza) => {
      const existingPizza = result.find((item) => item.name === pizza.name);

      if (existingPizza) {
        existingPizza.quantity += pizza.quantity;
      } else {
        result.push({ ...pizza });
      }

      return result;
    }, []);

    return groupedPizzas;
  };

  return (
    
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.menuContainer}>
        {pizzas.map((pizza, index) => (
          <TouchableOpacity key={index} style={styles.pizzaItem} onPress={() => addToCart(pizza)}>
            <Text style={styles.pizzaName}>{pizza.name}</Text>
            <Text style={styles.pizzaPrice}>R$ {pizza.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Seção do Carrinho */}
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrinho</Text>
        {groupPizzasByName().map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <TouchableOpacity onPress={() => removeFromCart(index)}>
              <Text>{item.name} x {item.quantity}</Text>
            </TouchableOpacity>
            <Text>R$ {(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
        <Text style={styles.total}>Total: R$ {calculateTotal().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DBA855',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuContainer: {
    flex: 1,
  },
  pizzaItem: {
    marginTop: 30,
    paddingTop: 20,
    backgroundColor: '#FFC929',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pizzaPrice: {
    fontSize: 16,
    marginTop: 8,
  },
  cartContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  total: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuPage;
