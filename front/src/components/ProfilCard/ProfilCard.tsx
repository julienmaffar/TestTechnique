import React, { useMemo } from "react";
import { Button } from "../Button";
import styles from "./ProfilCard.module.css";

type ProfilCardProps = {
  picture: string;
  name: string;
  rank: number;
  stats: {
    points: number;
    height: number;
    weight: number;
    age: number;
  };
  handleClick?: () => void;
};

export const ProfilCard = ({
  picture,
  name,
  rank,
  stats: { points, height, weight, age },
  handleClick,
}: ProfilCardProps) => {
  const weigthKg = useMemo(() => weight / 1000, [weight]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={picture} alt='' />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.rank}>Rank : {rank}</div>
      <div>Stats</div>
      <div className={styles.stats}>
        <div>Points : {points}</div>
        <div>Taille : {height}cm</div>
        <div>Poids : {weigthKg}kg</div>
        <div>Age : {age} ans</div>
      </div>
      <Button label='Voir le détails' handleClick={handleClick} />
    </div>
  );
};
