import Glide, {
  Controls,
  Autoplay,
} from "../node_modules/@glidejs/glide/dist/glide.modular.esm";

new Glide(".glide", {
  type: "carousel",
  autoplay: 4000,
  hoverpause: false,
  gap: 0,
}).mount({ Controls, Autoplay });
