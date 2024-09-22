import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="container">
            <h1>Items List</h1>
            <ul className="item-list">
                {items.map((item) => (
                    <li key={item.id} className="item-card">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
