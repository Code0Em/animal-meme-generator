// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Function that takes in chooseClass prop and returns structured JSX (buttons), and the onClicks calls the corresponding prop
const Home = ({ chooseClass }) => {
    return (
            <article id="home-bg" className="row">
                <article id="home-heading" className="text-center">
                    <h1>Are you a cat or a dog person?</h1>
                    <Link to='Generator'>
                        <button id='btn-cat' className="me-2" onClick={() => chooseClass('cat')}>Cat</button>
                    </Link>
                    <Link to='Generator'>
                        <button id='btn-dog' className="ms-2" onClick={() => chooseClass('dog')}>Dog</button>
                    </Link>
                </article>
            </article>
    )
};

// Exports
export default Home;
