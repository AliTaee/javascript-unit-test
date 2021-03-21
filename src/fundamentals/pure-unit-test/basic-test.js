const result = true;
const expected = false;

if (result !== expected) {
  throw new Error(`${result} is not ${expected}`);
}
