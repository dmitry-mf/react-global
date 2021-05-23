import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className={"html"}>
        <Head />
        <body className={"body"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument