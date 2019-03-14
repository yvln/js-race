// Ouvrez index.html dans un navigateur.
// Au milieu, le bouton "GO" contient un évènement "onclick",
// qui exécute la fonction go() ci-dessous.

// Merci d'écrire vos lignes de code dans l'espace en dessous de chaque consigne.

function go() {
  // ---TODO--- 1
  // La page que nous voulons cacher a l'id "landing-page".
  // Ecrivez ci-dessous le code pour ajouter le style "display: none" à cet élément.
  document.getElementById('landing-page').style.display = "none";

  // ---TODO--- 2
  // Celle que nous voulons afficher a l'id "game-page"
  // Ecrivez ci-dessous le code pour ajouter le style "display: flex" à cet élément.
  document.getElementById('game-page').style.display = "flex";

  // ---TODO--- 3
  // Maintenant que la page de jeu s'est affichée,
  // il faut ajouter la classe "animation"
  // à l'élément ayant l'id "bipbip".
  // Cela permettra à bipbip de traverser l'écran avant que
  // les coyottes ne commencent à le poursuivre.
  document.getElementById("bipbip").className = "animation";
}

// Nous allons maintenant préparer la fonction `onKeyDown()`,
// qui sera exécutée un peu plus tard.
// Il s'agit de tout ce que nous voulons exécuter lorsqu'une
// touche du clavier a été appuyée.
function onKeyDown(event) {

  // ---TODO--- 4-A
  // Je commence par créer 2 variables `redCoyote` et
  // `yellowCoyote` qui vont récupérer les deux personnages.
  var redCoyote = document.getElementById("red");
  var yellowCoyote = document.getElementById("yellow");

  // ---TODO--- 4-B
  // Je crée 2 variables `leftRed` et `leftYellow`, qui sont
  // les positions des deux personnages.
  // Pour connaître leur positiion, j'utilise leur propriété CSS `left`.
  var leftRed = window.getComputedStyle(redCoyote).getPropertyValue("left");
  var leftYellow = window
    .getComputedStyle(yellowCoyote)
    .getPropertyValue("left");

  // ---TODO--- 4-C
  // Traduire ce pseudo code :

  // Si le keyCode de mon event vaut 39,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.

  // Sinon, si le keyCode de mon event vaut 90,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.
  if (event.keyCode === 39) {
    redCoyote.style.left = parseInt(leftRed) + 10 + "px";
  } else if (event.keyCode === 90) {
    yellowCoyote.style.left = parseInt(leftYellow) + 10 + "px";
  }

  // ---TODO--- 4-D
  // Traduire ici ce pseudo code :

  // Si la valeur `left` du redCoyote (nous avons créé plus
  // haut la variable `leftRed`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote rouge gagne !`

  // Sinon, si la valeur `left` du yellowCoyote (nous avons créé plus
  // haut la variable `leftYellow`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote jaune gagne !`
  if (
    parseInt(leftRed) > window.innerWidth
  ) {
    alert("Coyote rouge gagne !");
  } else if (parseInt(leftYellow) > window.innerWidth
  ) {
    alert("Coyote jaune gagne !");
  } 
}

// ---TODO--- 5
// La fonction `onKeyDown` que nous avons créée plus haut a été déclarée.
// Nous voulons à présent l'exécuter.
// Ajouter un "écouteur d'évènement" au document.
// L'évènement écouté est `keydown`, et la fonction exécutée est
// celle que nous avons créé un peu plus haut.
document.addEventListener("keydown", onKeyDown);



// ---BONUS---

// Changez les touches qui permettent aux personnes d'avancer,
// et modifier le texte explicatif dans `index.html`.

// Lorsque le perdant termine sa course, ajouter une alerte
// qui indique quel coyotte a perdu.

// Ecrire une fonction qui permet de recommencer une partie lorsque
// le premier coyotte arrive à la fin de la course.
