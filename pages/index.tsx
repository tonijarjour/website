import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <article>
      <Head>
        <title>Recent Publications - Toni Jarjour</title>
        <meta
          name="description"
          content={
            "A blog of many subjects such as programming, music, video" +
            " games, and the humanities. Authored by Toni Jarjour."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold">About this blog</h1>
      <p>
        This is a blog of no particular subject. You can expect articles about
        programming, video games, and music. But you should also expect essays
        on philosophy, history, and religion. I will not shy from any topic.
        Thank you for reading.
      </p>
      <br />
      <h2 className="text-2xl font-bold">Recent Publications</h2>
      <br />
      <Link href="/about">
        <a>
          <h3 className="font-bold text-blue-600 dark:text-blue-500">
            About Me
          </h3>
          <p>
            I was born in Damascus and lived in Syria for eight years. In 2005,
            I travelled to America with my parents and brother. The United
            States has been my home for&nbsp;&hellip;
          </p>
        </a>
      </Link>
    </article>
  );
};

export default Home;
