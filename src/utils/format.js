function formatForReal(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatWords(text) {
  if (!text) return;
  let words = text.toString().split(" ");
  for (let a = 0; a < words.length; a++) {
    let w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}

function shuffleArray(array) {
  let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function sortBySmallerValue(array) {
  if (!array) return;
  array.sort(function (a, b) {
    if (a.valor < b.valor) return -1;
    if (a.valor > b.valor) return 1;
    return 0;
  });

  return array;
}

function sortByBiggerValue(array) {
  if (!array) return;
  array.sort(function (a, b) {
    if (a.valor > b.valor) return -1;
    if (a.valor < b.valor) return 1;
    return 0;
  });

  return array;
}

function sortByName(array) {
  if (!array) return;
  array.sort(function (a, b) {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
  });

  return array;
}

export default {
  formatForReal,
  formatWords,
  shuffleArray,
  sortBySmallerValue,
  sortByBiggerValue,
  sortByName,
};
