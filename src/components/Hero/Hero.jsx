//===========
//  Imports
//===========
import { Link } from 'react-router-dom';
import '../Hero/Hero.css';

//=============
//  Functions
//=============
const Hero = () => {
    return (
        <>
            <section className ='p-5' id="restart">
                <Link to="/">
                    <button type="button" className="btn" id="btn-restart">Start again</button>
                </Link>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default Hero;