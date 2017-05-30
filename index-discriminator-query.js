const { Order, Customer } = require('./models-discriminator');
const connection = require('./connection');

connection.once('open', () => {
    Order.find((err, res) => {
        res.forEach(r => console.log(JSON.stringify(r)));
    });
});
