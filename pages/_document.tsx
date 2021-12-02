import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en-US" className="dark">
        <Head />
        <body
          className={
            "dark:bg-gray-800 text-xl font-sans text-gray-700" +
            " dark:text-gray-300 subpixel-antialiased dark:antialiased"
          }>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
