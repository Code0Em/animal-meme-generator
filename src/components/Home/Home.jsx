// imports
import { Link } from 'react-router-dom';

// take in chooseClass prop
const Home = ({ chooseClass }) => {

    // initialise cat and dog classes
    let catClass = "cat";
    let dogClass = "dog";

    // return structured JSX (buttons), the onClicks calls the corresponding prop
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

// exports
export default Home;