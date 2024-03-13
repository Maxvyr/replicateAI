import Replicate from "replicate";
import becomeImage from "./become-image.js";
import "dotenv/config";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

console.log("⌚ Starting Inference ⌚...");
const res = await becomeImage(
  replicate,
  "https://k-gen.fr/wp-content/uploads/2018/09/iu-2-1600x768.png",
  "https://cdna.artstation.com/p/assets/images/images/050/447/368/large/huang-hotdog-asset.jpg",
  "nami one piece",
  ""
);
console.log(res);
console.log("END 🔚");
