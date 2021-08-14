import { Layout } from "components/Layout";
import { Banner } from "components/Banner";
import { Row } from "components/Row";
import { requests } from "lib/requests";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <Row title="top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </Layout>
  );
};

export default Home;
