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
  if (num == 0 || num == x || num == 2 * x || num == 3 * x || num == 4 * x) {
    if (string == num + 1 || string == num - x || string == num + x) {
      return true;
    }
  } else if (
    num == 1 ||
    num == x + 1 ||
    num == 2 * x + 1 ||
    num == 3 * x + 1 ||
    num == 4 * x + 1
  ) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  } else if (
    num == 2 ||
    num == x + 2 ||
    num == 2 * x + 2 ||
    num == 3 * x + 2 ||
    num == 4 * x + 2
  ) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  } else if (
    num == 3 ||
    num == x + 3 ||
    num == 2 * x + 3 ||
    num == 3 * x + 3 ||
    num == 4 * x + 3
  ) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  } else if (
    num == 4 ||
    num == x + 4 ||
    num == 2 * x + 4 ||
    num == 3 * x + 4 ||
    num == 4 * x + 4
  ) {
    if (string == num - 1 || string == num - x || string == num + x) {
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

// 0   1   2   3   4
// 5   6   7   8   9
// 10  11  12  13  14
// 15  16  17  18  19
// 20  21  22  23  24

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

// export const cal5 = (
//   num: number,
//   string: number,
//   totalNumbers: (number | string)[],
//   setTotalNumbers: (a: (number | string)[]) => void
// ) => {
//   if (string == 0 && num == 12) {
//     let array = [...totalNumbers];
//     array[0] = array[4];
//     array[4] = array[8];
//     array[8] = array[12];
//     array[12] = "";
//     setTotalNumbers(array);
//   } else if (string == 12 && num == 0) {
//     let array = [...totalNumbers];
//     array[12] = array[8];
//     array[8] = array[4];
//     array[4] = array[0];
//     array[0] = "";
//     setTotalNumbers(array);
//   } else if (string == 0 && num == 8) {
//     let array = [...totalNumbers];
//     array[0] = array[4];
//     array[4] = array[8];
//     array[8] = "";
//     setTotalNumbers(array);
//   } else if (string == 8 && num == 0) {
//     let array = [...totalNumbers];
//     array[8] = array[4];
//     array[4] = array[0];
//     array[0] = "";
//     setTotalNumbers(array);
//   } else if (string == 4 && num == 12) {
//     let array = [...totalNumbers];
//     array[4] = array[8];
//     array[8] = array[12];
//     array[12] = "";
//     setTotalNumbers(array);
//   } else if (string == 12 && num == 4) {
//     let array = [...totalNumbers];
//     array[12] = array[8];
//     array[8] = array[4];
//     array[4] = "";
//     setTotalNumbers(array);
//   } else if (string == 1 && num == 13) {
//     let array = [...totalNumbers];
//     array[1] = array[5];
//     array[5] = array[9];
//     array[9] = array[13];
//     array[13] = "";
//     setTotalNumbers(array);
//   } else if (string == 13 && num == 1) {
//     let array = [...totalNumbers];
//     array[13] = array[9];
//     array[9] = array[5];
//     array[5] = array[1];
//     array[1] = "";
//     setTotalNumbers(array);
//   } else if (string == 5 && num == 13) {
//     let array = [...totalNumbers];
//     array[5] = array[9];
//     array[9] = array[13];
//     array[13] = "";
//     setTotalNumbers(array);
//   } else if (string == 13 && num == 5) {
//     let array = [...totalNumbers];
//     array[13] = array[9];
//     array[9] = array[5];
//     array[5] = "";
//     setTotalNumbers(array);
//   } else if (string == 1 && num == 9) {
//     let array = [...totalNumbers];
//     array[1] = array[5];
//     array[5] = array[9];
//     array[9] = "";
//     setTotalNumbers(array);
//   } else if (string == 9 && num == 1) {
//     let array = [...totalNumbers];
//     array[9] = array[5];
//     array[5] = array[1];
//     array[1] = "";
//     setTotalNumbers(array);
//   } else if (string == 2 && num == 14) {
//     let array = [...totalNumbers];
//     array[2] = array[6];
//     array[6] = array[10];
//     array[10] = array[14];
//     array[14] = "";
//     setTotalNumbers(array);
//   } else if (string == 14 && num == 2) {
//     let array = [...totalNumbers];
//     array[14] = array[10];
//     array[10] = array[6];
//     array[6] = array[2];
//     array[2] = "";
//     setTotalNumbers(array);
//   } else if (string == 6 && num == 14) {
//     let array = [...totalNumbers];
//     array[6] = array[10];
//     array[10] = array[14];
//     array[14] = "";
//     setTotalNumbers(array);
//   } else if (string == 14 && num == 6) {
//     let array = [...totalNumbers];
//     array[14] = array[10];
//     array[10] = array[6];
//     array[6] = "";
//     setTotalNumbers(array);
//   } else if (string == 2 && num == 10) {
//     let array = [...totalNumbers];
//     array[2] = array[6];
//     array[6] = array[10];
//     array[10] = "";
//     setTotalNumbers(array);
//   } else if (string == 10 && num == 2) {
//     let array = [...totalNumbers];
//     array[10] = array[6];
//     array[6] = array[2];
//     array[2] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 15) {
//     let array = [...totalNumbers];
//     array[3] = array[7];
//     array[7] = array[11];
//     array[11] = array[15];
//     array[15] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 3) {
//     let array = [...totalNumbers];
//     array[15] = array[11];
//     array[11] = array[7];
//     array[7] = array[3];
//     array[3] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 7) {
//     let array = [...totalNumbers];
//     array[15] = array[11];
//     array[11] = array[7];
//     array[7] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 15) {
//     let array = [...totalNumbers];
//     array[7] = array[11];
//     array[11] = array[15];
//     array[15] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 3) {
//     let array = [...totalNumbers];
//     array[11] = array[7];
//     array[7] = array[3];
//     array[3] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 11) {
//     let array = [...totalNumbers];
//     array[3] = array[7];
//     array[7] = array[11];
//     array[11] = "";
//     setTotalNumbers(array);
//   } else if (string == 0 && num == 3) {
//     let array = [...totalNumbers];
//     array[0] = array[1];
//     array[1] = array[2];
//     array[2] = array[3];
//     array[3] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 0) {
//     let array = [...totalNumbers];
//     array[3] = array[2];
//     array[2] = array[1];
//     array[1] = array[0];
//     array[0] = "";
//     setTotalNumbers(array);
//   } else if (string == 0 && num == 2) {
//     let array = [...totalNumbers];
//     array[0] = array[1];
//     array[1] = array[2];
//     array[2] = "";
//     setTotalNumbers(array);
//   } else if (string == 2 && num == 0) {
//     let array = [...totalNumbers];
//     array[2] = array[1];
//     array[1] = array[0];
//     array[0] = "";
//     setTotalNumbers(array);
//   } else if (string == 1 && num == 3) {
//     let array = [...totalNumbers];
//     array[1] = array[2];
//     array[2] = array[3];
//     array[3] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 1) {
//     let array = [...totalNumbers];
//     array[3] = array[2];
//     array[2] = array[1];
//     array[1] = "";
//     setTotalNumbers(array);
//   } else if (string == 4 && num == 7) {
//     let array = [...totalNumbers];
//     array[4] = array[5];
//     array[5] = array[6];
//     array[6] = array[7];
//     array[7] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 4) {
//     let array = [...totalNumbers];
//     array[7] = array[6];
//     array[6] = array[5];
//     array[5] = array[4];
//     array[4] = "";
//     setTotalNumbers(array);
//   } else if (string == 4 && num == 6) {
//     let array = [...totalNumbers];
//     array[4] = array[5];
//     array[5] = array[6];
//     array[6] = "";
//     setTotalNumbers(array);
//   } else if (string == 6 && num == 4) {
//     let array = [...totalNumbers];
//     array[6] = array[5];
//     array[5] = array[4];
//     array[4] = "";
//     setTotalNumbers(array);
//   } else if (string == 5 && num == 7) {
//     let array = [...totalNumbers];
//     array[5] = array[6];
//     array[6] = array[7];
//     array[7] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 5) {
//     let array = [...totalNumbers];
//     array[7] = array[6];
//     array[6] = array[5];
//     array[5] = "";
//     setTotalNumbers(array);
//   } else if (string == 8 && num == 11) {
//     let array = [...totalNumbers];
//     array[8] = array[9];
//     array[9] = array[10];
//     array[10] = array[11];
//     array[11] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 8) {
//     let array = [...totalNumbers];
//     array[11] = array[10];
//     array[10] = array[9];
//     array[9] = array[8];
//     array[8] = "";
//     setTotalNumbers(array);
//   } else if (string == 8 && num == 10) {
//     let array = [...totalNumbers];
//     array[8] = array[9];
//     array[9] = array[10];
//     array[10] = "";
//     setTotalNumbers(array);
//   } else if (string == 10 && num == 8) {
//     let array = [...totalNumbers];
//     array[10] = array[9];
//     array[9] = array[8];
//     array[8] = "";
//     setTotalNumbers(array);
//   } else if (string == 9 && num == 11) {
//     let array = [...totalNumbers];
//     array[9] = array[10];
//     array[10] = array[11];
//     array[11] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 9) {
//     let array = [...totalNumbers];
//     array[11] = array[10];
//     array[10] = array[9];
//     array[9] = "";
//     setTotalNumbers(array);
//     // 12 13 14 15
//   } else if (string == 12 && num == 15) {
//     let array = [...totalNumbers];
//     array[12] = array[13];
//     array[13] = array[14];
//     array[14] = array[15];
//     array[15] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 12) {
//     let array = [...totalNumbers];
//     array[15] = array[14];
//     array[14] = array[13];
//     array[13] = array[12];
//     array[12] = "";
//     setTotalNumbers(array);
//   } else if (string == 13 && num == 15) {
//     let array = [...totalNumbers];
//     array[13] = array[14];
//     array[14] = array[15];
//     array[15] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 13) {
//     let array = [...totalNumbers];
//     array[15] = array[14];
//     array[14] = array[13];
//     array[13] = "";
//     setTotalNumbers(array);
//   } else if (string == 12 && num == 14) {
//     let array = [...totalNumbers];
//     array[12] = array[13];
//     array[13] = array[14];
//     array[14] = "";
//     setTotalNumbers(array);
//   } else if (string == 14 && num == 12) {
//     let array = [...totalNumbers];
//     array[14] = array[13];
//     array[13] = array[12];
//     array[12] = "";
//     setTotalNumbers(array);
//   }
// };
