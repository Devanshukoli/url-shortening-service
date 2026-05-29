import express from 'express'
import { configDotenv } from 'dotenv';
const app = express()

configDotenv();


const port = process.env.PORT;
console.log(port)