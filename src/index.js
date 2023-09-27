require('dotenv').config();
const server = require('./app')


var port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})