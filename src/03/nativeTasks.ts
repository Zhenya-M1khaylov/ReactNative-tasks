// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    return nums.reduce((previous, current) => {
        return previous + current
    })
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && c === b) {
            return '10'
        } else if (a === b || a === c || c === b) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0
    let str = number.toString()
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return sum
}

// export function getSum(number: number): number {
//     if(number === 0) {
//         return number
//     } else {
//         return number % 10 + getSum(Math.trunc(number / 10))
//     }
// }


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0
    let odd = 0
    arr.forEach((val, ind) => ind % 2 ? (odd += val) : (even += val))
    return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(el=>el>0 && Number.isInteger(el)).map(el=>el*el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let answer = 0
    for (let i = 1; i < N; i++) {
        answer += i
    }
    return answer
}

// export function sumFirstNumbers(N: number): number {
//     return N *(N+1)/2;
// }




// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {

    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const sum = [];

    for (let i = 0; i < banknotes.length; i++) {

        if (amountOfMoney >= banknotes[i]) {
            sum.push(banknotes[i]);
            amountOfMoney -= banknotes[i];
            i = i - 1;
        } else if (!amountOfMoney) {
            break;
        }

    }

    return sum;
}
