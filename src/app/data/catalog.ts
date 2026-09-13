// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                        ║
// ║   👉  YOUR PRODUCT LIST — THIS IS THE ONLY FILE YOU EDIT TO ADD /      ║
// ║       CHANGE / REMOVE PRODUCTS.                                        ║
// ║                                                                        ║
// ║   Because products live here in the code, ONLY you (editing the        ║
// ║   source) can change them. Online visitors can NEVER edit this.        ║
// ║   After you change this file, redeploy your site and everyone sees it. ║
// ║                                                                        ║
// ╚══════════════════════════════════════════════════════════════════════╝
//
// ─── HOW TO ADD A NEW PRODUCT ────────────────────────────────────────────
//   1. Put your photo file(s) into the  src/imports/  folder.
//   2. Import each photo at the top of this file (copy one of the lines
//      below and change the name + filename).
//   3. Copy a whole  { ... }  block inside CATALOG, paste it at the end,
//      and give it the next id: "005", then "006", and so on.
//   4. Fill in the fields (explained below). Save the file. Redeploy. Done!
//
// ─── WHAT EACH FIELD MEANS ───────────────────────────────────────────────
//   id           A unique 3-digit code as text: "001", "002", ...
//   name         The product title.
//   subtitle     One short line shown under the title.
//   price        A number only — rupees, NO ₹ sign and NO commas.  e.g. 4999
//   images       A list of imported photos. The FIRST one is the main
//                image shown on the shop card. Add as many as you like.
//   features     Bullet points shown on the product page (a list of text).
//   description  The long paragraph about the product.
//   stock        How many you have. Use 0 to show it as "Sold out".
//   badge        (optional) A little ribbon on the card. Use one of:
//                "Bestseller", "New", "Limited Edition"  — or delete the
//                line completely for no ribbon.
//   rating       (optional) 0 to 5. Leave it out for a new product.
//   reviews      (optional) how many reviews. Leave it out for a new product.
// ─────────────────────────────────────────────────────────────────────────

import type { Product } from "./products";

// STEP 2 — import your photos here (one line per photo):
import pistonClockFront from "../../imports/PistonClock/Front.jpg";
import pistonClockBack from "../../imports/PistonClock/Back.jpg";
import pistonClockLeft from "../../imports/PistonClock/Left.jpg";
import pistonClockRight from "../../imports/PistonClock/Right.jpg";

import clutchPlateFront from "../../imports/ClutchPlateClock/ClutchPlateFront.jpeg";
import clutchPlateBack from "../../imports/ClutchPlateClock/ClutchPlateBack.jpeg";
import clutchPlateLeft from "../../imports/ClutchPlateClock/ClutchPlateSide1.jpeg";
import clutchPlateRight from "../../imports/ClutchPlateClock/ClutchPlateSide2.jpeg";

import PressurePlateFront from "../../imports/PressurePlateClock/PressurePlateFront (2).jpeg";
import PressurePlateBack from "../../imports/PressurePlateClock/PressurePlateBack.jpg";
import PressurePlateSide1 from "../../imports/PressurePlateClock/PressurePlateSide1.jpg";
import PressurePlateSide2 from "../../imports/PressurePlateClock/PressurePlateSide2.jpg";


// import myNewPhoto from "../../imports/MY_NEW_PHOTO.jpg";   ← example

