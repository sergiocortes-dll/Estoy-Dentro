export function randomBoolean() {
  return Math.random() < 0.5;
}

export function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}


export function generateRandomPayload() {
  return {
    content: {
      type: "input_address",  // Este campo puede permanecer fijo, o puedes hacerlo aleatorio si lo deseas
      key: randomString(10),  // Generamos una clave aleatoria de 10 caracteres
      text: randomString(5),  // Generamos un texto aleatorio de 5 caracteres
    },
    timestamp: randomInteger(1600000000000, 1800000000000),  // Timestamp aleatorio entre ciertos límites
  };
}
