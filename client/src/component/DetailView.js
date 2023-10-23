import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getItemByIdAsync} from "../redux/thunks";
import {useParams} from 'react-router-dom';
import Detail from "./Detail";
import Edit from "./Edit";

function DetailView() {
    const {id} = useParams();
    const editItem = useSelector((state) => state.inventory.editItem);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemByIdAsync(id))
    }, [dispatch, id]);

    return (
        <div>
            {editItem ? <Edit/> : <Detail/>}
        </div>
    )
}

export default DetailView;