// STEP 3 — your products. Copy a block to add a new one.
export const CATALOG: Product[] = [
  {
    id: "001",
    name: "Piston Clock — Matte Black",
    subtitle: "Real engine piston · Hand-painted matte black · Silent quartz movement",
    price: 4999,
    images: [pistonClockFront, pistonClockBack, pistonClockLeft, pistonClockRight],
    features: [
      "Genuine retired automobile engine piston",
      "Hand-painted matte black finish", 
      "Deep-cleaned & restored by hand",
      "Reliable silent quartz movement",
      "Certificate of authenticity included",
    ],
    description:
      "Each clock starts as a genuine, retired automobile piston — pulled from scrapyards and workshops. I clean it by hand, treat it for rust, coat it in a hand-applied matte black paint, and press a precision silent-quartz movement into the crown. The black finish gives it a raw, industrial character — bold enough for a garage, refined enough for a living room. No two pistons are identical. Yours will be unmistakably yours.",
    stock: 0,
    badge: "Limited Edition",
  },
  {
    id: "002",
    name: "Clutch Plate Clock — Matt Black",
    subtitle: "Genuine clutch plate · Gold mechanical detailing · Elegant matte black finish",
    price: 6999,
    images: [clutchPlateFront, clutchPlateBack, clutchPlateLeft, clutchPlateRight],
    features: [
      "Genuine automotive clutch plate, repurposed into a statement clock",
      "Hand-finished matt black body with contrasting gold mechanical detailing",
      "Original clutch springs and hardware preserved as the centrepiece",
      "Silent sweep quartz movement for smooth, quiet operation",
      "Custom-built metal stand with protective supports for stability"
    ],
    description:
      "A genuine automotive clutch plate transformed into a bold mechanical timepiece. The matt black finish highlights the raw engineering of the clutch assembly, while the gold-finished springs and hardware add a striking contrast. Built around the original mechanical character of a clutch plate and fitted with a silent-sweep quartz movement, it turns retired automotive machinery into a distinctive piece of functional art. Each clock is a unique testament to the beauty of repurposed machinery.",
    stock: 1,
    badge: "New",
  },
  {
    id: "003",
    name: "Pressure Plate Clock — Black & Gold",
    subtitle: "Genuine pressure plate · Hand-finished black · Gold mechanical detailing",
    price: 8499,
    images: [PressurePlateFront, PressurePlateBack, PressurePlateSide1, PressurePlateSide2],
    features: [
      "Authentic automotive pressure plate transformed into a functional timepiece",
      "Hand-finished black body with striking gold mechanical detailing",
      "Original diaphragm spring assembly preserved as the centrepiece",
      "Solid 6 kg automotive-grade construction",
      "Custom-built stand designed to complement the mechanical form",
      "Upcycled automotive component — giving retired machinery a second life",
    ],
    description:
      "Built from a genuine automotive pressure plate, this timepiece turns precision engineering into functional art. The deep black finish brings out the intricate diaphragm spring assembly, while the gold-finished fasteners create a striking mechanical contrast. Mounted on a custom-built stand and fitted with a silent quartz movement, it is a bold statement piece made for those who appreciate machines, craftsmanship, and automotive heritage.",
    stock: 1,
  },
  // {
  //   id: "004",
  //   name: "Piston Clock — Ember Accent",
  //   subtitle: "Matte body with ember-orange dial ring · Silent quartz",
  //   price: 5299,
  //   images: [img4446, img4433, img4436, img4440],
  //   features: [
  //     "Genuine piston, matte-finished body",
  //     "Signature ember-orange dial ring",
  //     "Hand-restored and rust-treated",
  //     "Silent quartz movement",
  //     "Certificate of authenticity included",
  //   ],
  //   description:
  //     "The house edition. A matte piston body paired with our signature ember-orange dial ring — the same fire that runs through the brand. Industrial by nature, warm by design. A daily reminder that fuel still runs through your veins.",
  //   stock: 1,
  //   badge: "Bestseller",
  // },

  // ─── 👇 PASTE A COPY OF A BLOCK ABOVE HERE TO ADD PRODUCT "005" ───
  // {
  //   id: "005",
  //   name: "Piston Clock — My New Edition",
  //   subtitle: "Short line about it",
  //   price: 5999,
  //   images: [myNewPhoto],
  //   features: ["Point one", "Point two", "Point three"],
  //   description: "A longer paragraph describing this product...",
  //   stock: 1,
  //   badge: "New",
  // },
];
