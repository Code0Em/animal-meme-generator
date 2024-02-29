//===========
//  Imports
//===========
import Hero from '../Hero/Hero';
import Meme from '../Meme/Meme';

//=============
//  Functions
//=============
const Generator = ({ newClass }) => {
    return (
        <>
        <Hero/>
            <section className={"container " + (newClass)}>
                {/* UPDATED POSSIBLY REQ-ED: Props to be updated with API returned image */}
               <Meme image={newClass}/>
            </section>
        </>
    )
};

//===========
//  Exports
//===========
export default Generator;