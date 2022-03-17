import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Mobile, More, MoreHide } from "./style";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const FullCardGame = ({ game, grade }) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(game.plataforms);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <Mobile>
      <div className="img-holder">
        <img
          className="game-image"
          src={game.background_image}
          alt={game.name}
        />
      </div>
      <div className="info-holder">
        <div>
          <span>{game.name}</span>
          {game.parent_platforms.map((platforms) => (
            <span>Plataformas: {platforms.platform.name}</span>
          ))}
        </div>
        <div>{game.description}</div>
        <div className="arrow-buttom" onClick={handleClick}>
          {isClicked ? <AiOutlineDown /> : <AiOutlineUp />}
        </div>
      </div>
      <>
        {isClicked ? (
          <More>
            <div>
              <div>
                <img src={gamesHubLogo} alt="GamesHub logo" />
                <span>{grade}</span>
              </div>
              <div>
                <img
                  src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
                  alt="metacritic"
                ></img>
                <span>{game.metacritic}</span>
              </div>
            </div>
            <div>
              <span>Deixe sua nota também</span>
              <div></div>
            </div>
          </More>
        ) : (
          <MoreHide></MoreHide>
        )}
      </>
    </Mobile>
  );
};

export default FullCardGame;
