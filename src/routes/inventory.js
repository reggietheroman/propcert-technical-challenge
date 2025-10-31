import { Router } from 'express';
import { getImmudb } from '../database/immudbClient.js';
const router = Router();

/**
 * Return complete transaction history for a product
 * Include verification status for each transaction
 * Calculate running balance
 */
router.get('/history/:sku', (req, res) => {
  res.send('/history/:sku');
});

/**
 * Return current inventory levels for all products
 * Include last transaction timestamp for each product
 */
router.get('/snapshot', (req, res) => {
  res.send('snapshot');
});

/**
 * Record inventory movement (IN/OUT/ADJUSTMENT)
 * Update product quantity
 * Store with cryptographic proof
 * 
 * {
 *   "sku": "PROD-001",
 *   "type": "OUT",
 *   "quantity": 5,
 *   "reason": "Sale Order #456"
 * }
 */
router.post('/transaction', (req, res) => {
  res.send('Server running');
});

export default router;