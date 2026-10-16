import Image from "next/image";
import Link from "next/link";
import styles from "../errors/Coordinates404.module.css";
import NomadExplorerMascot from "../errors/NomadExplorerMascot";

const forwardCoordinates = [
  { value: "40.4168 N 3.7038 W", className: styles.coordNw },
  { value: "51.5072 N 0.1276 W", className: styles.coordN },
  { value: "19.4326 N 99.1332 W", className: styles.coordNe },
  { value: "35.6762 N 139.6503 E", className: styles.coordE },
  { value: "34.6037 S 58.3816 W", className: styles.coordSw },
  { value: "37.7749 N 122.4194 W", className: styles.coordW },
  { value: "4.7110 N 74.0721 W", className: styles.coordSe },
  { value: "33.8688 S 151.2093 E", className: styles.coordS },
];

const reverseCoordinates = [
  { value: "48.8566 N 2.3522 E", className: styles.coordNwRev },
  { value: "52.5200 N 13.4050 E", className: styles.coordNRev },
  { value: "55.7558 N 37.6173 E", className: styles.coordNeRev },
  { value: "25.2048 N 55.2708 E", className: styles.coordERev },
  { value: "22.9068 S 43.1729 W", className: styles.coordSwRev },
  { value: "49.2827 N 123.1207 W", className: styles.coordWRev },
  { value: "1.3521 N 103.8198 E", className: styles.coordSeRev },
  { value: "36.8485 S 174.7633 E", className: styles.coordSRev },
];

const defaultTheme = {
  mapBaseStart: "#e8efe9",
  mapBaseMiddle: "#dee8e6",
  mapBaseEnd: "#e9f1ee",
  gridLine: "rgba(17, 24, 39, 0.08)",
  topoStrong: "rgba(17, 24, 39, 0.12)",
  topoMedium: "rgba(17, 24, 39, 0.11)",
  topoSoft: "rgba(17, 24, 39, 0.1)",
  glowPrimary: "rgba(46, 196, 182, 0.14)",
  glowSecondary: "rgba(255, 122, 89, 0.08)",
  vignette: "rgba(17, 24, 39, 0.14)",
  coordinateColor: "rgba(17, 24, 39, 0.8)",
  coordinateShadow: "rgba(247, 244, 239, 0.72)",
  coordinateReverseColor: "rgba(46, 196, 182, 0.86)",
  coordinateReverseShadow: "rgba(17, 24, 39, 0.18)",
  pingColor: "rgba(46, 196, 182, 0.42)",
  dotColor: "#2ec4b6",
  dotShadow: "rgba(46, 196, 182, 0.2)",
  cardBackground: "rgba(255, 255, 255, 0.95)",
  cardBorder: "var(--line)",
  eyebrowColor: "var(--accent)",
  titleColor: "var(--primary)",
  bodyColor: "var(--muted)",
  noteColor: "var(--primary)",
  primaryButtonBackground: "var(--primary)",
  primaryButtonColor: "var(--bg)",
  secondaryButtonBackground: "var(--bg)",
  secondaryButtonColor: "var(--primary)",
  secondaryButtonBorder: "var(--line)",
};

const defaultBrand = {
  prefix: "Desarrollado por",
  name: "WebsNomadas",
  descriptor: "Digital Studio",
  href: "https://www.websnomadas.com",
  logoSrc: "",
  logoAlt: "websnomadas",
};

function buildThemeVars(theme) {
  return {
    "--status-map-base-start": theme.mapBaseStart,
    "--status-map-base-middle": theme.mapBaseMiddle,
    "--status-map-base-end": theme.mapBaseEnd,
    "--status-map-grid-line": theme.gridLine,
    "--status-map-topo-strong": theme.topoStrong,
    "--status-map-topo-medium": theme.topoMedium,
    "--status-map-topo-soft": theme.topoSoft,
    "--status-map-glow-primary": theme.glowPrimary,
    "--status-map-glow-secondary": theme.glowSecondary,
    "--status-map-vignette": theme.vignette,
    "--status-map-coordinate": theme.coordinateColor,
    "--status-map-coordinate-shadow": theme.coordinateShadow,
    "--status-map-coordinate-reverse": theme.coordinateReverseColor,
    "--status-map-coordinate-reverse-shadow": theme.coordinateReverseShadow,
    "--status-map-ping": theme.pingColor,
    "--status-map-dot": theme.dotColor,
    "--status-map-dot-shadow": theme.dotShadow,
  };
}

