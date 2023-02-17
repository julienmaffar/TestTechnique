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

export type Player = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: CountryType;
  picture: string;
  data: DataType;
};
