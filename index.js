import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'

const app =express();
const PORT =5000;

app.use(bodyParser.json());
// all routes start with '/users' eg if it is '/' == '/users'
app.use('/users', userRoutes);
app.get('/',(req,res)=>res.send('hello  kamal nayan'));
app.listen(PORT, ()=>console.log(`Server ${PORT}`));
