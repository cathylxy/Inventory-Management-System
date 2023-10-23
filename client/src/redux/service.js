const getItems = async () => {
    const res = await fetch('http://localhost:3005/inventory', {
        method: 'GET'
    });
    return res.json();
}

const getItemById = async (itemID) => {
    const res = await fetch(`http://localhost:3005/inventory/${itemID}`, {
        method: 'GET'
    });
    return res.json();
}
const addItem = async (item) => {
    const res = await fetch('http://localhost:3005/inventory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    return await res.json();
};

const updateItem = async (itemID, updateFields) => {
    const res = await fetch(`http://localhost:3005/inventory/${itemID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateFields)
    });
    return await res.json();
};

const deleteItem = async (itemID) => {
    const res = await fetch(`http://localhost:3005/inventory/${itemID}`, {
        method: 'DELETE',
    });
    return await res.json();
};

export default {getItems, getItemById, addItem, deleteItem, updateItem};