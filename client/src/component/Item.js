import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deleteItemAsync, getItemsAsync} from "../redux/thunks";
import {Link} from "react-router-dom";
import DetailView from "./DetailView";

function Item() {
    const items = useSelector((state) => state.inventory.items);
    const [detail, setDetail] = useState(false);
    const [detailItemID, setDetailItemID] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);

    const handleDelete = (itemID) => {
        dispatch(deleteItemAsync(itemID))
            .then(() => {
                dispatch(getItemsAsync())
            });
    }

    const handleDetail = (itemID) => {
        setDetail(true);
        setDetailItemID(itemID);
    }

    return (
        <div className="list-item">
            <h2>List Item</h2>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item._id} className="item">
                        <div className="item-info">
                            <div>Item Name:
                                <Link to={`/${item._id}`} onClick={() => handleDetail(item._id)}>{item.name}</Link>
                            </div>
                            <div>Item Price: {item.price}</div>
                            <div>Item Description: {item.description}</div>
                        </div>
                        <div className="item-image">
                            <img src={item.image} alt={item.name}/>
                        </div>
                        <div className="item-delete">
                            <button className="delete-button" onClick={() => handleDelete(item._id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {detail && <DetailView itemID={detailItemID}/>}
            </div>
        </div>
    )
}

export default Item;