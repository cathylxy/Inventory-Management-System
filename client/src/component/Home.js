import React from 'react';
import Item from "./Item";

function Home() {
    return (
        <div>

            <header>
                <h1>Inventory Management System</h1>
            </header>
            <div className="home-page">
                <Item />
            </div>
        </div>
    )
}

export default Home;