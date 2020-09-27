require('dotenv').config();
const cors = require('cors');

const app  = require('./app');
require('./database');


app.use(cors());

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}
main();