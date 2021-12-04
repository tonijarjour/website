import Head from "next/head";

const Article = () => {
  return (
    <article>
      <Head>
        <title>How to start a website with Next.js and TailwindCSS</title>
        <meta
          name="description"
          content={
            "Learn how to start your own nextjs project while avoiding" +
            " many of the pitfalls of being a beginner."
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-2xl">
        How to start a website with Next.js and TailwindCSS
      </h1>
      <p>
        This website was created with the afformentioned tools. I feel that it
        is appropriate for the first article to be a guide on how to use them.
      </p>
      <br />
      <h2 className="font-bold">Next.js Setup</h2>
      <p className="mb-4">Install nodejs and npm, then create the project:</p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"pacman -S nodejs npm\n" + "npx create-next-app@latest --typescript"}
      </pre>
      <p className="mb-4">
        The contents of the project directory can look intimidating. Relax!
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {".eslintrc.json\t .git\t .gitignore\n" +
          "next.config.js\t\t" +
          "next-env.d.ts\n" +
          "node_modules\t\t" +
          "package.json\n" +
          "package-lock.json\t" +
          "pages\n" +
          "public\t\t\t\t" +
          "README.md\n" +
          "styles\t\t\t\t" +
          "tsconfig.json"}
      </pre>
      <p className="mb-4">
        The <code className="code-in-text">README.md</code> just tells us to use{" "}
        <code className="code-in-text">npm run dev</code> to start the
        development server. We can then head to{" "}
        <code className="code-in-text">localhost:3000</code> in a web browser to
        see our webpage. As for the <code className="code-in-text">public</code>{" "}
        directory, it contains a{" "}
        <code className="code-in-text">vercel.svg</code> image file that we do
        not need. Delete these files.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"rm README.md public/vercel.svg"}
      </pre>
      <p className="mb-4">
        Inside the <code className="code-in-text">styles</code>directory there
        is a <code className="code-in-text">Home.module.css</code> file that is
        used to style the index page. Since we are using tailwindcss, you won&apos;t
        need it. As for the <code className="code-in-text">pages</code>{" "}
        directory, we can delete <code className="code-in-text">api</code>
        to simplify the structure while getting started. You can add an api to
        your website later.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"rm -rf pages/api styles/Home.module.css"}
      </pre>
      <p className="mb-4">
        Alright, lets simplify{" "}
        <code className="code-in-text">pages/index.tsx</code>. Clear everything
        inside and add the following boilerplate:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {'import Head from "next/head";\n' +
          "const Home = () => {\n" +
          "  return (\n" +
          "    <article>\n" +
          "      <Head>\n" +
          "        <title>Home Page</title>\n" +
          '        <meta name="description"\n' +
          '          content="Welcome to my website" />\n' +
          '        <link rel="icon" href="/favicon.ico" />\n' +
          "      </Head>\n" +
          "      <h1>Hello, World!</h1>\n" +
          "    </article>\n" +
          "  );\n" +
          "};\n" +
          "export default Home;\n"}
      </pre>
      <p>
        We need the <code className="code-in-text">Head</code> element to set
        the title and description of the page. Do not neglect these. The link
        element ensures all browsers will find the favicon.
      </p>
      <p className="mb-4">
        We will make a custom document to set the{" "}
        <code className="code-in-text">lang</code> property. This is important
        for accessibility through language translation. Create a{" "}
        <code className="code-in-text">pages/_document.tsx</code> file and add
        the following but change <code className="code-in-text">en-US</code> if
        you are not writing in English.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"import Document, {\n" +
          "  DocumentContext,\n" +
          "  Html,\n" +
          "  Head,\n" +
          "  Main,\n" +
          "  NextScript,\n" +
          '} from "next/document";\n' +
          "\n" +
          "class MyDocument extends Document {\n" +
          "  static async getInitialProps(ctx: DocumentContext) {\n" +
          "    const initialProps = await Document.getInitialProps(ctx);\n" +
          "    return initialProps;\n" +
          "  }\n" +
          "\n" +
          "  render() {\n" +
          "    return (\n" +
          '      <Html lang="en-US">\n' +
          "        <Head />\n" +
          "        <body>\n" +
          "          <Main />\n" +
          "          <NextScript />\n" +
          "        </body>\n" +
          "      </Html>\n" +
          "    );\n" +
          "  }\n" +
          "}\n" +
          "\n" +
          "export default MyDocument;"}
      </pre>

      <p className="mb-4">
        The final step in this initial setup is to create a layout. This is a
        feature that makes every page on the website have a header, sidebar, and
        footer automatically. You&apos;ll only need to implement each of these
        elements once. Create a<code className="code-in-text">components</code>{" "}
        directory and a <code className="code-in-text">layout.tsx</code> file
        inside.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"mkdir components\ntouch components/layout.tsx"}
      </pre>
      <p>
        Inside <code className="code-in-text">layout.tsx</code> add the
        following code. Feel free to change it to your liking. Note that the
        type of <code className="code-in-text">children</code> is{" "}
        <code className="code-in-text">React.ReactNode</code>.{" "}
        <code className="code-in-text">children</code> always uses this type.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"type LayoutProps = {\n" +
          "  children: React.ReactNode,\n" +
          "};\n" +
          "\n" +
          "const Layout = ({ children }: LayoutProps) => {\n" +
          "  return (\n" +
          "    <div>\n" +
          "      <header>Greetings</header>\n" +
          "      <main>{children}</main>\n" +
          "      <footer>Thank you for reading</footer>\n" +
          "    </div>\n" +
          "  );\n" +
          "};\n" +
          "\n" +
          "export default Layout;"}
      </pre>
      <p>
        Finally, lets place the page content within the layout. Edit{" "}
        <code className="code-in-text">pages/_app.tsx</code> and place the{" "}
        <code className="code-in-text">Component</code> element inside{" "}
        <code className="code-in-text">Layout</code>. Don&apos;t forget the import
        statement.
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {'import "../styles/globals.css"\n' +
          'import type { AppProps } from "next/app"\n' +
          'import Layout from "../components/layout"\n' +
          "\n" +
          "function MyApp({ Component, pageProps }: AppProps) {\n" +
          "  return (\n" +
          "    <Layout>\n" +
          "      <Component {...pageProps} />\n" +
          "    </Layout>\n" +
          "  )\n" +
          "}\n" +
          "\n" +
          "export default MyApp"}
      </pre>
      <p>
        Now, any page you visit on the website will have the header and footer
        text. Try going to{" "}
        <code className="code-in-text">localhost::3000/not-a-page</code>. You
        will still see the header and footer, even though the page was not
        found. Let&apos;s move on to tailwindcss.
      </p>
      <h2 className="font-bold">TailwindCSS Setup</h2>
      <p className="mb-4">
        Install tailwindcss and generate a configuration file:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"npm install -D tailwindcss@latest postcss@latest autoprefixer@latest\n" +
          "npx tailwindcss init -p"}
      </pre>
      <p>
        Inside <code className="code-in-text">tailwind.config.js</code> we need
        to tell tailwind which directories contain our development files. Change
        the purge option to the following:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {
          'purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],'
        }
      </pre>
      <p>
        Finally, clear out{" "}
        <code className="code-in-text">styles/globals.css</code> and add this at
        the top:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}
      </pre>
      <p>
        There are many paths forward from here. If you need to set some
        universal styles with tailwind, do it inside{" "}
        <code className="code-in-text">pages/_document.tsx</code>. For example,
        set the font size, color, and family on the{" "}
        <code className="code-in-text">body</code> element. If you are
        implementing dark mode, you should also set the background color here:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {'<body className="text-xl text-gray-700 font-sans dark:bg-gray-800">'}
      </pre>
      <p>
        The <code className="code-in-text">dark</code> class would have to go
        inside the <code className="code-in-text">html</code> element:
      </p>
      <pre className="my-2 p-5 w-full overflow-x-scroll">
        {'<html lang="en-US" className="dark">'}
      </pre>
      <p>
      That&apos;s it. I wish you good luck on your web development journey.
      </p>
    </article>
  );
};

export default Article;
