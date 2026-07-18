/* Datos de la propuesta "Toponimia de las Islas Malvinas" — Barrio Altos del Paracao, Paraná.
   Fuente: Propuesta de Nomenclatura de Calles, Programa Presupuesto Participativo,
   Municipalidad de Paraná, Ordenanza N.° 9076.

   Nota: agrupar las calles del barrio en "bahías" (norte-sur) y "puertos" (este-oeste)
   es solo un criterio de organización del trazado del barrio — no refleja ninguna
   orientación real de las islas, que no siguen ningún patrón cardinal.

   Imágenes: fuente Wikimedia Commons, licencias libres, con crédito. Cuando no existe
   fotografía específica del sitio (declarado así, no inventado), se usa una imagen
   representativa de la zona y se lo indica explícitamente con "aprox: true" + "nota".

   mapa: coordenadas x,y sobre el contorno real de las islas (ver islands-map-data.js),
   proyección equirrectangular, calculadas a partir de latitud/longitud aproximadas
   de cada lugar. viewBox = 0 0 1133.906 922.667. */

const ISLANDS_VIEWBOX = `0 0 ${ISLANDS_BASE_WIDTH} ${ISLANDS_BASE_HEIGHT}`;

const STREETS = [
  {
    numero: "1674",
    propuesta: "Promontorio Güemes",
    slug: "promontorio-guemes",
    tipo: "Promontorio",
    ubicacion: "Noroeste de la Isla Soledad, entrada de la Bahía San Carlos",
    dato: "Posición argentina que resistió el desembarco británico en 1982",
    resena:
      "Accidente geográfico ubicado en la entrada de la Bahía San Carlos. Tuvo relevancia durante la guerra de 1982 por ser una posición argentina que resistió el desembarco británico en San Carlos. Su nombre recuerda al general Martín Miguel de Güemes, héroe de la Independencia argentina, incorporando al nomenclador una referencia geográfica de Malvinas con fuerte valor histórico y patriótico.",
    mapa: { x: 671.8, y: 241.7 },
    planoPos: { x: 74.3, y: 13.3 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/55/San_Carlos_Water%2C_Falkland_Islands.jpg",
      aprox: true,
      nota: "Vista de Bahía San Carlos, junto a cuya entrada se ubica el Promontorio Güemes.",
      autor: "Chris Pearson",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:San_Carlos_Water,_Falkland_Islands.jpg",
    },
  },
  {
    numero: "1676",
    propuesta: "Puerto Rivero",
    slug: "puerto-rivero",
    tipo: "Puerto",
    ubicacion: "Isla Soledad — denominación histórica y simbólica",
    dato: "Homenaje al gaucho Antonio Rivero y su alzamiento de 1833",
    resena:
      "Nombre utilizado en homenaje al Gaucho Antonio Rivero, figura vinculada al alzamiento ocurrido en las islas en 1833 luego de la ocupación británica. Si bien no es un accidente geográfico en sentido estricto como cerro, bahía o estrecho, posee fuerte valor histórico y popular dentro de la memoria argentina sobre Malvinas.",
    mapa: { x: 949.6, y: 276.8 },
    planoPos: { x: 81.1, y: 40.2 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tusac_grass_01.jpg",
      aprox: true,
      nota: "Nombre simbólico sin sitio geográfico propio; paisaje representativo de pastizales de East Falkland.",
      autor: "michael clarke stuff",
      licencia: "CC BY-SA 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Tusac_grass_01.jpg",
    },
  },
  {
    numero: "1678",
    propuesta: "Puerto Mitre / Puerto Yapeyú",
    slug: "puerto-mitre",
    tipo: "Puerto",
    ubicacion: "Costa oriental de la Gran Malvina, Estrecho de San Carlos",
    dato: "Allí se desplegó el Regimiento de Infantería 5 en 1982",
    resena:
      "Ubicado sobre el Estrecho de San Carlos, en las faldas del Monte María. Durante la guerra de 1982 fue una posición argentina de importancia en la Gran Malvina, también conocida por las fuerzas argentinas como Puerto Yapeyú, donde se desplegó el Regimiento de Infantería 5 integrando la Fuerza de Tareas Yapeyú. En sus aguas próximas se produjo además el hundimiento del buque logístico argentino ARA Isla de los Estados, episodio en el que murieron 22 argentinos.",
    mapa: { x: 567.0, y: 315.0 },
    planoPos: { x: 60.5, y: 46.5 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/West-Falkland.jpg",
      aprox: true,
      nota: "Costa de la Gran Malvina vista desde cerca de la isla Keppel; paisaje representativo de la zona.",
      autor: "Ben Tubby",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:West-Falkland.jpg",
    },
  },
  {
    numero: "1680",
    propuesta: "Puerto Darwin",
    slug: "puerto-darwin",
    tipo: "Puerto",
    ubicacion: "Istmo de Darwin, Isla Soledad",
    dato: "Allí se encuentra el Cementerio Argentino de Darwin",
    resena:
      "Sitio vinculado directamente al eje Darwin–Pradera del Ganso. Durante la guerra de 1982 formó parte del dispositivo defensivo argentino en la zona del istmo, donde combatieron efectivos del Ejército Argentino y de la Fuerza Aérea Argentina. Allí se encuentra el Cementerio Argentino.",
    mapa: { x: 717.2, y: 417.4 },
    planoPos: { x: 80.5, y: 60.8 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Darwin_Road%2C_Falkland_Islands_%287875622040%29.jpg",
      aprox: false,
      nota: "",
      autor: "John5199",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Darwin_Road,_Falkland_Islands_(7875622040).jpg",
    },
  },
  {
    numero: "1756",
    propuesta: "Puerto Soledad",
    slug: "puerto-soledad",
    tipo: "Puerto histórico",
    ubicacion: "Isla Soledad",
    dato: "Primer asentamiento estable del archipiélago, año 1764",
    resena:
      "Primer asentamiento estable del archipiélago (1764) y sede de la Comandancia argentina en tiempos de Luis Vernet. De allí fueron expulsadas las autoridades argentinas en la ocupación británica de 1833: cuna y símbolo de la soberanía nacional sobre las islas.",
    mapa: { x: 949.6, y: 276.8 },
    planoPos: { x: 43.1, y: 71.4 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Port_Louis_1834.jpg",
      aprox: false,
      nota: "Óleo de Conrad Martens (1834) que representa el asentamiento histórico de Puerto Soledad / Port Louis.",
      autor: "Conrad Martens (1801–1878)",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Port_Louis_1834.jpg",
    },
  },
  {
    numero: "1758",
    propuesta: "Puerto Argentino",
    slug: "puerto-argentino",
    tipo: "Puerto / capital",
    ubicacion: "Isla Soledad",
    dato: "Centro político, militar y logístico durante la guerra de 1982",
    resena:
      "Durante la guerra de 1982 fue el centro político, militar y logístico de la presencia argentina en las islas, y constituye uno de los nombres más representativos de la causa Malvinas.",
    mapa: { x: 1034.7, y: 351.5 },
    planoPos: { x: 41.8, y: 81.6 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Stanley_FIQQ_1ZZ%2C_Falkland_Islands_%28Islas_Malvinas%29_-_panoramio_%285%29.jpg",
      aprox: false,
      nota: "",
      autor: "Alex Petrenko",
      licencia: "CC BY-SA 3.0",
      credito: "https://commons.wikimedia.org/wiki/File:Stanley_FIQQ_1ZZ,_Falkland_Islands_(Islas_Malvinas)_-_panoramio_(5).jpg",
    },
  },
  {
    numero: "1760",
    propuesta: "Monte Dos Hermanas",
    slug: "monte-dos-hermanas",
    tipo: "Monte de combate",
    ubicacion: "Oeste de Puerto Argentino, Isla Soledad",
    dato: "Escenario de la batalla de la noche del 11 al 12 de junio de 1982",
    resena:
      "Elevación ubicada al oeste de Puerto Argentino, conocida también en la toponimia argentina como Cerro de la Silla. Durante la guerra de 1982 fue escenario de la Batalla del Monte Dos Hermanas, librada durante la noche del 11 al 12 de junio, dentro del sistema de alturas que defendían el acceso a Puerto Argentino.",
    mapa: { x: 986.5, y: 355.9 },
    planoPos: { x: 15.0, y: 88.8 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tumbledown.JPG",
      aprox: true,
      nota: "Vista panorámica desde Stanley Harbour que incluye Two Sisters (Monte Dos Hermanas), junto a Tumbledown y Wireless Ridge.",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Tumbledown.JPG",
    },
  },
  {
    numero: "1781",
    propuesta: "Isla Borbón",
    slug: "isla-borbon",
    tipo: "Isla",
    ubicacion: "Norte de la Gran Malvina",
    dato: "Sufrió un raid de comandos SAS que destruyó once aviones en 1982",
    resena:
      "Pequeña isla al norte de la Gran Malvina, sede de la Estación Aeronaval Calderón. En la noche del 14 al 15 de mayo de 1982 sufrió una incursión de comandos británicos (SAS) que destruyó once aeronaves argentinas.",
    mapa: { x: 524.4, y: 180.1 },
    planoPos: { x: 57.7, y: 57.1 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Pebble_Island_-_Falkland_Islands.jpg",
      aprox: false,
      nota: "Imagen satelital de Isla Borbón / Pebble Island.",
      autor: "NASA Johnson Space Center",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Pebble_Island_-_Falkland_Islands.jpg",
    },
  },
  {
    numero: "1853",
    propuesta: "Bahía Elefante Marino",
    slug: "bahia-elefante-marino",
    tipo: "Bahía",
    ubicacion: "Norte de la Isla de Borbón",
    dato: "Nombre oficial IGN; en su entorno está Puerto Calderón",
    resena:
      "El nombre completo es Bahía Elefante Marino, tal como figura en la toponimia del Instituto Geográfico Nacional. Es una amplia entrada de agua situada al norte de la Isla de Borbón; en su entorno se encuentra Puerto Calderón, zona vinculada a acciones militares durante la guerra de 1982.",
    mapa: { x: 547.1, y: 173.5 },
    planoPos: { x: 65.9, y: 57.1 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Elephant_seals_wallowing_in_the_mud_%2849764185427%29.jpg",
      aprox: true,
      nota: "Elefantes marinos fotografiados en East Falkland; imagen temática, no del sitio exacto de la bahía.",
      autor: "Chris Lovelock",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Elephant_seals_wallowing_in_the_mud_(49764185427).jpg",
    },
  },
  {
    numero: "1855",
    propuesta: "Bahía de la Anunciación",
    slug: "bahia-de-la-anunciacion",
    tipo: "Bahía",
    ubicacion: "Noreste de la Isla Soledad, entre las penínsulas de San Luis y Freycinet",
    dato: "Allí se desarrollaron los primeros asentamientos europeos de las islas",
    resena:
      "Entrada de mar ubicada entre las penínsulas de San Luis y Freycinet. Su entorno tiene gran valor histórico, ya que en esa zona se desarrollaron los primeros asentamientos europeos en las islas, entre ellos Puerto Soledad, lugar central en la historia de la presencia hispánica y argentina en Malvinas.",
    mapa: { x: 1010.6, y: 293.7 },
    planoPos: { x: 70.5, y: 57.1 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Port-San-Carlos.JPG",
      aprox: true,
      nota: "Zona de Port San Carlos, aproximación al entorno noreste de la Isla Soledad.",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Port-San-Carlos.JPG",
    },
  },
  {
    numero: "1857",
    propuesta: "Bahía Ruiz Puente",
    slug: "bahia-ruiz-puente",
    tipo: "Bahía",
    ubicacion: "Costa sudeste de la Isla Soledad",
    dato: "Recuerda al primer gobernador español de las islas, designado en 1766",
    resena:
      "Bahía de la costa sudeste de la Isla Soledad. Su nombre recuerda a Felipe Ruiz Puente, primer gobernador o administrador militar español de las Islas Malvinas, designado en 1766. En 1767 tomó posesión efectiva del establecimiento y consolidó la presencia española dependiente de Buenos Aires, antecedente histórico central de los derechos argentinos sobre las islas.",
    mapa: { x: 661.4, y: 336.9 },
    planoPos: { x: 87.4, y: 61.2 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkeley-Sound.jpg",
      aprox: true,
      nota: "Berkeley Sound, aproximación a la costa sudeste de la Isla Soledad.",
      autor: "Ben Tubby",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Berkeley-Sound.jpg",
    },
  },
  {
    numero: "1859",
    propuesta: "Bahía San Carlos",
    slug: "bahia-san-carlos",
    tipo: "Bahía",
    ubicacion: "Isla Soledad, sobre el Estrecho de San Carlos",
    dato: "Sitio del desembarco británico del 21 de mayo de 1982",
    resena:
      "Bahía abierta sobre el estrecho de San Carlos. El 21 de mayo de 1982 fue el sitio del desembarco británico; en sus aguas los pilotos argentinos protagonizaron heroicos ataques contra la flota enemiga.",
    mapa: { x: 703.0, y: 276.8 },
    planoPos: { x: 24.3, y: 71.4 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/55/San_Carlos_Water%2C_Falkland_Islands.jpg",
      aprox: false,
      nota: "",
      autor: "Chris Pearson",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:San_Carlos_Water,_Falkland_Islands.jpg",
    },
  },
  {
    numero: "1861",
    propuesta: "Bahía Agradable",
    slug: "bahia-agradable",
    tipo: "Bahía",
    ubicacion: "Costa sudeste de la Isla Soledad",
    dato: "Su entorno (Bluff Cove–Fitzroy) sufrió los ataques aéreos del 8 de junio de 1982",
    resena:
      "Bahía de la costa sudeste de la Isla Soledad. Su entorno (Bluff Cove–Fitzroy) fue escenario de los ataques aéreos del 8 de junio de 1982.",
    mapa: { x: 864.6, y: 417.4 },
    planoPos: { x: 35.8, y: 73.5 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Bluff_Cove%2C_Falkland_Islands.jpg",
      aprox: false,
      nota: "Bluff Cove es el nombre inglés equivalente a Bahía Agradable.",
      autor: "Sally",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Bluff_Cove,_Falkland_Islands.jpg",
    },
  },
];

