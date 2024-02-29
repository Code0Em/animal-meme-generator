//===========
//  Imports
//===========
import { useState } from 'react';

//=============
//  Functions
//=============
const Meme = ({ image }) => {

    const [memeText, setMemeText] = useState({
        topLine: "",
        bottomLine: "",
    });

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        setMemeText({
            ...memeText,
            [name]: value,
        });
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    id="topLine"
                    value={memeText.topLine}
                    name="topLine"
                    onChange={handleInputChange}
                    placeholder="Enter top line of meme" />
                <input
                    type="text"
                    value={memeText.bottomLine}
                    name="bottomLine"
                    onChange={handleInputChange}
                    placeholder="Enter bottom line of meme" />
            </form>

            <section className="meme-container">
                {/* UPDATE PROBABLY REQ-ED: Depending on how API results come in */}
                <img src={"./images/" + (image) + ".png"} className="meme-img" />
                <p className="meme-top-line">{memeText.topLine}</p>
                <p className="meme-bottom-line">{memeText.bottomLine}</p>
            </section>

        </>
    )
};

//===========
//  Exports
//===========
export default Meme;