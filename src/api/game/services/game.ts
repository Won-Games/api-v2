/**
 * game service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::game.game", () => ({
  async populate(params) {
    const cat = await strapi.service("api::category.category").find({
      filters: { name: params.category },
    });

    console.log(cat);
  },
}));
