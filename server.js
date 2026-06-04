import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const WAITLIST_FILE = path.join(__dirname, 'waitlist.json');

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const entry = {
    email,
    timestamp: new Date().toISOString(),
  };

  try {
    let waitlist = [];
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, 'utf8');
      waitlist = JSON.parse(data);
    }
    
    waitlist.push(entry);
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));
    
    console.log(`New waitlist signup: ${email}`);
    res.status(200).json({ message: 'Successfully joined the waitlist' });
  } catch (error) {
    console.error('Error saving to waitlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
