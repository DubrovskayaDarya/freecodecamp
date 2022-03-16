function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
    // for - цикл, состоящий из 3 необязательных выражений - инициализация, условия, финальное выражение
//Math.pow (число, которое возводим в степень, степень)
//.push - добавляет значения к результату