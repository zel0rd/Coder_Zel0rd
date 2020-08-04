const pipe = (...fns) => (args) => fns.reduce((arg, fn) => fn(arg), args);

const sum = (factors) => [...factors].reduce((p, n) => (n += p), 0);

const isFactor = (num, potentialFactor) => num % potentialFactor == 0;

const sumFactor = (num) => pipe(factors, sum)(num);

const factors = (num) => {
  return [...Array(parseInt(Math.sqrt(num))).keys()].reduce(
    (factorSet, next) => {
      next++;
      if (!isFactor(num, next)) return factorSet;
      factorSet.add(next);
      factorSet.add(num / next);
      return factorSet;
    },
    new Set()
  );
};

const isPerfect = (num) => sumFactor(num) - num == num;
const isAbundant = (num) => sumFactor(num) - num > num;
const isDeficient = (num) => sumFactor(num) - num < num;

const equalSet = (aset, bset) => {
  if (aset.size !== bset.size) return false;
  for (const a of aset) if (!bset.has(a)) return false;
  return true;
};

const isPrime = (num) => {
  const primeSet = new Set([1, num]);
  return num > 1 && pipe(factors, equalSet.bind(undefined, primeSet))(num);
};

const getType = (n) => {
  if (isAbundant(n)) return "abundant";
  if (isDeficient(n)) return "deficient";
  if (isPerfect(n)) return "perfect";
  else return "monster";
};

const checkPrime = (n) => {
  if (isPrime(n)) return ", prime";
  else return "";
};

const printPADP = (maxValue) => {
  return [...Array(maxValue + 1).keys()].slice(2).reduce((str, num) => {
    str += `${num} : ${getType(num)}${checkPrime(num)}\n`;
    return str;
  }, "");
};

console.log(printPADP(10));