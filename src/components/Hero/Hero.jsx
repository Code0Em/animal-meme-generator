//===========
//  Imports
//===========
import { Link } from 'react-router-dom';
import '../Hero/Hero.css';
import { Container } from 'react-bootstrap';

//=============
//  Functions
//=============
const Hero = () => {
    return (
        <>

            {/* <section className ='p-5' id="restart"> */}
            <section>
                <div id="restart">
                    <Link to="/">
                        <button type="button" className="btn" id="btn-restart">Start again</button>
                    </Link>
                </div>
            </section>  

        </>
    )
};

//===========
//  Exports
//===========
export default Hero;