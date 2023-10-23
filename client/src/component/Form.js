import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItemAsync} from "../redux/thunks";

function Form() {
    const initial = {
        name: "",
        id: "",
        description: "",
        price: "",
        quantity: "",
        image: "",
    };
    const [input, setInput] = useState(initial);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value}) // reference: chatGPT (update existing property using spread)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addItemAsync(input));
        setInput(initial);
    }

    return (
        <div>
            <div className="create-item">
                <h2>Add Item</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Item Name</label><br/>
                        <input type="text" name="name" value={input.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Description</label><br/>
                        <textarea rows="20" cols="50" placeholder="Please type here"
                                  name="description" value={input.description} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <label>Price</label><br/>
                        <input type="number" name="price" value={input.price} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Quantity</label><br/>
                        <input type="number" name="quantity" value={input.quantity} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Image</label><br/>
                        <input type="text" name="image" value={input.image} onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                        <button type="button" onClick={() => (setInput(initial))}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;