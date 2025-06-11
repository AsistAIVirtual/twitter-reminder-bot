
const express = require('express');
const bodyParser = require('body-parser');
const { TwitterApi } = require('twitter-api-v2');
const app = express();
app.use(bodyParser.json());

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

app.post('/subscribe-tweet', async (req, res) => {
  const { twitterUsername, tokenName, days } = req.body;
  if (!twitterUsername || !tokenName || !days) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const message = `@${twitterUsername} Your reminder has been recorded. You'll be notified ${days} days before the unlock of token ${tokenName}.`;

  try {
    await client.v2.tweet(message);
    res.json({ success: true, message });
  } catch (err) {
    console.error('Tweet error:', err);
    res.status(500).json({ error: 'Failed to send tweet' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bot listening on port ${PORT}`));
