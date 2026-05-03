export const englishToPersian = (input: string | number): string => {
  const faDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return input.toString().replace(/\d/g, (char: string) => {
    return faDigits[parseInt(char, 10)];
  });
};

export const formatPrice = (price: number | string): string => {
  const formattedNumber = new Intl.NumberFormat("en-US").format(Number(price));

  const faDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return formattedNumber.replace(/\d/g, (char) => {
    return faDigits[parseInt(char, 10)];
  });
};
