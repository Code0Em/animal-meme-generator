// imports
import React, { useState, useEffect } from 'react';
import { catApiUrl, dogApiUrl } from '../utils/constraints.js';
import Button from 'react-bootstrap/Button';

// store API key
const apiKey = 'live_js1I9MDcTXDFqs4EQ1NCaHf1c5rasF2iT24oFqHepOKCFKtPXgcHgPDtIV0BG4dz';

// take in animalType prop
const Meme = ({ animalType }) => {
    const [memeText, setMemeText] = useState({ topLine: "", bottomLine: "" });
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    // States for meme text colour change (inc the button)
    const [textColor, setTextColor] = useState('black')
    const [btnTheme, setBtnTheme] = useState('light')
    const [btnText, setBtnText] = useState('Light')

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

    // updates memeText upon user input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMemeText(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Change meme text color on click
    const handleColorChange = () => {
        setTextColor(textColor === 'black' ? 'white' : 'black');
        setBtnTheme(btnTheme === 'dark' ? 'light' : 'dark');
        setBtnText(btnText === 'Dark' ? 'Light' : 'Dark');
    }

    // return structured JSX - image currently restricted to 300px width (this can be changed)
    return (
        <>
            <form className ='p-5'>
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

            {/* ES NOTE: This can be taken out if we decide we don't want this functionality: atm it changes meme text colour */}
            <div>
            <Button variant={btnTheme} onClick={handleColorChange}>{btnText} Text</Button>{' '}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="meme-container">
                    <img src={image} className="meme-img" alt={`${animalType} Meme`} style={{ maxWidth: '300px' }} />
                    {/* Includes dynamic text color */}
                    <p className="meme-top-line" style={{ color: textColor }}>{memeText.topLine}</p>
                    <p className="meme-bottom-line" style={{ color: textColor }}>{memeText.bottomLine}</p>
                </section>
            )}
        </>
    );
};

// exports
export default Meme;