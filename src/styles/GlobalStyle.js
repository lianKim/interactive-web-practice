import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  --black: #000000;
  --ash-black: #222;
  --white: #fafafa;
  --sky: #00ccff;
  --green: #22dddd;
  --blue: #1300ff;
  --dusk: #6600ff;
  --purple: #9900ff;
  --pink: #ff0066;
  --red: #fe0222;
  --orange: #fd7702;
  --yellow: #ffbb00;

  --background: var(--fafafa);
  --accent: lightsalmon;

  margin: 0;
  padding: 0;
  background-color: var(--background);
  color: var(--accent);
}

* {
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-style: normal;
}

h1 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  text-align: center;
  margin: 100px 0 40px;
}

h2 {
  font-weight: 400;
  margin: 50px 0 10px;
}

p {
  margin: 0 0 30px 0;
  font-size: 18px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0) 1px,
    var(--background) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  -moz-backdrop-filter: blur(3px);
  font-size: 14px;
  line-height: 14px;
}

footer::before {
  display: block;
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
  opacity: 0.2;
}

footer svg {
  margin-right: 20px;
}

footer a {
  text-decoration: none;
  color: var(--accent);
}

code {
  font-family: input-mono, monospace;
  font-weight: 400;
  font-style: normal;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
  background: var(--background);
}

html {
  scroll-snap-type: y mandatory;
}

h1 {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.2;
  text-align: center;
  margin: 100px 0;
}

h2 {
  margin: 0;
  color: var(--accent);
  left: calc(50% + 130px);
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.2;
  position: absolute;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;
}

section > div {
  width: 300px;
  height: 400px;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
}

.section-title {
  top: 40px;
  left: 40px;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--accent);
  bottom: 100px;
}

`;

export default GlobalStyles;
