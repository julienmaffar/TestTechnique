import { Player } from "./types";

export const sortPlayerById = (a: Player, b: Player): number =>
  a.id > b.id ? 1 : -1;