const ALTERNATIVAS = [
  {
    propuesta: "Pradera del Ganso",
    slug: "pradera-del-ganso",
    tipo: "Paraje / llanura",
    ubicacion: "Isla Soledad",
    resena:
      "Escenario de la batalla de Pradera del Ganso (Goose Green), del 27 al 29 de mayo de 1982: la primera y más prolongada batalla terrestre de la guerra, en la que la Agrupación Mercedes (Regimientos de Infantería 12 y 25) resistió al 2.º Batallón de Paracaidistas británico.",
    mapa: { x: 717.2, y: 417.4 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Goose_Green%2C_Falkland_Islands_%287875593274%29.jpg",
      aprox: false,
      nota: "",
      autor: "John5199",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Goose_Green,_Falkland_Islands_(7875593274).jpg",
    },
  },
  {
    propuesta: "Monte Tumbledown",
    slug: "monte-tumbledown",
    tipo: "Monte de combate",
    ubicacion: "Isla Soledad, cercanías de Puerto Argentino",
    resena:
      "Altura ubicada en las proximidades de Puerto Argentino. Fue defendida por tropas argentinas, especialmente del Batallón de Infantería de Marina N.º 5, y escenario de intensos combates durante la noche del 13 al 14 de junio de 1982, en las horas finales de la guerra.",
    mapa: { x: 1012.0, y: 360.3 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tumbledown.JPG",
      aprox: false,
      nota: "",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Tumbledown.JPG",
    },
  },
  {
    propuesta: "Monte Harriet / Enriqueta",
    slug: "monte-harriet",
    tipo: "Monte de combate",
    ubicacion: "Sudoeste de Puerto Argentino, Isla Soledad",
    resena:
      "Elevación ubicada al sudoeste de Puerto Argentino. Formó parte del sistema defensivo argentino que protegía la capital de las islas y fue escenario de combate durante la noche del 11 al 12 de junio de 1982.",
    mapa: { x: 1006.3, y: 364.7 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tusac_grass_01.jpg",
      aprox: true,
      nota: "Sin fotografía específica del monte en Wikimedia Commons; paisaje representativo de East Falkland.",
      autor: "michael clarke stuff",
      licencia: "CC BY-SA 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Tusac_grass_01.jpg",
    },
  },
  {
    propuesta: "Monte Kent",
    slug: "monte-kent",
    tipo: "Monte estratégico",
    ubicacion: "Isla Soledad, sistema defensivo de Puerto Argentino",
    resena:
      "Elevación próxima al sistema defensivo de Puerto Argentino. Durante la guerra de 1982 fue escenario de acciones militares vinculadas al avance sobre la capital de las islas y a la actuación de fuerzas especiales argentinas y británicas.",
    mapa: { x: 963.8, y: 342.7 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Stone-run.JPG",
      aprox: false,
      nota: "Formación rocosa (\"stone run\") fotografiada en el propio Monte Kent.",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Stone-run.JPG",
    },
  },
  {
    propuesta: "Cerro Zapador",
    slug: "cerro-zapador",
    tipo: "Cerro",
    ubicacion: "Oeste de Puerto Argentino, Isla Soledad",
    resena:
      "Altura ubicada al oeste de Puerto Argentino. Por su localización, representa uno de los accidentes geográficos próximos al núcleo defensivo argentino de 1982 y conserva una denominación de fuerte carga simbólica vinculada al esfuerzo militar y de ingenieros en campaña.",
    mapa: { x: 1034.7, y: 360.3 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sapper-Hill-Corral.jpg",
      aprox: true,
      nota: "\"Zapador\" equivale a \"Sapper\" en inglés: coincidencia toponímica muy probable con Sapper Hill, al sudoeste de Stanley.",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Sapper-Hill-Corral.jpg",
    },
  },
  {
    propuesta: "Cerro Alberdi",
    slug: "cerro-alberdi",
    tipo: "Cerro — punto más alto",
    ubicacion: "Isla Soledad",
    resena:
      "Con aproximadamente 705 metros sobre el nivel del mar, constituye el punto más alto de las Islas Malvinas. Su nombre homenajea a Juan Bautista Alberdi, autor intelectual de la Constitución Argentina de 1853, uniendo en una misma denominación geografía, soberanía e identidad nacional.",
    mapa: { x: 732.2, y: 337.0 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mount_Usborne_-_Flickr_-_chris_lovelock.jpg",
      aprox: false,
      nota: "Mount Usborne, pico más alto de las Falklands/Malvinas (705 m).",
      autor: "Chris Lovelock",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Mount_Usborne_-_Flickr_-_chris_lovelock.jpg",
    },
  },
  {
    propuesta: "Cerro Vernet",
    slug: "cerro-vernet",
    tipo: "Cerro",
    ubicacion: "Noreste de la Isla Soledad, norte de península Freycinet",
    resena:
      "Elevación ubicada al norte de la península de Freycinet. Su denominación recuerda a Luis Vernet, comandante político y militar argentino de las Islas Malvinas en el siglo XIX, figura central en la historia de la soberanía argentina sobre el archipiélago.",
    mapa: { x: 978.0, y: 285.6 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Stone-run.JPG",
      aprox: true,
      nota: "Cerro real confirmado, sin fotografía propia en Wikimedia Commons; paisaje representativo de una zona cercana (Monte Kent).",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Stone-run.JPG",
    },
  },
  {
    propuesta: "Islas de los Leones Marinos",
    slug: "islas-de-los-leones-marinos",
    tipo: "Grupo insular",
    ubicacion: "Sur de la Isla Soledad",
    resena:
      "Conjunto de islas, islotes y rocas ubicado al sur de la Isla Soledad. Su nombre integra la toponimia argentina oficial y permite incorporar al nomenclador no solo cerros y bahías, sino también la riqueza insular y marítima del archipiélago.",
    mapa: { x: 686.0, y: 672.2 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tusac_grass_01.jpg",
      aprox: true,
      nota: "Sin fotografía verificada de Sea Lion Island en esta investigación; paisaje representativo de pastizales de Malvinas.",
      autor: "michael clarke stuff",
      licencia: "CC BY-SA 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:Tusac_grass_01.jpg",
    },
  },
  {
    propuesta: "Monte Longdon",
    slug: "monte-longdon",
    tipo: "Monte de combate",
    ubicacion: "Oeste de Puerto Argentino, Isla Soledad",
    resena:
      "Elevación situada al oeste de Puerto Argentino. Fue uno de los puntos defensivos más importantes de la primera línea argentina y escenario de uno de los combates más encarnizados de la guerra, librado durante la noche del 11 al 12 de junio de 1982.",
    mapa: { x: 978.0, y: 347.1 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sapper-Hill-Corral.jpg",
      aprox: true,
      nota: "Sin fotografía de paisaje del monte en sí (solo restos de posiciones de combate); cerro representativo de East Falkland.",
      autor: "Apcbg",
      licencia: "Dominio público",
      credito: "https://commons.wikimedia.org/wiki/File:Sapper-Hill-Corral.jpg",
    },
  },
  {
    propuesta: "Monte María",
    slug: "monte-maria",
    tipo: "Monte",
    ubicacion: "Sector oriental de la Gran Malvina, noroeste de Puerto Mitre",
    resena:
      "Elevación ubicada en el sector oriental de la Gran Malvina, al noroeste de Puerto Mitre. Con aproximadamente 658 metros sobre el nivel del mar, constituye una de las principales alturas de la isla Gran Malvina. Su cercanía a Puerto Mitre/Puerto Yapeyú lo vincula con el despliegue argentino en esa zona durante la guerra de 1982.",
    mapa: { x: 540.3, y: 307.6 },
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/West-Falkland.jpg",
      aprox: true,
      nota: "Paisaje representativo de la costa de la Gran Malvina, cerca de Puerto Mitre.",
      autor: "Ben Tubby",
      licencia: "CC BY 2.0",
      credito: "https://commons.wikimedia.org/wiki/File:West-Falkland.jpg",
    },
  },
];
