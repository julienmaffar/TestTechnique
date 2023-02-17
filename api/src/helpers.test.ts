import { sortPlayerById } from "./helpers";
import request from "supertest";
import { app } from "./app";

const fakePlayers = [
  {
    id: 17,
    firstname: "Rafael",
    lastname: "Nadal",
    shortname: "R.NAD",
    sex: "M",
    country: {
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
      code: "ESP",
    },
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
    data: {
      rank: 1,
      points: 1982,
      weight: 85000,
      height: 185,
      age: 33,
      last: [1, 0, 0, 0, 1],
    },
  },
  {
    id: 52,
    firstname: "Novak",
    lastname: "Djokovic",
    shortname: "N.DJO",
    sex: "M",
    country: {
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/medium/6944.png",
      code: "SRB",
    },
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
    data: {
      rank: 2,
      points: 2542,
      weight: 80000,
      height: 188,
      age: 31,
      last: [1, 1, 1, 1, 1],
    },
  },
];

describe("sortPlayerById", () => {
  it("should return player by id", () => {
    const players = fakePlayers.sort(sortPlayerById);
    expect(players[0]).toHaveProperty("id", 17);
    expect(players[1]).toHaveProperty("id", 52);
  });
});

describe("Endpoints", () => {
  it("should return players response", async () => {
    const res = await request(app).get("/players");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
  });

  it("should return player by id", async () => {
    const res = await request(app).get("/players/17");
    console.log(fakePlayers);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body).toStrictEqual(fakePlayers[0]);
  });

  it("should return 404 status with wrong id", async () => {
    const res = await request(app).get("/players/1");
    expect(res.statusCode).toEqual(404);
  });
});
