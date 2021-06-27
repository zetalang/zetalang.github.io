import Document, { Html, Head, Main, NextScript } from "next/document";
const prefix = "/";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Zeta Lang</title>
          <meta charSet="UTF-8" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:title"
            content="The official home of the Zeta Programming Language"
          />
          <meta
            property="og:description"
            content="Hi this is the home page of Zeta programming language's website. You can try the language out or even learn how to contribute
            "
          />
          <meta property="og:image" content={prefix + "/logo.svg"} />
          <meta property="og:url" content="https://Zetacli.com/" />
          <meta property="og:site_name" content="Zeta Programming language" />

          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
          <meta
            name="description"
            content="The official home of the Zeta Programming Language"
          />
          <meta
            name="keywords"
            content="Zeta language, Zeta programming language, Zeta, Zeta cli"
          />
          <meta name="author" content="Contributors to Zetacli/zetac" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
