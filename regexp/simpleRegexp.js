// Напишите регулярное выражение, в котором:
// Первый и второй символ это цифры
// Третий символ это /
// Четвертый это любой символ, за исключением a-z

const regexp = /\d\d\/[^a-z]/g;


// Напишите регулярное выражение, которое находит строку, содержащую только support@hexlet.io. 
// Это означает, что такие строки, как something here support@hexlet.io и 
// support@hexlet.io something here не попадают под регулярное выражение.

const regexp2 = /^support@hexlet\.io$/g;

// Напишите регулярное выражение, которое находит подстроки, состоящие из:
// три символа из класса символов a-z:
// группа символов из первого условия

const regexp3 = /([a-z]{3})\:\1/g;

// Напишите регулярное выражение, которое находит подстроку 1, за которой следует подстрока 2:
// 1. 80
// 2. : и один или более символов не входящих в класс a-z

const regexp4 = /80(?=\:[^a-z])/;

// Напишите регулярное выражение, которое независимо от регистра находит все подстроки python (Python, pytHon, pYThon и т.д.), 
// заключённые в двойные " или одинарные ' кавычки.

const regexp5 = /("|')python\1/gi;