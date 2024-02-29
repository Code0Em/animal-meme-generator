// imports
import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Meme from '../Meme/Meme';

// take in newClass prop
const Generator = ({ newClass }) => {
    const [animalImage, setAnimalImage] = useState('');

    // fetch based on the value of newClass (cat or dog), extract the URL from the response
    const fetchAnimalImage = async () => {
        const response = await fetchAnimalApi(newClass);
        const data = await response.json();
        setAnimalImage(data.url);
    };

    // fetch a new image when useEffect is triggered
    useEffect(() => {
        fetchAnimalImage();
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