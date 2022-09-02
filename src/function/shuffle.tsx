/**
 *
 * @param targetArray - game에서 fetch 받아온 array. targetArray는 참 - 거짓 순으로 이루어져있음
 * @returns - 순서 상관없이 섞어서(Fisher-Yates shuffle 사용) return함
 */
export function shuffleArray(targetArray: any) {
  for (let i = targetArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
  }
  return targetArray;
}
