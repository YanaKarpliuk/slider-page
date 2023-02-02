import Glide, {
  Controls,
  Autoplay,
} from "../node_modules/@glidejs/glide/dist/glide.modular.esm.js";

new Glide(".glide", {
  type: "carousel",
  // autoplay: 4000,
  autoplay: false,
  hoverpause: false,
  gap: 0,
}).mount({ Controls, Autoplay });
