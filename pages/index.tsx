import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import HomeSection from "../components/HomeSection";
import HomeSectionData from "../data/HomeSection";
import SmallCard from "../components/SmallCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthorCard from "../components/AuthorCard";
import { connectToDatabase } from "../utils/mongodb";
import { GetServerSideProps } from "next";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 200,
        width: "100%",
      }}
    >
      <Header />
      <main className={styles.container}>
        <div className={styles.firstSection}>
          <div
            style={{
              maxWidth: 600,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <h1>Construa uma audiência.</h1>
            <p style={{ marginBottom: 30 }} className={styles.normalText}>
              Use a facilidade da Newsly para construir e engajar a sua
              audiência através do email.
            </p>
            <Button text="Saiba mais" />
          </div>
          <div>
            <img src="/home/first.svg" width={353} height={401} alt="" />
          </div>
        </div>

        <div className={styles.smallCardContainer}>
          <SmallCard step={1} text="Você cria a sua conta em alguns segundos" />
          <SmallCard
            step={2}
            text="Cadastre manualmente ou importe a sua lista de contatos."
          />
          <SmallCard
            step={3}
            text="Crie campanhas (pagas ou não) para seus seguidores."
          />
        </div>

        {HomeSectionData.map(({ title, text, id, imageSide, image }) => {
          return (
            <HomeSection
              title={title}
              key={id}
              text={text}
              imageSide={imageSide}
              image={image}
            >
              <img src={`/home/${image}.svg`} width={353} height={401} alt="" />
            </HomeSection>
          );
        })}

        <h2
          className={styles.subTitleHome}
          style={{ maxWidth: 700, marginBottom: 30 }}
        >
          Junte-se com mais de 1200 escritores e crie sua audiência
        </h2>
        <div className={styles.cardContainer}>
          <AuthorCard
            authorName="Gabriel Lara"
            authorTheme="escreve sobre ações e renda variável"
          />
          <AuthorCard
            authorName="Gabriel Lara"
            authorTheme="escreve sobre ações e renda variável"
          />
          <AuthorCard
            authorName="Gabriel Lara"
            authorTheme="escreve sobre ações e renda variável"
          />
          <AuthorCard
            authorName="Gabriel Lara"
            authorTheme="escreve sobre ações e renda variável"
          />
        </div>
        <Button text="Quero começar" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { db } = await connectToDatabase();
//   const data = await db.collection("users").find({}).toArray();

//   const users = JSON.parse(JSON.stringify(data));

//   console.log(users);
//   return {
//     props: { users: users },
//   };
// };
