import { num, set } from "../Models";
import {
  swap10,
  swap11,
  swap2,
  swap3,
  swap4,
  swap5,
  swap6,
  swap7,
  swap8,
  swap9,
} from "./newpuzzle";
export const numbers: any = (num: number) => {
  let a: number[] = [];
  while (a.length < num * num - 1) {
    let x = Math.round(Math.random() * (num * num - 1));
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
    return numbers(num);
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

export const adjacent = (num: number, string: number, value: number) => {
  if (num % value == 0) {
    if (string == num + 1 || string == num - value || string == num + value) {
      return true;
    }
  } else if (num % value == value - 1) {
    if (string == num - 1 || string == num - value || string == num + value) {
      return true;
    }
  } else {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - value ||
      string == num + value
    ) {
      return true;
    }
  }

  return false;
};

export const movement = (
  num: number,
  string: number,
  array: num,
  set: set,
  value: number
) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        if (j % value == i % value && i - j != -value) {
          if (i - j != value) {
            if (i == num && j == string) {
              calculate(num, string, array, set, value);
            }
          }
        } else if (i - j == 1 || j - i == 1) {
        } else {
          for (let z = 0; z < value; z++) {
            if (
              i >= z * value &&
              j >= z * value &&
              i <= (z + 1) * value - 1 &&
              j <= (z + 1) * value - 1
            ) {
              if (i == num && j == string) {
                calculate(num, string, array, set, value);
              }
            }
          }
        }
      }
    }
  }
};

export const calculate = (
  num: number,
  string: number,
  array: num,
  set: set,
  value: number
) => {
  let direction = 1;
  if (num < string) {
    direction = -1;
  }
  // console.log("direction", direction);
  // console.log("a,b", num, string);
  const x = (num - string) / value;
  for (let i = 2; i < value; i++) {
    if (num - string == i || string - num == i) {
      swap(num, string, i, 1, direction, array, set);
      // console.log(i);
      // console.log("a,b", num, string);
    } else if (x == i || x * -1 == i) {
      // console.log(i);
      swap(num, string, i, value, direction, array, set);
      // console.log("a,b", num, string);
    }
  }
};

export const swap = (
  num: number,
  string: number,
  swap: number,
  next: number,
  direction: number,
  array: num,
  set: set
) => {
  // console.log(num, string, swap, next, direction);
  let number = string;
  if (array[num] == "") {
    number = num;
  }
  if (swap == 2) {
    swap2(number, direction, next, array, set);
  } else if (swap == 3) {
    swap3(number, direction, next, array, set);
  } else if (swap == 4) {
    swap4(number, direction, next, array, set);
  } else if (swap == 5) {
    swap5(number, direction, next, array, set);
  } else if (swap == 6) {
    swap6(number, direction, next, array, set);
  } else if (swap == 7) {
    swap7(number, direction, next, array, set);
  } else if (swap == 8) {
    swap8(number, direction, next, array, set);
  } else if (swap == 9) {
    swap9(number, direction, next, array, set);
  } else if (swap == 10) {
    swap10(number, direction, next, array, set);
  } else if (swap == 11) {
    swap11(number, direction, next, array, set);
  }
};
