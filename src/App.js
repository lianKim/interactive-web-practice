import { styled } from "styled-components";
import DancingStickman from "./components/threejs/DancingStickman";

export default function App() {
  return (
    <Container>
      <DancingStickman />
    </Container>
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
