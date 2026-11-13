// Datos base y sistema de gestión para Pokémon Añil Randomlocke v2.0
const DEFAULT_TRACKER_DATA = {
  version: "2.0",
  lastUpdated: Date.now(),
  config: {
    initialLives: 20,
    githubRawUrl: "" // Opcional: URL raw del JSON en GitHub para sincronización directa
  },
  players: {
    quemao: {
      id: "quemao",
      name: "Quemao",
      avatar: "assets/avatars/quemao.png",
      lives: 20,
      badges: 0,
      team: [],
      box: [],
      graveyard: [],
      captures: []
    },
    zep: {
      id: "zep",
      name: "Zep",
      avatar: "assets/avatars/zep.png",
      lives: 20,
      badges: 0,
      team: [],
      box: [],
      graveyard: [],
      captures: []
    },
    ferry: {
      id: "ferry",
      name: "Ferry",
      avatar: "assets/avatars/ferry.png",
      lives: 20,
      badges: 0,
      team: [],
      box: [],
      graveyard: [],
      captures: []
    }
  },
  gyms: [
    { id: "gym1", name: "Gimnasio 1 - Brock (Roca)", levelCap: 14, completedBy: [] },
    { id: "gym2", name: "Gimnasio 2 - Misty (Agua)", levelCap: 21, completedBy: [] },
    { id: "gym3", name: "Gimnasio 3 - Lt. Surge (Eléctrico)", levelCap: 28, completedBy: [] },
    { id: "gym4", name: "Gimnasio 4 - Erika (Planta)", levelCap: 35, completedBy: [] },
    { id: "gym5", name: "Gimnasio 5 - Koga (Veneno)", levelCap: 43, completedBy: [] },
    { id: "gym6", name: "Gimnasio 6 - Sabrina (Psíquico)", levelCap: 48, completedBy: [] },
    { id: "gym7", name: "Gimnasio 7 - Blaine (Fuego)", levelCap: 54, completedBy: [] },
    { id: "gym8", name: "Gimnasio 8 - Giovanni (Tierra)", levelCap: 60, completedBy: [] },
    { id: "league", name: "Alto Mando y Campeón", levelCap: 70, completedBy: [] }
  ],
  achievements: [
    { id: "first_catch", title: "Primer Compañero", desc: "Captura tu primer Pokémon en el Randomlocke" },
    { id: "full_team", title: "Escuadrón Completo", desc: "Reúne un equipo activo de 6 Pokémon" },
    { id: "first_badge", title: "Primera Medalla", desc: "Supera el primer gimnasio sin perder todas tus vidas" },
    { id: "survivor", title: "Superviviente Nato", desc: "Supera 4 gimnasios manteniendo al menos 7 vidas" }
  ]
};
