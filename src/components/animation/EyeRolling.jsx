import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function EyeRolling() {
  const eyeRef = useRef(null);

  const moveEye = (e) => {
    const eye = eyeRef.current;
    if (!eye) return;

    const eyeX = eye.getBoundingClientRect().left + eye.offsetWidth / 2; // 눈알 가로 중심 위치
    const eyeY = eye.getBoundingClientRect().top + eye.offsetHeight / 2; // 눈알 세로 중심 위치
    const { clientX: mouseX, clientY: mouseY } = e; // 마우스 위치 가져오기
    const deltaX = mouseX - eyeX; // 마우스와 눈알 가로 거리
    const deltaY = mouseY - eyeY; // 마우스와 눈알 세로 거리
    const angle = Math.atan2(deltaY, deltaX); // 마우스와 눈알 사이의 각도 계산
    const distanceX = Math.min(Math.hypot(deltaX, deltaY), 15); // 눈알이 움직일 최대 거리 제한 (좌우)
    const distanceY = Math.min(Math.hypot(deltaX, deltaY), 25); // 눈알이 움직일 최대 거리 제한 (상하)

    const translateX = Math.cos(angle) * distanceX + "px"; // X 축으로 이동할 거리
    const translateY = Math.sin(angle) * distanceY + "px"; // Y 축으로 이동할 거리

    eye.style.transform = `translate(${translateX}, ${translateY})`; // 눈알 이동
  };

  useEffect(() => {
    if (!eyeRef.current) return;

    document.addEventListener("mousemove", moveEye);

    return () => {
      document.removeEventListener("mousemove", moveEye);
    };
  }, [eyeRef]);

  return (
    <Eye>
      <Pupil ref={eyeRef} />
    </Eye>
  );
}

const Eye = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 110px;
  background-color: #fff;
  border-radius: 50%;
  /* border: 1px solid #111; */
  border: 2px solid #fff;
  cursor: none; /* 기본 마우스 커서 숨기기 */
`;

const Pupil = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 25px);
  width: 50px;
  height: 60px;
  background-color: #111;
  border-radius: 50%;
  pointer-events: none; /* 마우스 이벤트 무시 */
  transition: transform 0.3s ease-out;
`;
