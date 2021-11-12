import React, { useState } from 'react';

import { getImageList } from './api/getImageList';
import './App.css';
import Card from './Card';

const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const response = await getImageList(query);
            setImages(response.results.splice(0,3));
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}onKeyPress={search}
            />
            <div className="image-list">
                {
                    images.length ?
                    (
                        images.map((image) => {
                            return (<Card image={image}></Card>);
                        })
                    ) : "Enter text to search images"
                }
            </div>
        </div>
    );
}

export default App;