import Navbar from "@components/Navbar/Navbar";
import styles from "@styles/Home.module.css";
import CodeSnippet from "assets/code";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.landingmain}>
        <div className={styles.landing}>
          <h1 className={styles.bannertxt}>
            <span className={styles.bluetext}>Supercharge</span> your{" "}
            <span className={styles.bluetext}>CLI</span>
          </h1>
          <div className={styles.subbannertext}>
            <span className={styles.bluetext}>Zeta is a programming language designed</span> for
            CLI applications <br />
            and is built for
            <span className={styles.bluetext}>
              {" "}
              speed, efficiency, and ease of use.
            </span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.buttonblue}>Get Started!</button>
            <button className={styles.buttonwhite}>Try it out!</button>
          </div>
        </div>
        <div className={styles.codesnippet}>
          <CodeSnippet />
        </div>
      </div>
    </main>
  );
}
