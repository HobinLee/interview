export function shuffle<T>(arr: T[]): T[] {
  const length = arr.length;

  arr.forEach((element: T, idx: number) => {
    const target = Math.floor(Math.random() * length);

    arr[idx] = arr[target];
    arr[target] = element;
  });

  return arr;
}

//질문 n개 뽑기
export function draw<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}
