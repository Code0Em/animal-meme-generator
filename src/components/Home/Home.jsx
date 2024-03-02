// imports
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css';

// take in chooseClass prop
// return structured JSX (buttons), the onClicks calls the corresponding prop
const Home = ({ chooseClass }) => {
    return (
        <>
            <section className='hero p-5'>
                <h1>Are you a cat or a dog person?</h1>
                <Link to='Generator'>
                    <button id='btn-cat' onClick={() => chooseClass('cat')}>Cat</button>
                </Link>
                <Link to='Generator'>
                    <button id='btn-dog' onClick={() => chooseClass('dog')}>Dog</button>
                </Link>
                
            </section>

            {/* <div className='hero p-5' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            
            </div> */}
        </>
    )
};

// exports
export default Home;