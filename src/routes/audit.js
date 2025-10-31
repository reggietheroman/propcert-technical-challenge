import { Router } from 'express';
import { getImmudb } from '../database/immudbClient.js';
const router = Router();
/**
 * Return complete transaction history for a product
 * Include verification status for each transaction
 * Calculate running balance
 */
router.get('/verify/:transaction_id', (req, res) => {
  res.send('/verify/:transaction_id');
});

export default router;