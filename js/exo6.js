/*

Compression de user
========================

On a récupéré un objet représentant un utilisateur, il y a plein d'informations dedans et on en utilise seulement certaines, on voudrait récupérer seulement les informations dont on a besoin.

Objectifs
---------
Créer une variable `firstName` dans laquelle on stocke le nom de l'utilisateur, une variable `login` pour son login... Et écrire ça en une seule ligne !

Puis renommer la variable `firstName` en `name`.

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
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










/*
 * Tests

 */
const result = document.getElementById('test');
if (
  name === user.firstName
  && login === user.login
  ) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
