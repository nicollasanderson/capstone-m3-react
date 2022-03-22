import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import Modals from "../../Components/Modal";
import { Container, Background } from "./style";

const HomePage = () => {
  return (
    <Container>
      <Background/>
      <div className="home--top">
        <Header />
        <Modals />
      </div>
      <div className="home--bottom">
        <h2 className="main--title">Mais Populares</h2>
        <GamesList type="home" />
      </div>
    </Container>
  );
};

export default HomePage;
