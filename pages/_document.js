import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const image = '/static/helloworld.jpg'
    return (
      <html>
        <Head>
          <title>Hi there! 🙌</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,400" rel="stylesheet" />
          <meta key="twitter-card" name="twitter:card" content="summary" />
          <meta key="twitter-site" name="twitter:site" content="@was_mee" />
          <meta key="twitter-description" name="twitter:description" />
          <meta key="twitter-image" name="twitter:image" content="https://picsum.photos/g/1200/630?image=1045" />
          <meta key="twitter-description" name="twitter:description" content="" />
          <meta key="facebook-type" property="og:type" content="article" />
          <meta key="facebook-title" property="og:title" content="Hi there 🙌" />
          <meta key="facebook-description" property="og:description" content="" />
          <meta key="facebook-image" property="og:image" content="https://picsum.photos/g/1200/630?image=1045" />
          <meta key="facebook-url" property="og:url" content="https://rappad.github.io/wasuwat/" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
