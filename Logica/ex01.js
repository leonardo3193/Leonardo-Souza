//1. Desenvolver um algoritmo que imprima uma sequência de número de 1 a 100 seguindo as regras abaixo
//• Caso o número seja divisível por 3, imprimir “Tech” ao invés do número
//• Caso o número seja divisível por 5, imprimir “Ops” ao invés do número
//• Caso o número seja divisível por 3 e 5, imprimir “TechOps” ao invés do número
//• Caso contrário, imprimir o próprio número

function imprimirNumeros() {
  for (let i = 1; i <= 100; i++) {
    if (isDivisivel(i, 3) && isDivisivel(i, 5)) {
      console.log('TechOps');
    } else if(isDivisivel(i, 3)) {
      console.log('Tech');
    } else if(isDivisivel(i, 5)) {
      console.log('Ops');
    } else {
      console.log(i);
    }
  }
}

function isDivisivel(numero, numeroDivisivel) {
  return numero % numeroDivisivel === 0;
}

imprimirNumeros();