function ActionButton({ action, theme }) {
  const isPrimary = action.variant !== "secondary";
  const className = isPrimary
    ? "rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
    : "rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:opacity-90";
  const style = isPrimary
    ? {
        backgroundColor: theme.primaryButtonBackground,
        color: theme.primaryButtonColor,
      }
    : {
        backgroundColor: theme.secondaryButtonBackground,
        color: theme.secondaryButtonColor,
        borderColor: theme.secondaryButtonBorder,
      };

  if (action.external) {
    return (
      <a
        href={action.href}
        target={action.target || "_blank"}
        rel={action.rel || "noopener noreferrer"}
        className={className}
        style={style}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className} style={style}>
      {action.label}
    </Link>
  );
}

export default function StatusMapPage({
  eyebrow,
  title,
  description,
  note,
  actions = [],
  brand,
  theme,
  projectLabel,
  projectName,
  mascot,
}) {
  const resolvedTheme = { ...defaultTheme, ...theme };
  const resolvedBrand = { ...defaultBrand, ...brand };
  const mascotNode = mascot === undefined ? <NomadExplorerMascot /> : mascot;

  return (
    <main
      className="relative min-h-screen isolate grid flex-1 overflow-hidden"
      style={buildThemeVars(resolvedTheme)}
    >
      <div className={styles.mapBase} aria-hidden="true" />
      <div className={styles.mapGrid} aria-hidden="true" />
      <div className={styles.mapTopo} aria-hidden="true" />
      <div className={styles.mapGlow} aria-hidden="true" />
      <div className={styles.mapVignette} aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
        aria-hidden="true"
      >
        {forwardCoordinates.map((coordinate) => (
          <span
            key={`forward-${coordinate.value}`}
            className={`${styles.coord} ${coordinate.className}`}
          >
            {coordinate.value}
          </span>
        ))}

        {reverseCoordinates.map((coordinate) => (
          <span
            key={`reverse-${coordinate.value}`}
            className={`${styles.coordReverse} ${coordinate.className}`}
          >
            {coordinate.value}
          </span>
        ))}

        <div className={styles.mapPoint}>
          <span className={styles.mapPing} />
          <span className={`${styles.mapPing} ${styles.mapPingDelay}`} />
          <span className={styles.mapDot} />
        </div>
      </div>

      {mascotNode ? (
        <div className={styles.mascotTrack} aria-hidden="true">
          <div className={styles.mascotNode}>{mascotNode}</div>
        </div>
      ) : null}

      <section className="relative z-20 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-20">
        <div
          className="w-full max-w-2xl rounded-3xl border p-8 text-center shadow-sm backdrop-blur-[1px] md:p-12"
          style={{
            backgroundColor: resolvedTheme.cardBackground,
            borderColor: resolvedTheme.cardBorder,
          }}
        >
          <h1
            className="text-2xl  md:text-3xl font-semibold uppercase tracking-[0.2em]"
            style={{ color: resolvedTheme.eyebrowColor }}
          >
            {eyebrow}
          </h1>
          {/* <h1
            className="mt-4 text-2xl font-bold md:text-5xl"
            style={{ color: resolvedTheme.titleColor }}
          >
            {title}
          </h1> */}
          <p className="mt-6" style={{ color: resolvedTheme.bodyColor }}>
            {description}
          </p>

          {/* {note ? (
            <p
              className="mt-2 text-base font-medium"
              style={{ color: resolvedTheme.noteColor }}
            >
              {note}
            </p>
          ) : null} */}

          {projectLabel && projectName ? (
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
              {projectLabel}:{" "}
              <span className="font-semibold text-primary">{projectName}</span>
            </p>
          ) : null}

          {/* {actions.length ? (
            <nav
              aria-label="Acciones disponibles"
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              {actions.map((action) => (
                <ActionButton
                  key={`${action.href}-${action.label}`}
                  action={action}
                  theme={resolvedTheme}
                />
              ))}
            </nav>
          ) : null} */}

          {resolvedBrand.href && resolvedBrand.name ? (
            <a
              href={resolvedBrand.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${resolvedBrand.prefix} ${resolvedBrand.name} (se abre en una pestaña nueva)`}
              title={resolvedBrand.name}
              className="mt-8 inline-flex items-center justify-center gap-2 text-xs tracking-wide text-muted/90 transition-opacity hover:opacity-80"
            >
              {resolvedBrand.logoSrc ? (
                <Image
                  src={resolvedBrand.logoSrc}
                  alt={resolvedBrand.logoAlt}
                  title={resolvedBrand.logoAlt}
                  loading="lazy"
                  width={40}
                  height={40}
                />
              ) : null}
              <p>
                {resolvedBrand.prefix}{" "}
                <span className="font-semibold">{resolvedBrand.name}</span>
                {resolvedBrand.descriptor ? (
                  <span className="ml-1 uppercase tracking-[0.14em]">
                    {resolvedBrand.descriptor}
                  </span>
                ) : null}
              </p>
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
