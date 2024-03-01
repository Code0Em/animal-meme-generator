// imports
import { Link } from 'react-router-dom';

// take in chooseClass prop
// return structured JSX (buttons), the onClicks calls the corresponding prop
const Home = ({ chooseClass }) => {
    return (
        <>
            <section>
                <h1>Are you a cat or a dog person?</h1>
                <Link to="Generator">
                    <button onClick={() => chooseClass('cat')}>Cat</button>
                </Link>
                <Link to="Generator">
                    <button onClick={() => chooseClass('dog')}>Dog</button>
                </Link>
            </section>
        </>
    )
};

// exports
export default Home;