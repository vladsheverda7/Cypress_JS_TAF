export function sortPriceLoHi(priceArr) {
  const sortedPrice = priceArr.sort((a, b) => a - b);
  return sortedPrice;
}

export function sortPriceHiLo(priceArr) {
  const sortedPrice = priceArr.sort((a, b) => b - a);
  return sortedPrice;
}
