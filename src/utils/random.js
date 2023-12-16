/**
 * 랜덤 컬러 코드 반환하는 함수
 * @param {number} opacity 0~100 사이의 정수
 * @returns {string} 랜덤 RGB(A) 컬러코드
 */
export const getRandomColor = (opacity) => {
  return (
    "#" + Math.floor(Math.random() * 16777215).toString(16) + (opacity || "")
  );
};

/**
 * min ~ max 사이의 랜덤한 정수 반환하는 함수
 * @param {number} min
 * @param {number} max
 * @returns {number} 랜덤 숫자
 */
export const getRandomNumber = (min = 0, max = 500) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
