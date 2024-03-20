import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ValuesGrid } from '@/components/ValuesGrid/ValuesGrid';
import { ValuesGridProps } from '@/components/ValuesGrid/ValuesGrid.types';
import { CtaSubscribe } from '@/components/CtaSubscribe/CtaSubscribe';
import { CtaSubscribeProps } from '@/components/CtaSubscribe/CtaSubscribe.types';

const inter = Inter({ subsets: ["latin"] });

const valuesGridProps: ValuesGridProps = {
  items: [
    {
      icon: '/images/excellence.svg',
      title: 'Solutions-obsessed since day one.',
      text: 'Since 1972, LEESON Motors has been obsessing over creating the world\'s best motors and motor solutions.',
    },
    {
      icon: '/images/engineering.svg',
      title: 'Engineering Innovation',
      text: 'Patented designs and a spirit of innovation allow us to design for the future with your applications in mind.',
    },
    {
      icon: '/images/washdown.svg',
      title: 'Washdown Excellence',
      text: 'The LEESON washdown motor line offers a range of IP ratings to protect your operations no matter how extreme the conditions.',
    },
  ],
};

const ctaSection: CtaSubscribeProps = {
  title: 'Subscribe to Email Updates',
  text: 'Learn about the latest product announcements, industry news, and cutting-edge insights!',
  form: {
    buttonText: 'Subscribe',
    placeholder: 'Enter your email',
    agreementText: 'By subscribing you agree to our ',
    privacyPolicyText: 'Privacy Policy',
    privacyPolicyUrl: 'https://motors.leeson.com/privacy-policy',
  },
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
        <CtaSubscribe {...ctaSection} />
      </main>
    </>
  );
}
