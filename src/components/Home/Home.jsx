//===========
//  Imports
//===========
import { Link } from 'react-router-dom';

//=============
//  Functions
//=============
const Home = () => {
    return (
        <>
            <section>
                <Link to="CatGen">
                    <button>Cat</button>
                </Link>
                <Link to="DogGen">
                    <button>Dog</button>
                </Link>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default Home;