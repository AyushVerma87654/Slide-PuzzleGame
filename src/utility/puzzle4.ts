export const numbers2 = () => {
  let a: number[] = [];
  while (a.length < 15) {
    let x = Math.round(Math.random() * 15);
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
  return [...a, ""];
};

export const calculate2 = (num: number, string: number) => {
  const x = 4;
  if (num == 0 || num == x || num == 2 * x || num == 3 * x) {
    if (string == num + 1 || string == num - x || string == num + x) {
      return true;
    }
  } else if (num == 1 || num == x + 1 || num == 2 * x + 1 || num == 3 * x + 1) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  } else if (num == 2 || num == x + 2 || num == 2 * x + 2 || num == 3 * x + 2) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - x ||
      string == num + x
    ) {
      return true;
    }
  } else if (num == 3 || num == x + 3 || num == 2 * x + 3 || num == 3 * x + 3) {
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
    array[string + 3 * x] = "";
    setTotalNumbers(array);
  } else if (string == last && num == first) {
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
    array[string + 2 * x] = "";
    setTotalNumbers(array);
  } else if (string == last && num == second) {
    let array = [...totalNumbers];
    array[string] = array[string - x];
    array[string - x] = array[string - 2 * x];
    array[string - 2 * x] = "";
    setTotalNumbers(array);
  }
};

// 0 1 2 3
// 4 5 6 7
// 8 9 10 11
// 12 13 14 15

export const cal3 = (
  num: number,
  string: number,
  totalNumbers: (number | string)[],
  setTotalNumbers: (a: (number | string)[]) => void
) => {
  for (let i = 0; i < 4; i++) {
    const x = 4;
    short(
      4,
      i,
      i + x,
      i + 2 * x,
      i + 3 * x,
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
      num,
      string,
      totalNumbers,
      setTotalNumbers
    );
  }
  // short(4, 0, 4, 8, 12, num, string, totalNumbers, setTotalNumbers);
  // short(4, 1, 5, 9, 13, num, string, totalNumbers, setTotalNumbers);
  // short(4, 2, 6, 10, 14, num, string, totalNumbers, setTotalNumbers);
  // short(4, 3, 7, 11, 15, num, string, totalNumbers, setTotalNumbers);
  // short(1, 0, 1, 2, 3, num, string, totalNumbers, setTotalNumbers);
  // short(1, 4, 5, 6, 7, num, string, totalNumbers, setTotalNumbers);
  // short(1, 8, 9, 10, 11, num, string, totalNumbers, setTotalNumbers);
  // short(1, 12, 13, 14, 15, num, string, totalNumbers, setTotalNumbers);
};

// export const cal2 = (
//   num: number,
//   string: number,
//   totalNumbers: (number | string)[],
//   setTotalNumbers: (a: (number | string)[]) => void
// ) => {
//   const x = 4;
//   const y = 1;
//   if (string == 0 && num == 12) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = array[string + 3 * x];
//     array[string + 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 12 && num == 0) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = array[string - 3 * x];
//     array[string - 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 0 && num == 8) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 8 && num == 0) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 4 && num == 12) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 12 && num == 4) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 1 && num == 13) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = array[string + 3 * x];
//     array[string + 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 13 && num == 1) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = array[string - 3 * x];
//     array[string - 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 5 && num == 13) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 13 && num == 5) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 1 && num == 9) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 9 && num == 1) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 2 && num == 14) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = array[string + 3 * x];
//     array[string + 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 14 && num == 2) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = array[string - 3 * x];
//     array[string - 3 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 6 && num == 14) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 14 && num == 6) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 2 && num == 10) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array); //
//   } else if (string == 10 && num == 2) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 15) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = array[string + 3 * x];
//     array[string + 3 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 3) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = array[string - 3 * x];
//     array[string - 3 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 15) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 7) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 11) {
//     let array = [...totalNumbers];
//     array[string] = array[string - x];
//     array[string - x] = array[string - 2 * x];
//     array[string - 2 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 3) {
//     let array = [...totalNumbers];
//     array[string] = array[string + x];
//     array[string + x] = array[string + 2 * x];
//     array[string + 2 * x] = "";
//     setTotalNumbers(array);
//   } else if (string == 0 && num == 3) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = array[string + 3 * y];
//     array[string + 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 0) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = array[string - 3 * y];
//     array[string - 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 0 && num == 2) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 2 && num == 0) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 1 && num == 3) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 3 && num == 1) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 4 && num == 7) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = array[string + 3 * y];
//     array[string + 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 4) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = array[string - 3 * y];
//     array[string - 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 4 && num == 6) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 6 && num == 4) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 5 && num == 7) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 7 && num == 5) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 8 && num == 11) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = array[string + 3 * y];
//     array[string + 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 8) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = array[string - 3 * y];
//     array[string - 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 8 && num == 10) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 10 && num == 8) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 9 && num == 11) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 11 && num == 9) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 12 && num == 15) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = array[string + 3 * y];
//     array[string + 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 12) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = array[string - 3 * y];
//     array[string - 3 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 13 && num == 15) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 15 && num == 13) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 12 && num == 14) {
//     let array = [...totalNumbers];
//     array[string] = array[string - y];
//     array[string - y] = array[string - 2 * y];
//     array[string - 2 * y] = "";
//     setTotalNumbers(array);
//   } else if (string == 14 && num == 12) {
//     let array = [...totalNumbers];
//     array[string] = array[string + y];
//     array[string + y] = array[string + 2 * y];
//     array[string + 2 * y] = "";
//     setTotalNumbers(array);
//   }
// };
