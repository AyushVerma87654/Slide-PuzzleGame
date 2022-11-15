export const cal = (
  num: number,
  string: number,
  totalNumbers: (number | string)[],
  setTotalNumbers: (a: (number | string)[]) => void
) => {
  if (string == 0 && num == 6) {
    let array = [...totalNumbers];
    array[0] = array[3];
    array[3] = array[6];
    array[6] = "";
    setTotalNumbers(array);
  } else if (string == 6 && num == 0) {
    let array = [...totalNumbers];
    array[6] = array[3];
    array[3] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 2 && num == 8) {
    let array = [...totalNumbers];
    array[2] = array[5];
    array[5] = array[8];
    array[8] = "";
    setTotalNumbers(array);
  } else if (string == 8 && num == 2) {
    let array = [...totalNumbers];
    array[8] = array[5];
    array[5] = array[2];
    array[2] = "";
    setTotalNumbers(array);
  } else if (string == 0 && num == 2) {
    let array = [...totalNumbers];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = "";
    setTotalNumbers(array);
  } else if (string == 2 && num == 0) {
    let array = [...totalNumbers];
    array[2] = array[1];
    array[1] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 6 && num == 8) {
    let array = [...totalNumbers];
    array[6] = array[7];
    array[7] = array[8];
    array[8] = "";
    setTotalNumbers(array);
  } else if (string == 8 && num == 6) {
    let array = [...totalNumbers];
    array[8] = array[7];
    array[7] = array[6];
    array[6] = "";
    setTotalNumbers(array);
  } else if (string == 1 && num == 7) {
    let array = [...totalNumbers];
    array[1] = array[4];
    array[4] = array[7];
    array[7] = "";
    setTotalNumbers(array);
  } else if (string == 7 && num == 1) {
    let array = [...totalNumbers];
    array[7] = array[4];
    array[4] = array[1];
    array[1] = "";
    setTotalNumbers(array);
  } else if (string == 5 && num == 3) {
    let array = [...totalNumbers];
    array[5] = array[4];
    array[4] = array[3];
    array[3] = "";
    setTotalNumbers(array);
  } else if (string == 3 && num == 5) {
    let array = [...totalNumbers];
    array[3] = array[4];
    array[4] = array[5];
    array[5] = "";
    setTotalNumbers(array);
  }
};

