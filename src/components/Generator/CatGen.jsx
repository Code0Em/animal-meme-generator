//===========
//  Imports 
//===========
import { Link } from 'react-router-dom';

//=============
//  Functions
//=============
const CatGen = () => {
    return (
        <>
            <section>
                <Link to="/">
                    <button>Start again</button>
                </Link>
            </section>
            <section>
                <p>I'm the Cat Generator...</p>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default CatGen;