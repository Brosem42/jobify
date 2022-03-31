import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connect.js';

dotenv.config();

const app = express();

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.get('/', (req, res) => {
  res.send('Welcome bro!')
});

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