import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import router from './routes/linksRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(errorHandler);
app.use('/links', router);

app.listen(PORT, () => console.log(`web server listening on port ${PORT}`));
