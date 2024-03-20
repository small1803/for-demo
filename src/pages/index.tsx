import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ValuesGrid } from '@/components/ValuesGrid/ValuesGrid';
import { ValuesGridProps } from '@/components/ValuesGrid/ValuesGrid.types';

const inter = Inter({ subsets: ["latin"] });

const valuesGridProps: ValuesGridProps = {
  items: [
    {
      icon: 'https://assets-global.website-files.com/654e7bd3b40ef7d01e71acd3/65d61bdca2e83dd06d8c79f7_Excellence.svg',
      title: 'Solutions-obsessed since day one.',
      text: 'Since 1972, LEESON Motors has been obsessing over creating the world\'s best motors and motor solutions.',
    },
    {
      icon: 'https://assets-global.website-files.com/654e7bd3b40ef7d01e71acd3/65d61be323d7816c8c8368cf_Engineering.svg',
      title: 'Engineering Innovation',
      text: 'Patented designs and a spirit of innovation allow us to design for the future with your applications in mind.',
    },
    {
      icon: 'https://assets-global.website-files.com/654e7bd3b40ef7d01e71acd3/65d61bec499f00c3dd5a31f3_Washdown.svg',
      title: 'Washdown Excellence',
      text: 'The LEESON washdown motor line offers a range of IP ratings to protect your operations no matter how extreme the conditions.',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ValuesGrid {...valuesGridProps} />
      </main>
    </>
  );
}
