// from 보다 같거나 크고, to 보다 작은 랜덤 숫자 가져오기
export function random(to: number, from: number = 0): number {
  return ~~(Math.random() * to) + from;
}

export function shuffle<T>(arr: T[]): T[] {
  const length = arr.length;

  arr.forEach((element: T, idx: number) => {
    const target = random(length);

    arr[idx] = arr[target];
    arr[target] = element;
  });

  return arr;
}

//질문 n개 뽑기
export function draw<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}
