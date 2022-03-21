import Header from "../../Components/Header";
import FullCardGame from "../../Components/FullCardGame";
import {useContext} from "react"
import { UserContext } from "../../Providers/user";
import CommentsList from "../../Components/CommentsList";
import { FancyMain } from "./style";
import { useParams } from "react-router-dom";

const Game = () => {

  const { slug } = useParams();
  const {listPosts} = useContext(UserContext)
  const filteredComments = listPosts(slug)

  return (
    <FancyMain>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame grade={5} />
      <CommentsList comments={filteredComments} profile/>
    </FancyMain>
  );
};

export default Game;
