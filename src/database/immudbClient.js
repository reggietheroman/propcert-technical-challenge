import { Client } from '@codenotary/immudb-node'

let client;

export async function initClient() {
  if (client) return client;

  client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3322,
    user: process.env.DB_USER || 'immudb',
    password: process.env.DB_PASS || 'immudb',
    database: process.env.DB_NAME || 'defaultdb',
  });

  return client;
}

export function getImmudb() {
  if (!client) throw new Error('Immudb not initialized yet.');
  return client;
}

export async function closeClient() {
  if (client) {
    await client.close();
    console.log('Immudb connection closed.');
    client = null;
  }
}
