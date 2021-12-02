import Head from "next/head";

const About = () => {
  return (
    <article>
      <Head>
        <title>About - Toni Jarjour</title>
        <meta
          name="description"
          content={
            "Born in Damascus, Syria. Toni is a software engineer," +
            " guitarist, and composer."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold">About Me</h1>
      <p>
        Hello, my name is Toni. I like to create software that is simple and
        fast. My favorite language is Rust.
      </p>
      <br />
      <h2 className="font-bold">History</h2>
      <p>
        I was born in Damascus and lived in Syria for eight years. In 2005, I
        travelled to America with my parents and brother. The United States has
        been my home for 16 years. Now, my goal is to move to France. To me, it
        is a country that combines the best parts of Syria and The US.
      </p>
      <br />
      <h2 className="font-bold">Education</h2>
      <p>
        I recieved a high school diploma in 2016. In the following two years, I
        went to community college and recieved an associate&apos;s degree for
        computer networking. I would like to continue school, but can neither
        afford nor justify the cost. If the opportunity presented itself, I
        would study philosophy or history. These disciplines would improve my
        writing, and better enable me to put my deepest thoughts and beliefs
        into word.
      </p>
      <br />
      <h2 className="font-bold">Pursuits</h2>
      <p>
        I am studying classical guitar and musical composition. Throughout my
        life, music has been a dear friend; I would like to compose and play my
        own.
      </p>
      <p>
        As a child, I dreamt of being a game developer. I intend to start making
        games as I progress my skills in computer science and music. A big
        inspiration for me in this regard is the Stardew Valley creator Eric
        Barone. He makes his games completely on his own, and they are true
        works of art. That is the level of quality I aspire to achieve.
      </p>
    </article>
  );
};

export default About;
