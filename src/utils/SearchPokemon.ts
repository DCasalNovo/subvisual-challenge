export const SearchPokemon = (findString: string) => {
  let list: { [key: string]: [string, number][] } = {
    prefix: [],
    other: [],
  }

  for (const name in pokemonNames) {
    if (name.includes(findString)) {
      if (name.startsWith(findString) && list.prefix.length < 16) {
        list.prefix.push([name, pokemonNames[name]])
      } else if (list.prefix.length < 16 && list.other.length < 16) {
        list.other.push([name, pokemonNames[name]])
      }
      if (list.prefix.length === 16) break
    }
  }

  return [...list.prefix, ...list.other.slice(0, 16 - list.prefix.length)]
}

const pokemonNames: { [key: string]: number } = {
  bulbasaur: 1,
  ivysaur: 2,
  venusaur: 3,
  charmander: 4,
  charmeleon: 5,
  charizard: 6,
  squirtle: 7,
  wartortle: 8,
  blastoise: 9,
  caterpie: 10,
  metapod: 11,
  butterfree: 12,
  weedle: 13,
  kakuna: 14,
  beedrill: 15,
  pidgey: 16,
  pidgeotto: 17,
  pidgeot: 18,
  rattata: 19,
  raticate: 20,
  spearow: 21,
  fearow: 22,
  ekans: 23,
  arbok: 24,
  pikachu: 25,
  raichu: 26,
  sandshrew: 27,
  sandslash: 28,
  'nidoran-f': 29,
  nidorina: 30,
  nidoqueen: 31,
  'nidoran-m': 32,
  nidorino: 33,
  nidoking: 34,
  clefairy: 35,
  clefable: 36,
  vulpix: 37,
  ninetales: 38,
  jigglypuff: 39,
  wigglytuff: 40,
  zubat: 41,
  golbat: 42,
  oddish: 43,
  gloom: 44,
  vileplume: 45,
  paras: 46,
  parasect: 47,
  venonat: 48,
  venomoth: 49,
  diglett: 50,
  dugtrio: 51,
  meowth: 52,
  persian: 53,
  psyduck: 54,
  golduck: 55,
  mankey: 56,
  primeape: 57,
  growlithe: 58,
  arcanine: 59,
  poliwag: 60,
  poliwhirl: 61,
  poliwrath: 62,
  abra: 63,
  kadabra: 64,
  alakazam: 65,
  machop: 66,
  machoke: 67,
  machamp: 68,
  bellsprout: 69,
  weepinbell: 70,
  victreebel: 71,
  tentacool: 72,
  tentacruel: 73,
  geodude: 74,
  graveler: 75,
  golem: 76,
  ponyta: 77,
  rapidash: 78,
  slowpoke: 79,
  slowbro: 80,
  magnemite: 81,
  magneton: 82,
  farfetchd: 83,
  doduo: 84,
  dodrio: 85,
  seel: 86,
  dewgong: 87,
  grimer: 88,
  muk: 89,
  shellder: 90,
  cloyster: 91,
  gastly: 92,
  haunter: 93,
  gengar: 94,
  onix: 95,
  drowzee: 96,
  hypno: 97,
  krabby: 98,
  kingler: 99,
  voltorb: 100,
  electrode: 101,
  exeggcute: 102,
  exeggutor: 103,
  cubone: 104,
  marowak: 105,
  hitmonlee: 106,
  hitmonchan: 107,
  lickitung: 108,
  koffing: 109,
  weezing: 110,
  rhyhorn: 111,
  rhydon: 112,
  chansey: 113,
  tangela: 114,
  kangaskhan: 115,
  horsea: 116,
  seadra: 117,
  goldeen: 118,
  seaking: 119,
  staryu: 120,
  starmie: 121,
  'mr-mime': 122,
  scyther: 123,
  jynx: 124,
  electabuzz: 125,
  magmar: 126,
  pinsir: 127,
  tauros: 128,
  magikarp: 129,
  gyarados: 130,
  lapras: 131,
  ditto: 132,
  eevee: 133,
  vaporeon: 134,
  jolteon: 135,
  flareon: 136,
  porygon: 137,
  omanyte: 138,
  omastar: 139,
  kabuto: 140,
  kabutops: 141,
  aerodactyl: 142,
  snorlax: 143,
  articuno: 144,
  zapdos: 145,
  moltres: 146,
  dratini: 147,
  dragonair: 148,
  dragonite: 149,
  mewtwo: 150,
  mew: 151,
  chikorita: 152,
  bayleef: 153,
  meganium: 154,
  cyndaquil: 155,
  quilava: 156,
  typhlosion: 157,
  totodile: 158,
  croconaw: 159,
  feraligatr: 160,
  sentret: 161,
  furret: 162,
  hoothoot: 163,
  noctowl: 164,
  ledyba: 165,
  ledian: 166,
  spinarak: 167,
  ariados: 168,
  crobat: 169,
  chinchou: 170,
  lanturn: 171,
  pichu: 172,
  cleffa: 173,
  igglybuff: 174,
  togepi: 175,
  togetic: 176,
  natu: 177,
  xatu: 178,
  mareep: 179,
  flaaffy: 180,
  ampharos: 181,
  bellossom: 182,
  marill: 183,
  azumarill: 184,
  sudowoodo: 185,
  politoed: 186,
  hoppip: 187,
  skiploom: 188,
  jumpluff: 189,
  aipom: 190,
  sunkern: 191,
  sunflora: 192,
  yanma: 193,
  wooper: 194,
  quagsire: 195,
  espeon: 196,
  umbreon: 197,
  murkrow: 198,
  slowking: 199,
  misdreavus: 200,
  unown: 201,
  wobbuffet: 202,
  girafarig: 203,
  pineco: 204,
  forretress: 205,
  dunsparce: 206,
  gligar: 207,
  steelix: 208,
  snubbull: 209,
  granbull: 210,
  qwilfish: 211,
  scizor: 212,
  shuckle: 213,
  heracross: 214,
  sneasel: 215,
  teddiursa: 216,
  ursaring: 217,
  slugma: 218,
  magcargo: 219,
  swinub: 220,
  piloswine: 221,
  corsola: 222,
  remoraid: 223,
  octillery: 224,
  delibird: 225,
  mantine: 226,
  skarmory: 227,
  houndour: 228,
  houndoom: 229,
  kingdra: 230,
  phanpy: 231,
  donphan: 232,
  porygon2: 233,
  stantler: 234,
  smeargle: 235,
  tyrogue: 236,
  hitmontop: 237,
  smoochum: 238,
  elekid: 239,
  magby: 240,
  miltank: 241,
  blissey: 242,
  raikou: 243,
  entei: 244,
  suicune: 245,
  larvitar: 246,
  pupitar: 247,
  tyranitar: 248,
  lugia: 249,
  'ho-oh': 250,
  celebi: 251,
  treecko: 252,
  grovyle: 253,
  sceptile: 254,
  torchic: 255,
  combusken: 256,
  blaziken: 257,
  mudkip: 258,
  marshtomp: 259,
  swampert: 260,
  poochyena: 261,
  mightyena: 262,
  zigzagoon: 263,
  linoone: 264,
  wurmple: 265,
  silcoon: 266,
  beautifly: 267,
  cascoon: 268,
  dustox: 269,
  lotad: 270,
  lombre: 271,
  ludicolo: 272,
  seedot: 273,
  nuzleaf: 274,
  shiftry: 275,
  taillow: 276,
  swellow: 277,
  wingull: 278,
  pelipper: 279,
  ralts: 280,
  kirlia: 281,
  gardevoir: 282,
  surskit: 283,
  masquerain: 284,
  shroomish: 285,
  breloom: 286,
  slakoth: 287,
  vigoroth: 288,
  slaking: 289,
  nincada: 290,
  ninjask: 291,
  shedinja: 292,
  whismur: 293,
  loudred: 294,
  exploud: 295,
  makuhita: 296,
  hariyama: 297,
  azurill: 298,
  nosepass: 299,
  skitty: 300,
  delcatty: 301,
  sableye: 302,
  mawile: 303,
  aron: 304,
  lairon: 305,
  aggron: 306,
  meditite: 307,
  medicham: 308,
  electrike: 309,
  manectric: 310,
  plusle: 311,
  minun: 312,
  volbeat: 313,
  illumise: 314,
  roselia: 315,
  gulpin: 316,
  swalot: 317,
  carvanha: 318,
  sharpedo: 319,
  wailmer: 320,
  wailord: 321,
  numel: 322,
  camerupt: 323,
  torkoal: 324,
  spoink: 325,
  grumpig: 326,
  spinda: 327,
  trapinch: 328,
  vibrava: 329,
  flygon: 330,
  cacnea: 331,
  cacturne: 332,
  swablu: 333,
  altaria: 334,
  zangoose: 335,
  seviper: 336,
  lunatone: 337,
  solrock: 338,
  barboach: 339,
  whiscash: 340,
  corphish: 341,
  crawdaunt: 342,
  baltoy: 343,
  claydol: 344,
  lileep: 345,
  cradily: 346,
  anorith: 347,
  armaldo: 348,
  feebas: 349,
  milotic: 350,
  castform: 351,
  kecleon: 352,
  shuppet: 353,
  banette: 354,
  duskull: 355,
  dusclops: 356,
  tropius: 357,
  chimecho: 358,
  absol: 359,
  wynaut: 360,
  snorunt: 361,
  glalie: 362,
  spheal: 363,
  sealeo: 364,
  walrein: 365,
  clamperl: 366,
  huntail: 367,
  gorebyss: 368,
  relicanth: 369,
  luvdisc: 370,
  bagon: 371,
  shelgon: 372,
  salamence: 373,
  beldum: 374,
  metang: 375,
  metagross: 376,
  regirock: 377,
  regice: 378,
  registeel: 379,
  latias: 380,
  latios: 381,
  kyogre: 382,
  groudon: 383,
  rayquaza: 384,
  jirachi: 385,
  'deoxys-normal': 386,
  turtwig: 387,
  grotle: 388,
  torterra: 389,
  chimchar: 390,
  monferno: 391,
  infernape: 392,
  piplup: 393,
  prinplup: 394,
  empoleon: 395,
  starly: 396,
  staravia: 397,
  staraptor: 398,
  bidoof: 399,
  bibarel: 400,
  kricketot: 401,
  kricketune: 402,
  shinx: 403,
  luxio: 404,
  luxray: 405,
  budew: 406,
  roserade: 407,
  cranidos: 408,
  rampardos: 409,
  shieldon: 410,
  bastiodon: 411,
  burmy: 412,
  'wormadam-plant': 413,
  mothim: 414,
  combee: 415,
  vespiquen: 416,
  pachirisu: 417,
  buizel: 418,
  floatzel: 419,
  cherubi: 420,
  cherrim: 421,
  shellos: 422,
  gastrodon: 423,
  ambipom: 424,
  drifloon: 425,
  drifblim: 426,
  buneary: 427,
  lopunny: 428,
  mismagius: 429,
  honchkrow: 430,
  glameow: 431,
  purugly: 432,
  chingling: 433,
  stunky: 434,
  skuntank: 435,
  bronzor: 436,
  bronzong: 437,
  bonsly: 438,
  'mime-jr': 439,
  happiny: 440,
  chatot: 441,
  spiritomb: 442,
  gible: 443,
  gabite: 444,
  garchomp: 445,
  munchlax: 446,
  riolu: 447,
  lucario: 448,
  hippopotas: 449,
  hippowdon: 450,
  skorupi: 451,
  drapion: 452,
  croagunk: 453,
  toxicroak: 454,
  carnivine: 455,
  finneon: 456,
  lumineon: 457,
  mantyke: 458,
  snover: 459,
  abomasnow: 460,
  weavile: 461,
  magnezone: 462,
  lickilicky: 463,
  rhyperior: 464,
  tangrowth: 465,
  electivire: 466,
  magmortar: 467,
  togekiss: 468,
  yanmega: 469,
  leafeon: 470,
  glaceon: 471,
  gliscor: 472,
  mamoswine: 473,
  'porygon-z': 474,
  gallade: 475,
  probopass: 476,
  dusknoir: 477,
  froslass: 478,
  rotom: 479,
  uxie: 480,
  mesprit: 481,
  azelf: 482,
  dialga: 483,
  palkia: 484,
  heatran: 485,
  regigigas: 486,
  'giratina-altered': 487,
  cresselia: 488,
  phione: 489,
  manaphy: 490,
  darkrai: 491,
  'shaymin-land': 492,
  arceus: 493,
  victini: 494,
  snivy: 495,
  servine: 496,
  serperior: 497,
  tepig: 498,
  pignite: 499,
  emboar: 500,
  oshawott: 501,
  dewott: 502,
  samurott: 503,
  patrat: 504,
  watchog: 505,
  lillipup: 506,
  herdier: 507,
  stoutland: 508,
  purrloin: 509,
  liepard: 510,
  pansage: 511,
  simisage: 512,
  pansear: 513,
  simisear: 514,
  panpour: 515,
  simipour: 516,
  munna: 517,
  musharna: 518,
  pidove: 519,
  tranquill: 520,
  unfezant: 521,
  blitzle: 522,
  zebstrika: 523,
  roggenrola: 524,
  boldore: 525,
  gigalith: 526,
  woobat: 527,
  swoobat: 528,
  drilbur: 529,
  excadrill: 530,
  audino: 531,
  timburr: 532,
  gurdurr: 533,
  conkeldurr: 534,
  tympole: 535,
  palpitoad: 536,
  seismitoad: 537,
  throh: 538,
  sawk: 539,
  sewaddle: 540,
  swadloon: 541,
  leavanny: 542,
  venipede: 543,
  whirlipede: 544,
  scolipede: 545,
  cottonee: 546,
  whimsicott: 547,
  petilil: 548,
  lilligant: 549,
  'basculin-red-striped': 550,
  sandile: 551,
  krokorok: 552,
  krookodile: 553,
  darumaka: 554,
  'darmanitan-standard': 555,
  maractus: 556,
  dwebble: 557,
  crustle: 558,
  scraggy: 559,
  scrafty: 560,
  sigilyph: 561,
  yamask: 562,
  cofagrigus: 563,
  tirtouga: 564,
  carracosta: 565,
  archen: 566,
  archeops: 567,
  trubbish: 568,
  garbodor: 569,
  zorua: 570,
  zoroark: 571,
  minccino: 572,
  cinccino: 573,
  gothita: 574,
  gothorita: 575,
  gothitelle: 576,
  solosis: 577,
  duosion: 578,
  reuniclus: 579,
  ducklett: 580,
  swanna: 581,
  vanillite: 582,
  vanillish: 583,
  vanilluxe: 584,
  deerling: 585,
  sawsbuck: 586,
  emolga: 587,
  karrablast: 588,
  escavalier: 589,
  foongus: 590,
  amoonguss: 591,
  frillish: 592,
  jellicent: 593,
  alomomola: 594,
  joltik: 595,
  galvantula: 596,
  ferroseed: 597,
  ferrothorn: 598,
  klink: 599,
  klang: 600,
  klinklang: 601,
  tynamo: 602,
  eelektrik: 603,
  eelektross: 604,
  elgyem: 605,
  beheeyem: 606,
  litwick: 607,
  lampent: 608,
  chandelure: 609,
  axew: 610,
  fraxure: 611,
  haxorus: 612,
  cubchoo: 613,
  beartic: 614,
  cryogonal: 615,
  shelmet: 616,
  accelgor: 617,
  stunfisk: 618,
  mienfoo: 619,
  mienshao: 620,
  druddigon: 621,
  golett: 622,
  golurk: 623,
  pawniard: 624,
  bisharp: 625,
  bouffalant: 626,
  rufflet: 627,
  braviary: 628,
  vullaby: 629,
  mandibuzz: 630,
  heatmor: 631,
  durant: 632,
  deino: 633,
  zweilous: 634,
  hydreigon: 635,
  larvesta: 636,
  volcarona: 637,
  cobalion: 638,
  terrakion: 639,
  virizion: 640,
  'tornadus-incarnate': 641,
  'thundurus-incarnate': 642,
  reshiram: 643,
  zekrom: 644,
  'landorus-incarnate': 645,
  kyurem: 646,
  'keldeo-ordinary': 647,
  'meloetta-aria': 648,
  genesect: 649,
  chespin: 650,
  quilladin: 651,
  chesnaught: 652,
  fennekin: 653,
  braixen: 654,
  delphox: 655,
  froakie: 656,
  frogadier: 657,
  greninja: 658,
  bunnelby: 659,
  diggersby: 660,
  fletchling: 661,
  fletchinder: 662,
  talonflame: 663,
  scatterbug: 664,
  spewpa: 665,
  vivillon: 666,
  litleo: 667,
  pyroar: 668,
  flabebe: 669,
  floette: 670,
  florges: 671,
  skiddo: 672,
  gogoat: 673,
  pancham: 674,
  pangoro: 675,
  furfrou: 676,
  espurr: 677,
  'meowstic-male': 678,
  honedge: 679,
  doublade: 680,
  'aegislash-shield': 681,
  spritzee: 682,
  aromatisse: 683,
  swirlix: 684,
  slurpuff: 685,
  inkay: 686,
  malamar: 687,
  binacle: 688,
  barbaracle: 689,
  skrelp: 690,
  dragalge: 691,
  clauncher: 692,
  clawitzer: 693,
  helioptile: 694,
  heliolisk: 695,
  tyrunt: 696,
  tyrantrum: 697,
  amaura: 698,
  aurorus: 699,
  sylveon: 700,
  hawlucha: 701,
  dedenne: 702,
  carbink: 703,
  goomy: 704,
  sliggoo: 705,
  goodra: 706,
  klefki: 707,
  phantump: 708,
  trevenant: 709,
  'pumpkaboo-average': 710,
  'gourgeist-average': 711,
  bergmite: 712,
  avalugg: 713,
  noibat: 714,
  noivern: 715,
  xerneas: 716,
  yveltal: 717,
  'zygarde-50': 718,
  diancie: 719,
  hoopa: 720,
  volcanion: 721,
  rowlet: 722,
  dartrix: 723,
  decidueye: 724,
  litten: 725,
  torracat: 726,
  incineroar: 727,
  popplio: 728,
  brionne: 729,
  primarina: 730,
  pikipek: 731,
  trumbeak: 732,
  toucannon: 733,
  yungoos: 734,
  gumshoos: 735,
  grubbin: 736,
  charjabug: 737,
  vikavolt: 738,
  crabrawler: 739,
  crabominable: 740,
  'oricorio-baile': 741,
  cutiefly: 742,
  ribombee: 743,
  rockruff: 744,
  'lycanroc-midday': 745,
  'wishiwashi-solo': 746,
  mareanie: 747,
  toxapex: 748,
  mudbray: 749,
  mudsdale: 750,
  dewpider: 751,
  araquanid: 752,
  fomantis: 753,
  lurantis: 754,
  morelull: 755,
  shiinotic: 756,
  salandit: 757,
  salazzle: 758,
  stufful: 759,
  bewear: 760,
  bounsweet: 761,
  steenee: 762,
  tsareena: 763,
  comfey: 764,
  oranguru: 765,
  passimian: 766,
  wimpod: 767,
  golisopod: 768,
  sandygast: 769,
  palossand: 770,
  pyukumuku: 771,
  'type-null': 772,
  silvally: 773,
  'minior-red-meteor': 774,
  komala: 775,
  turtonator: 776,
  togedemaru: 777,
  'mimikyu-disguised': 778,
  bruxish: 779,
  drampa: 780,
  dhelmise: 781,
  'jangmo-o': 782,
  'hakamo-o': 783,
  'kommo-o': 784,
  'tapu-koko': 785,
  'tapu-lele': 786,
  'tapu-bulu': 787,
  'tapu-fini': 788,
  cosmog: 789,
  cosmoem: 790,
  solgaleo: 791,
  lunala: 792,
  nihilego: 793,
  buzzwole: 794,
  pheromosa: 795,
  xurkitree: 796,
  celesteela: 797,
  kartana: 798,
  guzzlord: 799,
  necrozma: 800,
  magearna: 801,
  marshadow: 802,
  poipole: 803,
  naganadel: 804,
  stakataka: 805,
  blacephalon: 806,
  zeraora: 807,
  meltan: 808,
  melmetal: 809,
  grookey: 810,
  thwackey: 811,
  rillaboom: 812,
  scorbunny: 813,
  raboot: 814,
  cinderace: 815,
  sobble: 816,
  drizzile: 817,
  inteleon: 818,
  skwovet: 819,
  greedent: 820,
  rookidee: 821,
  corvisquire: 822,
  corviknight: 823,
  blipbug: 824,
  dottler: 825,
  orbeetle: 826,
  nickit: 827,
  thievul: 828,
  gossifleur: 829,
  eldegoss: 830,
  wooloo: 831,
  dubwool: 832,
  chewtle: 833,
  drednaw: 834,
  yamper: 835,
  boltund: 836,
  rolycoly: 837,
  carkol: 838,
  coalossal: 839,
  applin: 840,
  flapple: 841,
  appletun: 842,
  silicobra: 843,
  sandaconda: 844,
  cramorant: 845,
  arrokuda: 846,
  barraskewda: 847,
  toxel: 848,
  'toxtricity-amped': 849,
  sizzlipede: 850,
  centiskorch: 851,
  clobbopus: 852,
  grapploct: 853,
  sinistea: 854,
  polteageist: 855,
  hatenna: 856,
  hattrem: 857,
  hatterene: 858,
  impidimp: 859,
  morgrem: 860,
  grimmsnarl: 861,
  obstagoon: 862,
  perrserker: 863,
  cursola: 864,
  sirfetchd: 865,
  'mr-rime': 866,
  runerigus: 867,
  milcery: 868,
  alcremie: 869,
  falinks: 870,
  pincurchin: 871,
  snom: 872,
  frosmoth: 873,
  stonjourner: 874,
  'eiscue-ice': 875,
  'indeedee-male': 876,
  'morpeko-full-belly': 877,
  cufant: 878,
  copperajah: 879,
  dracozolt: 880,
  arctozolt: 881,
  dracovish: 882,
  arctovish: 883,
  duraludon: 884,
  dreepy: 885,
  drakloak: 886,
  dragapult: 887,
  zacian: 888,
  zamazenta: 889,
  eternatus: 890,
  kubfu: 891,
  'urshifu-single-strike': 892,
  zarude: 893,
  regieleki: 894,
  regidrago: 895,
  glastrier: 896,
  spectrier: 897,
  calyrex: 898,
  wyrdeer: 899,
  kleavor: 900,
  ursaluna: 901,
  'basculegion-male': 902,
  sneasler: 903,
  overqwil: 904,
  'enamorus-incarnate': 905,
  sprigatito: 906,
  floragato: 907,
  meowscarada: 908,
  fuecoco: 909,
  crocalor: 910,
  skeledirge: 911,
  quaxly: 912,
  quaxwell: 913,
  quaquaval: 914,
  lechonk: 915,
  oinkologne: 916,
  tarountula: 917,
  spidops: 918,
  nymble: 919,
  lokix: 920,
  pawmi: 921,
  pawmo: 922,
  pawmot: 923,
  tandemaus: 924,
  maushold: 925,
  fidough: 926,
  dachsbun: 927,
  smoliv: 928,
  dolliv: 929,
  arboliva: 930,
  squawkabilly: 931,
  nacli: 932,
  naclstack: 933,
  garganacl: 934,
  charcadet: 935,
  armarouge: 936,
  ceruledge: 937,
  tadbulb: 938,
  bellibolt: 939,
  wattrel: 940,
  kilowattrel: 941,
  maschiff: 942,
  mabosstiff: 943,
  shroodle: 944,
  grafaiai: 945,
  bramblin: 946,
  brambleghast: 947,
  toedscool: 948,
  toedscruel: 949,
  klawf: 950,
  capsakid: 951,
  scovillain: 952,
  rellor: 953,
  rabsca: 954,
  flittle: 955,
  espathra: 956,
  tinkatink: 957,
  tinkatuff: 958,
  tinkaton: 959,
  wiglett: 960,
  wugtrio: 961,
  bombirdier: 962,
  finizen: 963,
  palafin: 964,
  varoom: 965,
  revavroom: 966,
  cyclizar: 967,
  orthworm: 968,
  glimmet: 969,
  glimmora: 970,
  greavard: 971,
  houndstone: 972,
  flamigo: 973,
  cetoddle: 974,
  cetitan: 975,
  veluza: 976,
  dondozo: 977,
  tatsugiri: 978,
  annihilape: 979,
  clodsire: 980,
  farigiraf: 981,
  dudunsparce: 982,
  kingambit: 983,
  'great-tusk': 984,
  'scream-tail': 985,
  'brute-bonnet': 986,
  'flutter-mane': 987,
  'slither-wing': 988,
  'sandy-shocks': 989,
  'iron-treads': 990,
  'iron-bundle': 991,
  'iron-hands': 992,
  'iron-jugulis': 993,
  'iron-moth': 994,
  'iron-thorns': 995,
  frigibax: 996,
  arctibax: 997,
  baxcalibur: 998,
  gimmighoul: 999,
  gholdengo: 1000,
  'wo-chien': 1001,
  'chien-pao': 1002,
  'ting-lu': 1003,
  'chi-yu': 1004,
  'roaring-moon': 1005,
  'iron-valiant': 1006,
  koraidon: 1007,
  miraidon: 1008,
  'walking-wake': 1009,
  'iron-leaves': 1010,
  dipplin: 1011,
  poltchageist: 1012,
  sinistcha: 1013,
  okidogi: 1014,
  munkidori: 1015,
  fezandipiti: 1016,
  ogerpon: 1017,
  archaludon: 1018,
  hydrapple: 1019,
  'gouging-fire': 1020,
  'raging-bolt': 1021,
  'iron-boulder': 1022,
  'iron-crown': 1023,
  terapagos: 1024,
  pecharunt: 1025,
}
