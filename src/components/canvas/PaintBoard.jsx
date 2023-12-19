import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { getRandomColor } from "../../utils/random";

export default function PaintBoard() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  // onMouseDown 이벤트
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    ctx.beginPath();
    const strokeColor = getRandomColor();
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  // onMouseMove 이벤트
  const keepDrawing = ({ nativeEvent }) => {
    if (!ctx || !isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;

    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  // onMouseUp, onMouseLeave 이벤트
  const stopDrawing = () => {
    ctx.closePath();
    setIsDrawing(false);
  };

  // ctx에 canvas의 context 담기
  useEffect(() => {
    if (!canvasRef?.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.lineWidth = 5;

    setCtx(context);
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={keepDrawing}
      onMouseLeave={stopDrawing}
    />
  );
}

const Canvas = styled.canvas`
  background-color: black;
`;
