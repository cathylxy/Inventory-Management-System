import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getItemByIdAsync, patchItemAsync} from "../redux/thunks";
import {setEditItem} from "../redux/reducer";

function Edit() {
    const detailedItem = useSelector((state) => state.inventory.detailedItem);
    const itemID = detailedItem._id;
    const [editInput, setEditInput] = useState({});
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEditInput({...editInput, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(patchItemAsync({itemID: itemID, updateFields: editInput}))
            .then(() => {
                dispatch(getItemByIdAsync(itemID));
                dispatch(setEditItem(false));
                setEditInput({});
            })
    }

    return (
        <div className="edit-container">
            <div className="detail">
                <div className="popup-title">
                    <div className="popup-text">Update</div>
                    <Link to={"/"}>
                        <button className="close-button" onClick={() => dispatch(setEditItem(false))}>X</button>
                    </Link>
                </div>
                <div className="detail-info">
                    <div>Item Name:
                        <input type="text" name="name" value={editInput.name} onChange={handleChange}
                               placeholder={detailedItem.name}/>
                    </div>
                    <div>Item Description:
                        <input type="text" name="description" value={editInput.description} onChange={handleChange}
                               placeholder={detailedItem.description}/>
                    </div>
                    <div>Item Price:
                        <input type="number" name="price" value={editInput.price} onChange={handleChange}
                               placeholder={detailedItem.price}/>
                    </div>
                    <div>Item Quantity:
                        <input type="number" name="quantity" value={editInput.quantity} onChange={handleChange}
                               placeholder={detailedItem.quantity}/>
                    </div>
                    <div> Item Image:
                        <input type="text" name="image" size="30" value={editInput.image} onChange={handleChange}
                               placeholder={detailedItem.image}/>
                    </div>
                </div>
                <div className="detail-button">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Edit;