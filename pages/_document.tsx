import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Georama:wght@300;400;500;700&display=swap"
            rel="stylesheet"
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
