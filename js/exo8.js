/*
Un peu d'épices…
================
Nous allons faire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
Changer la couleur du body au clic sur les boutons, le tout avec du currying

- Faire une fonction : applyColor
  - elle prend en paramètre une String représentant une couleur
  - elle retourne une fonction qui modifie le background du body
  - la fonction retournée est un handler à attacher au clic des boutons
  - bonus : on gère une classe selected sur le bouton de la couleur active

Notions
-------
- JS : portée de variable / closure / currying
*/

const whiteButton = document.getElementById('white');
const pinkButton = document.getElementById('pink');
const buttons = document.getElementsByTagName('button');

const applyColor = (color) => {
  return function () {
    for (const button of buttons) { button.className = '' }
    this.className = 'selected';
    document.body.style.backgroundColor = color;
  }
}

whiteButton.addEventListener('click', applyColor('white'));
pinkButton.addEventListener('click', applyColor('pink'));

// Autre exemple

// ici, on est obligé de recontruire une usine pour chaque voiture, hors on aurait pu utiliser la même pour Gaston et Kelly
const creerUsine = (constructeur, localisation, nbEmployes) => {
  // construct a factory
  // big code here
  console.log(`Une usine ${constructeur} a été crée à ${localisation}, elle a ${nbEmployes} employés.`);
  function creerVoiture(modele, couleur, motorisation) {
    console.log('clic bam boum je fabrique une voiture');
    return {
      modele,
      couleur,
      motorisation,
    }
  }

  return creerVoiture;
};

const voitureDeGaston = creerUsine('Renault', 'Toulouse', 300)('Twingo', 'Jaune canari', 'hydrogène');
const voitureDeKelly = creerUsine('Renault', 'Toulouse', 300)('Twingo', 'Antracite', 'pipi de chat');

// On peut faire la chose suivante, on construit une usine à Lyon :
const usineDeToulouse = creerUsine('Renault', 'Lyon', 300);

const voitureDeJulie = usineDeToulouse('Twingo', 'Deep Purple', 'huile de friture');
console.log(voitureDeJulie);

const voitureDeJulien = usineDeToulouse('Twingo', 'Clean white', 'beurre demi-sel');
console.log(voitureDeJulien);
