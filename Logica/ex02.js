//2. Transforme o código do exercício anterior em uma função que aceite como parâmetros “limit” e “steps”. Se
//“steps” for 0, imprimir erro.
//function techOpsPrint(limit, steps) { ... }
//• limit: a partir de 0, até qual número o algoritmo deverá rodar
//• steps: de quanto em quanto deverá subir a sequência, de 2 em 2, de 3 em 3, etc.

function techOpsPrint(limit, steps) {
  if(steps === 0) {
    console.log('erro');
    return;
  }

  for (let i = 1; i <= limit; i += steps) {
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

techOpsPrint(200, 1);