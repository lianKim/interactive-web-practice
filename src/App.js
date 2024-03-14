import { styled } from "styled-components";
import SectionsParallax from "./components/framerMotion/SectionsParallax";
import GlobalStyles from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <SectionsParallax />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: #f5f5f5;
`;
