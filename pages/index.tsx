import { Layout } from "components/Layout";
import { Banner } from "components/Banner";
import { Row } from "components/Row";
import { requests } from "lib/requests";
import type { NextPage } from "next";
import { Nav } from "components/Nav";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Banner />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSFMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} /> */}
    </Layout>
  );
};

export default Home;
