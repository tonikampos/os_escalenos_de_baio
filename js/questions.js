// Base de datos de preguntas de cultura general en galego
const QUESTIONS_DATABASE = [
  // Preguntas xerais anteriores
  {
    id: 1,
    question: "Cal é a capital de Galicia?",
    answers: ["A Coruña", "Santiago de Compostela", "Vigo", "Ourense"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "En que ano chegou o home á lúa por primeira vez?",
    answers: ["1967", "1968", "1969", "1970"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Quen escribiu 'Dom Quixote de La Mancha'?",
    answers: ["Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Cal é o elemento químico con símbolo 'Au'?",
    answers: ["Prata", "Ouro", "Aluminio", "Argon"],
    correct: 1,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Cantos días ten un ano bisesto?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
    category: "xeral",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Cal é o río más longo de Europa?",
    answers: ["Danubio", "Rin", "Volga", "Dniéper"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "En que cidade se atopa a Torre Eiffel?",
    answers: ["Londres", "Roma", "París", "Berlín"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Quen pintou 'A Guernica'?",
    answers: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco de Goya"],
    correct: 0,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Cal é o planeta máis grande do sistema solar?",
    answers: ["Saturno", "Neptuno", "Júpiter", "Urano"],
    correct: 2,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "En que ano comezou a Segunda Guerra Mundial?",
    answers: ["1938", "1939", "1940", "1941"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Cal é a montaña máis alta do mundo?",
    answers: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Quen compuxo 'A Novena Sinfonía'?",
    answers: ["Mozart", "Beethoven", "Bach", "Chopin"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Cal é a velocidade da luz no baleiro?",
    answers: ["299.792.458 m/s", "300.000.000 m/s", "299.000.000 m/s", "301.000.000 m/s"],
    correct: 0,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "En que continente se atopa o deserto do Sahara?",
    answers: ["Asia", "América", "África", "Oceanía"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Quen foi o primeiro presidente dos Estados Unidos?",
    answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Cal é o océano máis grande?",
    answers: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correct: 3,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "En que cidade naceu Shakespeare?",
    answers: ["Londres", "Stratford-upon-Avon", "Oxford", "Cambridge"],
    correct: 1,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Cal é a capital de Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Cantos corazóns ten un pulpo?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "En que ano caeu o muro de Berlín?",
    answers: ["1987", "1988", "1989", "1990"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Cal é o metal máis abondoso na crosta terrestre?",
    answers: ["Ferro", "Aluminio", "Cobre", "Zinc"],
    correct: 1,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Quen escribiu 'Cen anos de soidade'?",
    answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Octavio Paz"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Cal é a lingua máis falada do mundo?",
    answers: ["Inglés", "Español", "Chinés mandarín", "Hindi"],
    correct: 2,
    category: "xeral",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "En que país se inventou o papel?",
    answers: ["India", "China", "Exipto", "Grecia"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Cal é o hueso máis longo do corpo humano?",
    answers: ["Húmero", "Tíbia", "Fémur", "Radio"],
    correct: 2,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "En que cidade se celebraron os primeiros Xogos Olímpicos modernos?",
    answers: ["París", "Londres", "Atenas", "Roma"],
    correct: 2,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Cal é a fórmula química da auga?",
    answers: ["H2O", "CO2", "H2SO4", "NaCl"],
    correct: 0,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Quen pintou 'A última cea'?",
    answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"],
    correct: 2,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Cal é o país máis pequeno do mundo?",
    answers: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "En que ano se descubriu América?",
    answers: ["1490", "1491", "1492", "1493"],
    correct: 2,
    category: "historia",
    difficulty: "easy"
  },

  // 🏛️ PREGUNTAS ESPECÍFICAS DE GALICIA - HISTORIA
  {
    id: 31,
    question: "Quen foi o rei que outorgou o foro de Santiago de Compostela?",
    answers: ["Alfonso VII", "Fernando II", "Alfonso IX", "García II"],
    correct: 2,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 32,
    question: "En que ano tivo lugar a revolta irmandiña?",
    answers: ["1467-1469", "1475-1477", "1480-1482", "1460-1462"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 33,
    question: "Quen foi Rosalía de Castro?",
    answers: ["Poetisa galega do séc. XIX", "Raíña medieval", "Pintora renacentista", "Escultora barroca"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "Cal é o nome do himno oficial de Galicia?",
    answers: ["Os Pinos", "Galicia Ceibe", "Terra Nosa", "Patria Galega"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "En que provincia galega se atopa Ribadeo?",
    answers: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "Como se chama o día da festa nacional de Galicia?",
    answers: ["Día de Galicia", "Día das Letras Galegas", "Día da Patria Galega", "Día de Santiago"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Quen escribiu 'Cantares Gallegos'?",
    answers: ["Curros Enríquez", "Eduardo Pondal", "Rosalía de Castro", "Castelao"],
    correct: 2,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Cal é o símbolo heráldico de Galicia?",
    answers: ["O cáliz de Santiago", "A cuncha de vieira", "A cruz de Santiago", "O galo"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "En que século se construíu a catedral de Santiago?",
    answers: ["Século X", "Século XI", "Século XII", "Século XIII"],
    correct: 2,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Cal é o río máis longo de Galicia?",
    answers: ["Miño", "Sil", "Ulla", "Tambre"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "easy"
  },

  // 🏔️ XEOGRAFÍA DE GALICIA
  {
    id: 41,
    question: "Cal é o pico máis alto de Galicia?",
    answers: ["Trevinca", "Pena Ubiña", "O Eixe", "Pena Trevinca"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Cantas provincias ten Galicia?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "easy"
  },
  {
    id: 43,
    question: "Cal é a costa galega máis occidental?",
    answers: ["Costa da Morte", "Rías Baixas", "Rías Altas", "Costa Ártabra"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "En que concello se atopa o Cabo Fisterra?",
    answers: ["Muxía", "Fisterra", "Cee", "Corcubión"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "easy"
  },
  {
    id: 45,
    question: "Cal é a illa galega máis grande?",
    answers: ["Illa de Arousa", "Illa de Ons", "Illa de Sálvora", "Illa de Cortegada"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Por que porto saen os ferrys cara a Inglaterra?",
    answers: ["Vigo", "A Coruña", "Ferrol", "Santander"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "En que provincia se atopa a Serra do Courel?",
    answers: ["Ourense", "Lugo", "A Coruña", "Pontevedra"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "Cal é o parque natural máis antigo de Galicia?",
    answers: ["Fragas do Eume", "Dunas de Corrubedo", "Monte Aloia", "Baixa Limia-Serra do Xurés"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 49,
    question: "Que ría pertence ás Rías Baixas?",
    answers: ["Ría de Ferrol", "Ría de Pontevedra", "Ría de Betanzos", "Ría de Ares"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "Cal é a cidade máis poboada de Galicia?",
    answers: ["Santiago", "A Coruña", "Vigo", "Ourense"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "easy"
  },

  // 🎭 CULTURA E TRADICIÓNS GALEGAS
  {
    id: 51,
    question: "Como se chama a festa tradicional galega de fin de ano?",
    answers: ["Noiteboa", "Noitevella", "Noiteviña", "Fin de Ano"],
    correct: 2,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 52,
    question: "Cal é o baile tradicional galego máis coñecido?",
    answers: ["Muiñeira", "Jota", "Sardana", "Aurresku"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 53,
    question: "Como se chama o instrumento de vento típico galego?",
    answers: ["Tambor", "Gaita", "Zanfona", "Pandeireta"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "Que significa 'queimada' na cultura galega?",
    answers: ["Un pratos típico", "Unha bebida tradicional", "Unha festa", "Un baile"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Cal é a festa máis importante de Santiago?",
    answers: ["San Juan", "Santiago Apóstolo", "Ascensión", "Corpus Christi"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Como se chama a tradición de cantar polas casas en Nadal?",
    answers: ["Aguilando", "Reis", "Pandeirada", "Rondalla"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "Que son os 'hórreos'?",
    answers: ["Construcións para gardar o gran", "Casas tradicionais", "Torres defensivas", "Pontes de pedra"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "En que data se celebra o Día das Letras Galegas?",
    answers: ["17 de maio", "25 de xullo", "12 de outubro", "6 de xaneiro"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "Cal é o prato típico galego máis internacional?",
    answers: ["Empanada", "Pulpo á feira", "Caldo galego", "Lacón con grelos"],
    correct: 1,
    category: "gastronomiagalicia",
    difficulty: "easy"
  },
  {
    id: 60,
    question: "Como se chama a procesión das candeas en Santiago?",
    answers: ["Candeloria", "Candeas", "Via Crucis", "Domingo de Ramos"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "hard"
  },

  // 📚 LITERATURA GALEGA
  {
    id: 61,
    question: "Quen é o autor de 'Sempre en Galiza'?",
    answers: ["Castelao", "Otero Pedrayo", "Vicente Risco", "Aquilino Iglesia"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Cal é a obra máis importante de Álvaro Cunqueiro?",
    answers: ["Merlín e familia", "As crónicas do sochantre", "Escola de menciñeiros", "O incerto señor don Hamlet"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 63,
    question: "Quen escribiu 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Manuel Rivas", "Suso de Toro", "Alfredo Conde"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Cal foi o primeiro libro impreso en galego?",
    answers: ["Catecismo", "Compendio de Agricultura", "Diccionario gallego", "Historia de Galicia"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 65,
    question: "Quen foi Manuel Murguía?",
    answers: ["Escritor e historiador", "Político", "Músico", "Pintor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Cal é o nome real de Castelao?",
    answers: ["Alfonso Daniel Rodríguez", "Alfonso Daniel Castelao", "Daniel Alfonso Rodríguez", "Alfonso Rodríguez Castelao"],
    correct: 3,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 67,
    question: "Quen escribiu 'O bosque animado'?",
    answers: ["Wenceslao Fernández Flórez", "Álvaro Cunqueiro", "Rafael Dieste", "Eduardo Blanco Amor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "En que ano se creou a Real Academia Galega?",
    answers: ["1905", "1906", "1907", "1908"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 69,
    question: "Quen foi Pondal?",
    answers: ["Eduardo Pondal, poeta", "Manuel Pondal, músico", "Xosé Pondal, pintor", "Antonio Pondal, escritor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Cal é a revista literaria galega máis antiga?",
    answers: ["Nós", "A Nosa Terra", "Grial", "Nordés"],
    correct: 1,
    category: "literatura_galicia",
    difficulty: "hard"
  },

  // 🏛️ HISTORIA DE GALICIA
  {
    id: 71,
    question: "Quen foi Breogán na mitoloxía galega?",
    answers: ["Un rei celta", "Un guerreiro", "Un druída", "Un navegante"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "Como se chamaban os antigos poboadores de Galicia?",
    answers: ["Celtas", "Galaicos", "Suevos", "Astures"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 73,
    question: "En que século se descubriu a tumba do Apóstolo Santiago?",
    answers: ["Século VIII", "Século IX", "Século X", "Século VII"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Quen foi Diego Xelmírez?",
    answers: ["Primeiro arcebispo de Santiago", "Rei de Galicia", "Conquistador", "Trovador"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "En que ano se constituyó a Xunta de Galicia actual?",
    answers: ["1978", "1981", "1982", "1983"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 76,
    question: "Quen foi o primeiro presidente da Xunta de Galicia?",
    answers: ["Xerardo Fernández Albor", "Manuel Fraga", "Fernando González Laxe", "Emilio Pérez Touriño"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 77,
    question: "Cal foi a primeira universidade de Galicia?",
    answers: ["Universidade de Vigo", "Universidade da Coruña", "Universidade de Santiago", "Universidade de Ourense"],
    correct: 2,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 78,
    question: "En que ano se fundou a Universidade de Santiago?",
    answers: ["1495", "1501", "1504", "1510"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 79,
    question: "Quen foi María Pita?",
    answers: ["Heroína coruñesa", "Poetisa medieval", "Raíña de Galicia", "Santa galega"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "En que guerra destacou María Pita?",
    answers: ["Guerra contra os ingleses", "Guerra de Sucesión", "Guerra da Independencia", "Guerra Civil"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },

  // 🎨 ARTE GALEGA
  {
    id: 81,
    question: "Quen é o escultor galego máis internacional?",
    answers: ["Francisco Leiro", "Acisclo Manzano", "Oliveiro", "Xaime Quesada"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "Cal é o estilo arquitectónico da catedral de Santiago?",
    answers: ["Románico", "Gótico", "Barroco", "Renacentista"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Quen deseñou o Pórtico da Gloria?",
    answers: ["Mestre Mateo", "Mestre Pedro", "Mestre Santiago", "Mestre Juan"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "En que cidade está o Museo de Belas Artes máis importante de Galicia?",
    answers: ["Santiago", "A Coruña", "Vigo", "Ourense"],
    correct: 1,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "Cal é o castro galego máis visitado?",
    answers: ["Castro de Viladonga", "Castro de Santa Trega", "Castro de Baroña", "Castro de Coaña"],
    correct: 1,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Quen foi Urbano Lugrís?",
    answers: ["Pintor galego", "Escultor", "Arquitecto", "Escritor"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "hard"
  },
  {
    id: 87,
    question: "En que concello está a praia das Catedrais?",
    answers: ["Ribadeo", "Foz", "Viveiro", "Burela"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Cal é o pazo galego máis famoso?",
    answers: ["Pazo de Oca", "Pazo de Mariñán", "Pazo de Lourizán", "Pazo de Meirás"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Quen construíu a Torre de Hércules?",
    answers: ["Os celtas", "Os romanos", "Os suevos", "Os visigodos"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Cal é a feira de artesanía máis importante de Galicia?",
    answers: ["Feira Franca de Pontevedra", "Feira de Allariz", "Feira de Betanzos", "Feira de Mondoñedo"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "hard"
  },

  // 🍽️ GASTRONOMÍA GALEGA
  {
    id: 91,
    question: "Cal é o marisco máis típico das rías galegas?",
    answers: ["Percebe", "Centola", "Nécora", "Vieira"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Que ingrediente principal leva o caldo galego?",
    answers: ["Patacas", "Grelos", "Fabas", "Repollo"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 93,
    question: "Cal é a denominación de orixe máis prestixiosa do viño galego?",
    answers: ["Rías Baixas", "Ribeiro", "Valdeorras", "Monterrei"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Que carne se usa tradicionalmente no lacón con grelos?",
    answers: ["Cerdo", "Vaca", "Cordeiro", "Cabrito"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 95,
    question: "Cal é o postre galego máis típico?",
    answers: ["Filloas", "Tarta de Santiago", "Roscón", "Mel e nuces"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 96,
    question: "Que símbolo leva a auténtica tarta de Santiago?",
    answers: ["Cruz de Santiago", "Vieira", "Cáliz", "Estrela"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 97,
    question: "En que época do ano se celebra a festa do marisco en O Grove?",
    answers: ["Primavera", "Verán", "Outono", "Inverno"],
    correct: 2,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Cal é o peixe máis consumido en Galicia?",
    answers: ["Merluza", "Sardina", "Rodaballo", "Linguado"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "Que licor se usa para facer a queimada?",
    answers: ["Aguardente", "Orujo", "Brandy", "Ron"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Cal é a empanada galega máis típica?",
    answers: ["De bacallau", "De atún", "De chorizo", "De zamburiñas"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },

  // 🌊 PATRIMONIO NATURAL DE GALICIA
  {
    id: 101,
    question: "Cal é o parque nacional de Galicia?",
    answers: ["Illas Atlánticas", "Fragas do Eume", "Courel", "Ancares"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "Cantas illas forman o arquipélago de Cíes?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "Cal é a árvore símbolo de Galicia?",
    answers: ["Carbalho", "Eucalipto", "Piñeiro", "Castiñeiro"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "easy"
  },
  {
    id: 104,
    question: "En que comarca está a Ribeira Sacra?",
    answers: ["Ourense e Lugo", "Lugo e A Coruña", "Ourense e Pontevedra", "A Coruña e Pontevedra"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Cal é o río que forma os canóns da Ribeira Sacra?",
    answers: ["Miño", "Sil", "Ulla", "Sor"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Onde está a Praia da Lanzada?",
    answers: ["Sanxenxo", "O Grove", "Cambados", "Vilanova de Arousa"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "Cal é a cascada máis alta de Galicia?",
    answers: ["Fervenza do Toxa", "Fervenza de Sotoxo", "Fervenza de Ézaro", "Fervenza de Casaio"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "hard"
  },
  {
    id: 108,
    question: "En que serra se atopa o Invernadoiro?",
    answers: ["Serra do Xurés", "Serra da Estrela", "Serra de Queixa", "Serra do Courel"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Cal é a lagoa máis grande de Galicia?",
    answers: ["Lagoa de Sobrado", "Lagoa de Cospeito", "Lagoa de Antela", "Lagoa de Louro"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 110,
    question: "Que tipo de bosque predomina nas Fragas do Eume?",
    answers: ["Bosque atlántico", "Bosque mediterráneo", "Bosque de coníferas", "Bosque mixto"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "medium"
  },

  // 🎵 MÚSICA E FOLCLORE GALEGO
  {
    id: 111,
    question: "Quen compuxo a música do himno galego?",
    answers: ["Pascual Veiga", "Eduardo Pondal", "Reveriano Soutullo", "Rogelio Groba"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "Cal é o grupo de música celta galega máis coñecido?",
    answers: ["Milladoiro", "Luar na Lubre", "Fuxan os Ventos", "Berrogüetto"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "Como se chama o canto tradicional de traballo no mar?",
    answers: ["Alborada", "Cantiga", "Foliada", "Marinheira"],
    correct: 3,
    category: "cultura_galicia",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "Quen foi Andrés do Barro?",
    answers: ["Gaiteiro famoso", "Cantante", "Compositor", "Danzante"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "hard"
  },
  {
    id: 115,
    question: "Cal é o festival de música celta máis importante de Galicia?",
    answers: ["Festival de Ortigueira", "Festival de Ribadumia", "Festival de Vigo", "Festival de Santiago"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "Como se chama a danza típica das pandeireteiras?",
    answers: ["Muiñeira das pandeireteiras", "Baile das fitas", "Danza prima", "Foliada"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "Que instrumento acompaña tradicionalmente á gaita?",
    answers: ["Bombo", "Tambor", "Pandeiro", "Tambourin"],
    correct: 1,
    category: "musica_galicia",
    difficulty: "easy"
  },
  {
    id: 118,
    question: "Cal é a canción popular galega máis coñecida?",
    answers: ["Muiñeira de Lugo", "Alalá", "Foliada de Mondoñedo", "Jota de Betanzos"],
    correct: 1,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "En que festa se cantan tradicionalmente as alboradas?",
    answers: ["Corpus Christi", "Santiago", "San Xoán", "Todas as anteriores"],
    correct: 3,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 120,
    question: "Quen foi Perfecto Feijoo?",
    answers: ["Gaiteiro", "Compositor", "Cantante", "Director de orquestra"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "hard"
  },

  // 🏛️ CAMIÑO DE SANTIAGO
  {
    id: 121,
    question: "Cantos quilómetros ten o Camiño Francés desde Roncesvalles?",
    answers: ["750 km", "780 km", "800 km", "850 km"],
    correct: 2,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Cal é o último pobo antes de chegar a Santiago no Camiño Francés?",
    answers: ["Monte do Gozo", "Lavacolla", "O Pedrouzo", "Amenal"],
    correct: 2,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 123,
    question: "En que ano foi declarado o Camiño Patrimonio da Humanidade?",
    answers: ["1985", "1987", "1990", "1993"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "Cal é o símbolo do Camiño de Santiago?",
    answers: ["A cruz", "A vieira", "O bordón", "A calabaza"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "easy"
  },
  {
    id: 125,
    question: "Cantos quilómetros mínimos hai que percorrer para obter a Compostela?",
    answers: ["50 km", "100 km", "150 km", "200 km"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "Cal é o Camiño de Santiago máis antigo?",
    answers: ["Camiño Francés", "Camiño Primitivo", "Camiño Portugués", "Camiño do Norte"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "Onde comeza oficialmente o Camiño Inglés?",
    answers: ["A Coruña", "Ferrol", "Betanzos", "Nas dúas primeiras"],
    correct: 3,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "Cal é a primeira cidade galega do Camiño Francés?",
    answers: ["O Cebreiro", "Pedrafita", "Triacastela", "Sarria"],
    correct: 0,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "Que edificio acollía tradicionalmente os peregrinos?",
    answers: ["Hospitais", "Mosteiros", "Albergues", "Todas as anteriores"],
    correct: 3,
    category: "camino_santiago",
    difficulty: "easy"
  },
  {
    id: 130,    question: "Cal é o día de maior afluencia de peregrinos a Santiago?",
    answers: ["25 de xullo", "24 de xullo", "26 de xullo", "Todo o mes de xullo"],
    correct: 0,
    category: "camino_santiago",
    difficulty: "easy"
  },

  // NOVAS PREGUNTAS DE CULTURA GALEGA (131-230)
  {
    id: 131,
    question: "Cal é o nome do castro máis famoso de Galicia?",
    answers: ["Castro de Viladonga", "Castro de Baroña", "Castro de Santa Trega", "Castro de Coaña"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 132,
    question: "En que provincia está a Praia das Catedrais?",
    answers: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 133,
    question: "Como se chama o fenómeno luminoso que se observa nas Rías Baixas?",
    answers: ["Bioluminiscencia", "Fluorescencia", "Fosforescencia", "Luminiscencia"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 134,
    question: "Cal é o prato típico galego feito con grelos e lacón?",
    answers: ["Caldo galego", "Lacón con grelos", "Empanada de grelos", "Grelos rehogados"],
    correct: 1,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 135,
    question: "Quen foi Castelao?",
    answers: ["Un político", "Un escritor e debuxante", "Un músico", "Un arquitecto"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 136,
    question: "Cal é o nome da capital da provincia de Ourense?",
    answers: ["Ourense", "Viana do Bolo", "O Barco de Valdeorras", "Xinzo de Limia"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "Como se chama o parque nacional de Galicia?",
    answers: ["Parque Nacional das Illas Atlánticas", "Parque Nacional de Doñana", "Parque Nacional de Ordesa", "Parque Nacional de Covadonga"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "Cal é o río máis importante que pasa por Ourense?",
    answers: ["Miño", "Sil", "Limia", "Arnoia"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "En que século se construíu a Catedral de Santiago?",
    answers: ["Século XI", "Século XII", "Século XIII", "Século XIV"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 140,
    question: "Como se chama a festa máis importante de Santiago de Compostela?",
    answers: ["Festas do Apóstolo", "Festas de San Xoán", "Festas de San Froilán", "Festas de María Pita"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "Cal é o marisco máis característico das Rías Galegas?",
    answers: ["Percebes", "Mexillóns", "Ostras", "Vieiras"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Quen escribiu 'Cantares gallegos'?",
    answers: ["Rosalía de Castro", "Curros Enríquez", "Eduardo Pondal", "Ramón Cabanillas"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 143,
    question: "Cal é a montaña máis alta de Galicia?",
    answers: ["Pena Trevinca", "Cabeza de Manzaneda", "Pico Xacobeo", "Alto do Couto"],
    correct: 0,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 144,
    question: "Como se chama o vento típico da costa galega?",
    answers: ["Nordés", "Sueste", "Levante", "Tramontana"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "Cal é o nome do aeroporto de Santiago?",
    answers: ["Aeroporto de Lavacolla", "Aeroporto de Santiago", "Aeroporto Rosalía de Castro", "Aeroporto do Pico Sacro"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "En que ano Galicia obtivo a súa autonomía?",
    answers: ["1979", "1980", "1981", "1982"],
    correct: 2,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 147,
    question: "Cal é o nome da universidade máis antiga de Galicia?",
    answers: ["Universidade de Santiago", "Universidade da Coruña", "Universidade de Vigo", "Universidade de Ourense"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Como se chama a danza tradicional galega máis conocida?",
    answers: ["Muiñeira", "Foliada", "Jota galega", "Alborada"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 149,
    question: "Cal é o nome do cabo máis occidental de Galicia?",
    answers: ["Cabo Fisterra", "Cabo Touriñán", "Cabo Ortegal", "Cabo Vilán"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 150,
    question: "Que instrumento musical é típico de Galicia?",
    answers: ["Gaita", "Tambor", "Guitarra", "Flauta"],
    correct: 0,
    category: "música",
    difficulty: "easy"
  },
  {
    id: 151,
    question: "Cal é o nome da torre emblemática de Hércules?",
    answers: ["Torre de Hércules", "Faro de Hércules", "Torre de Breogán", "Faro Romano"],
    correct: 0,
    category: "historia",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "En que provincia está a cidade de Ferrol?",
    answers: ["A Coruña", "Lugo", "Pontevedra", "Ourense"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "Como se chama o postre típico galego feito con ovos e azucre?",
    answers: ["Filloas", "Tarta de Santiago", "Roscón de Reyes", "Tocino de ceo"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 154,
    question: "Cal é o nome do parque natural das Fragas do Eume?",
    answers: ["Parque Natural das Fragas do Eume", "Parque Natural de Corrubedo", "Parque Natural do Invernadeiro", "Parque Natural de Baixa Limia"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "Quen foi Breogán na mitoloxía galega?",
    answers: ["Un rei celta", "Un guerreiro", "Un deus", "Un navegante"],
    correct: 0,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "Cal é o nome da festa da queimada?",
    answers: ["Samhain", "Festa de Entroido", "Noite de San Xoán", "Festa da Queimada"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "Como se chama a sopa típica galega con pan?",
    answers: ["Sopa de ajo", "Sopa de pan", "Sopa de castañas", "Sopas de leite"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 158,
    question: "Cal é o nome do escritor galego autor de 'Os outros feirantes'?",
    answers: ["Álvaro Cunqueiro", "Camilo José Cela", "Emilia Pardo Bazán", "Valle-Inclán"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 159,
    question: "En que cidade está o Museo do Pobo Galego?",
    answers: ["Santiago de Compostela", "A Coruña", "Vigo", "Ourense"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 160,
    question: "Cal é o nome da ría máis grande de Galicia?",
    answers: ["Ría de Arousa", "Ría de Vigo", "Ría de Pontevedra", "Ría de Muros"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 161,
    question: "Como se chama o castelo de Vigo?",
    answers: ["Castro", "Castelo de San Sebastián", "Castelo do Castro", "Castelo de Soutomaior"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Cal é o nome da festividade galega do 25 de xullo?",
    answers: ["Día de Galicia", "Día do Apóstolo", "Día de Santiago", "Festas do Apóstolo"],
    correct: 1,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 163,
    question: "Que tipo de pedra é característica de Galicia?",
    answers: ["Granito", "Mármore", "Pizarra", "Arenisca"],
    correct: 0,
    category: "xeoloxia",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "Cal é o nome do pazo máis famoso de Galicia?",
    answers: ["Pazo de Oca", "Pazo de Mariñán", "Pazo de Sobroso", "Pazo de Fefiñanes"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 165,
    question: "Como se chama o queixo típico galego de Arzúa?",
    answers: ["Queixo de Arzúa-Ulloa", "Queixo de Tetilla", "Queixo de San Simón", "Queixo de Cebreiro"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "Cal é o nome da romería máis importante de Galicia?",
    answers: ["Romería de Caión", "Romería da Barca", "Romería de San Andrés de Teixido", "Romería de Santa Marta"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "En que ano morreu Rosalía de Castro?",
    answers: ["1885", "1888", "1890", "1892"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 168,
    question: "Cal é o nome da universidade de Vigo?",
    answers: ["Universidade de Vigo", "Universidade do Sur", "Universidade de Rías Baixas", "Universidade Atlántica"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 169,
    question: "Como se chama a festa do marisco de O Grove?",
    answers: ["Festa do Marisco", "Festa da Vieira", "Festa do Percebe", "Festa das Ostras"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 170,
    question: "Cal é o nome do monte onde está o santuario da Virxe da Barca?",
    answers: ["Monte Pindo", "Monte da Barca", "Monte Tecla", "Monte do Facho"],
    correct: 1,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "Que provincia ten máis costa?",
    answers: ["A Coruña", "Lugo", "Pontevedra", "Ourense"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "Cal é o nome da bebida típica galega con augardente?",
    answers: ["Queimada", "Carajillo", "Licor café", "Orujo"],
    correct: 0,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "Como se chama o escritor galego Premio Nobel?",
    answers: ["Camilo José Cela", "Valle-Inclán", "Emilia Pardo Bazán", "Álvaro Cunqueiro"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 174,
    question: "Cal é o nome da praia máis longa de Galicia?",
    answers: ["Praia de Montalvo", "Praia de Carnota", "Praia de Rodas", "Praia de Samil"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 175,
    question: "En que comarca está o Parque Natural do Invernadeiro?",
    answers: ["Terra de Trives", "Valdeorras", "Terra de Caldelas", "A Limia"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 176,
    question: "Cal é o nome do castro de Santa Trega?",
    answers: ["Castro de Monte Santa Trega", "Castro de Trega", "Castro de Santa Tecla", "Castro de Tecla"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 177,
    question: "Como se chama a empanada típica de Mondoñedo?",
    answers: ["Empanada de bonito", "Empanada de xoubas", "Empanada de bacallau", "Empanada de zamburiñas"],
    correct: 1,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "Cal é o nome da festa de Entroido máis famosa?",
    answers: ["Entroido de Verín", "Entroido de Xinzo", "Entroido de Laza", "Entroido de Cobres"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "En que cidade nació Valle-Inclán?",
    answers: ["Vilanova de Arousa", "Cambados", "Sanxenxo", "O Grove"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 180,
    question: "Cal é o nome da casa onde viviu Emilia Pardo Bazán?",
    answers: ["Pazo de Meirás", "Torre de Meirás", "Casa de Meirás", "Castelo de Meirás"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 181,
    question: "Como se chama o vino típico da Ribeira Sacra?",
    answers: ["Mencía", "Albariño", "Godello", "Treixadura"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Cal é o nome da illa máis grande de Galicia?",
    answers: ["Illa de Arousa", "Illa de Ons", "Illa de Sálvora", "Illa de Cíes"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 183,
    question: "En que ano se inaugurou a Torre de Hércules?",
    answers: ["Século I", "Século II", "Século III", "Século IV"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 184,
    question: "Cal é o nome do santo patrón de Galicia?",
    answers: ["Santiago Apóstolo", "San Xoán", "San Froilán", "San Rosendo"],
    correct: 0,
    category: "relixión",
    difficulty: "easy"
  },
  {
    id: 185,
    question: "Como se chama a sopa tradicional galega de castañas?",
    answers: ["Sopa de castañas", "Puré de castañas", "Castañas con leite", "Magosto"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "Cal é o nome da praia das Illas Cíes máis famosa?",
    answers: ["Praia de Figueiras", "Praia de Rodas", "Praia do Lago", "Praia de Monteagudo"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "En que comarca está Ribadeo?",
    answers: ["A Mariña Occidental", "A Mariña Oriental", "Terra Chá", "Os Ancares"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 188,
    question: "Cal é o nome do grupo musical galego máis internacional?",
    answers: ["Luar na Lubre", "Milladoiro", "Fuxan os Ventos", "Os Resentidos"],
    correct: 1,
    category: "música",
    difficulty: "medium"
  },
  {
    id: 189,
    question: "Como se chama a festa da castaña en Galicia?",
    answers: ["Magosto", "Festa da Castaña", "Samaín", "Magostos"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 190,
    question: "Cal é o nome da catedral de Ourense?",
    answers: ["Catedral de San Martiño", "Catedral de Santiago", "Catedral de Santa María", "Catedral de San Pedro"],
    correct: 0,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 191,
    question: "En que cidade está a Universidade de Santiago?",
    answers: ["Santiago de Compostela", "Lugo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 192,
    question: "Cal é o nome do poeta galego autor do himno galego?",
    answers: ["Eduardo Pondal", "Rosalía de Castro", "Curros Enríquez", "Ramón Cabanillas"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 193,
    question: "Como se chama a ruta de sendeirismo máis famosa de Galicia?",
    answers: ["Camiño de Santiago", "Camiño dos Faros", "Camiño do Norte", "Camiño Primitivo"],
    correct: 0,
    category: "turismo",
    difficulty: "easy"
  },
  {
    id: 194,
    question: "Cal é o nome da praia máis fotografada de Galicia?",
    answers: ["Praia das Catedrais", "Praia de Rodas", "Praia de Carnota", "Praia de Samil"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "En que provincia está o Mosteiro de Oseira?",
    answers: ["Ourense", "Lugo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "Cal é o nome da festa dos maios?",
    answers: ["Festa dos Maios", "Primeiro de Maio", "Maios de Lugo", "Festa da Primavera"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 197,
    question: "Como se chama o castelo de Soutomaior?",
    answers: ["Castelo de Soutomaior", "Pazo de Soutomaior", "Fortaleza de Soutomaior", "Torre de Soutomaior"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Cal é o nome da raza de cabalo autóctona de Galicia?",
    answers: ["Cabalo galego", "Garrano", "Pura raza galega", "Cabalo da Groba"],
    correct: 1,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 199,
    question: "En que ano se construíu a Ponte Romana de Ourense?",
    answers: ["Século I", "Século II", "Século III", "Século IV"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 200,
    question: "Cal é o nome da festa da lamprea?",
    answers: ["Festa da Lamprea de Arbo", "Festa da Lamprea do Miño", "Festa da Lamprea", "Semana da Lamprea"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "Como se chama a danza tradicional das espadas?",
    answers: ["Danza das espadas", "Danza de Ibias", "Danza dos arcos", "Danza guerreira"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 202,
    question: "Cal é o nome do pazo de Fefiñanes?",
    answers: ["Pazo de Fefiñanes", "Casa de Fefiñanes", "Castelo de Fefiñanes", "Torre de Fefiñanes"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 203,
    question: "En que cidade está o Kiosco Alfonso?",
    answers: ["A Coruña", "Vigo", "Santiago", "Pontevedra"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 204,
    question: "Cal é o nome da praia nudista máis famosa de Galicia?",
    answers: ["Praia de Figueiras", "Praia de Area Maior", "Praia de Barra", "Praia de Carnota"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 205,
    question: "Como se chama a festa do polbo de Carballiño?",
    answers: ["Festa do Polbo", "Feira do Polbo", "Festa do Polbo á Feira", "Día do Polbo"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 206,
    question: "Cal é o nome da cascada máis alta de Galicia?",
    answers: ["Fervenza do Toxa", "Fervenza do Xallas", "Fervenza de Oneta", "Fervenza de Augacaída"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 207,
    question: "En que comarca está Verín?",
    answers: ["Verín", "Monterrei", "Viana", "Terra de Caldelas"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 208,
    question: "Cal é o nome do escritor galego de 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Álvaro Cunqueiro", "Rafael Dieste", "Otero Pedrayo"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 209,
    question: "Como se chama a raza de vaca autóctona galega?",
    answers: ["Rubia Galega", "Cachena", "Caldelá", "Todas as anteriores"],
    correct: 3,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 210,
    question: "Cal é o nome da festa de San Froilán?",
    answers: ["San Froilán de Lugo", "Festas de San Froilán", "Festa Patronal de Lugo", "Todas as anteriores"],
    correct: 3,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 211,
    question: "En que ano foi declarado o Camiño de Santiago Patrimonio da Humanidade?",
    answers: ["1993", "1994", "1995", "1996"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 212,
    question: "Cal é o nome da fonte termal máis famosa de Ourense?",
    answers: ["As Burgas", "Termas de Outariz", "Termas da Chavasqueira", "Termas de Laias"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 213,
    question: "Como se chama a empanada típica de Betanzos?",
    answers: ["Empanada de Betanzos", "Empanada de bacallau", "Empanada de raxo", "Empanada de carne"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 214,
    question: "Cal é o nome da romería do Naseiro?",
    answers: ["Romería do Naseiro", "Romería da Virxe do Naseiro", "Festa do Naseiro", "Virxe do Naseiro"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 215,
    question: "En que cidade está o Pazo de Mariñán?",
    answers: ["Bergondo", "A Coruña", "Santiago", "Betanzos"],
    correct: 0,
    category: "arquitectura",
    difficulty: "hard"
  },
  {
    id: 216,
    question: "Cal é o nome da praia de Viveiro máis famosa?",
    answers: ["Praia de Covas", "Praia de Area", "Praia de Seiramar", "Praia do Fuciño do Porco"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 217,
    question: "Como se chama o carbón mineral galego?",
    answers: ["Antracita", "Hulla", "Lignito", "Carbón de pedra"],
    correct: 0,
    category: "xeoloxia",
    difficulty: "hard"
  },
  {
    id: 218,
    question: "Cal é o nome da festa da filloa?",
    answers: ["Festa da Filloa", "Entroido", "Festa de Reis", "Festa de San Xoán"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 219,
    question: "En que provincia está a Ribeira Sacra?",
    answers: ["Ourense e Lugo", "Só Ourense", "Só Lugo", "Ourense, Lugo e Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 220,
    question: "Cal é o nome do mellor albariño de Galicia segundo os expertos?",
    answers: ["Non hai un mellor", "Pazo de Señoráns", "Martín Códax", "Morgadío"],
    correct: 0,
    category: "gastronomia",
    difficulty: "hard"
  },
  {
    id: 221,
    question: "Como se chama a lenda da Santa Compaña?",
    answers: ["Procesión dos mortos", "Santa Compaña", "Estadea", "Todas as anteriores"],
    correct: 3,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 222,
    question: "Cal é o nome da festa vikinga de Catoira?",
    answers: ["Romería Vikinga", "Festa Vikinga", "Desembarco Vikingo", "Invasión Vikinga"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 223,
    question: "En que cidade nació Emilia Pardo Bazán?",
    answers: ["A Coruña", "Santiago", "Ferrol", "Pontevedra"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 224,
    question: "Cal é o nome da festa da anguila de Valga?",
    answers: ["Festa da Anguila", "Feira da Anguila", "Festa da Anguía de Valga", "Día da Anguia"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 225,
    question: "Como se chama o vino típico do Ribeiro?",
    answers: ["Treixadura", "Albariño", "Godello", "Loureira"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 226,
    question: "Cal é o nome da cidade das Termas?",
    answers: ["Ourense", "Laias", "Lobios", "Bande"],
    correct: 0,
    category: "turismo",
    difficulty: "easy"
  },
  {
    id: 227,
    question: "En que comarca está Fisterra?",
    answers: ["Fisterra", "Costa da Morte", "Muros", "Noia"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 228,
    question: "Cal é o nome da praia máis salvaxe de Galicia?",
    answers: ["Praia de Trece", "Praia de Carnota", "Praia de Rostro", "Praia de Soesto"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 229,
    question: "Como se chama a tradición de cantar na rúa en Nadal?",
    answers: ["Aguilandos", "Reisadas", "Caroling", "Vilancicos"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 230,
    question: "Cal é o nome do museo máis visitado de Galicia?",
    answers: ["Museo do Pobo Galego", "Museo de Pontevedra", "Museo de Belas Artes da Coruña", "Centro Galego de Arte Contemporánea"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  }
];

// Funcións para manexar as preguntas
class QuestionsManager {
  constructor() {
    this.questions = [...QUESTIONS_DATABASE];
    this.currentQuestions = [];
    this.currentIndex = 0;
  }

  // Obtén todas as preguntas
  getAllQuestions() {
    return [...this.questions];
  }

  // Filtra preguntas por dificultade
  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(q => q.difficulty === difficulty);
  }

  // Filtra preguntas por categoría
  getQuestionsByCategory(category) {
    return this.questions.filter(q => q.category === category);
  }

  // Baralla as preguntas
  shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Baralla as respostas dunha pregunta
  shuffleAnswers(question) {
    const shuffledQuestion = { ...question };
    const answers = [...question.answers];
    const correctAnswer = answers[question.correct];
    
    // Baralla as respostas
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    
    // Atopa o novo índice da resposta correcta
    shuffledQuestion.answers = answers;
    shuffledQuestion.correct = answers.indexOf(correctAnswer);
    
    return shuffledQuestion;
  }

  // Prepara un conxunto de preguntas para un xogo
  prepareGameQuestions(difficulty = 'medium', count = 10) {
    let questions;
    
    if (difficulty === 'mixed') {
      // Mestura de dificultades
      questions = [...this.questions];
    } else {
      questions = this.getQuestionsByDifficulty(difficulty);
    }
    
    // Se non hai suficientes preguntas da dificultade, úsanse todas
    if (questions.length < count) {
      questions = [...this.questions];
    }
    
    // Baralla as preguntas e toma só as necesarias
    const shuffledQuestions = this.shuffleQuestions(questions);
    this.currentQuestions = shuffledQuestions.slice(0, count);
    
    // Baralla as respostas de cada pregunta
    this.currentQuestions = this.currentQuestions.map(q => this.shuffleAnswers(q));
    
    this.currentIndex = 0;
    return this.currentQuestions;
  }

  // Obtén a pregunta actual
  getCurrentQuestion() {
    if (this.currentIndex < this.currentQuestions.length) {
      return this.currentQuestions[this.currentIndex];
    }
    return null;
  }

  // Pasa á seguinte pregunta
  nextQuestion() {
    this.currentIndex++;
    return this.getCurrentQuestion();
  }

  // Verifica se hai máis preguntas
  hasMoreQuestions() {
    return this.currentIndex < this.currentQuestions.length;
  }

  // Obtén o progreso actual
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.currentQuestions.length,
      percentage: Math.round(((this.currentIndex + 1) / this.currentQuestions.length) * 100)
    };
  }

  // Engade unha nova pregunta (para futuras funcionalidades)
  addQuestion(question) {
    const newId = Math.max(...this.questions.map(q => q.id)) + 1;
    const newQuestion = {
      id: newId,
      ...question,
      category: question.category || 'xeral',
      difficulty: question.difficulty || 'medium'
    };
    
    this.questions.push(newQuestion);
    return newQuestion;
  }

  // Obtén estatísticas das preguntas
  getStats() {
    const categories = {};
    const difficulties = {};
    
    this.questions.forEach(q => {
      categories[q.category] = (categories[q.category] || 0) + 1;
      difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
    });
    
    return {
      total: this.questions.length,
      categories,
      difficulties
    };
  }

  // Busca preguntas por texto
  searchQuestions(searchTerm) {
    const term = searchTerm.toLowerCase();
    return this.questions.filter(q => 
      q.question.toLowerCase().includes(term) ||
      q.answers.some(answer => answer.toLowerCase().includes(term))
    );
  }

  // Obtén preguntas aleatorias por categoría
  getRandomQuestionsByCategory(category, count = 5) {
    const categoryQuestions = this.getQuestionsByCategory(category);
    const shuffled = this.shuffleQuestions(categoryQuestions);
    return shuffled.slice(0, count);
  }

  // Reestablece o xestor
  reset() {
    this.currentQuestions = [];
    this.currentIndex = 0;
  }
}

// Exporta o xestor de preguntas
window.QuestionsManager = QuestionsManager;
