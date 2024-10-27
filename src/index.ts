const formatAccountNumber = (accountNumber: number | string) => {
  return accountNumber.toString().split("").reverse().map(Number);
};

export const calculateChecksum = (accountNumber: number | string) => {
  const result = formatAccountNumber(accountNumber).reduce(
    (acc, current, index) => {
      if (index % 2 === 0) {
        let tmp = current * 2;
        if (tmp >= 10) {
          tmp = tmp
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b, 0);
          acc += tmp;
        } else {
          acc += tmp;
        }
      } else {
        acc += current;
      }
      return acc;
    },
    0,
  );

  return (10 - (result % 10)) % 10;
};
