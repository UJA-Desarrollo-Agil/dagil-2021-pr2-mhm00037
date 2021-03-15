// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "89353480-ec80-11e1-aff1-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
				"<h1>Un sábado un tanto peculiar...</h1>\
				<p>Estamos en pleno mes de enero...</p>",
				{
	        enter: function(character, system, from) {
	            system.doLink('buenosdias');
	        }

				}
		),

		buenosdias: new undum.SimpleSituation (
				"<p> acabando navidad y a punto de comenzar los exámenes del primer cuatrimestre. Es sábado y esta semana no he salido nada a la calle ya que me he dedicado a estudiar para mis exámenes, que para variar, empecé a estudiar tarde y estoy un poco agobiada. Mi amiga, como siempre, me llama para saber si nos vamos a ver y <a href='salir'>salir de fiesta </a> pero no sé si <a href='estudiando'>seguir estudiando.</a></p>"
		),
		estudiando: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/estudiando.jpg'>\
			<p>Como chica responsable, decido quedarme en casa para seguir estudiando. </p>\
			<p>Llevo ya tantas horas delante de la pantalla que me cuesta mucho concentrarme y no rindo. Por lo que decido <a href='serie'> ver una serie </a> o <a href='cena'> hacerme una cena rica.</a></p>/"
		),
		salir: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/salir.jpg'>\
<p>salir un sábado en el pueblo significa encontrarse a todo quisqui y tener que cumplir con gente que llevas tiempo sin ver. Mi primo quiere que vayamos a su cochera para <a href='seguir'> seguir la fiesta </a> y así despedirnos porque se tiene que ir a trabajar fuera, esta idea es un tanto llamativa pero yo debería de <a href='casa'>ir a casa para descansar </a> y mañana tener un día productivo de estudio.</p>"
		),

		seguir: new undum.SimpleSituation(
			"<h1>Sigue la fiesta</h1>\
			<img class='img-situation' src='./media/Imagenes/siguefiesta.jpg'>\
			<p>Al final todos mis amigos, que saben todo lo que llevo estudiando estos días, me convencen para seguir la fiesta. Compramos botellón pero no tengo claro <a href='beber'> si beber </a> o <a href='nobeber'> no.</a></p>"
		),

		beber: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/beber.jpg'>\
<p>Decido tomarme unos cubatas y seguimos bailando hasta altas horas de la madrugada. El domingo me levantaré con un resacón.</a></p>"
		),


		serie: new undum.SimpleSituation(
			"<h1>Veo Netflix</h1>\
			<img class='img-situation' src='./media/Imagenes/verserie.jpg'>\
			<p>Abro Netflix. Mi prima me recomendó una <a href='peli'> película </a> que no se si empezar a ver ahora o ver la <a href='veoserie'> serie </a> que tanto anuncian en televisión.</p>"
		),

		peli: new undum.SimpleSituation(
			"<h1>Película</h1>\
			<p>Depués de ver la película puedo volver a seguir estudiando porque he despejado la mente un poco.</a></p>",
		),

		nobeber: new undum.SimpleSituation(
			"<p>Decido no beber alcohol pero seguir pasándomelo bien con mis amigos. Al despertarme el domingo estoy como nueva y agradezco el no tener resaca para poder estudiar.</p>"
		),

		casa: new undum.SimpleSituation(
			"<p>Al final he decidido irme a casa para dormir pronto y madrugar el domingo para seguir estudiando. El domingo me levanto temprano y mi amiga quiere que <a href='desayunar'> vayamos a desayunar </a> a nuestra cafetería favortia.</p>"
		),

		veoserie: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/serie.jpg'>\
<p>Empiezo a ver la serie, el primer capítulo parece que no me engancha mucho por eso decido ver el siguiente. Cuando quiero darme cuenta de la hora son las 3 a.m. y he perdido mucho tiempo de estudio.</p>"
		),

		desayunar: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/churros.jpg'>\
<p>Decido ir a comer churros con chocolate para despejarme y poder seguir estudiando con más ganas.</p>/"
		),


		cena: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/cena.jpg'>\
			<p Me dispongo a ir a la cocina para prepararme un plato estrella que había visto anunciado en un programa de cocina que consistía en rellenar berenjenas con pollo. Mientras espero a que se hagan las berenjenas me doy cuenta de que he hecho una cena demasiado rica como para no compartirla y ceno con mi madre.</p>/"
		),










};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {

};
