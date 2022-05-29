//1. Реализуйте функцию, которая принимает параметром подстроку, число повторов и разделитель, а возвращает строку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (str, rep, div) => {
    div.split(div)
    let newStr = ''
    while (rep-- > 0) newStr += str + div
    return newStr.slice(0, -1)
}
const repeatString2 = (a, b, c) => (a + c).repeat(b - 1) + a
const repeatString3 = (substr, p, r) => {
    let res = ''
    for (let i = 0; i < p; i++) {
        i === p - 1 ? res += substr : res += substr + r;
    }
}

console.log('Task 1')
console.log(repeatString('wtf', 3, ' '))
console.log(repeatString('wtf', 4, ','))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
const checkStart = (str, podStr) => {
    if (str.substr(0, 2) === podStr.substr(0, 2)) {
        return true
    } else {
        return false
    }
}
const checkStart2 = (str, sub) => str.toLowerCase().startsWith(sub.toLowerCase())
const checkStart3 = (str, start) => {
    let copyStr = str.toLowerCase()
    let copyStart = start.toLowerCase()
    return copyStr.slice(0, copyStart.length) === copyStart ? true : false
}


console.log('Task 2')
console.log(checkStart("incubator", "inc"))
console.log(checkStart("incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, numb) => {
    let a = str.slice(0, numb)
    let b = '...'
    return a.concat(b)
}
const truncateString2 = (str, numb) => {
    return str.length > numb ? `${str.slice(0, numb)}...` : str
}
console.log('Task 3')
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
console.log(truncateString2("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

const getMinLengthWord = (str) => {
    if (str === '') {
        return null
    }
    return str.split(' ').reduce((a, b) => a.length < b.length ? a : b)
}
console.log('Task 4')
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Стдентам Инкуатора Желаю Удачи!"

const setUpperCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(' ')
}
const setUpperCase2 = (str) => {
    return changedString = str.split(' ').map(el => {
        el.split('')[0].toUpperCase() + el.slice(1).toLowerCase()
    }).join(' ');
}

console.log('Task 5')
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))


//6. Реализуйте функцию, котрая принимает параметрами две строк. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает false. Проверка проводится без учёта регистра
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

const isIncludes = (str1, str2) => {
    let arr = str2.toLowerCase()
    for (let i = 0; i < arr.length; i++) {
        if (str1.toLowerCase().indexOf(arr[i]) === -1) {
            return false
        }
    }
    return true
}
console.log('Task 6')
console.log(isIncludes("Incubator", "Cut"))

