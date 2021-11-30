import Head from "next/head";

const Home = () => {
  return (
    <article>
      <Head>
        <title>Home - Toni Jarjour</title>
        <meta
          name="description"
          content={
            "A blog of many subjects such as programming, music, video" +
            " games, and the humanities. Authored by Toni Jarjour."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </article>
  );
};

export default Home;
