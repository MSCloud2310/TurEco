const app = require('./view/payment');

const port = 9000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});