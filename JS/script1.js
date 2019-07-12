alert("It works!");

/* Вывести в консоль числа от 10 до 20 включительно. */
for (var i=10; i<=20; i++){
	console.log(i);
}
/* Вывести в консоль числа от 10 до 20 включительно. */


/* 1. Доработайте скрипт таким образом, чтобы в консоль выводились квадраты чисел от 10 до 20. */
let mult = 1;
for (let i=10; i<=20; i=i+1) /* или i++ */ {
	mult = mult * mult; 	
console.log(i*i);
}
/* 1. Доработайте скрипт таким образом, чтобы в консоль выводились квадраты чисел от 10 до 20. */


/* 2. Доработайте скрипт таким образом, чтобы в консоль выводились сумма всех чисел от 10 до 20. */
let sum = 0;
for (let i=10; i<=20; i=i+1) /* или i++ */ {
	sum = sum + i; 	/* или  sum += i */
console.log(sum);
}
/* 2. Доработайте скрипт таким образом, чтобы в консоль выводились сумма всех чисел от 10 до 20. */


/* И добавим в скрипт функцию-обработчик клика по кнопке:
Здесь в первых двух строчках мы, используя id элементов, получаем текст, введённый в поля
ввода. Далее получаем div-элемент, и в последней строке выводим туда значения. */
function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;
	var resultDiv = document.getElementById('result');
	resultDiv.append("X1: "+X1 + ", X2: "+X2);
}
/* И добавим в скрипт функцию-обработчик клика по кнопке:
Здесь в первых двух строчках мы, используя id элементов, получаем текст, введённый в поля
ввода. Далее получаем div-элемент, и в последней строке выводим туда значения. */


/* Теперь выведем сумму значений X1 и X2. Изменим скрипт следующим образом: var resultDiv.append("X1 + X2 = "+(X1+X2));*/	
	function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;	
	var resultDiv = document.getElementById('result');
	resultDiv.append("X1 + X2 = "+(X1+X2));
	}
/* Теперь выведем сумму значений X1 и X2. Изменим скрипт следующим образом: var resultDiv.append("X1 + X2 = "+(X1+X2));
Получилось 1020, а не 30, потому что были сложены две строки «10» и «20». Нам надо получить из этих строк числа, прежде чем складывать
*/


/* Нам надо получить из этих строк числа, прежде чем складывать. В JavaScript для этого существует метод parseInt: */
function buttonClick(){
	var X1 = parseInt(document.getElementById('X1').value);
	var X2 = parseInt(document.getElementById('X2').value);
	var resultDiv = document.getElementById('result');
	resultDiv.append("X1 + X2 = "+(X1+X2));
}
/* Нам надо получить из этих строк числа, прежде чем складывать. В JavaScript для этого существует метод parseInt: */


/* есть ещё проблемы в этом коде. Попробуйте ввести в поле не
числовые значения:Метод parseInt не смог распарсить такую строку. Добавим проверку: предупреждение пользователя */
function buttonClick(){
	var X1 = parseInt(document.getElementById('X1').value);
	var X2 = parseInt(document.getElementById('X2').value);
	if(Number.isNaN(X1) || Number.isNaN(X2)){
		alert ("В поля X1 и X2 должны быть введены числовые значения.");
	}else{
			var resultDiv = document.getElementById('result');
			/* resultDiv.append("X1 + X2 = "+(X1+X2)); */
			resultDiv.innerText=("X1 + X2 = "+(X1+X2));/* 1. Доработайте скрипт таким образом, чтобы после каждого нажатия кнопки Run поле вывода результата очищалось от предыдущих значений */
			}
}
/* есть ещё проблемы в этом коде. Попробуйте ввести в поле не
числовые значения:Метод parseInt не смог распарсить такую строку. Добавим проверку: */


/* 2. Добавьте проверку на пустой ввод. Если пользователь не ввёл значения x1 или x2, выведите ошибку «Поля x1 и x2 должны быть заполнены». */
function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;
	if ( (X1.length == 0) || ( X2.length == 0 ) )
	{
        alert ('Поля x1 и x2 должны быть заполнены');
	}
	else
	{
	
	var X1 = parseInt(document.getElementById('X1').value);
	var X2 = parseInt(document.getElementById('X2').value);
	if(Number.isNaN(X1) || Number.isNaN(X2))
	{
		alert ("В поля X1 и X2 должны быть введены числовые значения.");
	}
	else
	{
			var resultDiv = document.getElementById('result');
			/* resultDiv.append("X1 + X2 = "+(X1+X2)); */
			resultDiv.innerText=("X1 + X2 = "+(X1+X2));
	}
	}
}


