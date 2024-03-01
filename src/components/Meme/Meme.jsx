// imports
import React, { useState, useEffect } from 'react';
import { catApiUrl, dogApiUrl } from '../utils/constraints.js';

// store API key
const apiKey = 'live_js1I9MDcTXDFqs4EQ1NCaHf1c5rasF2iT24oFqHepOKCFKtPXgcHgPDtIV0BG4dz';

// take in animalType prop
const Meme = ({ animalType }) => {
    const [memeText, setMemeText] = useState({ topLine: "", bottomLine: "" });
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect hook fetches the image URL when the animalType prop changes (to cat or dog)
    useEffect(() => {
        const apiUrl = animalType === 'cat' ? catApiUrl : dogApiUrl;
        // set to true on initialisation
        setLoading(true);
        fetch(apiUrl, {
            headers: { 'x-api-key': apiKey }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching ${animalType}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    setImage(data[0].url);
                    setLoading(false);
                }
            })
            .catch(error => console.error(`Error fetching ${animalType} images:`, error));
    }, [animalType]);

    // update memeText upon user input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMemeText(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // return structured JSX - image currently restricted to 300px width (this can be changed)
    return (
        <>
            <form>
                <input
                    type="text"
                    id="topLine"
                    value={memeText.topLine}
                    name="topLine"
                    onChange={handleInputChange}
                    placeholder="Enter top line of meme" />
                <input
                    type="text"
                    id="bottomLine"
                    value={memeText.bottomLine}
                    name="bottomLine"
                    onChange={handleInputChange}
                    placeholder="Enter bottom line of meme" />
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="meme-container">
                    <img src={image} className="meme-img" alt={`${animalType} Meme`} style={{ maxWidth: '300px' }} />
                    <p className="meme-top-line">{memeText.topLine}</p>
                    <p className="meme-bottom-line">{memeText.bottomLine}</p>
                </section>
            )}
        </>
    );
};

// exports
export default Meme;