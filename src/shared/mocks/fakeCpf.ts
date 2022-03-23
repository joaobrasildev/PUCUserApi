export function fakeCpf(): string {
  const num1 = getRandomHundred();
  const num2 = getRandomHundred();
  const num3 = getRandomHundred();

  const dig1 = getDig(num1, num2, num3);
  const dig2 = getDig(num1, num2, num3, dig1);

  return `${num1}${num2}${num3}${dig1}${dig2}`;
}

function getDig(n1, n2, n3, n4?) {
  const nums = n1.split('').concat(n2.split(''), n3.split(''));

  if (n4 !== undefined) {
    nums[9] = n4;
  }

  let x = 0;

  for (let i = n4 !== undefined ? 11 : 10, j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }

  const y = x % 11;
  return y < 2 ? 0 : 11 - y;
}

function getRandomHundred() {
  const randomHundred = Math.floor(Math.random() * 999);
  return `${randomHundred}`.padStart(3, '0');
}
