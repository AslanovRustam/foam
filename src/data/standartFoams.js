import beige from "../images/standart/beige.png";
import blue from "../images/standart/blue.png";
import blue2 from "../images/standart/blue2.png";
import grey from "../images/standart/grey.png";
import grey2 from "../images/standart/grey2.png";
import multi from "../images/standart/multi.png";
import peach from "../images/standart/peach.png";
import peach2 from "../images/standart/peach2.png";
import white from "../images/standart/white.png";
import white2 from "../images/standart/white2.png";
import yellow from "../images/standart/yellow.png";
import blueMixed from "../images/bonded/blueMixed.png";
import budget from "../images/bonded/budget.png";
import memory from "../images/bonded/memory.png";
import premium from "../images/bonded/premium.png";
import recon from "../images/bonded/recon.png";
import extra from "../images/extra.png";

export const standartFoams = [
  { id: 1, image: white, color: "White", code: "21 Foam" },
  { id: 2, image: yellow, color: "Pale Yellow", code: "24 Foam" },
  { id: 3, image: grey, color: "Grey", code: "28 Foam" },
  { id: 4, image: blue, color: "Blue", code: "33 Foam" },
  { id: 5, image: beige, color: "Beige", code: "36 Foam" },
  { id: 6, image: blue2, color: "Blue", code: "39H Foam" },
  { id: 7, image: peach, color: "Peach", code: "39S Foam" },
  { id: 8, image: grey2, color: "Grey", code: "41 Foam" },
  { id: 9, image: peach2, color: "Peach", code: "V40" },
  { id: 10, image: white2, color: "White", code: "V50" },
  { id: 11, image: multi, color: "Multi-coloured", code: "6LB" },
];

export const bondedFoams = [
  {
    id: 12,
    image: recon,
    color: "Budget 33H Blue (+£0.00)",
    code: "FS 6lb Recon mixed with FS ",
  },
  {
    id: 13,
    image: blueMixed,
    color: "Luxury Reflex Pink Foam (+£0.00)",
    code: "FS 33H Blue Foam Mixed With FS400 ",
  },
  {
    id: 14,
    image: budget,
    color: "Mixed With Memory Foam (+£0.00)",
    code: "FS Budget 33H Blue Foam",
  },
  {
    id: 15,
    image: premium,
    color: "Mixed With FS400 Luxury Reflex Pink Foam (+£0.00)",
    code: "FS Premium 39H Blue Firm Foam",
  },
  {
    id: 16,
    image: memory,
    color: "Blue Firm (+£0.00)",
    code: "Memory Foam Mixed With FS Premium 39H",
  },
];

export const extras = [
  {
    id: 17,
    image: extra,
    color: "Peach",
    code: "395 Foam",
  },
  {
    id: 18,
    image: extra,
    color: "grey",
    code: "41 Foam",
  },
  {
    id: 19,
    image: extra,
    color: "Peach",
    code: "395 Foam",
  },
];
