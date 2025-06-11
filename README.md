
# Twitter Reminder Bot

This is a simple Twitter bot that sends reminders about token unlocks based on user-submitted data.

## How to Deploy (Vercel)

1. Clone this repository
2. Set the following environment variables in Vercel:
   - `TWITTER_API_KEY`
   - `TWITTER_API_SECRET`
   - `TWITTER_ACCESS_TOKEN`
   - `TWITTER_ACCESS_SECRET`
3. Deploy!

## POST /subscribe-tweet

Required JSON body:
```json
{
  "twitterUsername": "example",
  "tokenName": "JARVIS",
  "days": "3"
}
```
