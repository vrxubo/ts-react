type Add = (a: number, b: number) => number;
const add: Add = (a, b) => {
  console.log(a, b);
  return a + b;
};
export default add;
