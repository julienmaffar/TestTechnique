import express from "express";
import axios from "axios";
import cors from "cors";
import { Player } from "./types";
import { sortPlayerById } from "./helpers";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/players", async (_, res) => {
  try {
    const response = await axios.get(
      "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
    );

    const players: Player[] = response.data.players.sort(sortPlayerById);

    res.json(players);
  } catch (err) {
    res.send(err);
  }
});

app.get("/players/:id", async (req, res) => {
  try {
    const response = await axios.get(
      "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
    );

    const player: Player = response.data.players.find(
      (player: Player) => Number(player.id) === Number(req.params.id)
    );

    if (!player) res.status(404);
    res.json(player);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { app };
