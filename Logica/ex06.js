
//6. Dada as duas listas abaixo, monte uma terceira contendo apenas os valores repetidos
//• Lista1: [13,21,40,8,37,15,39,41,19,17,3,4,48,27,38,24,47,31,45,10,5,29,11,46,49]
//• Lista2: [6,44,33,17,21,41,13,31,35,10,48,8,49,45,25,50,5,4,18,34,26,1,3,32,42]
//-------------------------------------------------------------------------------------------------------

//Criando vetores;
const lista1 = [13, 21, 40, 8, 37, 15, 39, 41, 19, 17, 3, 4, 48, 27, 38, 24, 47, 31, 45, 10, 5, 29, 11, 46, 49];
const lista2 = [6, 44, 33, 17, 21, 41, 13, 31, 35, 10, 48, 8, 49, 45, 25, 50, 5, 4, 18, 34, 26, 1, 3, 32, 42];
let lista3 = [];

lista1.forEach(item => { // lendo a lista1
  if (lista2.includes(item)) {//verificando se tem o mesmo item lista2
    lista3.push(item); // colocando os itens repitidos na lista3
  }
})

/*no código acima eu verifico quais são os elemento repetidos na Lista1
quando encontro um repetido eu coloco ele em outro array, ai você vai ter os valores único de Lista1 e Lista2
em Lista3;*/