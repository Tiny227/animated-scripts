import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import { Resend } from 'resend';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000; 

const resend = new Resend('re_123456789'); 

app.use(cors());
app.use(express.json());

const WAITLIST_FILE = '/home/team/shared/waitlist.json';

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

// team-db helper
const queryDb = (sql) => {
  try {
    const result = execSync(`team-db "${sql.replace(/"/g, '\\"')}"`).toString();
    return JSON.parse(result);
  } catch (error) {
    console.error('Database error:', error.message);
    return null;
  }
};

// Sync back to JSON for compatibility if needed
const syncToJson = (waitlist) => {
  try {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));
  } catch (error) {
    console.error('Error writing waitlist JSON:', error);
  }
};

const sendWelcomeEmail = async (email, referralCode) => {
  console.log(`[Email 1] Sending Welcome Email to ${email}`);
};

const sendTransparencyEmail = async (email) => {
  console.log(`[Email 2] Sending Transparency Story Email to ${email}`);
};

const sendReferralEmail = async (email, referralCode) => {
  console.log(`[Email 3] Sending Referral Reminder Email to ${email}`);
};

const checkAndSendFollowUps = async () => {
  console.log('--- Running Scheduler ---');
  const waitlist = queryDb("SELECT * FROM waitlist");
  if (!waitlist) return;

  const now = new Date();
  let updatedCount = 0;

  for (const entry of waitlist) {
    const emailsSent = JSON.parse(entry.emailsSent || '[]');
    const signupDate = new Date(entry.timestamp);
    const elapsedMs = now - signupDate;

    let updatedEntry = false;

    if (elapsedMs >= THREE_DAYS_MS && !emailsSent.includes('transparency')) {
      await sendTransparencyEmail(entry.email);
      emailsSent.push('transparency');
      updatedEntry = true;
    }

    if (elapsedMs >= SEVEN_DAYS_MS && !emailsSent.includes('referral')) {
      await sendReferralEmail(entry.email, entry.referralCode);
      emailsSent.push('referral');
      updatedEntry = true;
    }

    if (updatedEntry) {
      queryDb(`UPDATE waitlist SET emailsSent = '${JSON.stringify(emailsSent)}' WHERE email = '${entry.email}'`);
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    const fullWaitlist = queryDb("SELECT * FROM waitlist");
    syncToJson(fullWaitlist);
    console.log(`Scheduler complete. Updated ${updatedCount} entries.`);
  } else {
    console.log('No pending follow-up emails to send.');
  }
  console.log('--------------------------');
};

app.post('/api/waitlist', (req, res) => {
  const { email, referralCode: referredBy } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const cleanEmail = email.toLowerCase().replace(/'/g, "''");
  const existing = queryDb(`SELECT * FROM waitlist WHERE email = '${cleanEmail}'`);
  
  if (existing && existing.length > 0) {
    return res.status(200).json({ 
      message: 'Already on the waitlist',
      referralCode: existing[0].referralCode,
      referralCount: existing[0].referralCount || 0
    });
  }

  const referralCode = nanoid(8);
  const timestamp = new Date().toISOString();
  const emailsSent = JSON.stringify(['welcome']);

  queryDb(`INSERT INTO waitlist (email, referralCode, referredBy, referralCount, timestamp, emailsSent) VALUES ('${cleanEmail}', '${referralCode}', ${referredBy ? `'${referredBy}'` : 'NULL'}, 0, '${timestamp}', '${emailsSent}')`);

  if (referredBy) {
    queryDb(`UPDATE waitlist SET referralCount = referralCount + 1 WHERE referralCode = '${referredBy}'`);
  }
  
  const fullWaitlist = queryDb("SELECT * FROM waitlist");
  syncToJson(fullWaitlist);
  
  sendWelcomeEmail(email, referralCode);

  res.status(200).json({ 
    message: 'Successfully joined the waitlist',
    referralCode,
    referralCount: 0
  });
});

app.post('/api/simulate-scheduler', async (req, res) => {
  await checkAndSendFollowUps();
  res.status(200).json({ message: 'Scheduler simulation executed.' });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Storefront server running on http://0.0.0.0:${PORT}`);
});
