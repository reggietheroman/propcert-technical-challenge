import app from './src/app.js';
import { closeClient, initClient } from './src/database/immudbClient.js';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await initClient();
    console.log('Started and logged into immudb.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to initialize immudb:', err);
    process.exit(1);
  }
})();

const shutdown = async () => {
  console.log('Shutting down server...');
  setTimeout(async () => {
    await closeClient();
    console.log('Server shut down.');
    process.exit(0);
  }, 500);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
