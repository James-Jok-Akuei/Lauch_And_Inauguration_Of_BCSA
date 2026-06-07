/* Fisher–Yates shuffle — returns a new array in random order (does not mutate
 * the input). Used to randomize the order of slideshow items on each page load. */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
