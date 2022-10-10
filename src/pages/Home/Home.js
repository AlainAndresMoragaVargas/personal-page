import React, {useContext} from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import backgroundImage from "../../img/background.jpg";
import { data } from "../../data/data";
import "./Home.css";
import { GeneralContext } from "../../context/GeneralContext";

const Home = () => {
  const { language } = useContext(GeneralContext);
  return (
    <Container background={backgroundImage}>
      <div className="home-title-container">
        <div className="titles">
          <Title
            text={data.home_greeting[language]}
            color="#fff"
            size="50px"
            weight="700"
          />
          <Title text={data.home_name} color="#fff" size="40px" />
          <Title
            text={data.home_profession[language]}
            color="#026B91"
            size="50px"
            weight="700"
            textDecoration={true}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
