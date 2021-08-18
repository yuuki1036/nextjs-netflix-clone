export const truncate = (str: string | undefined, n: number) => {
  if (str === undefined) return null;
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};
