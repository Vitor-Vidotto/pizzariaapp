// pizzaService.js
import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseconfig';

export const getPizzas = (callback) => {
  const pizzasRef = ref(database, 'pizzas');

  onValue(pizzasRef, (snapshot) => {
    const pizzasData = snapshot.val();
    const pizzasArray = pizzasData ? Object.values(pizzasData) : [];
    callback(pizzasArray);
  });
};
