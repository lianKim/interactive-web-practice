import React, { useEffect } from "react";
import { styled } from "styled-components";
import { getRandomColor, getRandomNumber } from "../../utils/random";
import { useCanvas } from "../../hooks/useCanvas";

export default function ReactHandler() {
  const canvasWidth = 700;
  const canvasHeight = 500;
  const { canvasRef, ctx } = useCanvas(canvasWidth, canvasHeight);

  /**
   * 캔버스 좌클릭 이벤트
   * 마우스 커서 위치에 랜덤(컬러&사이즈) 사각형 만들어주는 함수
   * @param e.nativeEvent
   */
  const drawRandomRect = ({ nativeEvent }) => {
    if (!ctx) alert("No context");

    const { offsetX, offsetY } = nativeEvent;
    const color = getRandomColor(50);
    const width = getRandomNumber(0, canvasWidth - offsetX);
    const height = getRandomNumber(0, canvasHeight - offsetY);

    ctx.fillStyle = color;
    ctx.fillRect(offsetX, offsetY, width, height);
  };

  /**
   * 캔버스 우클릭 이벤트
   * 마우스 커서 위치에서 랜덤(사이즈) 사각형 모양으로 지워주는 함수
   * @param {*} param0
   */
  const eraseRandomly = ({ nativeEvent }) => {
    if (!ctx) alert("No context");
    // 기존 우클릭 이벤트 방지
    nativeEvent.preventDefault();

    const { offsetX, offsetY } = nativeEvent;
    const width = getRandomNumber(50, canvasWidth - offsetX);
    const height = getRandomNumber(50, canvasHeight - offsetY);

    ctx.clearRect(offsetX, offsetY, width, height);
  };

  useEffect(() => {
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#111111";
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
  });

  return (
    <Container>
      <h2>사각형 만들기</h2>
      <p>좌클릭: 생성 / 우클릭: 제거</p>
      <canvas
        ref={canvasRef}
        onClick={drawRandomRect}
        onContextMenu={eraseRandomly}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
