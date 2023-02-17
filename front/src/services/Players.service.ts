import axios from "axios";

type DataType = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
};

type CountryType = {
  picture: string;
  code: string;
};

export type PlayerType = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: CountryType;
  picture: string;
  data: DataType;
};

export const getPlayers = async () => {
  try {
    const response = await axios.get("http://localhost:4000/players");
    return response.data as PlayerType[];
  } catch {
    return [];
  }
};

export const getPlayer = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/players/${id}`);
    console.log(response);
    return response.data as PlayerType;
  } catch {
    return {} as PlayerType;
  }
};
