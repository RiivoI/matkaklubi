import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigatsioon from "../components/Navigatsioon";


const Pais = () => {
  return (
    <div className={styles.pais}>
      <Navigatsioon />
      <div className={styles.paisAlumine}>
        <div className={styles.paisAlumineSisu}>
          <h2 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH2}`}>CLIMB FOR BETTER</h2>
          <h1 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH1}`}>GET OUT NOW</h1>
          <h4 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH4}`}>JOIN US FOR THE WEEEKEND TO CLIMB THE HIGHEST PEAK IN ENGLAND</h4>
          <button className={styles.paisAlumineSisuNupp}>VIEW UPCOMING TREKS</button>
        </div>
        <div className={styles.paisAluminePilt}></div>
      </div>
    </div>
  )
}

const Teine = () => {
  return (
    <div className={styles.teine}>
    <section className={styles.ylemine}>
     <h3 className={styles.hall}>Choose</h3>
     <h3>These Best Treks For Spring</h3>
    </section>
    <div className={styles.alumine}>
        <div className={styles.vasak}>
          <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec enas
                accumsan lacus vel facilisis.
         </section>
          <div className={styles.nooled}>
            <span className={styles.vasak}>←</span>
            <span clasName={styles.lehekylgVasak}>01</span>
            <span className={styles.kaldkriips}>/</span>
            <span className={styles.lehekylgParem}>06</span>
            <span clasName={styles.parem}>→</span>
         </div>
        </div>
        <div className={styles.parem}>
         <div className={`${styles.pilt} ${styles.pilt1}`}></div>
         <div className={`${styles.pilt} ${styles.pilt2}`}></div>
         <div className={`${styles.pilt} ${styles.pilt3}`}></div>
        </div>
    </div>
</div>
  )
}

const Jalus = () => {
  return (
    <div className={styles.jalus}>
      <Navigatsioon />
      <div className={styles.alumineRida}>
        <div className={styles.alumine}>
                <div className={styles.tekst}>
                <h5>CALL NOW</h5>
                <br></br>
                <h6>1800 888 555</h6>
        </div>
        <div className={styles.keskmine}>
                <section>
                    © Company Name 2020. All rights reserved.
                </section>
        </div>
      </div>.
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Matkaklubi</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Pais />
      <Teine />
      <Jalus />
    </div>
  );
};

export default Home;