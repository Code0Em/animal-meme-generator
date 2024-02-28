//===========
//  Imports 
//===========
import { Link } from 'react-router-dom';

//=============
//  Functions
//=============
const DogGen = () => {
    return (
        <>
            <section>
                <Link to="/">
                    <button>Start again</button>
                </Link>
            </section>
            <section>
                <p>I'm the Dog Generator...</p>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default DogGen;