//3. Com base no exercício anterior, monte uma função que aceite os parâmetros “start”, “end” e “steps”. Agora
//a função poderá trabalhar com sequências tanto incrementais (de 1 à 100), como decrementais (de 100 à 1),
//além de poder começar ou terminar em 0, que deve ser impresso como número.
//function techOpsPrint(start, end, steps) { ... }
//• start: número inicial da sequência
//• end: número final da sequência
//• steps: de quanto em quanto deverá subir ou descer a sequência, de 2 em 2, de 3 em 3, etc.

function techOpsPrint(start, end, steps) {
  if (steps === 0) {
    console.log('erro');
    return;
  }

  if (start < end) {
    for (let i = start; i <= end; i += steps) {
      imprimirNumeros(i);
    }
  } else {
    for (let i = start; i >= end; i -= steps) {
      imprimirNumeros(i);
    }
  }
}

function imprimirNumeros(numero) {
  if (isDivisivel(numero, 3) && isDivisivel(numero, 5)) {
    console.log('TechOps');
  } else if (isDivisivel(numero, 3)) {
    console.log('Tech');
  } else if (isDivisivel(numero, 5)) {
    console.log('Ops');
  } else {
    console.log(numero);
  }
}

function isDivisivel(numero, numeroDivisivel) {
  return numero % numeroDivisivel === 0;
}

techOpsPrint(50, 5, 4);