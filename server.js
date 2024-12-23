import TicketRouter from './Routers/TicketRouter.js'
import express from 'express' 
import cors from 'cors';

const app = express();
const PORT = 3002;

app.use(cors());

app.use('/api/tickets', TicketRouter);

app.listen(PORT, () => {

console.log(`Server is running on http://localhost:${PORT}`);

});