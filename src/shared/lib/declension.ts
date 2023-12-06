export const declension = (
  number: number,
  words: [string, string, string]
): string => {
  const integerNumber = Math.floor(number);
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    integerNumber % 100 > 4 && integerNumber % 100 < 20
      ? 2
      : cases[integerNumber % 10 < 5 ? integerNumber % 10 : 5]
  ];
};
