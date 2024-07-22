function getArrayParams(...arr) {
  // Первоначальные значения для min, max и sum
  let min = Infinity;
  let max = -Infinity;

  // Используем метод reduce для суммирования элементов массива
  let sum = arr.reduce((acc, currentValue) => {
    if (currentValue < min) {
      min = currentValue;
    }
    if (currentValue > max) {
      max = currentValue;
    }
    return acc + currentValue;
  }, 0);

  // Вычисляем среднее значение и округляем его до двух знаков после запятой
  let avg = (sum / arr.length).toFixed(2);

  // Возвращаем объект с min, max и avg
  return {
    min: min,
    max: max,
    avg: Number(avg)
  };
}

// Функция для нахождения суммы элементов массива
function summElementsWorker(...elements) {
  if (elements.length === 0) return 0;
  return elements.reduce((sum, current) => sum + current, 0);
}

// Функция для вычисления разницы между максимальным и минимальным элементами массива
function differenceMaxMinWorker(...elements) {
  if (elements.length === 0) return 0;
  const max = Math.max(...elements);
  const min = Math.min(...elements);
  return max - min;
}

// Функция для вычисления разницы сумм чётных и нечётных элементов массива
function differenceEvenOddWorker(...elements) {
  if (elements.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let element of elements) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения чётных элементов массива
function averageEvenElementsWorker(...elements) {
  if (elements.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let element of elements) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  // Инициализируем переменную для хранения максимального результата
  let maxWorkerResult = -Infinity;

  // Перебираем каждый элемент массива arrOfArr
  for (const arr of arrOfArr) {
    // Применяем функцию-насадку к текущему массиву
    const result = func(...arr);

    // Сравниваем полученный результат с текущим максимальным значением
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  // Возвращаем максимальный результат
  return maxWorkerResult;
}

// Примеры функций-насадок:

// Сумма всех элементов массива
function summElementsWorker(...arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}

// Разница между максимальным и минимальным элементом массива
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пуст
  if (arr.length === 1) return 0; // Если в массиве один элемент

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

// Разница между суммой четных и нечетных элементов массива
function differenceEvenOddWorker(...arr) {
  const evenSum = arr.filter(x => x % 2 === 0).reduce((sum, el) => sum + el, 0);
  const oddSum = arr.filter(x => x % 2 !== 0).reduce((sum, el) => sum + el, 0);
  return evenSum - oddSum;
}

// Среднее значение четных элементов массива
function averageEvenElementsWorker(...arr) {
  const evenElements = arr.filter(x => x % 2 === 0);
  if (evenElements.length === 0) return 0; // избежать деления на ноль
  const evenSum = evenElements.reduce((sum, el) => sum + el, 0);
  return evenSum / evenElements.length;
}
