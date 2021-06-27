import styles from "./Nav.module.css";
import Link from "next/link";
import TwitterIcon from "assets/twittericon";
import GithubIcon from "assets/githubicon";
import DiscordIcon from "assets/discordicon";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src="/logo.svg" width="50em" height="50em"></img>
      <div className={styles.navlink}>
        <Link href="/docs">
          <div className={styles.link}>Documentation</div>
        </Link>
        <Link href="/community">
          <div className={styles.link}>Community</div>
        </Link>
        <Link href="/installation">
          <div className={styles.link}>Installation</div>
        </Link>
        <Link href="/Blog">
          <div className={styles.link}>Blog</div>
        </Link>
      </div>
      <div className={styles.smlinks}>
        <Link href="https://github.com/zetacli">
          <div className={styles.link}>
            <GithubIcon width={"1.5em"} height={"1.5em"} />
          </div>
        </Link>
        <Link href="https://twitter.com/zetacli">
          <div className={styles.link}>
            <TwitterIcon width={"1.5em"} height={"1.5em"} />
          </div>
        </Link>
        <Link href="https://discord.com/invite/wY9NsfGFDP">
          <div className={styles.link}>
            <DiscordIcon width={"1.5em"} height={"1.5em"} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
