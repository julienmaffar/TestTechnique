import React, { useCallback, useEffect, useState } from "react";
import { ProfilCard } from "./components";
import { getPlayers, PlayerType } from "./services/Players.service";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    getPlayers().then((players) => setPlayers(players));
  }, []);

  const handleClickPlayer = useCallback(
    (id: number) => {
      navigate(`/details/${id}`);
    },
    [navigate]
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {players.map((player) => (
        <ProfilCard
          key={player.id}
          name={`${player.firstname} ${player.lastname}`}
          picture={player.picture}
          stats={player.data}
          rank={player.data.rank}
          handleClick={() => handleClickPlayer(player.id)}
        />
      ))}
    </div>
  );
};
