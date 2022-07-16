/*

Hello user
========================



Objectifs
---------
Ecrire une fonction `sayHelloToUser` qui permet de dire bonjour à un utilisateur en citant son prénom et son nom.

Cette fonction prend comme argument un objet qui représente l'utilisateur, et dans cette fonction on veut pouvoir utiliser directement les propriétés dont on a besoin sous forme de variables, mais sans avoir à déclarer ces variables dans le corps de la fonction... :pensif:

Note: pas de test ici
*/

const user = {
  country: 'France',
  firstName: 'Pierre',
  lastName: 'Aldado',
  email: 'p.aldado@oclock.io',
  phone: '0123456789',
  login: 'paldado',
  age: '32',
  lang: 'fr',
};

const sayHelloToUser = ({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

sayHelloToUser(user);

// Autre exemple pour aller plus loin

const someGuy = {
  firstName: 'Gilles',
  lastName: 'Durant',
  family: {
    wife: 'Jacqueline',
    firstChild: 'Kyllian',
    secondChild: 'Lilou',
  },
};

const sayHelloToSomeGuy = ({firstName, lastName, family: {wife, secondChild}}) => {
  console.log(`Hello ${firstName} ${lastName}! How is your dear wife ${wife} ? Oh, and your little ${secondChild}, she grows?`);
}

sayHelloToSomeGuy(someGuy);