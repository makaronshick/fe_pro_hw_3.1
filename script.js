/* 
Створити репозиторій із файлом index.html.
Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль.
Використовуючи оператор typeof та console.log
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log('12345 => ', typeof 12345);

console.log('123.45 => ', typeof 123.45);

console.log('some text => ', typeof 'some text');

console.log('true => ', typeof Boolean(1));

console.log('false => ', typeof Boolean(0));

console.log('null => ', typeof null);

console.log('array [1, 2] => ', typeof [1, 2]);

console.log('{object} => ', typeof {prop1:'prop1'});

console.log('BigInt => ', typeof BigInt(1));

console.log('Symbol => ', typeof Symbol());

console.log('function console.log => ', typeof console.log);

console.log('const without value => ', typeof someConst);

const someArray = [1, 2];
console.log('non-existent array index => ', typeof someArray[2]);

console.log('string / null => ', typeof 'string' / null);

console.log('null * 100 => ', typeof null * 100);

console.log('number 99999 to the power of 99 => ',  Math.pow(99999, 99));
