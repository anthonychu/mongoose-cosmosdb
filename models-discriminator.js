const mongoose = require('mongoose');

const baseOptions = {
    discriminatorKey: '__type',
    collection: 'data'
}
const Base = mongoose.model('Base', new mongoose.Schema({}, baseOptions));

const Order = Base.discriminator('Order', new mongoose.Schema({
    orderDate: { type: Date, default: Date.now },
    items: [String]
}));

const Customer = Base.discriminator('Customer', new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String }
}));

module.exports = {
    Order,
    Customer
};