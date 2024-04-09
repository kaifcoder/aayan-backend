import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json(
    {
        limit: '50mb'
    }
));
app.use(express.urlencoded(
    {
        limit: '50mb',
        extended: true
    }
));
app.use(express.static('public'));





//routes imports
import taskRouter from './routes/task.routes.js';



//routes declarations
app.use('/api/v1/task', taskRouter);

app.get('/', (req, res) => {
    res.send('Hello, World');
}
);

app.get('/async', (req, res) => {
    setTimeout(() => {
        res.send('Async response after 2 seconds');
    }, 2000);
}
);


export {
    app
} 