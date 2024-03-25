

// ( "STRING" BASICAMENTE É O QUE NÃO IMPRIME NEM "NUMBERS" E NEM "BOOLEAN" )


// ( "\n" PULA A LINHA )
console.log("Primeira linha \nSegunda linha");

// ( PARA INSERIR UMA PALAVRA COM ASPAS, DEVE COLOCAR DIFERENTE DA USADA NA STRING )
console.log("O meu nome é 'Marcos'");
console.log('O nome dela é "Cristiane"');

// ( TEMPLATE LITERALS USANDO BACKTICKS - PERMITE EXECUTAR JAVASCRIPT DENTRO DE UMA STRING )
console.log(`A multiplicação de 5 por 3 é ${5*3}`);

// ( CONCATENAÇÃO DE STRINGS )
console.log("Marcos," + " 39 anos," + " Casado," + " Cristão.");



console.log(typeof ("Primeira linha \nSegunda linha"));
console.log(typeof ("O meu nome é 'Marcos'"));
console.log(typeof ('O nome dela é "Cristiane"'));
console.log(typeof (`A multiplicação de 5 por 3 é ${5*3}`));
console.log(typeof ("Marcos," + " 39 anos," + " Casado," + " Cristão."));