export const cal2 = (
  num: number,
  string: number,
  totalNumbers: (number | string)[],
  setTotalNumbers: (a: (number | string)[]) => void
) => {
  if (string == 0 && num == 12) {
    let array = [...totalNumbers];
    array[0] = array[4];
    array[4] = array[8];
    array[8] = array[12];
    array[12] = "";
    setTotalNumbers(array);
  } else if (string == 12 && num == 0) {
    let array = [...totalNumbers];
    array[12] = array[8];
    array[8] = array[4];
    array[4] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 0 && num == 8) {
    let array = [...totalNumbers];
    array[0] = array[4];
    array[4] = array[8];
    array[8] = "";
    setTotalNumbers(array);
  } else if (string == 8 && num == 0) {
    let array = [...totalNumbers];
    array[8] = array[4];
    array[4] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 4 && num == 12) {
    let array = [...totalNumbers];
    array[4] = array[8];
    array[8] = array[12];
    array[12] = "";
    setTotalNumbers(array);
  } else if (string == 12 && num == 4) {
    let array = [...totalNumbers];
    array[12] = array[8];
    array[8] = array[4];
    array[4] = "";
    setTotalNumbers(array);
  } else if (string == 1 && num == 13) {
    let array = [...totalNumbers];
    array[1] = array[5];
    array[5] = array[9];
    array[9] = array[13];
    array[13] = "";
    setTotalNumbers(array);
  } else if (string == 13 && num == 1) {
    let array = [...totalNumbers];
    array[13] = array[9];
    array[9] = array[5];
    array[5] = array[1];
    array[1] = "";
    setTotalNumbers(array);
  } else if (string == 5 && num == 13) {
    let array = [...totalNumbers];
    array[5] = array[9];
    array[9] = array[13];
    array[13] = "";
    setTotalNumbers(array);
  } else if (string == 13 && num == 5) {
    let array = [...totalNumbers];
    array[13] = array[9];
    array[9] = array[5];
    array[5] = "";
    setTotalNumbers(array);
  } else if (string == 1 && num == 9) {
    let array = [...totalNumbers];
    array[1] = array[5];
    array[5] = array[9];
    array[9] = "";
    setTotalNumbers(array);
  } else if (string == 9 && num == 1) {
    let array = [...totalNumbers];
    array[9] = array[5];
    array[5] = array[1];
    array[1] = "";
    setTotalNumbers(array);
  } else if (string == 2 && num == 14) {
    let array = [...totalNumbers];
    array[2] = array[6];
    array[6] = array[10];
    array[10] = array[14];
    array[14] = "";
    setTotalNumbers(array);
  } else if (string == 14 && num == 2) {
    let array = [...totalNumbers];
    array[14] = array[10];
    array[10] = array[6];
    array[6] = array[2];
    array[2] = "";
    setTotalNumbers(array);
  } else if (string == 6 && num == 14) {
    let array = [...totalNumbers];
    array[6] = array[10];
    array[10] = array[14];
    array[14] = "";
    setTotalNumbers(array);
  } else if (string == 14 && num == 6) {
    let array = [...totalNumbers];
    array[14] = array[10];
    array[10] = array[6];
    array[6] = "";
    setTotalNumbers(array);
  } else if (string == 2 && num == 10) {
    let array = [...totalNumbers];
    array[2] = array[6];
    array[6] = array[10];
    array[10] = "";
    setTotalNumbers(array);
  } else if (string == 10 && num == 2) {
    let array = [...totalNumbers];
    array[10] = array[6];
    array[6] = array[2];
    array[2] = "";
    setTotalNumbers(array);
  } else if (string == 3 && num == 15) {
    let array = [...totalNumbers];
    array[3] = array[7];
    array[7] = array[11];
    array[11] = array[15];
    array[15] = "";
    setTotalNumbers(array);
  } else if (string == 15 && num == 3) {
    let array = [...totalNumbers];
    array[15] = array[11];
    array[11] = array[7];
    array[7] = array[3];
    array[3] = "";
    setTotalNumbers(array);
  } else if (string == 15 && num == 7) {
    let array = [...totalNumbers];
    array[15] = array[11];
    array[11] = array[7];
    array[7] = "";
    setTotalNumbers(array);
  } else if (string == 7 && num == 15) {
    let array = [...totalNumbers];
    array[7] = array[11];
    array[11] = array[15];
    array[15] = "";
    setTotalNumbers(array);
  } else if (string == 11 && num == 3) {
    let array = [...totalNumbers];
    array[11] = array[7];
    array[7] = array[3];
    array[3] = "";
    setTotalNumbers(array);
  } else if (string == 3 && num == 11) {
    let array = [...totalNumbers];
    array[3] = array[7];
    array[7] = array[11];
    array[11] = "";
    setTotalNumbers(array);
  } else if (string == 0 && num == 3) {
    let array = [...totalNumbers];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = array[3];
    array[3] = "";
    setTotalNumbers(array);
  } else if (string == 3 && num == 0) {
    let array = [...totalNumbers];
    array[3] = array[2];
    array[2] = array[1];
    array[1] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 0 && num == 2) {
    let array = [...totalNumbers];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = "";
    setTotalNumbers(array);
  } else if (string == 2 && num == 0) {
    let array = [...totalNumbers];
    array[2] = array[1];
    array[1] = array[0];
    array[0] = "";
    setTotalNumbers(array);
  } else if (string == 1 && num == 3) {
    let array = [...totalNumbers];
    array[1] = array[2];
    array[2] = array[3];
    array[3] = "";
    setTotalNumbers(array);
  } else if (string == 3 && num == 1) {
    let array = [...totalNumbers];
    array[3] = array[2];
    array[2] = array[1];
    array[1] = "";
    setTotalNumbers(array);
  } else if (string == 4 && num == 7) {
    let array = [...totalNumbers];
    array[4] = array[5];
    array[5] = array[6];
    array[6] = array[7];
    array[7] = "";
    setTotalNumbers(array);
  } else if (string == 7 && num == 4) {
    let array = [...totalNumbers];
    array[7] = array[6];
    array[6] = array[5];
    array[5] = array[4];
    array[4] = "";
    setTotalNumbers(array);
  } else if (string == 4 && num == 6) {
    let array = [...totalNumbers];
    array[4] = array[5];
    array[5] = array[6];
    array[6] = "";
    setTotalNumbers(array);
  } else if (string == 6 && num == 4) {
    let array = [...totalNumbers];
    array[6] = array[5];
    array[5] = array[4];
    array[4] = "";
    setTotalNumbers(array);
  } else if (string == 5 && num == 7) {
    let array = [...totalNumbers];
    array[5] = array[6];
    array[6] = array[7];
    array[7] = "";
    setTotalNumbers(array);
  } else if (string == 7 && num == 5) {
    let array = [...totalNumbers];
    array[7] = array[6];
    array[6] = array[5];
    array[5] = "";
    setTotalNumbers(array);
  } else if (string == 8 && num == 11) {
    let array = [...totalNumbers];
    array[8] = array[9];
    array[9] = array[10];
    array[10] = array[11];
    array[11] = "";
    setTotalNumbers(array);
  } else if (string == 11 && num == 8) {
    let array = [...totalNumbers];
    array[11] = array[10];
    array[10] = array[9];
    array[9] = array[8];
    array[8] = "";
    setTotalNumbers(array);
  } else if (string == 8 && num == 10) {
    let array = [...totalNumbers];
    array[8] = array[9];
    array[9] = array[10];
    array[10] = "";
    setTotalNumbers(array);
  } else if (string == 10 && num == 8) {
    let array = [...totalNumbers];
    array[10] = array[9];
    array[9] = array[8];
    array[8] = "";
    setTotalNumbers(array);
  } else if (string == 9 && num == 11) {
    let array = [...totalNumbers];
    array[9] = array[10];
    array[10] = array[11];
    array[11] = "";
    setTotalNumbers(array);
  } else if (string == 11 && num == 9) {
    let array = [...totalNumbers];
    array[11] = array[10];
    array[10] = array[9];
    array[9] = "";
    setTotalNumbers(array);
    // 12 13 14 15
  } else if (string == 12 && num == 15) {
    let array = [...totalNumbers];
    array[12] = array[13];
    array[13] = array[14];
    array[14] = array[15];
    array[15] = "";
    setTotalNumbers(array);
  } else if (string == 15 && num == 12) {
    let array = [...totalNumbers];
    array[15] = array[14];
    array[14] = array[13];
    array[13] = array[12];
    array[12] = "";
    setTotalNumbers(array);
  } else if (string == 13 && num == 15) {
    let array = [...totalNumbers];
    array[13] = array[14];
    array[14] = array[15];
    array[15] = "";
    setTotalNumbers(array);
  } else if (string == 15 && num == 13) {
    let array = [...totalNumbers];
    array[15] = array[14];
    array[14] = array[13];
    array[13] = "";
    setTotalNumbers(array);
  } else if (string == 12 && num == 14) {
    let array = [...totalNumbers];
    array[12] = array[13];
    array[13] = array[14];
    array[14] = "";
    setTotalNumbers(array);
  } else if (string == 14 && num == 12) {
    let array = [...totalNumbers];
    array[14] = array[13];
    array[13] = array[12];
    array[12] = "";
    setTotalNumbers(array);
  }
};

