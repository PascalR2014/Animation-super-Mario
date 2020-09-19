$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// On a appuyé sur la touche flèche gauche
			case 37:
				$('img').animate({left: "-=10px"}, 'slow');
				break;
			// On a appuyé sur la touche flèche vers le haut
			case 38:
			    $('img').animate({top: "-=20px"}, 'fast');
				// Ecrivez votre code ici
				break;
				 $('img').animate({left: "+=10px"}, 'slow');
			// On a appuyé sur la touche flèche droite
			case 39:
			     $('img').animate({left: "+=10px"}, 'slow');
				// Ecrivez votre code ici
				break;
			// On a appuyé sur la touche flèche vers le bas
			case 40:
			    $('img').animate({top: "+=20px"}, 'fast');
				// Ecrivez votre code ici
				break;
		}
	});
});
		
	
 /*Nous allons faire intervenir la magie de jQuery en utilisant la syntaxe $(document).ready();
 $() dit : « Hey, des trucs jQuery vont avoir lieu ! »
 Placer document entre parenthèses nous indique que nous allons bientôt appliquer notre magie sur le document lui-même.
 Ensuite, ne pas oublier, les '*' dans les parenthèses, "$('div').fadeOut(1000);"
 .ready(); est une fonction, ou une action basique, en jQuery. Elle veut dire : « Hey, je vais faire des choses dès que le document HTML sera prêt ! »
 
Tout ce qui vient entre les parenthèses de .ready() est un événement jQuery qui se produira quand le document HTML sera prêt.
$(document).ready(quelquechose);
signifie : « quand le document HTML est prêt, fais quelquechose ! » (Nous allons vous montrer comment remplacer quelquechose 
par une action dans l'exercice qui vient.)
Notez que .ready(); se termine par un point-virgule. Cela précise à jQuery que vous avez terminé de lui donner un ordre.
 Les fonctions sont l'unité de base de jQuery !
 Rappelez-vous, nous terminons nos lignes de code jQuery par un point-virgule.
 */
