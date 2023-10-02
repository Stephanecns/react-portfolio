import '../app/style/globals.css';
import Head from 'next/head'; // Ajout de l'importation de Head
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stéphane Cinéas Portfolio',
  description: "Transformer vos visions en réalités web captivantes. De la création d'applications web responsives à l'optimisation de votre présence en ligne, je maîtrise l'art de l'intégration avec passion et précision. Découvrez mon expertise en HTML, CSS, JavaScript, React et plus encore. Donnez vie à vos idées, explorons ensemble.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
