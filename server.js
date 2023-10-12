require('colors');
require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)

  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server connection on port ${PORT} successful`.bold.green.italic
      );
    });
  })

  .catch(e => {
    console.log(
      `Server not running. Error message: ${e.message}`.bold.red.italic
    );
    process.exit(1);
  });
