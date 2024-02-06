/* Home.jsx */

import "./Home.css";
import MainButton from "../components/template/Button";
import CustomCard from "../components/template/Card";

function Home() {
  return (
    <div className="home">
      <section className="menu">
        <div className="menu-container">
          <h1 className="title">Encontre seu amigo peludo</h1>
          <p className="description">
            Adote um animal de estimação hoje e transforme uma vida para sempre.
          </p>
          <ul className="menu-list">
            <li>
              <MainButton text="Procurar" to="/animais" />
            </li>
            <li>
              <MainButton text="Ajudar" to="/ajudar" />
            </li>
            <li>
              <MainButton text="FAQ" to="/FAQ" />
            </li>
          </ul>
        </div>
      </section>

      <section className="faq">
        <div className="faq-container">
          <h2 className="section-title">Planejando adotar um pet?</h2>
          <div className="faq-cards">
            <CustomCard
              title="Escolha seu amigo"
              text="Explore nossa galeria de amigos peludos! De ronrons a abanadas de rabo, você está prestes a se apaixonar. "
            />
            <CustomCard
              title="Conheça os requisitos"
              text="Saiba o que é necessário para dar um lar ao seu novo melhor amigo"
            />
            <CustomCard
              title="Preencha o formulário"
              text="Conte-nos por que você é a pessoa perfeita para dar um lar cheio de carinho"
            />
            <CustomCard
              title="Aguarde a validação"
              text="Conte-nos por que você é a pessoa perfeita para dar um lar cheio de carinho"
            />
            <CustomCard
              title="Resposta"
              text="Conte-nos por que você é a pessoa perfeita para dar um lar cheio de carinho"
            />
            <CustomCard
              title="Entrega"
              text="Conte-nos por que você é a pessoa perfeita para dar um lar cheio de carinho"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
