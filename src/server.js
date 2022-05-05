const app = require('./app');

console.log(process.env.PORT)

app.listen(process.env.PORT || 3003, () => console.log('Server is on...'));