const formatAccountNumber = (accountNumber: number | string) =>
  accountNumber.toString().split("").map(Number);

export const calculateChecksum = (accountNumber: number | string) => {
  const result = formatAccountNumber(accountNumber).reduceRight(
    (acc, current, index) => {
      if (index % 2 === 1) {
        let tmp = current * 2;
        if (tmp > 9) {
          acc += tmp - 9;
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
