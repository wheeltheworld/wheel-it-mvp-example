import express from "express";
import { join } from "path";
import { createConnection } from "typeorm";
import { wheelIt } from "wheel-it/server";
import { Movie } from "./movies/models/Movie";

(async () => {
  const app = express();

  await createConnection({
    type: "postgres",
    username: "root",
    password: "root",
    database: "mvp-wheel-it",
    entities: [Movie],
    synchronize: true,
  });

  app.use(express.json());

  app.use(
    wheelIt({
      modules: [{ src: "movies", icon: "movie" }],
    })
  );

  app.use(express.static(join(__dirname, "./public")));

  app.get("*", (_, res) => {
    res.send(`
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Wheel-It</title>
      </head>
      <body>
      <div id="app"></div>
      <script src="/app.js"></script>
      </body>
      </html>`);
  });

  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
})();
