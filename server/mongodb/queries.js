const ItemModel = require('./itemModel');

const queries = {
    getItems: async function() {
        const items = await ItemModel.find({});
        return items;
    },
    getItemById: async function(itemID) {
        const item = await ItemModel.findById(itemID);
        return item;
    },
    addItem: async function(item) {
        const newItem = await ItemModel.create(item);
        return newItem;
    },
    deleteItem: async function(itemID) {
        const item = await ItemModel.findByIdAndDelete(itemID);
        return item;
    },
    updateItem: async function(itemID, updateFields) {
        let item = await ItemModel.findById(itemID);
        for (const prop in updateFields) {
            if (prop in updateFields) {
                item[prop] = updateFields[prop];
            }
        }
        return await item.save();
    }
}
module.exports = queries;
