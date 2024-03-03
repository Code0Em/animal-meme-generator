// imports
import React, { useState, useEffect } from 'react';
import { catApiUrl, dogApiUrl } from '../utils/constraints.js';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import './../../App.css';


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
    const [savedMemes, setSavedMemes] = useState([]);

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

    //  load saved memeText from local storage
    useEffect(() => {
        // gets memeText from local storage
        const storedTopLine = localStorage.getItem('topLine');
        const storedBottomLine = localStorage.getItem('bottomLine');
        // set memeText if 'TopLine & BottomLine' exsists in local storage 
        if (storedTopLine && storedBottomLine) {
            setMemeText({ topLine: storedTopLine, bottomLine: storedBottomLine });
        }
    }, []);

    // save the current meme to local storage 
    const handleSaveMeme = () => {
        const newMeme = { topLine: memeText.topLine, bottomLine: memeText.bottomLine, imageUrl: image }; // Store image URL along with meme text
        setSavedMemes(prevMemes => [...prevMemes, newMeme]);
        // update local storage with the updated savedMemes array
        localStorage.setItem('savedMemes', JSON.stringify([...savedMemes, newMeme]));
    };

    // reload a saved meme by setting the memeText and imageUrl from a saved meme
    const handleReloadMeme = (savedMeme) => {
        setMemeText({ topLine: savedMeme.topLine, bottomLine: savedMeme.bottomLine });
        setImage(savedMeme.imageUrl);
        localStorage.setItem('topLine', savedMeme.topLine);
        localStorage.setItem('bottomLine', savedMeme.bottomLine);
    };

    // load saved memes from local storage 
    useEffect(() => {
        const storedMemes = localStorage.getItem('savedMemes');
        if (storedMemes) {
            setSavedMemes(JSON.parse(storedMemes));
        }
    }, []);

    // clear input fields when page is refreshed / start again button is pressed
    useEffect(() => {
        setMemeText({ topLine: "", bottomLine: "" });
    }, []);

    // return structured JSX - image currently restricted to 300px width (this can be changed), also returns cat breed as URL link to Wiki page
    return (
        <>
            <Container fluid id='meme-wrapper'>
                {/*  ---------------------------------------------------------------------------------------  */}
                <Row>
                    <Col>
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
                                            maxLength={30}
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
                                            maxLength={30} // Add maxLength attribute for validation
                                        />
                                    </Form.Group>
                                </Form>
                                {/* ES NOTE: This can be taken out if we decide we don't want this functionality: atm it changes meme text colour */}
                                <div>
                                    <Button variant={btnTheme} onClick={handleColorChange}><i className="bi bi-lightbulb"></i>  {btnText} Text</Button>{' '}
                                    <Button variant="primary" onClick={handleSaveMeme}>Save Meme</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/*  ---------------------------------------------------------------------------------------  */}
                    <Col>
                        <Card id='storage'>
                            {loading ? (
                                <p className="text-center">Anything is paw-sible!</p>
                            ) : (
                                <section className="meme-container">
                                    <img src={image} className="meme-img" alt={`${animalType} Meme`}/>
                                    <p className={"meme-top-line " + textColor}>{memeText.topLine}</p>
                                    <p className={"meme-bottom-line " + textColor}>{memeText.bottomLine}</p>
                                    <p>
                                        {breed && (
                                            <a href={breedWikiUrl} target="_blank" rel="noopener noreferrer">{breed}</a>
                                        )}
                                    </p>
                                </section>
                            )}
                        </Card>
                    </Col>
                </Row>
                {/*  ---------------------------------------------------------------------------------------  */}

                {/* reload button for saved memes */}
                <Row>
                    <Col>
                        <Card id="storage">
                            <div>
                                {savedMemes.map((savedMeme, index) => (
                                    <Button id="storage-btn" key={index} onClick={() => handleReloadMeme(savedMeme)}>
                                        Reload Meme {index + 1}
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        <Container fluid id='meme-wrapper'>
{/*  ---------------------------------------------------------------------------------------  */}
            <Row>
                <Col>
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
{/* ES NOTE: This can be taken out if we decide we don't want this functionality: atm it changes meme text colour */}
                            <div id='meme-btns'>
                            <Button variant={btnTheme} onClick={handleColorChange}><i className="bi bi-lightbulb"></i>  {btnText} Text</Button>{' '}
                            <Button variant="primary" onClick={handleSaveMeme}>Save Meme</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>

{/*  ---------------------------------------------------------------------------------------  */}
                <Col>
                    <Card id='meme-storage'>
                    {loading ? (
                        <p className="text-center">Anything is paw-sible!</p>
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
                    </Card>
                </Col>
            </Row>
{/*  ---------------------------------------------------------------------------------------  */}
            
            {/* reload button for saved memes */}
            <Row>
                <Col>
                    <Card id="local-storage">
                    <div>
                        {savedMemes.map((savedMeme, index) => (
                            <Button id="storage-btn" key={index} onClick={() => handleReloadMeme(savedMeme)}>
                                Reload Meme {index + 1}
                            </Button>
                        ))}
                    </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
};

// exports
export default Meme;