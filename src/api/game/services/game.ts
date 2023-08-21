/**
 * game service
 */
import axios from "axios";
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::game.game", () => ({
  async populate(params) {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game?sort=rating`;

    const {
      data: { products },
    } = await axios.get(gogApiUrl);

    console.log(products[1]);
  },
}));