/* 3. Доработайте скрипт таким образом, чтобы после нажатия Run выводилась сумма всех чисел от x1 до x2. */
function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;
	if ( (X1.length == 0) || ( X2.length == 0 ) )
{
        alert ('Поля x1 и x2 должны быть заполнены');
}
	else
		{
		var X1 = parseInt(document.getElementById('X1').value);
		var X2 = parseInt(document.getElementById('X2').value);
		if(Number.isNaN(X1) || Number.isNaN(X2))
{
			alert ("В поля X1 и X2 должны быть введены числовые значения.");
}
			else
{
			if (X2 >= X1)
{
				let sum = 0;
				for (let i=X1; i<=X2; i=i+1) /* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
		else
{
			if (X1 > X2)
{	
				let sum = 0;
				for (let i=X2; i<=X1; i=i+1)					/* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
}
			}
		}			
}

	
/* 4. Добавьте кнопку «Очистить», которая удаляет введённые в поля x1 и x2 значения: */
function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;
	if ( (X1.length == 0) || ( X2.length == 0 ) )
{
        alert ('Поля x1 и x2 должны быть заполнены');
}
	else
		{
		var X1 = parseInt(document.getElementById('X1').value);
		var X2 = parseInt(document.getElementById('X2').value);
		if(Number.isNaN(X1) || Number.isNaN(X2))
{
			alert ("В поля X1 и X2 должны быть введены числовые значения.");
}
			else
{
			if (X2 >= X1)
{
				let sum = 0;
				for (let i=X1; i<=X2; i=i+1) /* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
		else
{
			if (X1 > X2)
{	
				let sum = 0;
				for (let i=X2; i<=X1; i=i+1)					/* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
}
			}
		}			
}	

function buttonClick2()
{
		var X1 = document.getElementById('X1').value = '';
		var X2 = document.getElementById('X2').value = '';	
}
/* 5. Добавьте возможность подсчитывать не только сумму чисел от x1 до x2, но и их произведение. Для возможности выбора между этими двумя алгоритмами добавьте на форму два переключателя 
(<input type=”radio”>) */
function buttonClick(){
	var X1 = document.getElementById('X1').value;
	var X2 = document.getElementById('X2').value;
	if ( (X1.length == 0) || ( X2.length == 0 ) )
{
        alert ('Поля x1 и x2 должны быть заполнены');
}
	else
		{
		var X1 = parseInt(document.getElementById('X1').value);
		var X2 = parseInt(document.getElementById('X2').value);
		if(Number.isNaN(X1) || Number.isNaN(X2))
{
			alert ("В поля X1 и X2 должны быть введены числовые значения.");
}
			else
{
			if (X2 >= X1)
{
				let sum = 0;
				for (let i=X1; i<=X2; i=i+1) /* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
		else
{
			if (X1 > X2)
{	
				let sum = 0;
				for (let i=X2; i<=X1; i=i+1)					/* или i++ */ 
				{
				sum = sum + i; 	/* или  sum += i */
				console.log(sum);
				}
				
}
}
			}
		}			
}	

function buttonClick2()
{
		var X1 = document.getElementById('X1').value = '';
		var X2 = document.getElementById('X2').value = '';	
}

/* 6. (повышенной сложности). Реализуйте алгоритм нахождения простых чисел в промежутке от X1 до X2.
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Т.е. если x1=2, а x2=10, результат должен быть: 2, 3, 5, 7. */
/* 7. (супер-повышенной сложности, специально для тех, кто уже знает JS, и кому было скучно при выполнении предыдущих заданий). Напишите карточную игру “memory game”. В начале игры все карты выложены на стол рубашкой вверху. Игрок может открывать по 2 карты, если изображения на них одинаковые – карты исчезают, если разные – карты переворачиваются обратно через 1-2 секунды. Цель игры – последовательно открывая карты с одинаковыми изображениями, добиться исчезновения всей колоды.
Пример можно посмотреть здесь: http://www.webgamesonline.com/memory/ */