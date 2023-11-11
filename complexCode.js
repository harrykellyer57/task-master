/* 
 * Filename: complexCode.js
 * 
 * Description: This code implements a complex algorithm for calculating the sum of all prime numbers up to a given number.
 * It includes various helper functions and optimizations to achieve better performance.
 */

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// Function to generate prime numbers up to a given number
function generatePrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

// Function to calculate the sum of all prime numbers in an array
function sumPrimes(primes) {
  let sum = 0;
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}

// Main function
function main() {
  const limit = 1000;
  
  console.log(`Generating prime numbers up to ${limit}...`);
  const primes = generatePrimes(limit);
  
  console.log(`Calculating the sum of all prime numbers up to ${limit}...`);
  const sum = sumPrimes(primes);
  
  console.log(`The sum of all prime numbers up to ${limit} is: ${sum}`);
}

// Entry point
main();