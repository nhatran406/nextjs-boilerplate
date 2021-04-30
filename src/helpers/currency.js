/**
 * formatCurrency(value, n, x, s, c)
 * @param number value: number
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
export const formatCurrency = (value, n, x, s, c) => {
  const data = Number(value);
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\D' : '$'})`;
  const num = data.toFixed(Math.max(0, ~~n));

  return (c ? num.replace(',', c) : num).replace(
    new RegExp(re, 'g'),
    `$&${s || '.'}`,
  );
};
