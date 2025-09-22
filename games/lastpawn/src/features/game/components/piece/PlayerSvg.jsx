import styles from "./PieceSvg.module.scss";

const Player = () => {
  return (
    <svg
      className={styles.player}
      // width="64"
      // height="101"
      viewBox="0 0 64 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 81.4861C64 101 64 101 32.057 101C-0.418379 101 -0.418381 101 0.113994 81.4861C0.113994 64.0524 14.4154 49.9195 32.057 49.9195C49.6986 49.9195 64 64.0524 64 81.4861Z"
        fill="url(#paint0_linear_40_3)"
      />
      <path
        d="M54.8571 48.2238C54.8571 61.5287 54.8571 61.5287 32.0407 61.5287C8.84402 61.5287 8.84401 61.5287 9.22428 48.2238C9.22428 36.3372 19.4395 26.7011 32.0407 26.7011C44.6419 26.7011 54.8571 36.3372 54.8571 48.2238Z"
        fill="url(#paint1_linear_40_3)"
      />
      <path
        d="M50.2857 18.5747C50.2857 28.8332 42.0989 37.1494 32 37.1494C21.9011 37.1494 13.7143 28.8332 13.7143 18.5747C13.7143 8.31618 21.9011 0 32 0C42.0989 0 50.2857 8.31618 50.2857 18.5747Z"
        fill="url(#paint2_linear_40_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_3"
          x1="32"
          y1="101"
          x2="32"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#212121" />
          <stop offset="0.517671" stopColor="#555555" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_40_3"
          x1="32"
          y1="101"
          x2="32"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#212121" />
          <stop offset="0.517671" stopColor="#555555" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_40_3"
          x1="32"
          y1="101"
          x2="32"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#212121" />
          <stop offset="0.517671" stopColor="#555555" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Player;
