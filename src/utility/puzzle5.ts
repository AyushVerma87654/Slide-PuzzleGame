import { num, set } from "../Models";
import { swap2, swap3, swap4 } from "./newpuzzle";
export const numbers5: any = () => {
  let a: number[] = [];
  while (a.length < 24) {
    let x = Math.round(Math.random() * 24);
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
  const x = 5;
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

export const short = (
  x: number,
  first: number,
  second: number,
  third: number,
  fourth: number,
  last: number,
  num: number,
  string: number,
  totalNumbers: (number | string)[],
  setTotalNumbers: (a: (number | string)[]) => void
) => {
  if (string == first && num == last) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = array[string + 3 * x];
    array[string + 3 * x] = array[string + 4 * x];
    array[string + 4 * x] = "";
    setTotalNumbers(array);
  } else if (string == last && num == first) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = array[string - 3 * x];
    array[string - 3 * x] = array[string - 4 * x];
    array[string - 4 * x] = "";
    setTotalNumbers(array);
  } else if (string == first && num == fourth) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = array[string + 3 * x];
    array[string + 3 * x] = "";
    setTotalNumbers(array);
  } else if (string == fourth && num == first) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = array[string - 3 * x];
    array[string - 3 * x] = "";
    setTotalNumbers(array);
  } else if (string == first && num == third) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == third && num == first) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == second && num == last) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = array[string + 3 * x];
    array[string + 3 * x] = "";
    setTotalNumbers(array);
  } else if (string == last && num == second) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = array[string - 3 * x];
    array[string - 3 * x] = "";
    setTotalNumbers(array);
  } else if (string == second && num == fourth) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == fourth && num == second) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == third && num == last) {
    let array = [...totalNumbers];
    array[string] = array[string + x];
    array[string + x] = array[string + 2 * x];
    array[string + 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == last && num == third) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = "";
    setTotalNumbers(array);
  }
};

export const cal3 = (
  num: number,
  string: number,
  totalNumbers: (number | string)[],
  setTotalNumbers: (a: (number | string)[]) => void
) => {
  for (let i = 0; i < 5; i++) {
    const x = 5;
    short(
      5,
      i,
      i + x,
      i + 2 * x,
      i + 3 * x,
      i + 4 * x,
      num,
      string,
      totalNumbers,
      setTotalNumbers
    );
    short(
      1,
      i * x,
      i * x + 1,
      i * x + 2,
      i * x + 3,
      i * x + 4,
      num,
      string,
      totalNumbers,
      setTotalNumbers
    );
  }
};

export const cal5 = (num: number, string: number, array: num, set: set) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        if (j % 5 == i % 5 && i - j != -5) {
          if (i - j != 5) {
            if (i == num && j == string) {
              fun(num, string, array, set);
            }
          }
        } else if (i - j == 1 || j - i == 1) {
        } else {
          for (let z = 0; z < 5; z++) {
            if (
              i >= z * 5 &&
              j >= z * 5 &&
              i <= (z + 1) * 5 - 1 &&
              j <= (z + 1) * 5 - 1
            ) {
              if (i == num && j == string) {
                fun(num, string, array, set);
              }
            }
          }
        }
      }
    }
  }
};

export const fun = (num: number, string: number, array: num, set: set) => {
  let direction = 1;
  if (num < string) {
    direction = -1;
  }
  console.log("y", direction);
  console.log("a,b", num, string);
  const x = (num - string) / 5;
  for (let i = 2; i < 5; i++) {
    if (num - string == i || string - num == i) {
      aa(num, string, i, 1, direction, array, set);
      console.log(i);
      console.log("a,b", num, string);
    } else if (x == i || x * -1 == i) {
      console.log(i);
      aa(num, string, i, 5, direction, array, set);
      console.log("a,b", num, string);
    }
  }
};

export const aa = (
  num: number,
  string: number,
  swap: number,
  next: number,
  direction: number,
  array: num,
  set: set
) => {
  let p = string;
  if (array[num] == "") {
    p = num;
  }
  if (swap == 2) {
    swap2(p, direction, next, array, set);
  } else if (swap == 3) {
    swap3(p, direction, next, array, set);
  } else if (swap == 4) {
    swap4(p, direction, next, array, set);
  }
};

// export const fun = (a: number, b: number) => {
//   for (let i = 2; i < 5; i++) {
//     const x = (a - b) / 5;
//     if (x == i || x * -1 == i) {
//       console.log(i);
//       console.log("a,b", a, b);
//     }
//   }
// };

// export const calculate5 = (num: number, string: number) => {
//   const x = 5;
//   if (num == 0 || num == x || num == 2 * x || num == 3 * x || num == 4 * x) {
//     if (string == num + 1 || string == num - x || string == num + x) {
//       return true;
//     }
//   } else if (
//     num == 1 ||
//     num == x + 1 ||
//     num == 2 * x + 1 ||
//     num == 3 * x + 1 ||
//     num == 4 * x + 1
//   ) {
//     if (
//       string == num - 1 ||
//       string == num + 1 ||
//       string == num - x ||
//       string == num + x
//     ) {
//       return true;
//     }
//   } else if (
//     num == 2 ||
//     num == x + 2 ||
//     num == 2 * x + 2 ||
//     num == 3 * x + 2 ||
//     num == 4 * x + 2
//   ) {
//     if (
//       string == num - 1 ||
//       string == num + 1 ||
//       string == num - x ||
//       string == num + x
//     ) {
//       return true;
//     }
//   } else if (
//     num == 3 ||
//     num == x + 3 ||
//     num == 2 * x + 3 ||
//     num == 3 * x + 3 ||
//     num == 4 * x + 3
//   ) {
//     if (
//       string == num - 1 ||
//       string == num + 1 ||
//       string == num - x ||
//       string == num + x
//     ) {
//       return true;
//     }
//   } else if (
//     num == 4 ||
//     num == x + 4 ||
//     num == 2 * x + 4 ||
//     num == 3 * x + 4 ||
//     num == 4 * x + 4
//   ) {
//     if (string == num - 1 || string == num - x || string == num + x) {
//       return true;
//     }
//   }

//   return false;
// };
