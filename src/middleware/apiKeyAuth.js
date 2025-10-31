export function apiKeyAuth(req, res, next) {
  const apiKey = req.header('x-api-key');
  const validKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }

  next();
}
