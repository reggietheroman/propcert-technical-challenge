import { Router } from 'express';
import { getImmudb } from '../database/immudbClient.js';
const router = Router();
/**
 * GET /api/products/:sku
 * Get current product details
 * Include current stock level calculated from transactions
 * Verify data integrity before returning
 */
router.get('/products/:sku', (req, res) => {
  const sku = req.params.sku;
  res.send('/products/:sku');
});

/**
 * GET /api/products/:sku
 * Add new product to inventory
 * Return product with Immudb verification hash
 */
router.post('/products', (req, res) => {
  res.send('/products');
});

export default router;