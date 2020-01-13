import express, { static } from 'express';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(static(join(__dirname, 'build')));

app.get('*', function (req, res) {
 res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);