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
            "If you the enjoy this blog, consider sending some money." +
            " Any amount is appreciated and it helps me lot."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        If you the enjoy this blog, consider sending some money. Any amount is
        appreciated and it helps me lot.
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
        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 text-base">
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
        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 text-base">
          0xDA15F08Af71c3A4aa9b8DAb8d522a70264B8c56b
        </code>
      </div>
    </article>
  );
};

export default Donate;
