// Minimal backend for Retell web call access token using retell-sdk
const express = require('express');
const cors = require('cors');
const Retell = require('retell-sdk').default;

const app = express();
app.use(cors());
app.use(express.json());

const RETELL_API_KEY = 'key_b3c205f6fe0cfd5922c18088d79b'; // <-- Replace with your actual API key
const AGENT_ID = 'agent_0ccfd1ffb79bf836aefff15912';

const client = new Retell({
  apiKey: RETELL_API_KEY,
});

app.post('/api/retell-token', async (req, res) => {
  try {
    const webCallResponse = await client.call.createWebCall({ agent_id: AGENT_ID });
    if (!webCallResponse.access_token) {
      return res.status(500).json({ error: 'Failed to get access token', details: webCallResponse });
    }
    res.json({ access_token: webCallResponse.access_token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Retell token server running on port ${PORT}`);
}); 