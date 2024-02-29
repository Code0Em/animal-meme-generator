//===========
//  Imports
//===========
import { Link } from 'react-router-dom';

//=============
//  Functions
//=============
const Home = ({ chooseClass }) => {

    let catClass = "cat";
    let dogClass = "dog";

    return (
        <>
            <section>
                <h1>Are you a cat or a dog person?</h1>
                <Link to="Generator">
                    <button onClick={() => chooseClass(catClass)}>Cat</button>
                </Link>
                <Link to="Generator">
                <button onClick={() => chooseClass(dogClass)}>Dog</button>
                </Link>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default Home;