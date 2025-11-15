import Head from "next/head";
import Header from "../components/Header/Header.js";
import Table from "../components/Table/Table.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Lista de filmes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Table />

    </>
  );
}
