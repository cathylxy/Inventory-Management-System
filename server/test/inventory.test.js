const request = require('supertest');
const app = require('../app');
const ItemModel = require('../mongodb/itemModel');
const mongoose = require("mongoose");
const dotenv = require('dotenv'); // Import dotenv
dotenv.config();

describe('Test Inventory Controller', () => {
    console.log('describe inventory controller');
    let testItems = [];

    afterAll(async() => {
        await mongoose.connection.close();
    })

    afterEach(async () => {
        console.log("Before", testItems);
        for (const item of testItems) {
            await ItemModel.findByIdAndDelete(item);
        }
        testItems = [];
        console.log("After", testItems);
    })

    describe('GET /inventory', () => {
        test('should get items', async () => {
            const getItems = await request(app).get('/inventory');
            const count = await ItemModel.countDocuments();
            expect(getItems.status).toBe(200);
            expect(getItems.body.length).toBe(count);
        });
    });

    describe('POST /inventory', () => {
        test('should add an item', async () => {
            const newItem = {
                name: "banana",
                description: "local farm",
                price: 2,
                quantity: 200,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg"
            };
            const addItem = await request(app).post('/inventory').send(newItem);
            testItems.push(addItem.body._id);
            expect(addItem.status).toBe(201);
            expect(addItem.body).toMatchObject(newItem);
            const getItem = await request(app).get(`/inventory/${addItem.body._id}`);
            expect(getItem.status).toBe(200);
            expect(getItem.body).toMatchObject(newItem);
        });

        test('should fail to add an item with missing fields', async () => {
            const invalidItem = {
                name: "banana"
            };
            const addItem = await request(app).post('/inventory').send(invalidItem);
            expect(addItem.status).toBe(400);
            expect(addItem.body).toHaveProperty('error');
        });
    });

    describe('DELETE /inventory', () => {
        test('should delete an item', async () => {
            const newItem = {
                name: "banana",
                description: "local farm",
                price: 2,
                quantity: 200,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg"
            };
            const addItem = await request(app).post('/inventory').send(newItem);
            const deleteItem = await request(app).delete(`/inventory/${addItem.body._id}`);
            expect(deleteItem.status).toBe(200);
            expect(deleteItem.body).toMatchObject(newItem);
        });

        test('should fail to delete an item with invalid id', async () => {
            const invalidId = '123';
            const deleteItem = await request(app).delete(`/inventory/${invalidId}`);
            expect(deleteItem.status).toBe(404);
            expect(deleteItem.body).toHaveProperty('error');
        });
    });

    describe('PATCH /inventory', () => {
        test('should update an item', async () => {
            const newItem = {
                name: "banana",
                description: "local farm",
                price: 2,
                quantity: 200,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg"
            };
            const addItem = await request(app).post('/inventory').send(newItem);
            testItems.push(addItem.body._id);
            const updatedField = {
                price: 3,
                quantity: 100
            }
            const updateItem = await request(app).patch(`/inventory/${addItem.body._id}`).send(updatedField);
            expect(updateItem.status).toBe(200);
            expect(updateItem.body.price).toBe(3);
            expect(updateItem.body.quantity).toBe(100);
        });

        test('should fail to update an item with invalid id', async () => {
            const invalidId = '123';
            const updateItem = await request(app).patch(`/inventory/${invalidId}`).send({price: 3, quantity: 100});
            expect(updateItem.status).toBe(404);
            expect(updateItem.body).toHaveProperty('error');
        });
    });
});
