import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import router from './routers/routescontroller.js';

env.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {

    console.log(`Server is started on port ${PORT}`);

});

