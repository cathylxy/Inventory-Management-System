import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {setEditItem} from "../redux/reducer";

function Detail() {
    const detailedItem = useSelector((state) => state.inventory.detailedItem);
    const dispatch = useDispatch();

    if (!detailedItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail">
                <div className="popup-title">
                    <div className="popup-text">Details</div>
                    <Link to={"/"}>
                        <button className="close-button" onClick={() => dispatch(setEditItem(false))}>X</button>
                    </Link>
                </div>
                <div className="detail-item">
                    <div className="detail-info">
                        <div>Item ID: {detailedItem._id}</div>
                        <div>Item Name: {detailedItem.name}</div>
                        <div>Item Description: {detailedItem.description}</div>
                        <div>Item Price: {detailedItem.price}</div>
                        <div>Item Quantity: {detailedItem.quantity}</div>
                        <div>Item Purchase Date: {detailedItem.purchaseDate.replace(/T/, ' ').substring(0, 10)}</div>
                    </div>
                    <div className="detail-image">
                        <img src={detailedItem.image} alt={detailedItem.name}/>
                    </div>
                </div>
                <div className="detail-button">
                    <button onClick={() => dispatch(setEditItem(true))}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;