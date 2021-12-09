import Head from "next/head";
import Image from "next/image";

const Donate = () => {
  return (
    <article>
      <Head>
        <title>Donate - Toni Jarjour</title>
        <meta
          name="description"
          content={
            "If you enjoy this blog, consider sending some money." +
            " Any amount is appreciated and it helps me a lot."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold">Donate</h1>
      <p>
        If you enjoy this blog, consider sending some money. Any amount is
        appreciated and it helps me a lot.
      </p>
      <br />
      <div className="space-x-3 text-center">
        Bitcoin&nbsp;
        <Image
          alt="bitcoin logo"
          src="/bitcoin-btc-logo.svg"
          height={20}
          width={20}
        />
        <code className="px-1.5 py-0.5 inline-block w-24 text-sm">
          39LqytCzXVyzzceGYZ1goChg2hZTxaMoqr
        </code>
      </div>
      <div className="space-x-3 text-center">
        Etherium&nbsp;
        <Image
          alt="ethereum logo"
          src="/ethereum-eth-logo.svg"
          height={20}
          width={20}
        />
        <code className="px-1.5 py-0.5 inline-block w-24 text-sm">
          0xDA15F08Af71c3A4aa9b8DAb8d522a70264B8c56b
        </code>
      </div>
    </article>
  );
};

export default Donate;