export const calculate = (num: number, string: number) => {
  if (num == 0 || num == 3 || num == 6) {
    if (string == num + 1 || string == num - 3 || string == num + 3) {
      return true;
    }
  } else if (num == 1 || num == 4 || num == 7) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - 3 ||
      string == num + 3
    ) {
      return true;
    }
  } else if (num == 2 || num == 5 || num == 8) {
    if (string == num - 1 || string == num - 3 || string == num + 3) {
      return true;
    }
  }

  return false;
};

export const calculate2 = (num: number, string: number) => {
  if (num == 0 || num == 4 || num == 8 || num == 12) {
    if (string == num + 1 || string == num - 4 || string == num + 4) {
      return true;
    }
  } else if (num == 1 || num == 5 || num == 9 || num == 13) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - 4 ||
      string == num + 4
    ) {
      return true;
    }
  } else if (num == 2 || num == 6 || num == 10 || num == 14) {
    if (
      string == num - 1 ||
      string == num + 1 ||
      string == num - 4 ||
      string == num + 4
    ) {
      return true;
    }
  } else if (num == 3 || num == 7 || num == 11 || num == 15) {
    if (string == num - 1 || string == num - 4 || string == num + 4) {
      return true;
    }
  }

  return false;
};

export const numbers = () => {
  let a: number[] = [];
  while (a.length < 8) {
    let x = Math.round(Math.random() * 10);
    if (x == 0 || x == 10 || x == 9) {
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
  console.log(a);
  return [...a, ""];
};
