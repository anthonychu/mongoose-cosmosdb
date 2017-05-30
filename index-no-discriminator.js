const connection = require('./connection');

connection.once('open', () => {
    const Order = mongoose.model('Order', new mongoose.Schema({
        orderDate: { type: Date, default: Date.now },
        items: [String]
    }));

    const Customer = mongoose.model('Customer', new mongoose.Schema({
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String }
    }));


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
