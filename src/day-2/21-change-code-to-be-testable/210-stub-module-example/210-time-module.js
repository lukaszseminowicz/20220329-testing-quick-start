export function time() {
  const date = new Date();
  const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const padZero = num => num.toString().padStart(2, '0');
  return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
}
