import app from './app';
import { startDB } from './db';

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

startDB();
