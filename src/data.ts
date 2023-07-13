type Planets =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno";

export const planetas: Planets[] = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno",
];

type thingsInSpace = Planets | "Lua" | "Interestelar" | "Órbita Terrestre";

type Mission = {
  name: string;
  year: number;
  country: string;
  planet: thingsInSpace | "Mercúrio e Vênus";
};

export const missões: Mission[] = [
  {
    name: "MARINER 2",
    year: 1962,
    country: "USA",
    planet: "Vênus",
  },
  {
    name: "VENERA 4",
    year: 1967,
    country: "URSS",
    planet: "Vênus",
  },
  {
    name: "MARINER 5",
    year: 1967,
    country: "USA",
    planet: "Vênus",
  },
  {
    name: "APOLLO 11",
    year: 1969,
    country: "USA",
    planet: "Lua",
  },
  {
    name: "MARINER 10",
    year: 1973,
    country: "USA",
    planet: "Mercúrio e Vênus",
  },
  {
    name: "VOYAGER 1",
    year: 1977,
    country: "USA",
    planet: "Interestelar",
  },
  {
    name: "VENERA 16",
    year: 1983,
    country: "URSS",
    planet: "Vênus",
  },
  {
    name: "PHOBOS 1",
    year: 1988,
    country: "URSS",
    planet: "Marte",
  },
  {
    name: "PHOBOS 2",
    year: 1988,
    country: "URSS",
    planet: "Marte",
  },
  {
    name: "GALILEO",
    year: 1989,
    country: "USA",
    planet: "Júpiter",
  },
  {
    name: "MARS PATHFINDER",
    year: 1996,
    country: "USA",
    planet: "Marte",
  },
  {
    name: "CASSINI-HUYGENS",
    year: 1997,
    country: "Estados Unidos e Europa",
    planet: "Saturno",
  },
  {
    name: "NOZOMI (PLANETA B)",
    year: 1998,
    country: "Japão",
    planet: "Marte",
  },
  {
    name: "ESTAÇÂO INTERNACIONAL ESPACIAL",
    year: 1998,
    country: "Estados Unidos e Rússia",
    planet: "Órbita Terrestre",
  },
  {
    name: "MARS POLAR LANDER",
    year: 1999,
    country: "USA",
    planet: "Marte",
  },
  {
    name: "2001 MARS ODYSSEY",
    year: 2001,
    country: "USA",
    planet: "Mercúrio",
  },
  {
    name: "GENESIS",
    year: 2001,
    country: "USA",
    planet: "Terra",
  },
  {
    name: "MESSENGER",
    year: 2004,
    country: "USA",
    planet: "Mercúrio",
  },
  {
    name: "TELESCÓPIO ESPACIAL KEPLER",
    year: 2009,
    country: "USA",
    planet: "Interestelar",
  },
  {
    name: "TELESCÓPIO ESPACIAL JAMES WEBB",
    year: 2021,
    country: "Estados Unidos, União Europeia e Canadá",
    planet: "Interestelar",
  },
];
