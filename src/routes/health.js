import { Router } from 'express';
import { getImmudb } from '../database/immudbClient.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Server running');
});

router.get('/immudb', async (req, res) => {
  const immudbClient = getImmudb();

  try {
    const result = await immudbClient.sqlQuery({
      sql: 'SELECT 1',
      params: [],
      reuseSnapshot: false,
    });
    res.json({ message: 'Immudb server is running.' , result});
  } catch (err) {
    res.status(503).json({ ok: false, error: String(err) });
  }
});

export default router;
