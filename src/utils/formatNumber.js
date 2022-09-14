function formatNumber(num) {
  return num <= 1 ? num.toPrecision(2) : num.toFixed(2);
}

export default formatNumber;
