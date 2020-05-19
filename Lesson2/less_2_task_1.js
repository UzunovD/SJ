'use strict'

// 1. Объясните почему код даёт именно такие результаты?
// Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике 
// в браузере со включенными точками остановки.

//пример 1
let a = 1,
  b = 1,
  c, d;
c = ++a;
alert(c); // ответ: 2
// т.к. в с присваивается выражение ++а - префиксный инкремент(сначала 
// a увеличивается на 1(а + 1 = 2), потом присваивася итоговое значение)

//пример 2
d = b++;
alert(d); //ответ: 1
// т.к. в d присваивается выражение b++ - постфиксный инкремент(сначала 
// присваивася начальное значение b, потом b увеличивается на 1)

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
// т.к. в с присваивается выражение 2 + ++а - префиксный инкремент(сначала 
// a увеличивается на 1(а + 1 = 3, т.к в строке 5 а=2), потом в c присваивася
// 2 + 3)


//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
// d = 4 т.к. в d присваивается выражение 2 + b++ - постфиксный инкремент(сначала 
// возврашается начальное значение b(на 13 строке b=2), потом 2 + 2 присваивается в d
//  b увеличивается на 1. Hа 19 строке a = 3.