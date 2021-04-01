import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Basic Meta Tags */}
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="keywords"
            content="Move, Move.it, Moveit, Move-it Move.it Rockeseat"
          />
          <meta
            name="description"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios."
          />
          <meta name="subject" content="Saúde" />
          <meta name="copyright" content="DanielAraldi" />
          <meta name="language" content="pt-br" />
          <meta name="robots" content="index,follow" />
          <meta
            name="abstract"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios. Criando durante a Next Level Week #04 pela Rocketseat"
          />
          <meta name="Classification" content="Studies" />
          <meta name="author" content="Daniel Sansão Araldi" />
          <meta name="designer" content="" />
          <meta name="copyright" content="" />
          <meta name="owner" content="" />
          <meta name="url" content="https://d-move-it.vercel.app/" />
          <meta name="identifier-URL" content="https://d-move-it.vercel.app/" />
          <meta name="directory" content="submission" />
          <meta name="category" content="Saúde" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />

          {/* Site Meta Tags */}
          <meta property="og:title" content="Move.it" />
          <meta
            property="og:description"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios."
          />
          <meta property="og:image" content="/logo-full.svg" />
          <meta property="og:url" content="https://d-move-it.vercel.app/" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:title" content="Move.it" />
          <meta
            name="twitter:description"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios."
          />
          <meta name="twitter:image" content="/icons/twitter.svg" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://d-move-it.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:updated_time" content="1440432930" />
          <meta property="og:title" content="Move.it" />
          <meta
            property="og:description"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios."
          />
          <meta property="og:image" content="/logo-full.svg" />

          {/* WhatsApp Meta Tags */}

          <meta name="msapplication-TileImage" content="/logo-full.svg" />
          <meta property="og:site_name" content="Move.it" />
          <meta property="og:title" content="Move.it" />
          <meta
            property="og:description"
            content="O Move.it é uma aplicação com intuito de nos ajudar a praticar mais exercícios."
          />
          <meta property="og:image" content="/logo-full.svg" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <meta property="og:url" content="https://d-move-it.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
