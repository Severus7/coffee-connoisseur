import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Banner Button");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Find coffee shops near you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        <Card
          name="Darkhorse Coffee"
          href="/coffee-store/darkhorse-coffee"
          imgUrl="/static/hero-image.png"
        />
      </main>
    </div>
  );
}
