//  Imports
import { Link } from 'react-router-dom';
import './Hero.css';

//  Functions
const Hero = () => {
    return (
        <>
            <article id="hero" className="row">
                <article className="text-center">
                    <Link to="/">
                        <button type="button" className="btn">Start again</button>
                    </Link>
                </article>
            </article>
        </>
    )
};

//===========
//  Exports
//===========
export default Hero;