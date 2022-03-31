import express from 'express';
import dotenv from "dotenv";
dotenv.config();

import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';

const app = express();

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome bro!')
});

app.use('/api/v1/auth', authRouter)

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8000


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()