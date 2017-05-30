const { Order, Customer } = require('./models-discriminator');
const connection = require('./connection');

connection.once('open', () => {
    const order = new Order({
        items: [
            "apple",
            "orange",
            "pear"
        ]
    });
    order.save((err, savedOrder) => {
        console.log(JSON.stringify(savedOrder));
    });

    const customer = new Customer({
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com"
    });
    customer.save((err, savedCustomer) => {
        console.log(JSON.stringify(savedCustomer));
    });
});
