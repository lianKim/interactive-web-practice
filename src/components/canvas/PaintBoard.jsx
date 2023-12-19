import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../utils/random";
import { useCanvas } from "../../hooks/useCanvas";

export default function PaintBoard() {
  const { canvasRef, ctx } = useCanvas();
  const [isDrawing, setIsDrawing] = useState(false);

  // onMouseDown 이벤트
  const startDrawing = ({ nativeEvent }) => {
    if (!ctx) return;

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
    if (!ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    if (!ctx) return;

    ctx.lineWidth = 5;
  }, [ctx]);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={keepDrawing}
      onMouseLeave={stopDrawing}
    />
  );
}
