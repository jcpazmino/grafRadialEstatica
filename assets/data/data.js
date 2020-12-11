var resultGraficar = [];
var titulo="";var comentario="";
//******** Evaluar cinco aspectos de los empleados */
/* titulo="Evaluar cinco aspectos de algunos empleados "
resultGraficar["David"] = [{ axis: "P1", value: 23 }, { axis: "P2", value: 11 }, { axis: "P3", value: 28 }, { axis: "P4", value: 38 }, { axis: "P5", value: 25 }];
resultGraficar["Luisa"] = [{ axis: "P1", value: 20 }, { axis: "P2", value: 8 }, { axis: "P3", value: 14 }, { axis: "P4", value: 14 }, { axis: "P5", value: 17 }];
resultGraficar["Juan"] = [{ axis: "P1", value: 22 }, { axis: "P2", value: 13 }, { axis: "P3", value: 28 }, { axis: "P4", value: 2 }, { axis: "P5", value: 16 }];
resultGraficar["Maria"] = [{ axis: "P1", value: 54 }, { axis: "P2", value: 15 }, { axis: "P3", value: 43 }, { axis: "P4", value: 37 }, { axis: "P5", value: 17 }];
resultGraficar["Carlota"] = [{ axis: "P1", value: 54 }, { axis: "P2", value: 15 }, { axis: "P3", value: 43 }, { axis: "P4", value: 37 }, { axis: "P5", value: 17 }];
resultGraficar["Francisco"] = [{ axis: "P1", value: 5 }, { axis: "P2", value: 3 }, { axis: "P3", value: 12 }, { axis: "P4", value: 7 }, { axis: "P5", value: 22 }];
resultGraficar["Esther"] = [{ axis: "P1", value: 6 }, { axis: "P2", value: 6 }, { axis: "P3", value: 11 }, { axis: "P4", value: 8 }, { axis: "P5", value: 13 }];
resultGraficar["Benito"] = [{ axis: "P1", value: 32 }, { axis: "P2", value: 8 }, { axis: "P3", value: 14 }, { axis: "P4", value: 18 }, { axis: "P5", value: 12 }]; 
resultGraficar["Oscar"] = [{ axis: "P1", value: 24 }, { axis: "P2", value: 8 }, { axis: "P3", value: 26 }, { axis: "P4", value: 19 }, { axis: "P5", value: 20 }]; 
 */
//******* detrezas de los jugadores */
/* titulo="Características de cinco jugadores";
resultGraficar["Destreza"] = [{ axis: "P1", value: 7 }, { axis: "P2", value: 5 }, { axis: "P3", value: 9 }, { axis: "P4", value: 10 }, { axis: "P5", value: 6 }];
resultGraficar["Fuerza"] = [{ axis: "P1", value: 9 }, { axis: "P2", value: 7 }, { axis: "P3", value: 8 }, { axis: "P4", value: 9 }, { axis: "P5", value: 10 }];
resultGraficar["Velocidad"] = [{ axis: "P1", value: 6 }, { axis: "P2", value: 8 }, { axis: "P3", value: 6 }, { axis: "P4", value: 9 }, { axis: "P5", value: 10 }];
resultGraficar["Resistencia"] = [{ axis: "P1", value: 8 }, { axis: "P2", value: 5 }, { axis: "P3", value: 7 }, { axis: "P4", value: 9 }, { axis: "P5", value: 6 }];
 */
//******* detrezas de los jugadores */
titulo="Aspectos importantes al momento de seleccionar un sitio turístico";
comentario = "Otros(aventura, diversion, cultura)";
legendEntidades = "El público se clasificó de acuerdo a ciertos parámetros";
resultGraficar["Publico1"] = [{ axis: "Seguridad", value:62}, { axis: "Precio", value:88}, { axis: "Calidad", value:47},{ axis: "Salud e Higiene", value:84}, { axis: "Distancia", value:65},{ axis: "Valor por dinero", value:77}, { axis: "Prestigio", value:81}, { axis: "Atracciones", value:72}, { axis: "Clima", value:9}, { axis: "Otros", value:73}];
resultGraficar["Publico2"] = [{ axis: "Seguridad", value:64}, { axis: "Precio", value:13}, { axis: "Calidad", value:92},{ axis: "Salud e Higiene", value:83}, { axis: "Distancia", value:82}, { axis: "Valor por dinero", value:66}, { axis: "Prestigio", value:13}, { axis: "Atracciones", value:83}, { axis: "Clima", value:29}, { axis: "Otros", value:33}]
resultGraficar["Publico3"] = [{ axis: "Seguridad", value:30}, { axis: "Precio", value:85}, { axis: "Calidad", value:51},{ axis: "Salud e Higiene", value:34}, { axis: "Distancia", value:30}, { axis: "Valor por dinero", value:4}, { axis: "Prestigio", value:57}, { axis: "Atracciones", value:77}, { axis: "Clima", value:39}, { axis: "Otros", value:8}]
resultGraficar["Publico4"] = [{ axis: "Seguridad", value:77}, { axis: "Precio", value:14}, { axis: "Calidad", value:3}, { axis: "Salud e Higiene", value:34}, { axis: "Distancia", value:24}, { axis: "Valor por dinero", value:96}, { axis: "Prestigio", value:69}, { axis: "Atracciones", value:79}, { axis: "Clima", value:75}, { axis: "Otros", value:93}]
resultGraficar["Publico5"] = [{ axis: "Seguridad", value:16}, { axis: "Precio", value:48}, { axis: "Calidad", value:52},{ axis: "Salud e Higiene", value:80}, { axis: "Distancia", value:13}, { axis: "Valor por dinero", value:78}, { axis: "Prestigio", value:37}, { axis: "Atracciones", value:2}, { axis: "Clima", value:87}, { axis: "Otros", value:35}]
resultGraficar["Publico6"] = [{ axis: "Seguridad", value:93}, { axis: "Precio", value:22}, { axis: "Calidad", value:69},{ axis: "Salud e Higiene", value:92}, { axis: "Distancia", value:86}, { axis: "Valor por dinero", value:21}, { axis: "Prestigio", value:63}, { axis: "Atracciones", value:84}, { axis: "Clima", value:81}, { axis: "Otros", value:52}]
resultGraficar["Publico7"] = [{ axis: "Seguridad", value:22}, { axis: "Precio", value:27}, { axis: "Calidad", value:17},{ axis: "Salud e Higiene", value:10}, { axis: "Distancia", value:33}, { axis: "Valor por dinero", value:55}, { axis: "Prestigio", value:8}, { axis: "Atracciones", value:21}, { axis: "Clima", value:18}, { axis: "Otros", value:41}]

var data=[];


