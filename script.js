/* 
Створити репозиторій із файлом index.html.
Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль.
Використовуючи оператор typeof та console.log
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log('12345 => ', typeof 12345);

console.log('some text => ', typeof 'some text');

console.log('true => ', typeof Boolean(1));

console.log('null => ', typeof null);

console.log('{object} => ', typeof {prop1:'prop1'});

console.log('BigInt => ', typeof BigInt(1));

console.log('Symbol => ', typeof Symbol());

console.log('function console.log => ', typeof console.log);

console.log('const without value => ', typeof someConst);
