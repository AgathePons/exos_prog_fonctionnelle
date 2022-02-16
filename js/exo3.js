/*

Ça va pas être possible…
========================

Et si on sortait en boîte de nuit ?

Objectifs
---------
Créer un tableau `allowedUsers` à partir du tableau `users` ne comportant que les membres qui ont le droit d'entrer.

Afin de pouvoir entrer en boîte de nuit, il faut :
- Avoir au moins 18 ans;
- Avoir au moins 20€ en poche;
- Si on n'a pas 18 ans, avoir 500€ en poche pour corrompre le videur

Sinon, ça va pas être possible !

Notions
-------
- Array : ce serait cool de pouvoir filtrer… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)

*/

const users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];

const allowedUsers = users;










/*
 * Tests
 */
const result = document.getElementById('test');
if (
  allowedUsers.length === 3
  && allowedUsers[0].name === 'Claire'
  && allowedUsers[1].name === 'Phil'
  && allowedUsers[2].name === 'Manny'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
