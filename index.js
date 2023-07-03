const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening to port http://localhost:${port}`);
});