type PercentagesData<T> = {
  [K in keyof T]: number;
};

export const toPercent = <T extends Record<string, number>>(
  stats: T
): PercentagesData<T> => {
  const total = Object.values(stats).reduce((acc, value) => acc + value, 0);

  const percentages: PercentagesData<T> = {} as PercentagesData<T>;

  for (const key in stats) {
    if (stats.hasOwnProperty(key)) {
      percentages[key] = Math.round((stats[key] / total) * 100);
    }
  }

  return percentages;
};
