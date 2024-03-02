// imports
import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Meme from '../Meme/Meme';
import { fetchAnimalApi } from '../utils/api.jsx';

// take in newClass prop
const Generator = ({ newClass }) => {
    const [animalImage, setAnimalImage] = useState('');

    // fetch based on the value of newClass (cat or dog), extract the URL from the response
    const fetchAnimalImage = async () => {
        try {
            const response = await fetchAnimalApi(newClass);
            const data = await response.json();
            setAnimalImage(data.url);
        } catch (error) {
            console.error('Error fetching animal image:', error);
        }
    };

    // check if newClass has changed before calling API
    useEffect(() => {
        if (newClass) {
            fetchAnimalImage();
        }
    }, [newClass]);

    // return structured JSX container
    return (
        <>
            <Hero />
            <section className={"container " + newClass}>
                <Meme animalType={newClass} />
            </section>
        </>
    );
};

// exports
export default Generator;