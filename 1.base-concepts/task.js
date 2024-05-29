"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12; // месячная процентная ставка
  let S = amount - contribution; // тело кредита

  if (S <= 0) {
    return 0;
  }

  let monthlyPayment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  let totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}