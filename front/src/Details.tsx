import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./components";
import { getPlayer, PlayerType } from "./services/Players.service";
import { useNavigate, useParams } from "react-router-dom";

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState<PlayerType>();

  const handleGoBack = useCallback(() => navigate("/"), [navigate]);

  useEffect(() => {
    if (id) getPlayer(id).then((player) => setPlayer(player));
  }, [id]);

  return (
    <div style={{ padding: 16 }}>
      <div>
        <img src={player?.picture} alt='' />
      </div>
      <h2>
        {player?.firstname} {player?.lastname}
      </h2>
      <div>Rank : {player?.data.rank}</div>
      <div>Sexe : {player?.sex}</div>
      <div>
        Pays : <img src={player?.country.picture} alt='' />
      </div>

      <div>
        <div>Points : {player?.data.points}</div>
        <div>Taille : {player?.data.height}cm</div>
        <div>Poids : {player?.data.weight}kg</div>
        <div>Age : {player?.data.age} ans</div>
      </div>

      <Button label="Retouner à l'accueil" handleClick={handleGoBack} />
    </div>
  );
};
