export const cost = (basket) => {
  const PRECIO_LIBRO = 800;
  const libroCount = [0, 0, 0, 0, 0];
  const librosNoRepetidos = []
  const librosRepetidos = []
  let totalLibros = 0
  
  basket.reduce((acc, book) => {
    libroCount[book - 1] += 1;
    return acc;
  }, libroCount);
  libroCount.forEach(count => {
  if (count === 1) {
    librosNoRepetidos.push(1);
  } else if (count > 1) {
    librosNoRepetidos.push(1);
    librosRepetidos.push(count - 1);
  }
  });
  const calcularDescuento = (libros, noRep = 0, rep = 0) => {
  const precios = {
    1: PRECIO_LIBRO,
    2: PRECIO_LIBRO * 2,
    3: PRECIO_LIBRO * 3 * 0.9,
    4: PRECIO_LIBRO * 4 * 0.8,
    5: PRECIO_LIBRO * 5 * 0.75,
    6: PRECIO_LIBRO * 4 * 0.8 + PRECIO_LIBRO * 2 * 0.95,
    7: PRECIO_LIBRO * 5 * 0.75 + PRECIO_LIBRO * 2 * 0.95,
    8: ((PRECIO_LIBRO * 4) * 0.80) * 2,
    9: PRECIO_LIBRO * 5 * 0.75 + PRECIO_LIBRO * 4 * 0.8,
    10: (PRECIO_LIBRO * 5 * 0.75) * 2,
    11: (PRECIO_LIBRO * 5 * 0.75) * 2 + PRECIO_LIBRO,
    16: (((PRECIO_LIBRO * 4) * 0.80) * 4),
    22: PRECIO_LIBRO * 2 * 0.95
  };
  if (libros === 1) {
    return PRECIO_LIBRO;
  } else if (libros === 2 && noRep === 2) {
    return precios[22];
  } else if (libros === 2 && rep === 1 && noRep === 1) {
    return precios[2];
  } else if (libros in precios) {
    return precios[libros];
  } else if (libros > 5) {
    let libRestantes = libros - 5;
    let precioRestantes = precios[libRestantes];
      return precioRestantes + precios[5];
  } else {
    return 0;
  }
};
  let totalRepetidos = 0;
  for(let i = 0; i < librosRepetidos.length; i++) {
    totalRepetidos += librosRepetidos[i];
  };
  let totalLibrosCount = librosNoRepetidos.length + totalRepetidos;
  totalLibros = calcularDescuento(totalLibrosCount,librosNoRepetidos.length,totalRepetidos); 
  return totalLibros;
}