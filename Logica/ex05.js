//5. BÔNUS: reescreva o código anterior sem utilizar variáveis (var, let ou const) :P — ATENÇÃO: parâmetros de
//função não são considerados variáveis

function techOpsPrint(limit, steps, i) {
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
    techOpsPrint(limit, steps, i);
  }
}

function isDivisivel(numero, numeroDivisivel) {
  return numero % numeroDivisivel === 0;
}

techOpsPrint(100, 1, 1);