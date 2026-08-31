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
    stock: 1,
    badge: "Limited Edition",
  },
  // {
  //   id: "002",
  //   name: "Piston Clock — Chrome Polished",
  //   subtitle: "Mirror-grade hand-polished piston · Chrome shine · Silent quartz",
  //   price: 5499,
  //   images: [img4436, img4433, img4439, img4446],
  //   features: [
  //     "Genuine engine piston, polished to a mirror finish",
  //     "Chrome-grade hand buffing, every surface",
  //     "Rust-treated and sealed for longevity",
  //     "Silent sweep quartz movement",
  //     "Serial-numbered certificate of authenticity",
  //   ],
  //   description:
  //     "A retired piston taken to a mirror-grade shine. Hours of hand-buffing bring the raw metal back to a reflective chrome finish that catches light from across the room. Sealed against tarnish, fitted with a silent-sweep quartz movement. A statement piece for anyone who loves polished machinery.",
  //   stock: 1,
  //   badge: "New",
  // },
  // {
  //   id: "003",
  //   name: "Piston Clock — Raw Industrial",
  //   subtitle: "Untouched patina · Marks of the road preserved · Silent quartz",
  //   price: 4499,
  //   images: [img4439, img4433, img4440, img4446],
  //   features: [
  //     "Authentic piston with original patina retained",
  //     "Cleaned but left raw — every mark honored",
  //     "Clear protective coat to lock in character",
  //     "Silent quartz movement",
  //     "Certificate of authenticity included",
  //   ],
  //   description:
  //     "For those who want the machine exactly as it lived. This edition keeps the piston's original patina, scoring, and heat marks — cleaned and sealed but never polished away. Every scratch is a mile driven. Raw, honest, and full of story.",
  //   stock: 1,
  // },
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
