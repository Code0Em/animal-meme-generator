//===========
//  Imports
//===========
import { Link } from 'react-router-dom';

//=============
//  Functions
//=============
const Hero = () => {
    return (
        <>
            <section>
                <Link to="/">
                    <button>Start again</button>
                </Link>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default Hero;