//4. BÔNUS: reescreva o código do exercício 2 sem qualquer tipo de laço de repetição, ou seja, sem utilizar “for”
//ou “while”. Dica: recursividade

let i = 1;

function techOpsPrint(limit, steps) {
  if (steps === 0) {
    console.log('erro');
    return;
  }

  if (i <= limit) {
    if (isDivisivel(i, 3) && isDivisivel(i, 5)) {
      console.log('TechOps');
    } else if (isDivisivel(i, 3)) {
      console.log('Tech');
    } else if (isDivisivel(i, 5)) {
      console.log('Ops');
    } else {
      console.log(i);
    }

    i += steps;

    //recursividade
    techOpsPrint(limit, steps);
  }
}

function isDivisivel(numero, numeroDivisivel) {
  return numero % numeroDivisivel === 0;
}

techOpsPrint(100, 1);