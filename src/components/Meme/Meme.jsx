// imports
import React, { useState, useEffect } from 'react';
import { catApiUrl, dogApiUrl } from '../utils/constraints.js';
import { Button, Card, Form } from 'react-bootstrap';

// store API keys for the cat and dog APIs
const apiKey = 'live_js1I9MDcTXDFqs4EQ1NCaHf1c5rasF2iT24oFqHepOKCFKtPXgcHgPDtIV0BG4dz';
const apiKeyDog = 'live_TzTzfke2nEbQT78jBaONdRuAJuwKAvpPvtQGKSpcLFgRdytWa1ggIeWuUlmS7gSm';

// take in animalType prop
const Meme = ({ animalType }) => {
    const [memeText, setMemeText] = useState({ topLine: "", bottomLine: "" });
    const [image, setImage] = useState('');
    const [breed, setBreed] = useState('');
    const [breedWikiUrl, setBreedWikiUrl] = useState('');
    const [loading, setLoading] = useState(true);
    // States for meme text colour change (inc the button)
    const [textColor, setTextColor] = useState('meme-text-dark')
    const [btnTheme, setBtnTheme] = useState('light')
    const [btnText, setBtnText] = useState('Light')

    // useEffect hook fetches the image URL when the animalType prop changes (to cat or dog)
    useEffect(() => {
        const apiUrl = animalType === 'cat' ? catApiUrl : dogApiUrl;
        const apikeyToUse = animalType === 'cat' ? apiKey : apiKeyDog; // Determine which API key to use
        // set to true on initialization
        setLoading(true);
        fetch(apiUrl, {
            headers: { 'x-api-key': apikeyToUse } // Use the correct API key based on the animalType
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching ${animalType}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    setImage(data[0].url);
                    setBreed(data[0].breeds && data[0].breeds.length > 0 ? data[0].breeds[0].name : '');
                    setBreedWikiUrl(data[0].breeds && data[0].breeds.length > 0 ? data[0].breeds[0].wikipedia_url : '');
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
// memeText local storage
localStorage.setItem(name, value);
};

// Change meme text color on click
const handleColorChange = () => {
setTextColor(textColor === 'meme-text-dark' ? 'meme-text-light' : 'meme-text-dark');
setBtnTheme(btnTheme === 'dark' ? 'light' : 'dark');
setBtnText(btnText === 'Dark' ? 'Light' : 'Dark');
}


    // return structured JSX - image currently restricted to 300px width (this can be changed), also returns cat breed as URL link to Wiki page
    return (
        <>
            <Card className="meme-card m-3">
                <Card.Header>
                    <h5 className="text-center">So fur, so good...</h5>
                </Card.Header>
                <Card.Body>
                    <Form className="p-3 top-form">
                        <h6 className="form-subheading text-center">Top Text</h6>
                        <Form.Group controlId="topLine">
                            <Form.Control
                                type="text"
                                value={memeText.topLine}
                                name="topLine"
                                onChange={handleInputChange}
                                placeholder="Enter top line of meme"
                            />
                        </Form.Group>
                    </Form>
                    <Form className="p-3 bottom-form">
                        <h6 className="form-subheading">Bottom Text</h6>
                        <Form.Group controlId="bottomLine">
                            <Form.Control
                                type="text"
                                value={memeText.bottomLine}
                                name="bottomLine"
                                onChange={handleInputChange}
                                placeholder="Enter bottom line of meme"
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

            {/* ES NOTE: This can be taken out if we decide we don't want this functionality: atm it changes meme text colour */}
            <div>
                <Button variant={btnTheme} onClick={handleColorChange}><i className="bi bi-lightbulb"></i>  {btnText} Text</Button>{' '}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="meme-container">
                    <img src={image} className="meme-img" alt={`${animalType} Meme`} style={{ maxWidth: '300px' }} />
                    <p className={"meme-top-line " + textColor}>{memeText.topLine}</p>
                    <p className={"meme-bottom-line " + textColor}>{memeText.bottomLine}</p>
                    <p>
                        {breed && (
                            <a href={breedWikiUrl} target="_blank" rel="noopener noreferrer">{breed}</a>
                        )}
                    </p>
                </section>
            )}
        </>
    );
};

// exports
export default Meme;