import { useEffect, useRef, useState } from "react";
/**
 * 캔버스 초기 설정해주는 hook
 * @param {number} canvasWidth 너비
 * @param {number} canvasHeight 높이
 * @returns useRef, context
 */
export const useCanvas = (canvasWidth, canvasHeight) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;

    // 캔버스 기본 세팅
    const setCanvas = () => {
      // 캔버스 크기 설정
      const width = canvasWidth || window.innerWidth;
      const height = canvasHeight || window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      // 고해상도 화면 대응
      const devicePixelRatio = window.devicePixelRatio ?? 1;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      context.scale(devicePixelRatio, devicePixelRatio);

      // 스타일 설정
      context.lineWidth = 5;
      context.strokeStyle = "salmon";
      context.fillStyle = "purple";
    };
    setCanvas();
    setCtx(context);
  }, [canvasWidth, canvasHeight]);

  return { canvasRef, ctx };
};
