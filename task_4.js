// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
// Используйте setInterval.
// 
// Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


function countNumbers(x, y) {
  let arr = [];
  for (let i = x; i <= y; i++) {
    arr.push(i);
  }
  let arrStart = 0, arrCount = arr.length - 1;
  const intervalId = setInterval(function() {
    console.log(arr[arrStart]);
    if(arrStart == arrCount) {
      clearInterval(intervalId);
    } else {
      arrStart++;
    }
  }, 1000);
}

countNumbers(5, 15);


// задание отлично выполнено, только не забывайте использовать строгое равенство(неравенство), которое сравнивает не только по значению но и по типу