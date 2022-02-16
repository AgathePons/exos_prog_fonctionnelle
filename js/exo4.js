/*

Mékicé ?
========================

Pfiou, ces gens qui prennent des pseudos, pas facile de s'y retrouver ! Mais c'est qui "paldado" ??

Objectifs
---------
Créer une fonction `findUser` qui à partir d'un `login` et d'un tableau `users` retourne l'utilisateur qui a ce login.

Notions
-------
- Array : ce serait cool de pouvoir chercher, ou plutôt _trouver_… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

*/

const data = [
  {
    name: 'Claire',
    login: 'La_mOuche',
  },
  {
    name: 'Delphine',
    login: 'Josiane',
  },
  {
    name: 'Emilie',
    login: 'Lili',
  },
  {
    name: 'Cédric',
    login: 'x__{^^}__x',
  },
  {
    name: 'Pierre',
    login: 'paldado',
  },
  {
    name: 'Sylvain',
    login: 'navilsy',
  },
];

function findUser(login, users) {
  
}













/*
 * Tests
 */
const result = document.getElementById('test');
if (
  findUser('paldado', data) === data[4]
  && findUser('Josiane', data) === data[1]
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
