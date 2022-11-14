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
