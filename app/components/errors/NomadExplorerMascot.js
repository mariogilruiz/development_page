import styles from "./NomadExplorerMascot.module.css";

export default function NomadExplorerMascot() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        aria-hidden="true"
        viewBox="0 0 220 200"
        className={styles.svg}
        role="presentation"
        focusable="false"
      >
        <ellipse cx="110" cy="180" rx="52" ry="12" className={styles.shadow} />

        <g className={styles.character}>
          <circle cx="110" cy="58" r="26" className={styles.skin} />
          <path
            d="M84 56c6-18 18-28 28-28 13 0 22 7 26 20-8 2-14 3-21 3-12 0-22 2-33 5z"
            className={styles.hair}
          />

          <circle cx="101" cy="58" r="2.7" className={styles.eye} />
          <circle cx="119" cy="58" r="2.7" className={styles.eye} />
          <path d="M104 70c3 3 9 3 12 0" className={styles.mouth} />

          <rect
            x="80"
            y="86"
            width="60"
            height="58"
            rx="18"
            className={styles.jacket}
          />
          <rect
            x="74"
            y="96"
            width="14"
            height="40"
            rx="7"
            className={styles.arm}
          />
          <rect
            x="132"
            y="96"
            width="14"
            height="40"
            rx="7"
            className={styles.arm}
          />

          <rect
            x="93"
            y="142"
            width="16"
            height="30"
            rx="7"
            className={styles.pants}
          />
          <rect
            x="111"
            y="142"
            width="16"
            height="30"
            rx="7"
            className={styles.pants}
          />
          <rect
            x="88"
            y="170"
            width="24"
            height="8"
            rx="4"
            className={styles.boot}
          />
          <rect
            x="108"
            y="170"
            width="24"
            height="8"
            rx="4"
            className={styles.boot}
          />

          <rect
            x="66"
            y="88"
            width="16"
            height="52"
            rx="8"
            className={styles.backpack}
          />
          <rect
            x="70"
            y="110"
            width="8"
            height="6"
            rx="3"
            className={styles.packDetail}
          />

          <g className={styles.mapCard}>
            <rect
              x="134"
              y="102"
              width="30"
              height="20"
              rx="4"
              className={styles.mapPaper}
            />
            <path d="M138 118l6-10 7 7 6-8" className={styles.mapLine} />
          </g>

          <g className={styles.compass}>
            <circle cx="154" cy="74" r="10" className={styles.compassRing} />
            <path d="M154 67l3 6-3 7-3-7z" className={styles.compassNeedle} />
          </g>
        </g>
      </svg>
    </div>
  );
}
