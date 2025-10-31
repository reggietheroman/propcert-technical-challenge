import { Router } from 'express';
import auditRoutes from './audit.js';
import healthRoutes from './health.js';
import inventoryRoutes from './inventory.js';
import productRoutes from './products.js';
import { apiKeyAuth } from '../middleware/apiKeyAuth.js';

const router = Router();

router.use('/audit', apiKeyAuth, auditRoutes);
router.use('/health', healthRoutes);
router.use('/inventory', apiKeyAuth, inventoryRoutes);
router.use('/products', apiKeyAuth, productRoutes);

export default router;
