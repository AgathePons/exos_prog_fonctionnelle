const fruits = ['pomme', 'cerise', 'banane', 'orange'];
const fruits2 = ['litchi', 'kiwi', 'mangue', 'fruit de la passion'];

// pas réutilisable, si on veut faire la même chose sur un autre tableau, on doit reécrire le code
for (const fruit of fruits) {
  console.log('un fruit :', fruit);
}

for (let i = 0; i < fruits.length; i++ ) {
  console.log('un des fruit est :', fruits[i]);
}

let j = 0;
while (j < fruits.length) {
  console.log('miam! un fruit :', fruits[j])
  j++;
}

// on peut sortir la fonction de callback, et donc ça devient réutilisable

/* fruits.forEach((fruit) => {
  console.log('un des fruit est', fruit);
}); */

const direLeFruit = (unFruit) => {
  console.log('Voilà un fruit :', unFruit);
};

fruits.forEach(direLeFruit);
fruits2.forEach(direLeFruit);

/**
 * Notion de closure
 * Si on avait mis var au lieu de let, la boucle est parcourue, à la fin, index vaut 4 (fin de la boucle), l'index serait donc 4,
 * et le fruit serait undefined car fruits[4] n'existe pas.
 * Avec let, on a un instantané. On parle de portée de variable. Même si après, la valeur de index change, on a pris la valeur de index à un instant T.
 * Le fait de déclarer une fonction accédant à des variables, capture et fige la valeur de ces variables au moment où la fonction est appelée : C'est la closure
 */

/* for (let index = 0; index < fruits.length; index++ ) {
  setTimeout(function() {
    console.log(index);
    console.log('je mange un fruit :', fruits[index]);
  }, 3000 * (index + 1));
} */

/**
 * Si on sort la fonction de callback, ça passe avec un var
 * Le fait d'appeler une fonction, ça créer un scope, et ça prend un instantané, donc ça marche
 */

/* const afficheFruit = (indexFruit) => {
  setTimeout(function() {
    console.log(indexFruit);
    console.log('je re-mange un fruit :', fruits[indexFruit]);
  }, 3000 * (indexFruit + 1));
};

for (var index = 0; index < fruits.length; index++ ) {
  afficheFruit(index);
} */

/**
 * Autre exemple de closure
 * Quand on a déclaré la fonction dans le return, elle a accès aux variables qui sont au-dessus, donc à lang.
 * Dans la fonction du return, on a capturé l'environnement d'appel de la fonction dans laquelle elle est appelée
 */
function direBonjour (lang) {
  if (lang === 'fr') {
    return function(prenom) {
      console.log('Bonjour', prenom, 'ta langue :', lang);
    };
  } else if (lang === 'en') {
    return function(prenom) {
      console.log('Hello', prenom, 'your language:', lang);
    };
  }
}

const direBonjourEnFr = direBonjour('fr');
const direBonjourEnEn = direBonjour('en');

direBonjourEnFr('Agathe');
direBonjourEnEn('Agatha');

/**
 * Le Map() : Créer un nouveau tableau en faisant une transformation sur chaque element du tableau d'origine
 * Pour chaque element, on appel la fonction de callback
 * Le forEach est utile pour exécuter qqch à chaque élément, mais ne stock rien, si on fait :
 * const resultat = fruits.froEach( fruit => return fruit + ' pourri(e)' );
 * (return implicite, pas la peine de mettre entre accolade, si on veut faire un return implicite d'un objet,
 * pour pas que js interprète les accolades de l'objet comme les accolades de la fonction, on met l'objet entre ())
 * Si on essaie de logger resultat, ça enverra undefined alors que le map il renvoie un nouveau tableau
 * Par contre si on met pas de return dans le map, on aura un nouveau tableau de undefined
 * 
 * On a accès a d'autres paramètres, on peut utiliser l'index en 2è paramètre, on peut en 3è récupérer tout le tableau
 */

const fruitsPourris = fruits.map( (fruit, index) => {
  const fruitPourri = fruit + ' pourri(e)';
  if (index % 2 === 0) {
    return fruitPourri.toUpperCase();
  } else {
    return fruitPourri;
  }
});

console.log(fruitsPourris);