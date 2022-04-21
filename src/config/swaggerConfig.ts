
import swaggerJsDoc from "swagger-jsdoc";

export const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "FAVORITES",
      version: "1.0.0",
      description: "Express Favs API",
    },
    servers: [
      {
        url: 'http://localhost:6000',
        description: "Local server development",
      },
    ],
  },

  apis: ["src/docs/*.yaml"],
  //apis: ["./users/routes/*.ts"]
};

export const swaggerSpecs = swaggerJsDoc(options);
