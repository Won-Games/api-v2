/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      const options = {
        limit: 48,
        order: "desc:trending",
        ...ctx.query,
      };

      await strapi.service("api::game.game").populate(options);

      ctx.send("Finished populating games!");
    },
  })
);
