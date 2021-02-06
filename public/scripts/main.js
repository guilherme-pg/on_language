
// GENERAL VARIABLES
var language = 'english';
var game = [];
var level_array = [];
var theme_array = [];
var i = 0;
// var language = '';
var checkboxes;
var levelSelected;
var themeSelected;
var languageSelected;
var contentSelected = [];
var randomContent = [];


// var hhhhhhhhh = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'', level:'', grammar:'', database:'../images/'};

// CARDS: CITY
var police = {english:'the police', french:"la police", german:'die Polizei', italian:'la polizia', portuguese:'a polícia', spanish: "la policía", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/police'};
var firefighter = {english:'the firefighter', french:"le pompier", german:'der Feuerwehrmann', italian:'il pompiere', portuguese:'o bombeiro', spanish: "el bombero", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/firefighter'};
var drugstore = {english:'the drugstore', french:"la pharmacie", german:'die Apotheke', italian:'la farmacia', portuguese:'a farmácia', spanish: "la farmacia", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/drugstore'};
var hospital = {english:'the hospital', french:"l'hôpital", german:'das Krankenhaus', italian:"l'ospedale", portuguese:'o hospital', spanish: "el hospital", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/hospital'};
var museum = {english:'the museum', french:"le musée", german:'das Museum', italian:'il Museo', portuguese:'o Museu', spanish: "el Museo", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/museum'};
var restaurant = {english:'the restaurant', french:"le restaurant", german:'das Restaurant', italian:'il ristorante', portuguese:'o restaurante', spanish: "el restaurante", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/restaurant'};
var hotel = {english:'the hotel', french:"l'hôtel", german:'das Hotel', italian:"l'albergo", portuguese:'o hotel', spanish: "el hotel", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/hotel'};
var theater = {english:'the theater', french:"", german:'das Theater', italian:'il teatro', portuguese:'o teatro', spanish: "el teatro", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/theater'};
var supermarket = {english:'the supermarket', french:"le supermarché", german:'der Supermarkt', italian:'il supermercato', portuguese:'o supermercado', spanish: "el supermercado", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/supermarket'};
var city = {english:'the city', french:"", german:'die Stadt', italian:'la città', portuguese:'a cidade', spanish: "la ciudad", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/city'};
var park = {english:'the park', french:"le parc", german:'der Park', italian:'il parco', portuguese:'o Parque', spanish: "el parque", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/park'};
var street = {english:'the street', french:"la rue", german:'die Straße', italian:'la strada', portuguese:'a rua', spanish: "la calle", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/street'};
var mall = {english:'the mall', french:"le centre commercial", german:'das Einkaufszentrum', italian:'il centro commerciale', portuguese:'o Shopping', spanish: "el centro comercial", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/police'};
var cinema = {english:'the cinema', french:"le cinéma", german:'das Kino', italian:'il cinema', portuguese:'o cinema', spanish: "el cine", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/mall'};
var busStop = {english:'the bus stop', french:"l'arrêt de bus", german:'die Bushaltestelle', italian:"la fermata dell'autobus", portuguese:'o ponto de ônibus', spanish: "La parada de autobús", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/busStop'};
var subway  = {english:'the subway', french:"le métro", german:'die U-Bahn', italian:'la metropolitana', portuguese:'o metrô', spanish: "el metro", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/subway'};
var stadium = {english:'the stadium', french:"le stade", german:'das Stadium', italian:'lo stadio', portuguese:'o estádio', spanish: "el estadio", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/stadium'};
var church = {english:'the church', french:"l'église", german:'die Kirche', italian:'la Chiesa', portuguese:'a Igreja', spanish: "la Iglesia", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/church'};
var bookstore = {english:'the bookstore', french:"la librairie", german:'der Bücherladen', italian:'la libreria', portuguese:'a livraria', spanish: "la librería", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/bookstore'};
var embassy = {english:'the embassy', french:"l'ambassade", german:'die Botschaft', italian:"l'ambasciata", portuguese:'a embaixada', spanish: "la embajada", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var tunnel = {english:'The tunnel', french:"Le tunnel", german:'Der Tunnel', italian:"La galleria", portuguese:'O túnel', spanish: "El tunel", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var bridge = {english:'The bridge', french:"Le pont", german:'Die Brücke', italian:"Il ponte", portuguese:'A ponte', spanish: "El puente", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var castle = {english:'The castle', french:"Le château", german:'Die Burg', italian:"Il Castello", portuguese:'O castelo', spanish: "El castillo", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var cityHall = {english:'The city hall', french:"La mairie", german:'Das Rathaus', italian:"Il municipio", portuguese:'A prefeitura', spanish: "Ayuntamiento Municipal", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var library = {english:'The library', french:"La bibliothèque", german:'Die Bibliothek', italian:"La Biblioteca", portuguese:'A biblioteca', spanish: "La biblioteca", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var avenue = {english:'The avenue', french:"L'avenue", german:'Die Allee', italian:"Il viale", portuguese:'A avenida', spanish: "La avenida", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var garden = {english:'The garden', french:"Le jardin", german:'Der Garten', italian:"Il giardino", portuguese:'O jardim', spanish: "El jardín", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var barracks = {english:'The barracks', french:"La caserne", german:'Die Kaserne', italian:"Le baracche", portuguese:'O quartel', spanish: "El cuartel", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var market = {english:'The market', french:"Le marché", german:'Der Markt', italian:"Il mercato", portuguese:'O mercado', spanish: "El mercado", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var viaduct = {english:'The viaduct', french:"Le viaduc", german:'Der Viadukt', italian:"Il viadotto", portuguese:'O viaduto', spanish: "El viaducto", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var school = {english:'The school', french:"L'école", german:'Die Schule', italian:"La scuola", portuguese:'A escola', spanish: "La escuela", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var university = {english:'The University', french:"L'Université", german:'Die Universität', italian:"L'Università", portuguese:'A universidade', spanish: "La Universidad", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var cemetery = {english:'The cemetery', french:"Le cimetière", german:'Der Friedhof', italian:"Il cimitero", portuguese:'O cemitério', spanish: "El cementerio", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var airport = {english:'The airport', french:"L'aéroport", german:'Der Flughafen', italian:"L'aeroporto", portuguese:'O aeroporto', spanish: "El aeropuerto", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var port = {english:'The port', french:"Le port", german:'Der Hafen', italian:"Il porto", portuguese:'O porto', spanish: "El puerto", theme:'city', level:'a1', grammar:'noun', database:'../images/game_city/embassy'};
var court = {english:'The court', french:"Le tribunal", german:'Das Gericht', italian:"La Corte", portuguese:'O tribunal', spanish: "La cancha", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var neighborhood = {english:'The neighborhood', french:"Le tribunal", german:'Das Gericht', italian:"Il vicinato", portuguese:'O bairro', spanish: "El vecindario", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var monument = {english:'The monument', french:"Le tribunal", german:'Das Gericht', italian:"Il monumento", portuguese:'O monumento', spanish: "El monumento", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var factory = {english:'The factory', french:"Le tribunal", german:'Das Gericht', italian:"La fabbrica", portuguese:'A fábrica', spanish: "La fábrica", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var zone = {english:'The zone', french:"Le tribunal", german:'Das Gericht', italian:"La zona", portuguese:'A zona', spanish: "La zona", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var zoo = {english:'The zoo', french:"Le tribunal", german:'Das Gericht', italian:"Lo zoo", portuguese:'O zoológico', spanish: "El zoológico", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var bakery = {english:'The bakery', french:"Le tribunal", german:'Das Gericht', italian:"Il panificio", portuguese:'A padaria', spanish: "La pastelería", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var bar = {english:'The bar', french:"Le tribunal", german:'Das Gericht', italian:"Il bar", portuguese:'O bar', spanish: "El bar", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var stationery = {english:'The stationery', french:"Le tribunal", german:'Das Gericht', italian:"La cancelleria", portuguese:'A papelaria', spanish: "La papelería", theme:'city', level:'b2', grammar:'noun', database:'../images/game_city/embassy'};
var gallery = {english:'The gallery', french:"Le tribunal", german:'Das Gericht', italian:"La galleria", portuguese:'A galeria', spanish: "La galleria", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var palace = {english:'The palace', french:"Le tribunal", german:'Das Gericht', italian:"Il Palazzo", portuguese:'O palácio', spanish: "El Palacio", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var building = {english:'The building', french:"Le bâtiment", german:'Das Gebäude', italian:"L'edificio", portuguese:'O prédio', spanish: "El edificio", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var office = {english:'The office', french:"Le bureau", german:'Das Büro', italian:"L'ufficio", portuguese:'O escritório', spanish: "El escritorio", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var laboratory = {english:'The laboratory', french:"Le laboratoire", german:'Das Labor', italian:"Il laboratorio", portuguese:'O laboratório', spanish: "El laboratorio", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var sidewalk = {english:'The sidewalk', french:"Le trottoir", german:'Der Bürgersteig', italian:"Il marciapiede", portuguese:'A calçada', spanish: "La acera", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var post = {english:'The post', french:"La poste", german:'Die Post', italian:"Il post", portuguese:'O poste', spanish: "El cargo", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var square = {english:'The square', french:"La place", german:'Der Platz', italian:"La piazza", portuguese:'A praça', spanish: "La plaza", theme:'city', level:'a2', grammar:'noun', database:'../images/game_city/embassy'};
var cycleTrack = {english:'The cycle track', french:"La piste cyclable", german:'Der Radweg', italian:"La pista ciclabile", portuguese:'A ciclofaixa', spanish: "La pista para bicicletas", theme:'city', level:'b2', grammar:'noun', database:'../images/game_city/embassy'};
var bikePath = {english:'The bike path', french:"La piste cyclable", german:'Der Radweg', italian:"La pista ciclabile", portuguese:'A ciclovia', spanish: "El carril bici", theme:'city', level:'b2', grammar:'noun', database:'../images/game_city/embassy'};
var crosswalk = {english:'The crosswalk', french:"La voie piétonne", german:'Die Fußgängerzone', italian:"La corsia pedonale", portuguese:'A faixa de pedestre', spanish: "El carril peatonal", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};
var temple = {english:'The temple', french:"Le temple", german:'Der Tempel', italian:"Il tempio", portuguese:'O templo', spanish: "El templo", theme:'city', level:'b1', grammar:'noun', database:'../images/game_city/embassy'};

var city_array = [police, firefighter, drugstore, hospital, museum, restaurant, hotel, theater, supermarket, city, park, street, mall, cinema, busStop, subway, stadium, church, bookstore, embassy, tunnel, bridge, castle, cityHall, library, avenue, garden, barracks, market, viaduct, school, university, cemetery, airport, port, court, neighborhood, monument, factory, zone, zoo, bakery, bar, stationery, gallery, palace, building, office, laboratory, sidewalk, post, square, cycleTrack, bikePath, crosswalk, temple];


// CARDS: FOOD
var sugar = {english:'the sugar', french:"le sucre", german:'der Zucker', italian:"lo zucchero", portuguese:'o açúcar', spanish: "el azúcar", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var salt = {english:'the salt', french:"le sel", german:'das Salz', italian:"il sale", portuguese:'o sal', spanish: "la sal", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var bread = {english:'the bread', french:"le pain", german:'das Brot', italian:"il pane", portuguese:'o pão', spanish: "el pan", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var potato = {english:'the potato', french:"la pomme de terre", german:'die Kartoffel', italian:"La patata", portuguese:'a batata', spanish: "la papa", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var beans = {english:'the beans', french:"des haricots", german:'die Bohnen', italian:"i fagioli", portuguese:'o feijão', spanish: "los frijoles", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var rice = {english:'the rice', french:"le riz", german:'der Reis', italian:"il riso", portuguese:'o arroz', spanish: "el arroz", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var meat = {english:'the meat', french:"la viande", german:'das Fleisch', italian:"la carne", portuguese:'a carne', spanish: "la carne", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var chicken = {english:'the chicken', french:"le poulet", german:'das Huhn', italian:"il pollo", portuguese:'a galinha', spanish: "el pollo", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var coffee = {english:'the coffee', french:"le café", german:'der Kaffee', italian:"il caffè", portuguese:'o café', spanish: "el café", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var chocolate = {english:'the chocolate', french:"le chocolat", german:'die Schokolade', italian:"il cioccolato", portuguese:'o chocolate', spanish: "el chocolate", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var cake = {english:'the cake', french:"le gâteau", german:'der Kuchen', italian:"la torta", portuguese:'o bolo', spanish: "el pastel", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var hamburguer = {english:'the hamburguer', french:"l'hamburger", german:'der Hamburger', italian:"l'hamburger", portuguese:'o hambúrguer', spanish: "la hamburguesa", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var milk = {english:'the milk', french:"Le lait", german:'Die Milch', italian:"Il latte", portuguese:'o leite', spanish: "La leche", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var cheese = {english:'the cheese', french:"le fromage", german:'der Käse', italian:"il formaggio", portuguese:'o queijo', spanish: "el queso", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var pizza = {english:'the pizza', french:"la pizza", german:'die Pizza', italian:"la pizza", portuguese:'a pizza', spanish: "la pizza", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var egg = {english:'the egg', french:"l'œuf", german:'das Ei', italian:"l'uovo", portuguese:'o ovo', spanish: "el huevo", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var noodles = {english:'the noodles', french:"les nouilles", german:'die Nudeln', italian:"le tagliatelle", portuguese:'o macarrão', spanish: "Los fideos", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var juice = {english:'the juice', french:"le jus", german:'der Saft', italian:"il succo", portuguese:'o suco', spanish: "el jugo", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};
var soda = {english:'the soda', french:"La boisson gazéifiée", german:'die Soda', italian:"la gazzosa", portuguese:'o refrigerante', spanish: "el refresco", theme:'food', level:'a1', grammar:'noun', database:'../images/game_food/'};

var food_array = [sugar, salt, bread, potato, beans, rice, meat, chicken, coffee, chocolate, cake, hamburguer, milk, cheese, pizza, egg, noodles, juice, soda];


// CARDS: ANIMALS
var dog = {english:'the dog', french:"le chien", german:'der Hund', italian:"il cane", portuguese:'o cachorro', spanish: "el perro", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var cat = {english:'the cat', french:"le chat", german:'die Katze', italian:"il gatto", portuguese:'o gato', spanish: "el gato", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var bird = {english:'the bird', french:"l'oiseau", german:'der Vogel', italian:"l'uccello", portuguese:'o pássaro', spanish: "el pájaro", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var horse = {english:'the horse', french:"le cheval", german:'das Pferd', italian:"il cavallo", portuguese:'o cavalo', spanish: "el caballo", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var cow = {english:'the cow', french:"la vache", german:'die Kuh', italian:"la mucca", portuguese:'a vaca', spanish: "la vaca", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var chicken = {english:'the chicken', french:"le poulet", german:'das Huhn', italian:"il pollo", portuguese:'a galinha', spanish: "la gallina", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var monkey = {english:'the monkey', french:"le singe", german:'der Affe', italian:"la scimmia", portuguese:'o macaco', spanish: "el mono", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var fish = {english:'the fish', french:"le poisson", german:'der Fisch', italian:"il pesce", portuguese:'o peixe', spanish: "el pez", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var whale = {english:'the whale', french:"la baleine", german:'der Wal', italian:"la balena", portuguese:'a baleia', spanish: "la ballena", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var shark = {english:'the shark', french:"le requin", german:'der Hai', italian:"lo squalo", portuguese:'o tubarão', spanish: "el tiburón", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var mouse = {english:'the mouse', french:"la souris", german:'Die Maus', italian:"il topo", portuguese:'o rato', spanish: "el ratón", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var frog = {english:'the Frog', french:"la grenouille", german:'der Frosch', italian:"la rana", portuguese:'o sapo', spanish: "el sapo", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var snake = {english:'the snake', french:"le serpent", german:'die Schlange', italian:"il serpente", portuguese:'a cobra', spanish: "la serpiente", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var alligator = {english:'the alligator', french:"l'alligator", german:'der Alligator', italian:"l'alligatore", portuguese:'o jacaré', spanish: "el caimán", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var lion = {english:'the lion', french:"le lion", german:'der Löwe', italian:"il Leone", portuguese:'o leão', spanish: "el león", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var tiger = {english:'the Tiger', french:"le tigre", german:'der Tiger', italian:"la tigre", portuguese:'o tigre', spanish: "el Tigre", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var elephant = {english:'the elephant', french:"l'éléphant", german:'der Elefant', italian:"l'elefante", portuguese:'o elefante', spanish: "el elefante", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var hippopotamus = {english:'the hippopotamus', french:"l'hippopotame", german:'das Nilpferd', italian:"l'ippopotamo", portuguese:'o hipopótamo', spanish: "el hipopótamo", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var bear = {english:'the bear', french:"l'ours", german:'der Bär', italian:"l'orso", portuguese:'o urso', spanish: "el oso", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var giraffe = {english:'the giraffe', french:"la girafe", german:'die Giraffe', italian:"la giraffa", portuguese:'a girafa', spanish: "la jirafa", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};
var zebra = {english:'the zebra', french:"le zèbre", german:'das Zebra', italian:"la zebra", portuguese:'a zebra', spanish: "la cebra", theme:'animals', level:'a1', grammar:'noun', database:'../images/'};

var animals_array = [dog, cat, bird, horse, cow, chicken, monkey, fish, whale, shark, mouse, frog, snake, alligator, lion, tiger, elephant, hippopotamus, bear, giraffe, zebra];


// VEHICLES
var car = {english:'the car', french:"la voiture", german:'das Auto', italian:"l'auto", portuguese:'o carro', spanish: "el coche", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var motorcycle = {english:'the motorcycle', french:"la moto", german:'das Motorrad', italian:"la motocicletta", portuguese:'a motocicleta', spanish: "la motocicleta", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var airplane = {english:'the airplane', french:"l'avion", german:'das Flugzeug', italian:"l'aeroplano", portuguese:'o avião', spanish: "el avión", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var boat = {english:'the boat', french:"le bateau", german:'das Boot', italian:"la barca", portuguese:'o barco', spanish: "el barco", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var ship = {english:'the ship', french:"le bateau", german:'das Schiff', italian:"la nave", portuguese:'o navio', spanish: "el barco", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var bike = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var skateboard = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var subway = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var train = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var bus = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var ambulance = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var motorboat = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var tractor = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a2', grammar:'noun', database:'../images/'};
var truck = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var taxi = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var helicopter = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var submarine = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a1', grammar:'noun', database:'../images/'};
var airship = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'vehicles', level:'a2', grammar:'noun', database:'../images/'};


// CLOTHES
var shirt = {english:'the shirt', french:"la chemise", german:'das Hemd', italian:"la camicia", portuguese:'a camisa', spanish: "la camisa", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var short = {english:'the shorts', french:"les shorts", german:'Die Shorts', italian:"i pantaloncini", portuguese:'o short', spanish: "los shorts", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var pants = {english:'the pants', french:"le pantalon", german:'die Hose', italian:"i pantaloni", portuguese:'a calça', spanish: "el pantalon", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var underwear = {english:'the underwear', french:"le sous-vetement", german:'die Unterwäsche', italian:"la biancheria intima", portuguese:'a roupa de baixo', spanish: "la ropa interior", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var bra = {english:'the bra', french:"le soutien-gorge", german:'der BH', italian:"il reggiseno", portuguese:'o sutiã', spanish: "el sujetador", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var dress = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var sock = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var shoe = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var slipper = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var belt = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var clock = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var glasses = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};
var tennis = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'clothes', level:'a1', grammar:'noun', database:'../images/'};


// BODY
var head = {english:'the head', french:"la tête", german:'der Kopf', italian:"la testa", portuguese:'a cabeça', spanish: "la cabeza", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var arm = {english:'the arm', french:"le bras", german:'der Arm', italian:"il braccio", portuguese:'o braço', spanish: "el brazo", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var leg = {english:'the leg', french:"la jambe", german:'das Bein', italian:"la gamba", portuguese:'a perna', spanish: "la pierna", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var foot = {english:'the foot', french:"les pieds", german:'die Füße', italian:"i piedi", portuguese:'os pés', spanish: "el pie", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var finger = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var ear = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var eye = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var nose = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var mouth = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var tooth = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var hair = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var belly = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var chest = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var ass = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};
var shoulder = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'body', level:'a1', grammar:'noun', database:'../images/'};


// JOBS
var teacher = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var lawyer = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var engineer = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var architect = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var military = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var doctor = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var nurse = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var artist = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var athlete = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var salesman = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var manager = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var deliveryman = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var judge = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var advertising = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var biologist = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var philosopher = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var policeman = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var plumber = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var electrician = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};
var programmer = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'jobs', level:'a1', grammar:'noun', database:'../images/'};


// HOUSE
var House = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var livingRoom = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var kitchen = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var bathroom = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var bedroom = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var balcony = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var backyard = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var bed = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var wardrobe = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var table = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var chair = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var armchair = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var lightSwitch = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var bookcase = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var drawer = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var dish = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var spoon = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var fork = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var knife = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var cup = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var napkin = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var refrigerator = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var tap = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var shower = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};
var toilet = {english:'', french:"", german:'', italian:"", portuguese:'', spanish: "", theme:'house', level:'a1', grammar:'noun', database:'../images/'};





var general_array = [...city_array, ...food_array, ...animals_array];





// FUNCTIONS


function shuffleWithRepetitionArray() {

}



// REDUCE TO 8 THE OPTIONS AND DUPLICATES
var slicedArray = [];
var concatenatedArray = [];
function reduceAndDuplicate() {
    slicedArray = randomContent.slice(0, 8);

    duplicatedArray = JSON.parse(JSON.stringify(slicedArray));
    concatenatedArray = slicedArray.concat(duplicatedArray);
};



// SHUFFLE ARRAY CONTENT: RETURN ARRAY WITH RANDOM ELEMENTS
function shuffleArray(content) {
    randomContent = [];
    for (i = 0; i < content.length; i++) {
        randomNumber = Math.floor(Math.random() * content.length);
        
        if (randomContent.includes(content[randomNumber]) == false) {
            randomContent.push(content[randomNumber]);
        };
    };
};



// CREATE A ARRAY WITH THE SELECTED CONTENT
function combineOptionsSelect() {
    var tot = 0;
    // var unioArray = [...level_array, ...theme_array];

    if (level_array > theme_array) {
        tot = level_array.length;
    } else {
        tot = theme_array.length;
    };

    for (i = 0; i < tot; i++) {
        if (tot == level_array.length) {
            for (i = 0; i < level_array.length; i++) {
                if (level_array.includes(theme_array[i]) == true) {
                    contentSelected.push(theme_array[i]);
                };
            };
        } else {
            for (i = 0; i < theme_array.length; i++) {
                if (theme_array.includes(level_array[i]) == true) {
                    contentSelected.push(level_array[i]);
                };
            };
        };
    };
};




// FUNCTION TO SET MULTIPLES ATTRIBUTES
function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    };
};


// MEMORY GAME
var tempArray = [];
function gameMemory() {
    document.getElementById('games_options').style.display = 'none';

    // CREATING THE CARDS IN THE DOM
    var gameSpace = document.getElementById('game_place');
    for (i = 0; i < 16; i++) {
        var createInput = document.createElement('input');
        setAttributes(createInput, {"type":"checkbox", "name":"card_input", "id":`flip_card_${i}`});
        gameSpace.appendChild(createInput);
        
        var createLabel = document.createElement('label');
        setAttributes(createLabel, {"class":"flip_card", "for":`flip_card_${i}`, "id":`label_card_${i}`});
        gameSpace.appendChild(createLabel);

        
        var createDivInner = document.createElement('div');
        setAttributes(createDivInner, {"class":"flip_card_inner", "id":`flip_inner_${i}`});
        document.getElementById(`label_card_${i}`).appendChild(createDivInner);
        

        var createCardFront = document.createElement('div');
        setAttributes(createCardFront, {"class":"flip_card_front", "id":`flip_front_${i}`});
        document.getElementById(`flip_inner_${i}`).appendChild(createCardFront);

        var createCardBack = document.createElement('div');
        setAttributes(createCardBack, {"class":"flip_card_back", "id":`flip_back_${i}`});
        document.getElementById(`flip_inner_${i}`).appendChild(createCardBack);


        var createBackIdent = document.createElement('div');
        setAttributes(createBackIdent, {"class":"card_back_back"});
        document.getElementById(`flip_front_${i}`).appendChild(createBackIdent);
    };

    combineOptionsSelect();

    shuffleArray(contentSelected);

    reduceAndDuplicate();

    // concatenatedArray
    // shuffleWithRepetitionArray();

    // CREATE DOM ELEMENTS FOR THE CONTENT
    var flipcardBack = document.getElementsByClassName('flip_card_back');
    for (i = 0; i < flipcardBack.length; i++) {
        var createText = document.createElement('p');
        setAttributes(createText, {"class":"textCardBack", "id":`memory_text_${i}`});

        document.getElementById(`flip_back_${i}`).appendChild(createText);
    };

    // SHUFFLE, IMPLEMENT IN THE DOM WITH LANGUAGE SELECTED, REDUCE THE ARRAY TO PREVENT REPRETITION
    for (i = 0; i < flipcardBack.length; i++) {

        randomNumber = Math.floor(Math.random() * concatenatedArray.length);

        document.getElementById(`memory_text_${i}`).innerText = concatenatedArray[randomNumber][`${languageSelected}`];

        concatenatedArray.splice(randomNumber, 1);

        tempArray = JSON.parse(JSON.stringify(concatenatedArray));

        concatenatedArray = JSON.parse(JSON.stringify(tempArray));
    };

    // require: distinguish the nouns to the articles;
    // require: change colors according to the gender of the words;
    // require: limit the cards turn to 2;
    // require: check the content of the cards turned;
    // require: change color according to the content;
    // require: if wrong = turn automatically; if correct = stay;

};




// RESTART ALL DATA AND PREVENT BUG
function restartData() {
    level_array = [];
    theme_array = [];
};


// SELECTING THE LEVELS
function levelsSelect() {
    checkboxes = document.getElementsByName('option_level');
    var level = [];
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            levelSelected = checkboxes[i].value;
            level.push(checkboxes[i].value);
        };
    };

    if (level.length == 0) {
        alert('Select one or more Levels!');
    };

    for (l = 0; l < level.length; l++) {
        for (i = 0; i < general_array.length; i++) {
            if (general_array[i]['level'] == level[l]) {
                level_array.push(general_array[i]);
            };
        };
    };
};


// SELECTING THE GAME
function gameSelect() {
    checkboxes = document.getElementsByName('option_game');
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            game.push(checkboxes[i].value);
        };
    };
    if (game.length == 0) {
        alert('Select the Game!');
    };
};



// SELECTING THE THEMES
function themesSelect() {
    checkboxes = document.getElementsByName('option_theme');
    var theme = [];
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            themeSelected = checkboxes[i].value;
            theme.push(checkboxes[i].value);
        };
    };

    if (theme.length == 0) {
        alert('Select one or more Themes!');
    };

    for (t = 0; t < theme.length; t++) {
        for (i = 0; i < general_array.length; i++) {
            if (general_array[i]['theme'] == theme[t]) {
                theme_array.push(general_array[i]);
            };
        };
    };
};


// SELECTING THE LANGUAGE
function languageSelect() {
    checkboxes = document.getElementsByName('option_language');
    languageSelected = 'english';
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            languageSelected = checkboxes[i].value;
        };
    };
};



// LOAD THE GAME
function activeGame() {
    if (game[0] == 'flashCard') {
        console.log('THE flashCard');
    } else if (game[0] == 'hangman') {
        console.log('THE hangman');
    } else if (game[0] == 'memory') {
        gameMemory();
    };
};


// START THE CHALLENGER
function start() {

    restartData();

    languageSelect();

    levelsSelect();

    gameSelect();

    themesSelect();

    activeGame();
};




// BUTTONS AND COMMANDS

// document.getElementById('button_start').addEventListener('click', start);


