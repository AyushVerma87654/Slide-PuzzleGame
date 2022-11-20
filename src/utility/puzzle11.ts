export const numbers5: any = () => {
  let a: number[] = [];
  while (a.length < 120) {
    let x = Math.round(Math.random() * 120);
    if (x == 0) {
      continue;
    }
    let token = true;
    a.map((item) => {
      if (x == item) {
        token = false;
      }
    });
    if (token) {
      a = [...a, x];
    }
  }
  const result = check(a);
  if (result) {
    return [...a, ""];
  } else {
    return numbers5();
  }
};

export const check = (a: (string | number)[]) => {
  let t = 0;
  for (let j = 0; j < a.length - 1; j++) {
    const x = a[j];
    for (let i = j + 1; i < a.length; i++) {
      if (x > a[i]) {
        t++;
      }
    }
  }
  // console.log("Inversion", t);
  // console.log("Array", a);

  if (t % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

export const calculate5 = (num: number, string: number) => {
  const x = 11;
  if (num % x == 0) {
    if (string == num + 1 || string == num - x || string == num + x) {
      return true;
    }
  } else if (num % x == x - 1) {
    if (string == num - 1 || string == num - x || string == num + x) {
      return true;
    }
  } else {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  }

  return false;
};
