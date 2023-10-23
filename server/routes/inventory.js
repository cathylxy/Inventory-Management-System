const express = require('express');
const inventoryRouter = express.Router();
const queries = require('../mongodb/queries');

// GET inventory
inventoryRouter.get('/', async function (req, res, next) {
    try {
        const inventory = await queries.getItems();
        return res.status(200).send(inventory);
    } catch (e) {
        return res.status(404).send({error: 'Items not found'});
    }
});

// GET an item by id
inventoryRouter.get('/:id', async function (req, res, next) {
    try {
        const foundItem = await queries.getItemById(req.params.id);
        return res.status(200).send(foundItem);
    } catch (e) {
        return res.status(404).send({error: 'Items not found'});
    }
});

// POST an item
inventoryRouter.post('/', async function (req, res, next) {
    try {
        const newItem = await queries.addItem(req.body);
        return res.status(201).send(newItem);
    } catch (error) {
        return res.status(400).send({error: 'Item not added'});
    }
});

// PATCH an item
inventoryRouter.patch('/:id', async function (req, res, next) {
    try {
        const updateFields = req.body;
        const updatedItem = await queries.updateItem(req.params.id, updateFields);
        return res.status(200).send(updatedItem);
    } catch (error) {
        return res.status(404).send({error: 'Items not found'});
    }
});

// Delete an item by id
inventoryRouter.delete('/:id', async function (req, res, next) {
    try {
        const foundItem = await queries.getItemById(req.params.id);
        await queries.deleteItem(req.params.id);
        return res.status(200).send(foundItem);
    } catch (error) {
        return res.status(404).send({error: 'Items not found'});
    }
});

module.exports = inventoryRouter;