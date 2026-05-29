import express from 'express'
import dotenv from 'dotenv';
dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.get('/health', (req, res) => {
  console.log('backend working')
  res.send('backend is working.')
})


app.listen(port, () => {
  console.log(`backend listening to the ${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught error:', err);
});