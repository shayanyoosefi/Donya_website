const Retell = require('retell-sdk').default;

const RETELL_API_KEY = process.env.RETELL_API_KEY; // Use environment variable!
const AGENT_ID = 'agent_0ccfd1ffb79bf836aefff15912';

const client = new Retell({
  apiKey: RETELL_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const webCallResponse = await client.call.createWebCall({ agent_id: AGENT_ID });
    if (!webCallResponse.access_token) {
      return res.status(500).json({ error: 'Failed to get access token', details: webCallResponse });
    }
    res.status(200).json({ access_token: webCallResponse.access_token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 